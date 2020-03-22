const puppeteer = require("puppeteer");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.json("hey welcome folks");
});

app.post("/test", (req, res) => {
  const websiteLink = req.body.link;
  console.log("got the link ", websiteLink);
  res.json({ link: websiteLink });
});

app.post("/check", (req, res) => {
  const websiteLink = req.body.link;
  var finalerrors = {
    htmlError: [],
    contrastError: null,
    interactionError: [],
    ariaError: []
  };

  var finalwarnings = {
    htmlWarning: [],
    interactionWarning: [],
    ariaWarning: []
  };

  var allErrors = {};

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    const navigationPromise = page.waitForNavigation();

    await page.goto(websiteLink);

    //await page.waitForSelector(".playlist-items");
    allErrors = await page.evaluate(
      (finalerrors, finalwarnings) => {
        console.log("heyyyy");
        !(function(e, t) {
          "object" == typeof exports && "object" == typeof module
            ? (module.exports = t())
            : "function" == typeof define && define.amd
            ? define("accessibility", [], t)
            : "object" == typeof exports
            ? (exports.accessibility = t())
            : (e.accessibility = t());
        })(this, function() {
          return (function(e) {
            function t(o) {
              if (r[o]) return r[o].exports;
              var n = (r[o] = { i: o, l: !1, exports: {} });
              return (
                e[o].call(n.exports, n, n.exports, t), (n.l = !0), n.exports
              );
            }
            var r = {};
            return (
              (t.m = e),
              (t.c = r),
              (t.i = function(e) {
                return e;
              }),
              (t.d = function(e, r, o) {
                t.o(e, r) ||
                  Object.defineProperty(e, r, {
                    configurable: !1,
                    enumerable: !0,
                    get: o
                  });
              }),
              (t.n = function(e) {
                var r =
                  e && e.__esModule
                    ? function() {
                        return e.default;
                      }
                    : function() {
                        return e;
                      };
                return t.d(r, "a", r), r;
              }),
              (t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (t.p = "/build/"),
              t((t.s = 7))
            );
          })([
            function(e, t, r) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var o = function(e) {
                return "Error: " + e;
              };
              t.default = o;
            },
            function(e, t, r) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var o = function(e) {
                var t = "Fix: ";
                return (
                  Object.values(e).forEach(function(e) {
                    t += e + " ";
                  }),
                  t
                );
              };
              t.default = o;
            },
            function(e, t, r) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var o = function(e) {
                return "Code Snippet: " + e.bold();
              };
              t.default = o;
            },
            function(e, t, r) {
              var o, n;
              /*!
               * jQuery JavaScript Library v3.4.1
               * https://jquery.com/
               *
               * Includes Sizzle.js
               * https://sizzlejs.com/
               *
               * Copyright JS Foundation and other contributors
               * Released under the MIT license
               * https://jquery.org/license
               *
               * Date: 2019-05-01T21:04Z
               */
              !(function(t, r) {
                "use strict";
                "object" == typeof e && "object" == typeof e.exports
                  ? (e.exports = t.document
                      ? r(t, !0)
                      : function(e) {
                          if (!e.document)
                            throw new Error(
                              "jQuery requires a window with a document"
                            );
                          return r(e);
                        })
                  : r(t);
              })("undefined" != typeof window ? window : this, function(r, a) {
                "use strict";
                function i(e, t, r) {
                  r = r || pe;
                  var o,
                    n,
                    a = r.createElement("script");
                  if (((a.text = e), t))
                    for (o in we)
                      (n = t[o] || (t.getAttribute && t.getAttribute(o))) &&
                        a.setAttribute(o, n);
                  r.head.appendChild(a).parentNode.removeChild(a);
                }
                function s(e) {
                  return null == e
                    ? e + ""
                    : "object" == typeof e || "function" == typeof e
                    ? xe[ye.call(e)] || "object"
                    : typeof e;
                }
                function l(e) {
                  var t = !!e && "length" in e && e.length,
                    r = s(e);
                  return (
                    !Te(e) &&
                    !Ce(e) &&
                    ("array" === r ||
                      0 === t ||
                      ("number" == typeof t && t > 0 && t - 1 in e))
                  );
                }
                function u(e, t) {
                  return (
                    e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                  );
                }
                function c(e, t, r) {
                  return Te(t)
                    ? Se.grep(e, function(e, o) {
                        return !!t.call(e, o, e) !== r;
                      })
                    : t.nodeType
                    ? Se.grep(e, function(e) {
                        return (e === t) !== r;
                      })
                    : "string" != typeof t
                    ? Se.grep(e, function(e) {
                        return ve.call(t, e) > -1 !== r;
                      })
                    : Se.filter(t, e, r);
                }
                function d(e, t) {
                  for (; (e = e[t]) && 1 !== e.nodeType; );
                  return e;
                }
                function p(e) {
                  var t = {};
                  return (
                    Se.each(e.match(He) || [], function(e, r) {
                      t[r] = !0;
                    }),
                    t
                  );
                }
                function f(e) {
                  return e;
                }
                function g(e) {
                  throw e;
                }
                function h(e, t, r, o) {
                  var n;
                  try {
                    e && Te((n = e.promise))
                      ? n
                          .call(e)
                          .done(t)
                          .fail(r)
                      : e && Te((n = e.then))
                      ? n.call(e, t, r)
                      : t.apply(void 0, [e].slice(o));
                  } catch (e) {
                    r.apply(void 0, [e]);
                  }
                }
                function m() {
                  pe.removeEventListener("DOMContentLoaded", m),
                    r.removeEventListener("load", m),
                    Se.ready();
                }
                function v(e, t) {
                  return t.toUpperCase();
                }
                function x(e) {
                  return e.replace(Be, "ms-").replace(Ue, v);
                }
                function y() {
                  this.expando = Se.expando + y.uid++;
                }
                function b(e) {
                  return (
                    "true" === e ||
                    ("false" !== e &&
                      ("null" === e
                        ? null
                        : e === +e + ""
                        ? +e
                        : $e.test(e)
                        ? JSON.parse(e)
                        : e))
                  );
                }
                function _(e, t, r) {
                  var o;
                  if (void 0 === r && 1 === e.nodeType)
                    if (
                      ((o = "data-" + t.replace(Xe, "-$&").toLowerCase()),
                      "string" == typeof (r = e.getAttribute(o)))
                    ) {
                      try {
                        r = b(r);
                      } catch (e) {}
                      Ye.set(e, t, r);
                    } else r = void 0;
                  return r;
                }
                function E(e, t, r, o) {
                  var n,
                    a,
                    i = 20,
                    s = o
                      ? function() {
                          return o.cur();
                        }
                      : function() {
                          return Se.css(e, t, "");
                        },
                    l = s(),
                    u = (r && r[3]) || (Se.cssNumber[t] ? "" : "px"),
                    c =
                      e.nodeType &&
                      (Se.cssNumber[t] || ("px" !== u && +l)) &&
                      Ke.exec(Se.css(e, t));
                  if (c && c[3] !== u) {
                    for (l /= 2, u = u || c[3], c = +l || 1; i--; )
                      Se.style(e, t, c + u),
                        (1 - a) * (1 - (a = s() / l || 0.5)) <= 0 && (i = 0),
                        (c /= a);
                    (c *= 2), Se.style(e, t, c + u), (r = r || []);
                  }
                  return (
                    r &&
                      ((c = +c || +l || 0),
                      (n = r[1] ? c + (r[1] + 1) * r[2] : +r[2]),
                      o && ((o.unit = u), (o.start = c), (o.end = n))),
                    n
                  );
                }
                function A(e) {
                  var t,
                    r = e.ownerDocument,
                    o = e.nodeName,
                    n = ot[o];
                  return (
                    n ||
                    ((t = r.body.appendChild(r.createElement(o))),
                    (n = Se.css(t, "display")),
                    t.parentNode.removeChild(t),
                    "none" === n && (n = "block"),
                    (ot[o] = n),
                    n)
                  );
                }
                function T(e, t) {
                  for (var r, o, n = [], a = 0, i = e.length; a < i; a++)
                    (o = e[a]),
                      o.style &&
                        ((r = o.style.display),
                        t
                          ? ("none" === r &&
                              ((n[a] = Ge.get(o, "display") || null),
                              n[a] || (o.style.display = "")),
                            "" === o.style.display && tt(o) && (n[a] = A(o)))
                          : "none" !== r &&
                            ((n[a] = "none"), Ge.set(o, "display", r)));
                  for (a = 0; a < i; a++)
                    null != n[a] && (e[a].style.display = n[a]);
                  return e;
                }
                function C(e, t) {
                  var r;
                  return (
                    (r =
                      void 0 !== e.getElementsByTagName
                        ? e.getElementsByTagName(t || "*")
                        : void 0 !== e.querySelectorAll
                        ? e.querySelectorAll(t || "*")
                        : []),
                    void 0 === t || (t && u(e, t)) ? Se.merge([e], r) : r
                  );
                }
                function w(e, t) {
                  for (var r = 0, o = e.length; r < o; r++)
                    Ge.set(
                      e[r],
                      "globalEval",
                      !t || Ge.get(t[r], "globalEval")
                    );
                }
                function S(e, t, r, o, n) {
                  for (
                    var a,
                      i,
                      l,
                      u,
                      c,
                      d,
                      p = t.createDocumentFragment(),
                      f = [],
                      g = 0,
                      h = e.length;
                    g < h;
                    g++
                  )
                    if ((a = e[g]) || 0 === a)
                      if ("object" === s(a)) Se.merge(f, a.nodeType ? [a] : a);
                      else if (lt.test(a)) {
                        for (
                          i = i || p.appendChild(t.createElement("div")),
                            l = (at.exec(a) || ["", ""])[1].toLowerCase(),
                            u = st[l] || st._default,
                            i.innerHTML = u[1] + Se.htmlPrefilter(a) + u[2],
                            d = u[0];
                          d--;

                        )
                          i = i.lastChild;
                        Se.merge(f, i.childNodes),
                          (i = p.firstChild),
                          (i.textContent = "");
                      } else f.push(t.createTextNode(a));
                  for (p.textContent = "", g = 0; (a = f[g++]); )
                    if (o && Se.inArray(a, o) > -1) n && n.push(a);
                    else if (
                      ((c = Ze(a)),
                      (i = C(p.appendChild(a), "script")),
                      c && w(i),
                      r)
                    )
                      for (d = 0; (a = i[d++]); )
                        it.test(a.type || "") && r.push(a);
                  return p;
                }
                function R() {
                  return !0;
                }
                function L() {
                  return !1;
                }
                function N(e, t) {
                  return (e === I()) == ("focus" === t);
                }
                function I() {
                  try {
                    return pe.activeElement;
                  } catch (e) {}
                }
                function O(e, t, r, o, n, a) {
                  var i, s;
                  if ("object" == typeof t) {
                    "string" != typeof r && ((o = o || r), (r = void 0));
                    for (s in t) O(e, s, r, o, t[s], a);
                    return e;
                  }
                  if (
                    (null == o && null == n
                      ? ((n = r), (o = r = void 0))
                      : null == n &&
                        ("string" == typeof r
                          ? ((n = o), (o = void 0))
                          : ((n = o), (o = r), (r = void 0))),
                    !1 === n)
                  )
                    n = L;
                  else if (!n) return e;
                  return (
                    1 === a &&
                      ((i = n),
                      (n = function(e) {
                        return Se().off(e), i.apply(this, arguments);
                      }),
                      (n.guid = i.guid || (i.guid = Se.guid++))),
                    e.each(function() {
                      Se.event.add(this, t, n, o, r);
                    })
                  );
                }
                function D(e, t, r) {
                  if (!r)
                    return void (
                      void 0 === Ge.get(e, t) && Se.event.add(e, t, R)
                    );
                  Ge.set(e, t, !1),
                    Se.event.add(e, t, {
                      namespace: !1,
                      handler: function(e) {
                        var o,
                          n,
                          a = Ge.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                          if (a.length)
                            (Se.event.special[t] || {}).delegateType &&
                              e.stopPropagation();
                          else if (
                            ((a = ge.call(arguments)),
                            Ge.set(this, t, a),
                            (o = r(this, t)),
                            this[t](),
                            (n = Ge.get(this, t)),
                            a !== n || o ? Ge.set(this, t, !1) : (n = {}),
                            a !== n)
                          )
                            return (
                              e.stopImmediatePropagation(),
                              e.preventDefault(),
                              n.value
                            );
                        } else
                          a.length &&
                            (Ge.set(this, t, {
                              value: Se.event.trigger(
                                Se.extend(a[0], Se.Event.prototype),
                                a.slice(1),
                                this
                              )
                            }),
                            e.stopImmediatePropagation());
                      }
                    });
                }
                function P(e, t) {
                  return u(e, "table") &&
                    u(11 !== t.nodeType ? t : t.firstChild, "tr")
                    ? Se(e).children("tbody")[0] || e
                    : e;
                }
                function M(e) {
                  return (
                    (e.type = (null !== e.getAttribute("type")) + "/" + e.type),
                    e
                  );
                }
                function k(e) {
                  return (
                    "true/" === (e.type || "").slice(0, 5)
                      ? (e.type = e.type.slice(5))
                      : e.removeAttribute("type"),
                    e
                  );
                }
                function j(e, t) {
                  var r, o, n, a, i, s, l, u;
                  if (1 === t.nodeType) {
                    if (
                      Ge.hasData(e) &&
                      ((a = Ge.access(e)), (i = Ge.set(t, a)), (u = a.events))
                    ) {
                      delete i.handle, (i.events = {});
                      for (n in u)
                        for (r = 0, o = u[n].length; r < o; r++)
                          Se.event.add(t, n, u[n][r]);
                    }
                    Ye.hasData(e) &&
                      ((s = Ye.access(e)),
                      (l = Se.extend({}, s)),
                      Ye.set(t, l));
                  }
                }
                function H(e, t) {
                  var r = t.nodeName.toLowerCase();
                  "input" === r && nt.test(e.type)
                    ? (t.checked = e.checked)
                    : ("input" !== r && "textarea" !== r) ||
                      (t.defaultValue = e.defaultValue);
                }
                function q(e, t, r, o) {
                  t = he.apply([], t);
                  var n,
                    a,
                    s,
                    l,
                    u,
                    c,
                    d = 0,
                    p = e.length,
                    f = p - 1,
                    g = t[0],
                    h = Te(g);
                  if (
                    h ||
                    (p > 1 &&
                      "string" == typeof g &&
                      !Ae.checkClone &&
                      gt.test(g))
                  )
                    return e.each(function(n) {
                      var a = e.eq(n);
                      h && (t[0] = g.call(this, n, a.html())), q(a, t, r, o);
                    });
                  if (
                    p &&
                    ((n = S(t, e[0].ownerDocument, !1, e, o)),
                    (a = n.firstChild),
                    1 === n.childNodes.length && (n = a),
                    a || o)
                  ) {
                    for (
                      s = Se.map(C(n, "script"), M), l = s.length;
                      d < p;
                      d++
                    )
                      (u = n),
                        d !== f &&
                          ((u = Se.clone(u, !0, !0)),
                          l && Se.merge(s, C(u, "script"))),
                        r.call(e[d], u, d);
                    if (l)
                      for (
                        c = s[s.length - 1].ownerDocument, Se.map(s, k), d = 0;
                        d < l;
                        d++
                      )
                        (u = s[d]),
                          it.test(u.type || "") &&
                            !Ge.access(u, "globalEval") &&
                            Se.contains(c, u) &&
                            (u.src && "module" !== (u.type || "").toLowerCase()
                              ? Se._evalUrl &&
                                !u.noModule &&
                                Se._evalUrl(u.src, {
                                  nonce: u.nonce || u.getAttribute("nonce")
                                })
                              : i(u.textContent.replace(ht, ""), u, c));
                  }
                  return e;
                }
                function F(e, t, r) {
                  for (
                    var o, n = t ? Se.filter(t, e) : e, a = 0;
                    null != (o = n[a]);
                    a++
                  )
                    r || 1 !== o.nodeType || Se.cleanData(C(o)),
                      o.parentNode &&
                        (r && Ze(o) && w(C(o, "script")),
                        o.parentNode.removeChild(o));
                  return e;
                }
                function W(e, t, r) {
                  var o,
                    n,
                    a,
                    i,
                    s = e.style;
                  return (
                    (r = r || vt(e)),
                    r &&
                      ((i = r.getPropertyValue(t) || r[t]),
                      "" !== i || Ze(e) || (i = Se.style(e, t)),
                      !Ae.pixelBoxStyles() &&
                        mt.test(i) &&
                        xt.test(t) &&
                        ((o = s.width),
                        (n = s.minWidth),
                        (a = s.maxWidth),
                        (s.minWidth = s.maxWidth = s.width = i),
                        (i = r.width),
                        (s.width = o),
                        (s.minWidth = n),
                        (s.maxWidth = a))),
                    void 0 !== i ? i + "" : i
                  );
                }
                function B(e, t) {
                  return {
                    get: function() {
                      return e()
                        ? void delete this.get
                        : (this.get = t).apply(this, arguments);
                    }
                  };
                }
                function U(e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), r = yt.length;
                    r--;

                  )
                    if ((e = yt[r] + t) in bt) return e;
                }
                function V(e) {
                  var t = Se.cssProps[e] || _t[e];
                  return t || (e in bt ? e : (_t[e] = U(e) || e));
                }
                function G(e, t, r) {
                  var o = Ke.exec(t);
                  return o ? Math.max(0, o[2] - (r || 0)) + (o[3] || "px") : t;
                }
                function Y(e, t, r, o, n, a) {
                  var i = "width" === t ? 1 : 0,
                    s = 0,
                    l = 0;
                  if (r === (o ? "border" : "content")) return 0;
                  for (; i < 4; i += 2)
                    "margin" === r && (l += Se.css(e, r + Je[i], !0, n)),
                      o
                        ? ("content" === r &&
                            (l -= Se.css(e, "padding" + Je[i], !0, n)),
                          "margin" !== r &&
                            (l -= Se.css(e, "border" + Je[i] + "Width", !0, n)))
                        : ((l += Se.css(e, "padding" + Je[i], !0, n)),
                          "padding" !== r
                            ? (l += Se.css(
                                e,
                                "border" + Je[i] + "Width",
                                !0,
                                n
                              ))
                            : (s += Se.css(
                                e,
                                "border" + Je[i] + "Width",
                                !0,
                                n
                              )));
                  return (
                    !o &&
                      a >= 0 &&
                      (l +=
                        Math.max(
                          0,
                          Math.ceil(
                            e["offset" + t[0].toUpperCase() + t.slice(1)] -
                              a -
                              l -
                              s -
                              0.5
                          )
                        ) || 0),
                    l
                  );
                }
                function $(e, t, r) {
                  var o = vt(e),
                    n = !Ae.boxSizingReliable() || r,
                    a = n && "border-box" === Se.css(e, "boxSizing", !1, o),
                    i = a,
                    s = W(e, t, o),
                    l = "offset" + t[0].toUpperCase() + t.slice(1);
                  if (mt.test(s)) {
                    if (!r) return s;
                    s = "auto";
                  }
                  return (
                    ((!Ae.boxSizingReliable() && a) ||
                      "auto" === s ||
                      (!parseFloat(s) &&
                        "inline" === Se.css(e, "display", !1, o))) &&
                      e.getClientRects().length &&
                      ((a = "border-box" === Se.css(e, "boxSizing", !1, o)),
                      (i = l in e) && (s = e[l])),
                    (s = parseFloat(s) || 0) +
                      Y(e, t, r || (a ? "border" : "content"), i, o, s) +
                      "px"
                  );
                }
                function X(e, t, r, o, n) {
                  return new X.prototype.init(e, t, r, o, n);
                }
                function z() {
                  St &&
                    (!1 === pe.hidden && r.requestAnimationFrame
                      ? r.requestAnimationFrame(z)
                      : r.setTimeout(z, Se.fx.interval),
                    Se.fx.tick());
                }
                function K() {
                  return (
                    r.setTimeout(function() {
                      wt = void 0;
                    }),
                    (wt = Date.now())
                  );
                }
                function J(e, t) {
                  var r,
                    o = 0,
                    n = { height: e };
                  for (t = t ? 1 : 0; o < 4; o += 2 - t)
                    (r = Je[o]), (n["margin" + r] = n["padding" + r] = e);
                  return t && (n.opacity = n.width = e), n;
                }
                function Q(e, t, r) {
                  for (
                    var o,
                      n = (te.tweeners[t] || []).concat(te.tweeners["*"]),
                      a = 0,
                      i = n.length;
                    a < i;
                    a++
                  )
                    if ((o = n[a].call(r, t, e))) return o;
                }
                function Z(e, t, r) {
                  var o,
                    n,
                    a,
                    i,
                    s,
                    l,
                    u,
                    c,
                    d = "width" in t || "height" in t,
                    p = this,
                    f = {},
                    g = e.style,
                    h = e.nodeType && tt(e),
                    m = Ge.get(e, "fxshow");
                  r.queue ||
                    ((i = Se._queueHooks(e, "fx")),
                    null == i.unqueued &&
                      ((i.unqueued = 0),
                      (s = i.empty.fire),
                      (i.empty.fire = function() {
                        i.unqueued || s();
                      })),
                    i.unqueued++,
                    p.always(function() {
                      p.always(function() {
                        i.unqueued--,
                          Se.queue(e, "fx").length || i.empty.fire();
                      });
                    }));
                  for (o in t)
                    if (((n = t[o]), Rt.test(n))) {
                      if (
                        (delete t[o],
                        (a = a || "toggle" === n),
                        n === (h ? "hide" : "show"))
                      ) {
                        if ("show" !== n || !m || void 0 === m[o]) continue;
                        h = !0;
                      }
                      f[o] = (m && m[o]) || Se.style(e, o);
                    }
                  if ((l = !Se.isEmptyObject(t)) || !Se.isEmptyObject(f)) {
                    d &&
                      1 === e.nodeType &&
                      ((r.overflow = [g.overflow, g.overflowX, g.overflowY]),
                      (u = m && m.display),
                      null == u && (u = Ge.get(e, "display")),
                      (c = Se.css(e, "display")),
                      "none" === c &&
                        (u
                          ? (c = u)
                          : (T([e], !0),
                            (u = e.style.display || u),
                            (c = Se.css(e, "display")),
                            T([e]))),
                      ("inline" === c || ("inline-block" === c && null != u)) &&
                        "none" === Se.css(e, "float") &&
                        (l ||
                          (p.done(function() {
                            g.display = u;
                          }),
                          null == u &&
                            ((c = g.display), (u = "none" === c ? "" : c))),
                        (g.display = "inline-block"))),
                      r.overflow &&
                        ((g.overflow = "hidden"),
                        p.always(function() {
                          (g.overflow = r.overflow[0]),
                            (g.overflowX = r.overflow[1]),
                            (g.overflowY = r.overflow[2]);
                        })),
                      (l = !1);
                    for (o in f)
                      l ||
                        (m
                          ? "hidden" in m && (h = m.hidden)
                          : (m = Ge.access(e, "fxshow", { display: u })),
                        a && (m.hidden = !h),
                        h && T([e], !0),
                        p.done(function() {
                          h || T([e]), Ge.remove(e, "fxshow");
                          for (o in f) Se.style(e, o, f[o]);
                        })),
                        (l = Q(h ? m[o] : 0, o, p)),
                        o in m ||
                          ((m[o] = l.start),
                          h && ((l.end = l.start), (l.start = 0)));
                  }
                }
                function ee(e, t) {
                  var r, o, n, a, i;
                  for (r in e)
                    if (
                      ((o = x(r)),
                      (n = t[o]),
                      (a = e[r]),
                      Array.isArray(a) && ((n = a[1]), (a = e[r] = a[0])),
                      r !== o && ((e[o] = a), delete e[r]),
                      (i = Se.cssHooks[o]) && "expand" in i)
                    ) {
                      (a = i.expand(a)), delete e[o];
                      for (r in a) r in e || ((e[r] = a[r]), (t[r] = n));
                    } else t[o] = n;
                }
                function te(e, t, r) {
                  var o,
                    n,
                    a = 0,
                    i = te.prefilters.length,
                    s = Se.Deferred().always(function() {
                      delete l.elem;
                    }),
                    l = function() {
                      if (n) return !1;
                      for (
                        var t = wt || K(),
                          r = Math.max(0, u.startTime + u.duration - t),
                          o = r / u.duration || 0,
                          a = 1 - o,
                          i = 0,
                          l = u.tweens.length;
                        i < l;
                        i++
                      )
                        u.tweens[i].run(a);
                      return (
                        s.notifyWith(e, [u, a, r]),
                        a < 1 && l
                          ? r
                          : (l || s.notifyWith(e, [u, 1, 0]),
                            s.resolveWith(e, [u]),
                            !1)
                      );
                    },
                    u = s.promise({
                      elem: e,
                      props: Se.extend({}, t),
                      opts: Se.extend(
                        !0,
                        { specialEasing: {}, easing: Se.easing._default },
                        r
                      ),
                      originalProperties: t,
                      originalOptions: r,
                      startTime: wt || K(),
                      duration: r.duration,
                      tweens: [],
                      createTween: function(t, r) {
                        var o = Se.Tween(
                          e,
                          u.opts,
                          t,
                          r,
                          u.opts.specialEasing[t] || u.opts.easing
                        );
                        return u.tweens.push(o), o;
                      },
                      stop: function(t) {
                        var r = 0,
                          o = t ? u.tweens.length : 0;
                        if (n) return this;
                        for (n = !0; r < o; r++) u.tweens[r].run(1);
                        return (
                          t
                            ? (s.notifyWith(e, [u, 1, 0]),
                              s.resolveWith(e, [u, t]))
                            : s.rejectWith(e, [u, t]),
                          this
                        );
                      }
                    }),
                    c = u.props;
                  for (ee(c, u.opts.specialEasing); a < i; a++)
                    if ((o = te.prefilters[a].call(u, e, c, u.opts)))
                      return (
                        Te(o.stop) &&
                          (Se._queueHooks(
                            u.elem,
                            u.opts.queue
                          ).stop = o.stop.bind(o)),
                        o
                      );
                  return (
                    Se.map(c, Q, u),
                    Te(u.opts.start) && u.opts.start.call(e, u),
                    u
                      .progress(u.opts.progress)
                      .done(u.opts.done, u.opts.complete)
                      .fail(u.opts.fail)
                      .always(u.opts.always),
                    Se.fx.timer(
                      Se.extend(l, { elem: e, anim: u, queue: u.opts.queue })
                    ),
                    u
                  );
                }
                function re(e) {
                  return (e.match(He) || []).join(" ");
                }
                function oe(e) {
                  return (e.getAttribute && e.getAttribute("class")) || "";
                }
                function ne(e) {
                  return Array.isArray(e)
                    ? e
                    : "string" == typeof e
                    ? e.match(He) || []
                    : [];
                }
                function ae(e, t, r, o) {
                  var n;
                  if (Array.isArray(t))
                    Se.each(t, function(t, n) {
                      r || Ft.test(e)
                        ? o(e, n)
                        : ae(
                            e +
                              "[" +
                              ("object" == typeof n && null != n ? t : "") +
                              "]",
                            n,
                            r,
                            o
                          );
                    });
                  else if (r || "object" !== s(t)) o(e, t);
                  else for (n in t) ae(e + "[" + n + "]", t[n], r, o);
                }
                function ie(e) {
                  return function(t, r) {
                    "string" != typeof t && ((r = t), (t = "*"));
                    var o,
                      n = 0,
                      a = t.toLowerCase().match(He) || [];
                    if (Te(r))
                      for (; (o = a[n++]); )
                        "+" === o[0]
                          ? ((o = o.slice(1) || "*"),
                            (e[o] = e[o] || []).unshift(r))
                          : (e[o] = e[o] || []).push(r);
                  };
                }
                function se(e, t, r, o) {
                  function n(s) {
                    var l;
                    return (
                      (a[s] = !0),
                      Se.each(e[s] || [], function(e, s) {
                        var u = s(t, r, o);
                        return "string" != typeof u || i || a[u]
                          ? i
                            ? !(l = u)
                            : void 0
                          : (t.dataTypes.unshift(u), n(u), !1);
                      }),
                      l
                    );
                  }
                  var a = {},
                    i = e === Qt;
                  return n(t.dataTypes[0]) || (!a["*"] && n("*"));
                }
                function le(e, t) {
                  var r,
                    o,
                    n = Se.ajaxSettings.flatOptions || {};
                  for (r in t)
                    void 0 !== t[r] && ((n[r] ? e : o || (o = {}))[r] = t[r]);
                  return o && Se.extend(!0, e, o), e;
                }
                function ue(e, t, r) {
                  for (
                    var o, n, a, i, s = e.contents, l = e.dataTypes;
                    "*" === l[0];

                  )
                    l.shift(),
                      void 0 === o &&
                        (o = e.mimeType || t.getResponseHeader("Content-Type"));
                  if (o)
                    for (n in s)
                      if (s[n] && s[n].test(o)) {
                        l.unshift(n);
                        break;
                      }
                  if (l[0] in r) a = l[0];
                  else {
                    for (n in r) {
                      if (!l[0] || e.converters[n + " " + l[0]]) {
                        a = n;
                        break;
                      }
                      i || (i = n);
                    }
                    a = a || i;
                  }
                  if (a) return a !== l[0] && l.unshift(a), r[a];
                }
                function ce(e, t, r, o) {
                  var n,
                    a,
                    i,
                    s,
                    l,
                    u = {},
                    c = e.dataTypes.slice();
                  if (c[1])
                    for (i in e.converters)
                      u[i.toLowerCase()] = e.converters[i];
                  for (a = c.shift(); a; )
                    if (
                      (e.responseFields[a] && (r[e.responseFields[a]] = t),
                      !l &&
                        o &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (l = a),
                      (a = c.shift()))
                    )
                      if ("*" === a) a = l;
                      else if ("*" !== l && l !== a) {
                        if (!(i = u[l + " " + a] || u["* " + a]))
                          for (n in u)
                            if (
                              ((s = n.split(" ")),
                              s[1] === a &&
                                (i = u[l + " " + s[0]] || u["* " + s[0]]))
                            ) {
                              !0 === i
                                ? (i = u[n])
                                : !0 !== u[n] && ((a = s[0]), c.unshift(s[1]));
                              break;
                            }
                        if (!0 !== i)
                          if (i && e.throws) t = i(t);
                          else
                            try {
                              t = i(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: i
                                  ? e
                                  : "No conversion from " + l + " to " + a
                              };
                            }
                      }
                  return { state: "success", data: t };
                }
                var de = [],
                  pe = r.document,
                  fe = Object.getPrototypeOf,
                  ge = de.slice,
                  he = de.concat,
                  me = de.push,
                  ve = de.indexOf,
                  xe = {},
                  ye = xe.toString,
                  be = xe.hasOwnProperty,
                  _e = be.toString,
                  Ee = _e.call(Object),
                  Ae = {},
                  Te = function(e) {
                    return (
                      "function" == typeof e && "number" != typeof e.nodeType
                    );
                  },
                  Ce = function(e) {
                    return null != e && e === e.window;
                  },
                  we = { type: !0, src: !0, nonce: !0, noModule: !0 },
                  Se = function(e, t) {
                    return new Se.fn.init(e, t);
                  },
                  Re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                (Se.fn = Se.prototype = {
                  jquery: "3.4.1",
                  constructor: Se,
                  length: 0,
                  toArray: function() {
                    return ge.call(this);
                  },
                  get: function(e) {
                    return null == e
                      ? ge.call(this)
                      : e < 0
                      ? this[e + this.length]
                      : this[e];
                  },
                  pushStack: function(e) {
                    var t = Se.merge(this.constructor(), e);
                    return (t.prevObject = this), t;
                  },
                  each: function(e) {
                    return Se.each(this, e);
                  },
                  map: function(e) {
                    return this.pushStack(
                      Se.map(this, function(t, r) {
                        return e.call(t, r, t);
                      })
                    );
                  },
                  slice: function() {
                    return this.pushStack(ge.apply(this, arguments));
                  },
                  first: function() {
                    return this.eq(0);
                  },
                  last: function() {
                    return this.eq(-1);
                  },
                  eq: function(e) {
                    var t = this.length,
                      r = +e + (e < 0 ? t : 0);
                    return this.pushStack(r >= 0 && r < t ? [this[r]] : []);
                  },
                  end: function() {
                    return this.prevObject || this.constructor();
                  },
                  push: me,
                  sort: de.sort,
                  splice: de.splice
                }),
                  (Se.extend = Se.fn.extend = function() {
                    var e,
                      t,
                      r,
                      o,
                      n,
                      a,
                      i = arguments[0] || {},
                      s = 1,
                      l = arguments.length,
                      u = !1;
                    for (
                      "boolean" == typeof i &&
                        ((u = i), (i = arguments[s] || {}), s++),
                        "object" == typeof i || Te(i) || (i = {}),
                        s === l && ((i = this), s--);
                      s < l;
                      s++
                    )
                      if (null != (e = arguments[s]))
                        for (t in e)
                          (o = e[t]),
                            "__proto__" !== t &&
                              i !== o &&
                              (u &&
                              o &&
                              (Se.isPlainObject(o) || (n = Array.isArray(o)))
                                ? ((r = i[t]),
                                  (a =
                                    n && !Array.isArray(r)
                                      ? []
                                      : n || Se.isPlainObject(r)
                                      ? r
                                      : {}),
                                  (n = !1),
                                  (i[t] = Se.extend(u, a, o)))
                                : void 0 !== o && (i[t] = o));
                    return i;
                  }),
                  Se.extend({
                    expando:
                      "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                      throw new Error(e);
                    },
                    noop: function() {},
                    isPlainObject: function(e) {
                      var t, r;
                      return (
                        !(!e || "[object Object]" !== ye.call(e)) &&
                        (!(t = fe(e)) ||
                          ("function" ==
                            typeof (r =
                              be.call(t, "constructor") && t.constructor) &&
                            _e.call(r) === Ee))
                      );
                    },
                    isEmptyObject: function(e) {
                      var t;
                      for (t in e) return !1;
                      return !0;
                    },
                    globalEval: function(e, t) {
                      i(e, { nonce: t && t.nonce });
                    },
                    each: function(e, t) {
                      var r,
                        o = 0;
                      if (l(e))
                        for (
                          r = e.length;
                          o < r && !1 !== t.call(e[o], o, e[o]);
                          o++
                        );
                      else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
                      return e;
                    },
                    trim: function(e) {
                      return null == e ? "" : (e + "").replace(Re, "");
                    },
                    makeArray: function(e, t) {
                      var r = t || [];
                      return (
                        null != e &&
                          (l(Object(e))
                            ? Se.merge(r, "string" == typeof e ? [e] : e)
                            : me.call(r, e)),
                        r
                      );
                    },
                    inArray: function(e, t, r) {
                      return null == t ? -1 : ve.call(t, e, r);
                    },
                    merge: function(e, t) {
                      for (var r = +t.length, o = 0, n = e.length; o < r; o++)
                        e[n++] = t[o];
                      return (e.length = n), e;
                    },
                    grep: function(e, t, r) {
                      for (var o = [], n = 0, a = e.length, i = !r; n < a; n++)
                        !t(e[n], n) !== i && o.push(e[n]);
                      return o;
                    },
                    map: function(e, t, r) {
                      var o,
                        n,
                        a = 0,
                        i = [];
                      if (l(e))
                        for (o = e.length; a < o; a++)
                          null != (n = t(e[a], a, r)) && i.push(n);
                      else
                        for (a in e) null != (n = t(e[a], a, r)) && i.push(n);
                      return he.apply([], i);
                    },
                    guid: 1,
                    support: Ae
                  }),
                  "function" == typeof Symbol &&
                    (Se.fn[Symbol.iterator] = de[Symbol.iterator]),
                  Se.each(
                    "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                      " "
                    ),
                    function(e, t) {
                      xe["[object " + t + "]"] = t.toLowerCase();
                    }
                  );
                var Le = /*!
                 * Sizzle CSS Selector Engine v2.3.4
                 * https://sizzlejs.com/
                 *
                 * Copyright JS Foundation and other contributors
                 * Released under the MIT license
                 * https://js.foundation/
                 *
                 * Date: 2019-04-08
                 */ (function(e) {
                  function t(e, t, r, o) {
                    var n,
                      a,
                      i,
                      s,
                      l,
                      c,
                      p,
                      f = t && t.ownerDocument,
                      g = t ? t.nodeType : 9;
                    if (
                      ((r = r || []),
                      "string" != typeof e ||
                        !e ||
                        (1 !== g && 9 !== g && 11 !== g))
                    )
                      return r;
                    if (
                      !o &&
                      ((t ? t.ownerDocument || t : q) !== I && N(t),
                      (t = t || I),
                      D)
                    ) {
                      if (11 !== g && (l = ve.exec(e)))
                        if ((n = l[1])) {
                          if (9 === g) {
                            if (!(i = t.getElementById(n))) return r;
                            if (i.id === n) return r.push(i), r;
                          } else if (
                            f &&
                            (i = f.getElementById(n)) &&
                            j(t, i) &&
                            i.id === n
                          )
                            return r.push(i), r;
                        } else {
                          if (l[2])
                            return J.apply(r, t.getElementsByTagName(e)), r;
                          if (
                            (n = l[3]) &&
                            b.getElementsByClassName &&
                            t.getElementsByClassName
                          )
                            return J.apply(r, t.getElementsByClassName(n)), r;
                        }
                      if (
                        b.qsa &&
                        !G[e + " "] &&
                        (!P || !P.test(e)) &&
                        (1 !== g || "object" !== t.nodeName.toLowerCase())
                      ) {
                        if (((p = e), (f = t), 1 === g && ue.test(e))) {
                          for (
                            (s = t.getAttribute("id"))
                              ? (s = s.replace(_e, Ee))
                              : t.setAttribute("id", (s = H)),
                              c = T(e),
                              a = c.length;
                            a--;

                          )
                            c[a] = "#" + s + " " + d(c[a]);
                          (p = c.join(",")),
                            (f = (xe.test(e) && u(t.parentNode)) || t);
                        }
                        try {
                          return J.apply(r, f.querySelectorAll(p)), r;
                        } catch (t) {
                          G(e, !0);
                        } finally {
                          s === H && t.removeAttribute("id");
                        }
                      }
                    }
                    return w(e.replace(ie, "$1"), t, r, o);
                  }
                  function r() {
                    function e(r, o) {
                      return (
                        t.push(r + " ") > _.cacheLength && delete e[t.shift()],
                        (e[r + " "] = o)
                      );
                    }
                    var t = [];
                    return e;
                  }
                  function o(e) {
                    return (e[H] = !0), e;
                  }
                  function n(e) {
                    var t = I.createElement("fieldset");
                    try {
                      return !!e(t);
                    } catch (e) {
                      return !1;
                    } finally {
                      t.parentNode && t.parentNode.removeChild(t), (t = null);
                    }
                  }
                  function a(e, t) {
                    for (var r = e.split("|"), o = r.length; o--; )
                      _.attrHandle[r[o]] = t;
                  }
                  function i(e, t) {
                    var r = t && e,
                      o =
                        r &&
                        1 === e.nodeType &&
                        1 === t.nodeType &&
                        e.sourceIndex - t.sourceIndex;
                    if (o) return o;
                    if (r) for (; (r = r.nextSibling); ) if (r === t) return -1;
                    return e ? 1 : -1;
                  }
                  function s(e) {
                    return function(t) {
                      return "form" in t
                        ? t.parentNode && !1 === t.disabled
                          ? "label" in t
                            ? "label" in t.parentNode
                              ? t.parentNode.disabled === e
                              : t.disabled === e
                            : t.isDisabled === e ||
                              (t.isDisabled !== !e && Te(t) === e)
                          : t.disabled === e
                        : "label" in t && t.disabled === e;
                    };
                  }
                  function l(e) {
                    return o(function(t) {
                      return (
                        (t = +t),
                        o(function(r, o) {
                          for (
                            var n, a = e([], r.length, t), i = a.length;
                            i--;

                          )
                            r[(n = a[i])] && (r[n] = !(o[n] = r[n]));
                        })
                      );
                    });
                  }
                  function u(e) {
                    return e && void 0 !== e.getElementsByTagName && e;
                  }
                  function c() {}
                  function d(e) {
                    for (var t = 0, r = e.length, o = ""; t < r; t++)
                      o += e[t].value;
                    return o;
                  }
                  function p(e, t, r) {
                    var o = t.dir,
                      n = t.next,
                      a = n || o,
                      i = r && "parentNode" === a,
                      s = W++;
                    return t.first
                      ? function(t, r, n) {
                          for (; (t = t[o]); )
                            if (1 === t.nodeType || i) return e(t, r, n);
                          return !1;
                        }
                      : function(t, r, l) {
                          var u,
                            c,
                            d,
                            p = [F, s];
                          if (l) {
                            for (; (t = t[o]); )
                              if ((1 === t.nodeType || i) && e(t, r, l))
                                return !0;
                          } else
                            for (; (t = t[o]); )
                              if (1 === t.nodeType || i)
                                if (
                                  ((d = t[H] || (t[H] = {})),
                                  (c = d[t.uniqueID] || (d[t.uniqueID] = {})),
                                  n && n === t.nodeName.toLowerCase())
                                )
                                  t = t[o] || t;
                                else {
                                  if ((u = c[a]) && u[0] === F && u[1] === s)
                                    return (p[2] = u[2]);
                                  if (((c[a] = p), (p[2] = e(t, r, l))))
                                    return !0;
                                }
                          return !1;
                        };
                  }
                  function f(e) {
                    return e.length > 1
                      ? function(t, r, o) {
                          for (var n = e.length; n--; )
                            if (!e[n](t, r, o)) return !1;
                          return !0;
                        }
                      : e[0];
                  }
                  function g(e, r, o) {
                    for (var n = 0, a = r.length; n < a; n++) t(e, r[n], o);
                    return o;
                  }
                  function h(e, t, r, o, n) {
                    for (
                      var a, i = [], s = 0, l = e.length, u = null != t;
                      s < l;
                      s++
                    )
                      (a = e[s]) &&
                        ((r && !r(a, o, n)) || (i.push(a), u && t.push(s)));
                    return i;
                  }
                  function m(e, t, r, n, a, i) {
                    return (
                      n && !n[H] && (n = m(n)),
                      a && !a[H] && (a = m(a, i)),
                      o(function(o, i, s, l) {
                        var u,
                          c,
                          d,
                          p = [],
                          f = [],
                          m = i.length,
                          v = o || g(t || "*", s.nodeType ? [s] : s, []),
                          x = !e || (!o && t) ? v : h(v, p, e, s, l),
                          y = r ? (a || (o ? e : m || n) ? [] : i) : x;
                        if ((r && r(x, y, s, l), n))
                          for (u = h(y, f), n(u, [], s, l), c = u.length; c--; )
                            (d = u[c]) && (y[f[c]] = !(x[f[c]] = d));
                        if (o) {
                          if (a || e) {
                            if (a) {
                              for (u = [], c = y.length; c--; )
                                (d = y[c]) && u.push((x[c] = d));
                              a(null, (y = []), u, l);
                            }
                            for (c = y.length; c--; )
                              (d = y[c]) &&
                                (u = a ? Z(o, d) : p[c]) > -1 &&
                                (o[u] = !(i[u] = d));
                          }
                        } else (y = h(y === i ? y.splice(m, y.length) : y)), a ? a(null, i, y, l) : J.apply(i, y);
                      })
                    );
                  }
                  function v(e) {
                    for (
                      var t,
                        r,
                        o,
                        n = e.length,
                        a = _.relative[e[0].type],
                        i = a || _.relative[" "],
                        s = a ? 1 : 0,
                        l = p(
                          function(e) {
                            return e === t;
                          },
                          i,
                          !0
                        ),
                        u = p(
                          function(e) {
                            return Z(t, e) > -1;
                          },
                          i,
                          !0
                        ),
                        c = [
                          function(e, r, o) {
                            var n =
                              (!a && (o || r !== S)) ||
                              ((t = r).nodeType ? l(e, r, o) : u(e, r, o));
                            return (t = null), n;
                          }
                        ];
                      s < n;
                      s++
                    )
                      if ((r = _.relative[e[s].type])) c = [p(f(c), r)];
                      else {
                        if (
                          ((r = _.filter[e[s].type].apply(null, e[s].matches)),
                          r[H])
                        ) {
                          for (o = ++s; o < n && !_.relative[e[o].type]; o++);
                          return m(
                            s > 1 && f(c),
                            s > 1 &&
                              d(
                                e.slice(0, s - 1).concat({
                                  value: " " === e[s - 2].type ? "*" : ""
                                })
                              ).replace(ie, "$1"),
                            r,
                            s < o && v(e.slice(s, o)),
                            o < n && v((e = e.slice(o))),
                            o < n && d(e)
                          );
                        }
                        c.push(r);
                      }
                    return f(c);
                  }
                  function x(e, r) {
                    var n = r.length > 0,
                      a = e.length > 0,
                      i = function(o, i, s, l, u) {
                        var c,
                          d,
                          p,
                          f = 0,
                          g = "0",
                          m = o && [],
                          v = [],
                          x = S,
                          y = o || (a && _.find.TAG("*", u)),
                          b = (F += null == x ? 1 : Math.random() || 0.1),
                          E = y.length;
                        for (
                          u && (S = i === I || i || u);
                          g !== E && null != (c = y[g]);
                          g++
                        ) {
                          if (a && c) {
                            for (
                              d = 0,
                                i || c.ownerDocument === I || (N(c), (s = !D));
                              (p = e[d++]);

                            )
                              if (p(c, i || I, s)) {
                                l.push(c);
                                break;
                              }
                            u && (F = b);
                          }
                          n && ((c = !p && c) && f--, o && m.push(c));
                        }
                        if (((f += g), n && g !== f)) {
                          for (d = 0; (p = r[d++]); ) p(m, v, i, s);
                          if (o) {
                            if (f > 0)
                              for (; g--; ) m[g] || v[g] || (v[g] = z.call(l));
                            v = h(v);
                          }
                          J.apply(l, v),
                            u &&
                              !o &&
                              v.length > 0 &&
                              f + r.length > 1 &&
                              t.uniqueSort(l);
                        }
                        return u && ((F = b), (S = x)), m;
                      };
                    return n ? o(i) : i;
                  }
                  var y,
                    b,
                    _,
                    E,
                    A,
                    T,
                    C,
                    w,
                    S,
                    R,
                    L,
                    N,
                    I,
                    O,
                    D,
                    P,
                    M,
                    k,
                    j,
                    H = "sizzle" + 1 * new Date(),
                    q = e.document,
                    F = 0,
                    W = 0,
                    B = r(),
                    U = r(),
                    V = r(),
                    G = r(),
                    Y = function(e, t) {
                      return e === t && (L = !0), 0;
                    },
                    $ = {}.hasOwnProperty,
                    X = [],
                    z = X.pop,
                    K = X.push,
                    J = X.push,
                    Q = X.slice,
                    Z = function(e, t) {
                      for (var r = 0, o = e.length; r < o; r++)
                        if (e[r] === t) return r;
                      return -1;
                    },
                    ee =
                      "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    te = "[\\x20\\t\\r\\n\\f]",
                    re = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    oe =
                      "\\[" +
                      te +
                      "*(" +
                      re +
                      ")(?:" +
                      te +
                      "*([*^$|!~]?=)" +
                      te +
                      "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                      re +
                      "))|)" +
                      te +
                      "*\\]",
                    ne =
                      ":(" +
                      re +
                      ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                      oe +
                      ")*)|.*)\\)|)",
                    ae = new RegExp(te + "+", "g"),
                    ie = new RegExp(
                      "^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$",
                      "g"
                    ),
                    se = new RegExp("^" + te + "*," + te + "*"),
                    le = new RegExp(
                      "^" + te + "*([>+~]|" + te + ")" + te + "*"
                    ),
                    ue = new RegExp(te + "|>"),
                    ce = new RegExp(ne),
                    de = new RegExp("^" + re + "$"),
                    pe = {
                      ID: new RegExp("^#(" + re + ")"),
                      CLASS: new RegExp("^\\.(" + re + ")"),
                      TAG: new RegExp("^(" + re + "|[*])"),
                      ATTR: new RegExp("^" + oe),
                      PSEUDO: new RegExp("^" + ne),
                      CHILD: new RegExp(
                        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                          te +
                          "*(even|odd|(([+-]|)(\\d*)n|)" +
                          te +
                          "*(?:([+-]|)" +
                          te +
                          "*(\\d+)|))" +
                          te +
                          "*\\)|)",
                        "i"
                      ),
                      bool: new RegExp("^(?:" + ee + ")$", "i"),
                      needsContext: new RegExp(
                        "^" +
                          te +
                          "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                          te +
                          "*((?:-\\d)?\\d*)" +
                          te +
                          "*\\)|)(?=[^-]|$)",
                        "i"
                      )
                    },
                    fe = /HTML$/i,
                    ge = /^(?:input|select|textarea|button)$/i,
                    he = /^h\d$/i,
                    me = /^[^{]+\{\s*\[native \w/,
                    ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    xe = /[+~]/,
                    ye = new RegExp(
                      "\\\\([\\da-f]{1,6}" + te + "?|(" + te + ")|.)",
                      "ig"
                    ),
                    be = function(e, t, r) {
                      var o = "0x" + t - 65536;
                      return o !== o || r
                        ? t
                        : o < 0
                        ? String.fromCharCode(o + 65536)
                        : String.fromCharCode(
                            (o >> 10) | 55296,
                            (1023 & o) | 56320
                          );
                    },
                    _e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    Ee = function(e, t) {
                      return t
                        ? "\0" === e
                          ? "�"
                          : e.slice(0, -1) +
                            "\\" +
                            e.charCodeAt(e.length - 1).toString(16) +
                            " "
                        : "\\" + e;
                    },
                    Ae = function() {
                      N();
                    },
                    Te = p(
                      function(e) {
                        return (
                          !0 === e.disabled &&
                          "fieldset" === e.nodeName.toLowerCase()
                        );
                      },
                      { dir: "parentNode", next: "legend" }
                    );
                  try {
                    J.apply((X = Q.call(q.childNodes)), q.childNodes),
                      X[q.childNodes.length].nodeType;
                  } catch (e) {
                    J = {
                      apply: X.length
                        ? function(e, t) {
                            K.apply(e, Q.call(t));
                          }
                        : function(e, t) {
                            for (var r = e.length, o = 0; (e[r++] = t[o++]); );
                            e.length = r - 1;
                          }
                    };
                  }
                  (b = t.support = {}),
                    (A = t.isXML = function(e) {
                      var t = e.namespaceURI,
                        r = (e.ownerDocument || e).documentElement;
                      return !fe.test(t || (r && r.nodeName) || "HTML");
                    }),
                    (N = t.setDocument = function(e) {
                      var t,
                        r,
                        o = e ? e.ownerDocument || e : q;
                      return o !== I && 9 === o.nodeType && o.documentElement
                        ? ((I = o),
                          (O = I.documentElement),
                          (D = !A(I)),
                          q !== I &&
                            (r = I.defaultView) &&
                            r.top !== r &&
                            (r.addEventListener
                              ? r.addEventListener("unload", Ae, !1)
                              : r.attachEvent && r.attachEvent("onunload", Ae)),
                          (b.attributes = n(function(e) {
                            return (
                              (e.className = "i"), !e.getAttribute("className")
                            );
                          })),
                          (b.getElementsByTagName = n(function(e) {
                            return (
                              e.appendChild(I.createComment("")),
                              !e.getElementsByTagName("*").length
                            );
                          })),
                          (b.getElementsByClassName = me.test(
                            I.getElementsByClassName
                          )),
                          (b.getById = n(function(e) {
                            return (
                              (O.appendChild(e).id = H),
                              !I.getElementsByName ||
                                !I.getElementsByName(H).length
                            );
                          })),
                          b.getById
                            ? ((_.filter.ID = function(e) {
                                var t = e.replace(ye, be);
                                return function(e) {
                                  return e.getAttribute("id") === t;
                                };
                              }),
                              (_.find.ID = function(e, t) {
                                if (void 0 !== t.getElementById && D) {
                                  var r = t.getElementById(e);
                                  return r ? [r] : [];
                                }
                              }))
                            : ((_.filter.ID = function(e) {
                                var t = e.replace(ye, be);
                                return function(e) {
                                  var r =
                                    void 0 !== e.getAttributeNode &&
                                    e.getAttributeNode("id");
                                  return r && r.value === t;
                                };
                              }),
                              (_.find.ID = function(e, t) {
                                if (void 0 !== t.getElementById && D) {
                                  var r,
                                    o,
                                    n,
                                    a = t.getElementById(e);
                                  if (a) {
                                    if (
                                      (r = a.getAttributeNode("id")) &&
                                      r.value === e
                                    )
                                      return [a];
                                    for (
                                      n = t.getElementsByName(e), o = 0;
                                      (a = n[o++]);

                                    )
                                      if (
                                        (r = a.getAttributeNode("id")) &&
                                        r.value === e
                                      )
                                        return [a];
                                  }
                                  return [];
                                }
                              })),
                          (_.find.TAG = b.getElementsByTagName
                            ? function(e, t) {
                                return void 0 !== t.getElementsByTagName
                                  ? t.getElementsByTagName(e)
                                  : b.qsa
                                  ? t.querySelectorAll(e)
                                  : void 0;
                              }
                            : function(e, t) {
                                var r,
                                  o = [],
                                  n = 0,
                                  a = t.getElementsByTagName(e);
                                if ("*" === e) {
                                  for (; (r = a[n++]); )
                                    1 === r.nodeType && o.push(r);
                                  return o;
                                }
                                return a;
                              }),
                          (_.find.CLASS =
                            b.getElementsByClassName &&
                            function(e, t) {
                              if (void 0 !== t.getElementsByClassName && D)
                                return t.getElementsByClassName(e);
                            }),
                          (M = []),
                          (P = []),
                          (b.qsa = me.test(I.querySelectorAll)) &&
                            (n(function(e) {
                              (O.appendChild(e).innerHTML =
                                "<a id='" +
                                H +
                                "'></a><select id='" +
                                H +
                                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                e.querySelectorAll("[msallowcapture^='']")
                                  .length &&
                                  P.push("[*^$]=" + te + "*(?:''|\"\")"),
                                e.querySelectorAll("[selected]").length ||
                                  P.push("\\[" + te + "*(?:value|" + ee + ")"),
                                e.querySelectorAll("[id~=" + H + "-]").length ||
                                  P.push("~="),
                                e.querySelectorAll(":checked").length ||
                                  P.push(":checked"),
                                e.querySelectorAll("a#" + H + "+*").length ||
                                  P.push(".#.+[+~]");
                            }),
                            n(function(e) {
                              e.innerHTML =
                                "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                              var t = I.createElement("input");
                              t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length &&
                                  P.push("name" + te + "*[*^$|!~]?="),
                                2 !== e.querySelectorAll(":enabled").length &&
                                  P.push(":enabled", ":disabled"),
                                (O.appendChild(e).disabled = !0),
                                2 !== e.querySelectorAll(":disabled").length &&
                                  P.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                P.push(",.*:");
                            })),
                          (b.matchesSelector = me.test(
                            (k =
                              O.matches ||
                              O.webkitMatchesSelector ||
                              O.mozMatchesSelector ||
                              O.oMatchesSelector ||
                              O.msMatchesSelector)
                          )) &&
                            n(function(e) {
                              (b.disconnectedMatch = k.call(e, "*")),
                                k.call(e, "[s!='']:x"),
                                M.push("!=", ne);
                            }),
                          (P = P.length && new RegExp(P.join("|"))),
                          (M = M.length && new RegExp(M.join("|"))),
                          (t = me.test(O.compareDocumentPosition)),
                          (j =
                            t || me.test(O.contains)
                              ? function(e, t) {
                                  var r =
                                      9 === e.nodeType ? e.documentElement : e,
                                    o = t && t.parentNode;
                                  return (
                                    e === o ||
                                    !(
                                      !o ||
                                      1 !== o.nodeType ||
                                      !(r.contains
                                        ? r.contains(o)
                                        : e.compareDocumentPosition &&
                                          16 & e.compareDocumentPosition(o))
                                    )
                                  );
                                }
                              : function(e, t) {
                                  if (t)
                                    for (; (t = t.parentNode); )
                                      if (t === e) return !0;
                                  return !1;
                                }),
                          (Y = t
                            ? function(e, t) {
                                if (e === t) return (L = !0), 0;
                                var r =
                                  !e.compareDocumentPosition -
                                  !t.compareDocumentPosition;
                                return (
                                  r ||
                                  ((r =
                                    (e.ownerDocument || e) ===
                                    (t.ownerDocument || t)
                                      ? e.compareDocumentPosition(t)
                                      : 1),
                                  1 & r ||
                                  (!b.sortDetached &&
                                    t.compareDocumentPosition(e) === r)
                                    ? e === I ||
                                      (e.ownerDocument === q && j(q, e))
                                      ? -1
                                      : t === I ||
                                        (t.ownerDocument === q && j(q, t))
                                      ? 1
                                      : R
                                      ? Z(R, e) - Z(R, t)
                                      : 0
                                    : 4 & r
                                    ? -1
                                    : 1)
                                );
                              }
                            : function(e, t) {
                                if (e === t) return (L = !0), 0;
                                var r,
                                  o = 0,
                                  n = e.parentNode,
                                  a = t.parentNode,
                                  s = [e],
                                  l = [t];
                                if (!n || !a)
                                  return e === I
                                    ? -1
                                    : t === I
                                    ? 1
                                    : n
                                    ? -1
                                    : a
                                    ? 1
                                    : R
                                    ? Z(R, e) - Z(R, t)
                                    : 0;
                                if (n === a) return i(e, t);
                                for (r = e; (r = r.parentNode); ) s.unshift(r);
                                for (r = t; (r = r.parentNode); ) l.unshift(r);
                                for (; s[o] === l[o]; ) o++;
                                return o
                                  ? i(s[o], l[o])
                                  : s[o] === q
                                  ? -1
                                  : l[o] === q
                                  ? 1
                                  : 0;
                              }),
                          I)
                        : I;
                    }),
                    (t.matches = function(e, r) {
                      return t(e, null, null, r);
                    }),
                    (t.matchesSelector = function(e, r) {
                      if (
                        ((e.ownerDocument || e) !== I && N(e),
                        b.matchesSelector &&
                          D &&
                          !G[r + " "] &&
                          (!M || !M.test(r)) &&
                          (!P || !P.test(r)))
                      )
                        try {
                          var o = k.call(e, r);
                          if (
                            o ||
                            b.disconnectedMatch ||
                            (e.document && 11 !== e.document.nodeType)
                          )
                            return o;
                        } catch (e) {
                          G(r, !0);
                        }
                      return t(r, I, null, [e]).length > 0;
                    }),
                    (t.contains = function(e, t) {
                      return (e.ownerDocument || e) !== I && N(e), j(e, t);
                    }),
                    (t.attr = function(e, t) {
                      (e.ownerDocument || e) !== I && N(e);
                      var r = _.attrHandle[t.toLowerCase()],
                        o =
                          r && $.call(_.attrHandle, t.toLowerCase())
                            ? r(e, t, !D)
                            : void 0;
                      return void 0 !== o
                        ? o
                        : b.attributes || !D
                        ? e.getAttribute(t)
                        : (o = e.getAttributeNode(t)) && o.specified
                        ? o.value
                        : null;
                    }),
                    (t.escape = function(e) {
                      return (e + "").replace(_e, Ee);
                    }),
                    (t.error = function(e) {
                      throw new Error(
                        "Syntax error, unrecognized expression: " + e
                      );
                    }),
                    (t.uniqueSort = function(e) {
                      var t,
                        r = [],
                        o = 0,
                        n = 0;
                      if (
                        ((L = !b.detectDuplicates),
                        (R = !b.sortStable && e.slice(0)),
                        e.sort(Y),
                        L)
                      ) {
                        for (; (t = e[n++]); ) t === e[n] && (o = r.push(n));
                        for (; o--; ) e.splice(r[o], 1);
                      }
                      return (R = null), e;
                    }),
                    (E = t.getText = function(e) {
                      var t,
                        r = "",
                        o = 0,
                        n = e.nodeType;
                      if (n) {
                        if (1 === n || 9 === n || 11 === n) {
                          if ("string" == typeof e.textContent)
                            return e.textContent;
                          for (e = e.firstChild; e; e = e.nextSibling)
                            r += E(e);
                        } else if (3 === n || 4 === n) return e.nodeValue;
                      } else for (; (t = e[o++]); ) r += E(t);
                      return r;
                    }),
                    (_ = t.selectors = {
                      cacheLength: 50,
                      createPseudo: o,
                      match: pe,
                      attrHandle: {},
                      find: {},
                      relative: {
                        ">": { dir: "parentNode", first: !0 },
                        " ": { dir: "parentNode" },
                        "+": { dir: "previousSibling", first: !0 },
                        "~": { dir: "previousSibling" }
                      },
                      preFilter: {
                        ATTR: function(e) {
                          return (
                            (e[1] = e[1].replace(ye, be)),
                            (e[3] = (e[3] || e[4] || e[5] || "").replace(
                              ye,
                              be
                            )),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                          );
                        },
                        CHILD: function(e) {
                          return (
                            (e[1] = e[1].toLowerCase()),
                            "nth" === e[1].slice(0, 3)
                              ? (e[3] || t.error(e[0]),
                                (e[4] = +(e[4]
                                  ? e[5] + (e[6] || 1)
                                  : 2 * ("even" === e[3] || "odd" === e[3]))),
                                (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                              : e[3] && t.error(e[0]),
                            e
                          );
                        },
                        PSEUDO: function(e) {
                          var t,
                            r = !e[6] && e[2];
                          return pe.CHILD.test(e[0])
                            ? null
                            : (e[3]
                                ? (e[2] = e[4] || e[5] || "")
                                : r &&
                                  ce.test(r) &&
                                  (t = T(r, !0)) &&
                                  (t =
                                    r.indexOf(")", r.length - t) - r.length) &&
                                  ((e[0] = e[0].slice(0, t)),
                                  (e[2] = r.slice(0, t))),
                              e.slice(0, 3));
                        }
                      },
                      filter: {
                        TAG: function(e) {
                          var t = e.replace(ye, be).toLowerCase();
                          return "*" === e
                            ? function() {
                                return !0;
                              }
                            : function(e) {
                                return (
                                  e.nodeName && e.nodeName.toLowerCase() === t
                                );
                              };
                        },
                        CLASS: function(e) {
                          var t = B[e + " "];
                          return (
                            t ||
                            ((t = new RegExp(
                              "(^|" + te + ")" + e + "(" + te + "|$)"
                            )) &&
                              B(e, function(e) {
                                return t.test(
                                  ("string" == typeof e.className &&
                                    e.className) ||
                                    (void 0 !== e.getAttribute &&
                                      e.getAttribute("class")) ||
                                    ""
                                );
                              }))
                          );
                        },
                        ATTR: function(e, r, o) {
                          return function(n) {
                            var a = t.attr(n, e);
                            return null == a
                              ? "!=" === r
                              : !r ||
                                  ((a += ""),
                                  "=" === r
                                    ? a === o
                                    : "!=" === r
                                    ? a !== o
                                    : "^=" === r
                                    ? o && 0 === a.indexOf(o)
                                    : "*=" === r
                                    ? o && a.indexOf(o) > -1
                                    : "$=" === r
                                    ? o && a.slice(-o.length) === o
                                    : "~=" === r
                                    ? (" " + a.replace(ae, " ") + " ").indexOf(
                                        o
                                      ) > -1
                                    : "|=" === r &&
                                      (a === o ||
                                        a.slice(0, o.length + 1) === o + "-"));
                          };
                        },
                        CHILD: function(e, t, r, o, n) {
                          var a = "nth" !== e.slice(0, 3),
                            i = "last" !== e.slice(-4),
                            s = "of-type" === t;
                          return 1 === o && 0 === n
                            ? function(e) {
                                return !!e.parentNode;
                              }
                            : function(t, r, l) {
                                var u,
                                  c,
                                  d,
                                  p,
                                  f,
                                  g,
                                  h =
                                    a !== i ? "nextSibling" : "previousSibling",
                                  m = t.parentNode,
                                  v = s && t.nodeName.toLowerCase(),
                                  x = !l && !s,
                                  y = !1;
                                if (m) {
                                  if (a) {
                                    for (; h; ) {
                                      for (p = t; (p = p[h]); )
                                        if (
                                          s
                                            ? p.nodeName.toLowerCase() === v
                                            : 1 === p.nodeType
                                        )
                                          return !1;
                                      g = h =
                                        "only" === e && !g && "nextSibling";
                                    }
                                    return !0;
                                  }
                                  if (
                                    ((g = [i ? m.firstChild : m.lastChild]),
                                    i && x)
                                  ) {
                                    for (
                                      p = m,
                                        d = p[H] || (p[H] = {}),
                                        c =
                                          d[p.uniqueID] || (d[p.uniqueID] = {}),
                                        u = c[e] || [],
                                        f = u[0] === F && u[1],
                                        y = f && u[2],
                                        p = f && m.childNodes[f];
                                      (p =
                                        (++f && p && p[h]) ||
                                        (y = f = 0) ||
                                        g.pop());

                                    )
                                      if (1 === p.nodeType && ++y && p === t) {
                                        c[e] = [F, f, y];
                                        break;
                                      }
                                  } else if (
                                    (x &&
                                      ((p = t),
                                      (d = p[H] || (p[H] = {})),
                                      (c =
                                        d[p.uniqueID] || (d[p.uniqueID] = {})),
                                      (u = c[e] || []),
                                      (f = u[0] === F && u[1]),
                                      (y = f)),
                                    !1 === y)
                                  )
                                    for (
                                      ;
                                      (p =
                                        (++f && p && p[h]) ||
                                        (y = f = 0) ||
                                        g.pop()) &&
                                      ((s
                                        ? p.nodeName.toLowerCase() !== v
                                        : 1 !== p.nodeType) ||
                                        !++y ||
                                        (x &&
                                          ((d = p[H] || (p[H] = {})),
                                          (c =
                                            d[p.uniqueID] ||
                                            (d[p.uniqueID] = {})),
                                          (c[e] = [F, y])),
                                        p !== t));

                                    );
                                  return (
                                    (y -= n) === o || (y % o == 0 && y / o >= 0)
                                  );
                                }
                              };
                        },
                        PSEUDO: function(e, r) {
                          var n,
                            a =
                              _.pseudos[e] ||
                              _.setFilters[e.toLowerCase()] ||
                              t.error("unsupported pseudo: " + e);
                          return a[H]
                            ? a(r)
                            : a.length > 1
                            ? ((n = [e, e, "", r]),
                              _.setFilters.hasOwnProperty(e.toLowerCase())
                                ? o(function(e, t) {
                                    for (
                                      var o, n = a(e, r), i = n.length;
                                      i--;

                                    )
                                      (o = Z(e, n[i])), (e[o] = !(t[o] = n[i]));
                                  })
                                : function(e) {
                                    return a(e, 0, n);
                                  })
                            : a;
                        }
                      },
                      pseudos: {
                        not: o(function(e) {
                          var t = [],
                            r = [],
                            n = C(e.replace(ie, "$1"));
                          return n[H]
                            ? o(function(e, t, r, o) {
                                for (
                                  var a, i = n(e, null, o, []), s = e.length;
                                  s--;

                                )
                                  (a = i[s]) && (e[s] = !(t[s] = a));
                              })
                            : function(e, o, a) {
                                return (
                                  (t[0] = e),
                                  n(t, null, a, r),
                                  (t[0] = null),
                                  !r.pop()
                                );
                              };
                        }),
                        has: o(function(e) {
                          return function(r) {
                            return t(e, r).length > 0;
                          };
                        }),
                        contains: o(function(e) {
                          return (
                            (e = e.replace(ye, be)),
                            function(t) {
                              return (t.textContent || E(t)).indexOf(e) > -1;
                            }
                          );
                        }),
                        lang: o(function(e) {
                          return (
                            de.test(e || "") ||
                              t.error("unsupported lang: " + e),
                            (e = e.replace(ye, be).toLowerCase()),
                            function(t) {
                              var r;
                              do {
                                if (
                                  (r = D
                                    ? t.lang
                                    : t.getAttribute("xml:lang") ||
                                      t.getAttribute("lang"))
                                )
                                  return (
                                    (r = r.toLowerCase()) === e ||
                                    0 === r.indexOf(e + "-")
                                  );
                              } while ((t = t.parentNode) && 1 === t.nodeType);
                              return !1;
                            }
                          );
                        }),
                        target: function(t) {
                          var r = e.location && e.location.hash;
                          return r && r.slice(1) === t.id;
                        },
                        root: function(e) {
                          return e === O;
                        },
                        focus: function(e) {
                          return (
                            e === I.activeElement &&
                            (!I.hasFocus || I.hasFocus()) &&
                            !!(e.type || e.href || ~e.tabIndex)
                          );
                        },
                        enabled: s(!1),
                        disabled: s(!0),
                        checked: function(e) {
                          var t = e.nodeName.toLowerCase();
                          return (
                            ("input" === t && !!e.checked) ||
                            ("option" === t && !!e.selected)
                          );
                        },
                        selected: function(e) {
                          return (
                            e.parentNode && e.parentNode.selectedIndex,
                            !0 === e.selected
                          );
                        },
                        empty: function(e) {
                          for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                          return !0;
                        },
                        parent: function(e) {
                          return !_.pseudos.empty(e);
                        },
                        header: function(e) {
                          return he.test(e.nodeName);
                        },
                        input: function(e) {
                          return ge.test(e.nodeName);
                        },
                        button: function(e) {
                          var t = e.nodeName.toLowerCase();
                          return (
                            ("input" === t && "button" === e.type) ||
                            "button" === t
                          );
                        },
                        text: function(e) {
                          var t;
                          return (
                            "input" === e.nodeName.toLowerCase() &&
                            "text" === e.type &&
                            (null == (t = e.getAttribute("type")) ||
                              "text" === t.toLowerCase())
                          );
                        },
                        first: l(function() {
                          return [0];
                        }),
                        last: l(function(e, t) {
                          return [t - 1];
                        }),
                        eq: l(function(e, t, r) {
                          return [r < 0 ? r + t : r];
                        }),
                        even: l(function(e, t) {
                          for (var r = 0; r < t; r += 2) e.push(r);
                          return e;
                        }),
                        odd: l(function(e, t) {
                          for (var r = 1; r < t; r += 2) e.push(r);
                          return e;
                        }),
                        lt: l(function(e, t, r) {
                          for (
                            var o = r < 0 ? r + t : r > t ? t : r;
                            --o >= 0;

                          )
                            e.push(o);
                          return e;
                        }),
                        gt: l(function(e, t, r) {
                          for (var o = r < 0 ? r + t : r; ++o < t; ) e.push(o);
                          return e;
                        })
                      }
                    }),
                    (_.pseudos.nth = _.pseudos.eq);
                  for (y in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                  })
                    _.pseudos[y] = (function(e) {
                      return function(t) {
                        return (
                          "input" === t.nodeName.toLowerCase() && t.type === e
                        );
                      };
                    })(y);
                  for (y in { submit: !0, reset: !0 })
                    _.pseudos[y] = (function(e) {
                      return function(t) {
                        var r = t.nodeName.toLowerCase();
                        return (
                          ("input" === r || "button" === r) && t.type === e
                        );
                      };
                    })(y);
                  return (
                    (c.prototype = _.filters = _.pseudos),
                    (_.setFilters = new c()),
                    (T = t.tokenize = function(e, r) {
                      var o,
                        n,
                        a,
                        i,
                        s,
                        l,
                        u,
                        c = U[e + " "];
                      if (c) return r ? 0 : c.slice(0);
                      for (s = e, l = [], u = _.preFilter; s; ) {
                        (o && !(n = se.exec(s))) ||
                          (n && (s = s.slice(n[0].length) || s),
                          l.push((a = []))),
                          (o = !1),
                          (n = le.exec(s)) &&
                            ((o = n.shift()),
                            a.push({ value: o, type: n[0].replace(ie, " ") }),
                            (s = s.slice(o.length)));
                        for (i in _.filter)
                          !(n = pe[i].exec(s)) ||
                            (u[i] && !(n = u[i](n))) ||
                            ((o = n.shift()),
                            a.push({ value: o, type: i, matches: n }),
                            (s = s.slice(o.length)));
                        if (!o) break;
                      }
                      return r ? s.length : s ? t.error(e) : U(e, l).slice(0);
                    }),
                    (C = t.compile = function(e, t) {
                      var r,
                        o = [],
                        n = [],
                        a = V[e + " "];
                      if (!a) {
                        for (t || (t = T(e)), r = t.length; r--; )
                          (a = v(t[r])), a[H] ? o.push(a) : n.push(a);
                        (a = V(e, x(n, o))), (a.selector = e);
                      }
                      return a;
                    }),
                    (w = t.select = function(e, t, r, o) {
                      var n,
                        a,
                        i,
                        s,
                        l,
                        c = "function" == typeof e && e,
                        p = !o && T((e = c.selector || e));
                      if (((r = r || []), 1 === p.length)) {
                        if (
                          ((a = p[0] = p[0].slice(0)),
                          a.length > 2 &&
                            "ID" === (i = a[0]).type &&
                            9 === t.nodeType &&
                            D &&
                            _.relative[a[1].type])
                        ) {
                          if (
                            !(t = (_.find.ID(i.matches[0].replace(ye, be), t) ||
                              [])[0])
                          )
                            return r;
                          c && (t = t.parentNode),
                            (e = e.slice(a.shift().value.length));
                        }
                        for (
                          n = pe.needsContext.test(e) ? 0 : a.length;
                          n-- && ((i = a[n]), !_.relative[(s = i.type)]);

                        )
                          if (
                            (l = _.find[s]) &&
                            (o = l(
                              i.matches[0].replace(ye, be),
                              (xe.test(a[0].type) && u(t.parentNode)) || t
                            ))
                          ) {
                            if ((a.splice(n, 1), !(e = o.length && d(a))))
                              return J.apply(r, o), r;
                            break;
                          }
                      }
                      return (
                        (c || C(e, p))(
                          o,
                          t,
                          !D,
                          r,
                          !t || (xe.test(e) && u(t.parentNode)) || t
                        ),
                        r
                      );
                    }),
                    (b.sortStable =
                      H.split("")
                        .sort(Y)
                        .join("") === H),
                    (b.detectDuplicates = !!L),
                    N(),
                    (b.sortDetached = n(function(e) {
                      return (
                        1 &
                        e.compareDocumentPosition(I.createElement("fieldset"))
                      );
                    })),
                    n(function(e) {
                      return (
                        (e.innerHTML = "<a href='#'></a>"),
                        "#" === e.firstChild.getAttribute("href")
                      );
                    }) ||
                      a("type|href|height|width", function(e, t, r) {
                        if (!r)
                          return e.getAttribute(
                            t,
                            "type" === t.toLowerCase() ? 1 : 2
                          );
                      }),
                    (b.attributes &&
                      n(function(e) {
                        return (
                          (e.innerHTML = "<input/>"),
                          e.firstChild.setAttribute("value", ""),
                          "" === e.firstChild.getAttribute("value")
                        );
                      })) ||
                      a("value", function(e, t, r) {
                        if (!r && "input" === e.nodeName.toLowerCase())
                          return e.defaultValue;
                      }),
                    n(function(e) {
                      return null == e.getAttribute("disabled");
                    }) ||
                      a(ee, function(e, t, r) {
                        var o;
                        if (!r)
                          return !0 === e[t]
                            ? t.toLowerCase()
                            : (o = e.getAttributeNode(t)) && o.specified
                            ? o.value
                            : null;
                      }),
                    t
                  );
                })(r);
                (Se.find = Le),
                  (Se.expr = Le.selectors),
                  (Se.expr[":"] = Se.expr.pseudos),
                  (Se.uniqueSort = Se.unique = Le.uniqueSort),
                  (Se.text = Le.getText),
                  (Se.isXMLDoc = Le.isXML),
                  (Se.contains = Le.contains),
                  (Se.escapeSelector = Le.escape);
                var Ne = function(e, t, r) {
                    for (
                      var o = [], n = void 0 !== r;
                      (e = e[t]) && 9 !== e.nodeType;

                    )
                      if (1 === e.nodeType) {
                        if (n && Se(e).is(r)) break;
                        o.push(e);
                      }
                    return o;
                  },
                  Ie = function(e, t) {
                    for (var r = []; e; e = e.nextSibling)
                      1 === e.nodeType && e !== t && r.push(e);
                    return r;
                  },
                  Oe = Se.expr.match.needsContext,
                  De = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                (Se.filter = function(e, t, r) {
                  var o = t[0];
                  return (
                    r && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === o.nodeType
                      ? Se.find.matchesSelector(o, e)
                        ? [o]
                        : []
                      : Se.find.matches(
                          e,
                          Se.grep(t, function(e) {
                            return 1 === e.nodeType;
                          })
                        )
                  );
                }),
                  Se.fn.extend({
                    find: function(e) {
                      var t,
                        r,
                        o = this.length,
                        n = this;
                      if ("string" != typeof e)
                        return this.pushStack(
                          Se(e).filter(function() {
                            for (t = 0; t < o; t++)
                              if (Se.contains(n[t], this)) return !0;
                          })
                        );
                      for (r = this.pushStack([]), t = 0; t < o; t++)
                        Se.find(e, n[t], r);
                      return o > 1 ? Se.uniqueSort(r) : r;
                    },
                    filter: function(e) {
                      return this.pushStack(c(this, e || [], !1));
                    },
                    not: function(e) {
                      return this.pushStack(c(this, e || [], !0));
                    },
                    is: function(e) {
                      return !!c(
                        this,
                        "string" == typeof e && Oe.test(e) ? Se(e) : e || [],
                        !1
                      ).length;
                    }
                  });
                var Pe,
                  Me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                ((Se.fn.init = function(e, t, r) {
                  var o, n;
                  if (!e) return this;
                  if (((r = r || Pe), "string" == typeof e)) {
                    if (
                      !(o =
                        "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                          ? [null, e, null]
                          : Me.exec(e)) ||
                      (!o[1] && t)
                    )
                      return !t || t.jquery
                        ? (t || r).find(e)
                        : this.constructor(t).find(e);
                    if (o[1]) {
                      if (
                        ((t = t instanceof Se ? t[0] : t),
                        Se.merge(
                          this,
                          Se.parseHTML(
                            o[1],
                            t && t.nodeType ? t.ownerDocument || t : pe,
                            !0
                          )
                        ),
                        De.test(o[1]) && Se.isPlainObject(t))
                      )
                        for (o in t)
                          Te(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                      return this;
                    }
                    return (
                      (n = pe.getElementById(o[2])),
                      n && ((this[0] = n), (this.length = 1)),
                      this
                    );
                  }
                  return e.nodeType
                    ? ((this[0] = e), (this.length = 1), this)
                    : Te(e)
                    ? void 0 !== r.ready
                      ? r.ready(e)
                      : e(Se)
                    : Se.makeArray(e, this);
                }).prototype = Se.fn),
                  (Pe = Se(pe));
                var ke = /^(?:parents|prev(?:Until|All))/,
                  je = { children: !0, contents: !0, next: !0, prev: !0 };
                Se.fn.extend({
                  has: function(e) {
                    var t = Se(e, this),
                      r = t.length;
                    return this.filter(function() {
                      for (var e = 0; e < r; e++)
                        if (Se.contains(this, t[e])) return !0;
                    });
                  },
                  closest: function(e, t) {
                    var r,
                      o = 0,
                      n = this.length,
                      a = [],
                      i = "string" != typeof e && Se(e);
                    if (!Oe.test(e))
                      for (; o < n; o++)
                        for (r = this[o]; r && r !== t; r = r.parentNode)
                          if (
                            r.nodeType < 11 &&
                            (i
                              ? i.index(r) > -1
                              : 1 === r.nodeType &&
                                Se.find.matchesSelector(r, e))
                          ) {
                            a.push(r);
                            break;
                          }
                    return this.pushStack(a.length > 1 ? Se.uniqueSort(a) : a);
                  },
                  index: function(e) {
                    return e
                      ? "string" == typeof e
                        ? ve.call(Se(e), this[0])
                        : ve.call(this, e.jquery ? e[0] : e)
                      : this[0] && this[0].parentNode
                      ? this.first().prevAll().length
                      : -1;
                  },
                  add: function(e, t) {
                    return this.pushStack(
                      Se.uniqueSort(Se.merge(this.get(), Se(e, t)))
                    );
                  },
                  addBack: function(e) {
                    return this.add(
                      null == e ? this.prevObject : this.prevObject.filter(e)
                    );
                  }
                }),
                  Se.each(
                    {
                      parent: function(e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null;
                      },
                      parents: function(e) {
                        return Ne(e, "parentNode");
                      },
                      parentsUntil: function(e, t, r) {
                        return Ne(e, "parentNode", r);
                      },
                      next: function(e) {
                        return d(e, "nextSibling");
                      },
                      prev: function(e) {
                        return d(e, "previousSibling");
                      },
                      nextAll: function(e) {
                        return Ne(e, "nextSibling");
                      },
                      prevAll: function(e) {
                        return Ne(e, "previousSibling");
                      },
                      nextUntil: function(e, t, r) {
                        return Ne(e, "nextSibling", r);
                      },
                      prevUntil: function(e, t, r) {
                        return Ne(e, "previousSibling", r);
                      },
                      siblings: function(e) {
                        return Ie((e.parentNode || {}).firstChild, e);
                      },
                      children: function(e) {
                        return Ie(e.firstChild);
                      },
                      contents: function(e) {
                        return void 0 !== e.contentDocument
                          ? e.contentDocument
                          : (u(e, "template") && (e = e.content || e),
                            Se.merge([], e.childNodes));
                      }
                    },
                    function(e, t) {
                      Se.fn[e] = function(r, o) {
                        var n = Se.map(this, t, r);
                        return (
                          "Until" !== e.slice(-5) && (o = r),
                          o && "string" == typeof o && (n = Se.filter(o, n)),
                          this.length > 1 &&
                            (je[e] || Se.uniqueSort(n),
                            ke.test(e) && n.reverse()),
                          this.pushStack(n)
                        );
                      };
                    }
                  );
                var He = /[^\x20\t\r\n\f]+/g;
                (Se.Callbacks = function(e) {
                  e = "string" == typeof e ? p(e) : Se.extend({}, e);
                  var t,
                    r,
                    o,
                    n,
                    a = [],
                    i = [],
                    l = -1,
                    u = function() {
                      for (n = n || e.once, o = t = !0; i.length; l = -1)
                        for (r = i.shift(); ++l < a.length; )
                          !1 === a[l].apply(r[0], r[1]) &&
                            e.stopOnFalse &&
                            ((l = a.length), (r = !1));
                      e.memory || (r = !1), (t = !1), n && (a = r ? [] : "");
                    },
                    c = {
                      add: function() {
                        return (
                          a &&
                            (r && !t && ((l = a.length - 1), i.push(r)),
                            (function t(r) {
                              Se.each(r, function(r, o) {
                                Te(o)
                                  ? (e.unique && c.has(o)) || a.push(o)
                                  : o && o.length && "string" !== s(o) && t(o);
                              });
                            })(arguments),
                            r && !t && u()),
                          this
                        );
                      },
                      remove: function() {
                        return (
                          Se.each(arguments, function(e, t) {
                            for (var r; (r = Se.inArray(t, a, r)) > -1; )
                              a.splice(r, 1), r <= l && l--;
                          }),
                          this
                        );
                      },
                      has: function(e) {
                        return e ? Se.inArray(e, a) > -1 : a.length > 0;
                      },
                      empty: function() {
                        return a && (a = []), this;
                      },
                      disable: function() {
                        return (n = i = []), (a = r = ""), this;
                      },
                      disabled: function() {
                        return !a;
                      },
                      lock: function() {
                        return (n = i = []), r || t || (a = r = ""), this;
                      },
                      locked: function() {
                        return !!n;
                      },
                      fireWith: function(e, r) {
                        return (
                          n ||
                            ((r = r || []),
                            (r = [e, r.slice ? r.slice() : r]),
                            i.push(r),
                            t || u()),
                          this
                        );
                      },
                      fire: function() {
                        return c.fireWith(this, arguments), this;
                      },
                      fired: function() {
                        return !!o;
                      }
                    };
                  return c;
                }),
                  Se.extend({
                    Deferred: function(e) {
                      var t = [
                          [
                            "notify",
                            "progress",
                            Se.Callbacks("memory"),
                            Se.Callbacks("memory"),
                            2
                          ],
                          [
                            "resolve",
                            "done",
                            Se.Callbacks("once memory"),
                            Se.Callbacks("once memory"),
                            0,
                            "resolved"
                          ],
                          [
                            "reject",
                            "fail",
                            Se.Callbacks("once memory"),
                            Se.Callbacks("once memory"),
                            1,
                            "rejected"
                          ]
                        ],
                        o = "pending",
                        n = {
                          state: function() {
                            return o;
                          },
                          always: function() {
                            return a.done(arguments).fail(arguments), this;
                          },
                          catch: function(e) {
                            return n.then(null, e);
                          },
                          pipe: function() {
                            var e = arguments;
                            return Se.Deferred(function(r) {
                              Se.each(t, function(t, o) {
                                var n = Te(e[o[4]]) && e[o[4]];
                                a[o[1]](function() {
                                  var e = n && n.apply(this, arguments);
                                  e && Te(e.promise)
                                    ? e
                                        .promise()
                                        .progress(r.notify)
                                        .done(r.resolve)
                                        .fail(r.reject)
                                    : r[o[0] + "With"](
                                        this,
                                        n ? [e] : arguments
                                      );
                                });
                              }),
                                (e = null);
                            }).promise();
                          },
                          then: function(e, o, n) {
                            function a(e, t, o, n) {
                              return function() {
                                var s = this,
                                  l = arguments,
                                  u = function() {
                                    var r, u;
                                    if (!(e < i)) {
                                      if ((r = o.apply(s, l)) === t.promise())
                                        throw new TypeError(
                                          "Thenable self-resolution"
                                        );
                                      (u =
                                        r &&
                                        ("object" == typeof r ||
                                          "function" == typeof r) &&
                                        r.then),
                                        Te(u)
                                          ? n
                                            ? u.call(
                                                r,
                                                a(i, t, f, n),
                                                a(i, t, g, n)
                                              )
                                            : (i++,
                                              u.call(
                                                r,
                                                a(i, t, f, n),
                                                a(i, t, g, n),
                                                a(i, t, f, t.notifyWith)
                                              ))
                                          : (o !== f &&
                                              ((s = void 0), (l = [r])),
                                            (n || t.resolveWith)(s, l));
                                    }
                                  },
                                  c = n
                                    ? u
                                    : function() {
                                        try {
                                          u();
                                        } catch (r) {
                                          Se.Deferred.exceptionHook &&
                                            Se.Deferred.exceptionHook(
                                              r,
                                              c.stackTrace
                                            ),
                                            e + 1 >= i &&
                                              (o !== g &&
                                                ((s = void 0), (l = [r])),
                                              t.rejectWith(s, l));
                                        }
                                      };
                                e
                                  ? c()
                                  : (Se.Deferred.getStackHook &&
                                      (c.stackTrace = Se.Deferred.getStackHook()),
                                    r.setTimeout(c));
                              };
                            }
                            var i = 0;
                            return Se.Deferred(function(r) {
                              t[0][3].add(a(0, r, Te(n) ? n : f, r.notifyWith)),
                                t[1][3].add(a(0, r, Te(e) ? e : f)),
                                t[2][3].add(a(0, r, Te(o) ? o : g));
                            }).promise();
                          },
                          promise: function(e) {
                            return null != e ? Se.extend(e, n) : n;
                          }
                        },
                        a = {};
                      return (
                        Se.each(t, function(e, r) {
                          var i = r[2],
                            s = r[5];
                          (n[r[1]] = i.add),
                            s &&
                              i.add(
                                function() {
                                  o = s;
                                },
                                t[3 - e][2].disable,
                                t[3 - e][3].disable,
                                t[0][2].lock,
                                t[0][3].lock
                              ),
                            i.add(r[3].fire),
                            (a[r[0]] = function() {
                              return (
                                a[r[0] + "With"](
                                  this === a ? void 0 : this,
                                  arguments
                                ),
                                this
                              );
                            }),
                            (a[r[0] + "With"] = i.fireWith);
                        }),
                        n.promise(a),
                        e && e.call(a, a),
                        a
                      );
                    },
                    when: function(e) {
                      var t = arguments.length,
                        r = t,
                        o = Array(r),
                        n = ge.call(arguments),
                        a = Se.Deferred(),
                        i = function(e) {
                          return function(r) {
                            (o[e] = this),
                              (n[e] =
                                arguments.length > 1 ? ge.call(arguments) : r),
                              --t || a.resolveWith(o, n);
                          };
                        };
                      if (
                        t <= 1 &&
                        (h(e, a.done(i(r)).resolve, a.reject, !t),
                        "pending" === a.state() || Te(n[r] && n[r].then))
                      )
                        return a.then();
                      for (; r--; ) h(n[r], i(r), a.reject);
                      return a.promise();
                    }
                  });
                var qe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                (Se.Deferred.exceptionHook = function(e, t) {
                  r.console &&
                    r.console.warn &&
                    e &&
                    qe.test(e.name) &&
                    r.console.warn(
                      "jQuery.Deferred exception: " + e.message,
                      e.stack,
                      t
                    );
                }),
                  (Se.readyException = function(e) {
                    r.setTimeout(function() {
                      throw e;
                    });
                  });
                var Fe = Se.Deferred();
                (Se.fn.ready = function(e) {
                  return (
                    Fe.then(e).catch(function(e) {
                      Se.readyException(e);
                    }),
                    this
                  );
                }),
                  Se.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(e) {
                      (!0 === e ? --Se.readyWait : Se.isReady) ||
                        ((Se.isReady = !0),
                        (!0 !== e && --Se.readyWait > 0) ||
                          Fe.resolveWith(pe, [Se]));
                    }
                  }),
                  (Se.ready.then = Fe.then),
                  "complete" === pe.readyState ||
                  ("loading" !== pe.readyState && !pe.documentElement.doScroll)
                    ? r.setTimeout(Se.ready)
                    : (pe.addEventListener("DOMContentLoaded", m),
                      r.addEventListener("load", m));
                var We = function(e, t, r, o, n, a, i) {
                    var l = 0,
                      u = e.length,
                      c = null == r;
                    if ("object" === s(r)) {
                      n = !0;
                      for (l in r) We(e, t, l, r[l], !0, a, i);
                    } else if (
                      void 0 !== o &&
                      ((n = !0),
                      Te(o) || (i = !0),
                      c &&
                        (i
                          ? (t.call(e, o), (t = null))
                          : ((c = t),
                            (t = function(e, t, r) {
                              return c.call(Se(e), r);
                            }))),
                      t)
                    )
                      for (; l < u; l++)
                        t(e[l], r, i ? o : o.call(e[l], l, t(e[l], r)));
                    return n ? e : c ? t.call(e) : u ? t(e[0], r) : a;
                  },
                  Be = /^-ms-/,
                  Ue = /-([a-z])/g,
                  Ve = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                  };
                (y.uid = 1),
                  (y.prototype = {
                    cache: function(e) {
                      var t = e[this.expando];
                      return (
                        t ||
                          ((t = {}),
                          Ve(e) &&
                            (e.nodeType
                              ? (e[this.expando] = t)
                              : Object.defineProperty(e, this.expando, {
                                  value: t,
                                  configurable: !0
                                }))),
                        t
                      );
                    },
                    set: function(e, t, r) {
                      var o,
                        n = this.cache(e);
                      if ("string" == typeof t) n[x(t)] = r;
                      else for (o in t) n[x(o)] = t[o];
                      return n;
                    },
                    get: function(e, t) {
                      return void 0 === t
                        ? this.cache(e)
                        : e[this.expando] && e[this.expando][x(t)];
                    },
                    access: function(e, t, r) {
                      return void 0 === t ||
                        (t && "string" == typeof t && void 0 === r)
                        ? this.get(e, t)
                        : (this.set(e, t, r), void 0 !== r ? r : t);
                    },
                    remove: function(e, t) {
                      var r,
                        o = e[this.expando];
                      if (void 0 !== o) {
                        if (void 0 !== t) {
                          Array.isArray(t)
                            ? (t = t.map(x))
                            : ((t = x(t)),
                              (t = t in o ? [t] : t.match(He) || [])),
                            (r = t.length);
                          for (; r--; ) delete o[t[r]];
                        }
                        (void 0 === t || Se.isEmptyObject(o)) &&
                          (e.nodeType
                            ? (e[this.expando] = void 0)
                            : delete e[this.expando]);
                      }
                    },
                    hasData: function(e) {
                      var t = e[this.expando];
                      return void 0 !== t && !Se.isEmptyObject(t);
                    }
                  });
                var Ge = new y(),
                  Ye = new y(),
                  $e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                  Xe = /[A-Z]/g;
                Se.extend({
                  hasData: function(e) {
                    return Ye.hasData(e) || Ge.hasData(e);
                  },
                  data: function(e, t, r) {
                    return Ye.access(e, t, r);
                  },
                  removeData: function(e, t) {
                    Ye.remove(e, t);
                  },
                  _data: function(e, t, r) {
                    return Ge.access(e, t, r);
                  },
                  _removeData: function(e, t) {
                    Ge.remove(e, t);
                  }
                }),
                  Se.fn.extend({
                    data: function(e, t) {
                      var r,
                        o,
                        n,
                        a = this[0],
                        i = a && a.attributes;
                      if (void 0 === e) {
                        if (
                          this.length &&
                          ((n = Ye.get(a)),
                          1 === a.nodeType && !Ge.get(a, "hasDataAttrs"))
                        ) {
                          for (r = i.length; r--; )
                            i[r] &&
                              ((o = i[r].name),
                              0 === o.indexOf("data-") &&
                                ((o = x(o.slice(5))), _(a, o, n[o])));
                          Ge.set(a, "hasDataAttrs", !0);
                        }
                        return n;
                      }
                      return "object" == typeof e
                        ? this.each(function() {
                            Ye.set(this, e);
                          })
                        : We(
                            this,
                            function(t) {
                              var r;
                              if (a && void 0 === t) {
                                if (void 0 !== (r = Ye.get(a, e))) return r;
                                if (void 0 !== (r = _(a, e))) return r;
                              } else
                                this.each(function() {
                                  Ye.set(this, e, t);
                                });
                            },
                            null,
                            t,
                            arguments.length > 1,
                            null,
                            !0
                          );
                    },
                    removeData: function(e) {
                      return this.each(function() {
                        Ye.remove(this, e);
                      });
                    }
                  }),
                  Se.extend({
                    queue: function(e, t, r) {
                      var o;
                      if (e)
                        return (
                          (t = (t || "fx") + "queue"),
                          (o = Ge.get(e, t)),
                          r &&
                            (!o || Array.isArray(r)
                              ? (o = Ge.access(e, t, Se.makeArray(r)))
                              : o.push(r)),
                          o || []
                        );
                    },
                    dequeue: function(e, t) {
                      t = t || "fx";
                      var r = Se.queue(e, t),
                        o = r.length,
                        n = r.shift(),
                        a = Se._queueHooks(e, t),
                        i = function() {
                          Se.dequeue(e, t);
                        };
                      "inprogress" === n && ((n = r.shift()), o--),
                        n &&
                          ("fx" === t && r.unshift("inprogress"),
                          delete a.stop,
                          n.call(e, i, a)),
                        !o && a && a.empty.fire();
                    },
                    _queueHooks: function(e, t) {
                      var r = t + "queueHooks";
                      return (
                        Ge.get(e, r) ||
                        Ge.access(e, r, {
                          empty: Se.Callbacks("once memory").add(function() {
                            Ge.remove(e, [t + "queue", r]);
                          })
                        })
                      );
                    }
                  }),
                  Se.fn.extend({
                    queue: function(e, t) {
                      var r = 2;
                      return (
                        "string" != typeof e && ((t = e), (e = "fx"), r--),
                        arguments.length < r
                          ? Se.queue(this[0], e)
                          : void 0 === t
                          ? this
                          : this.each(function() {
                              var r = Se.queue(this, e, t);
                              Se._queueHooks(this, e),
                                "fx" === e &&
                                  "inprogress" !== r[0] &&
                                  Se.dequeue(this, e);
                            })
                      );
                    },
                    dequeue: function(e) {
                      return this.each(function() {
                        Se.dequeue(this, e);
                      });
                    },
                    clearQueue: function(e) {
                      return this.queue(e || "fx", []);
                    },
                    promise: function(e, t) {
                      var r,
                        o = 1,
                        n = Se.Deferred(),
                        a = this,
                        i = this.length,
                        s = function() {
                          --o || n.resolveWith(a, [a]);
                        };
                      for (
                        "string" != typeof e && ((t = e), (e = void 0)),
                          e = e || "fx";
                        i--;

                      )
                        (r = Ge.get(a[i], e + "queueHooks")) &&
                          r.empty &&
                          (o++, r.empty.add(s));
                      return s(), n.promise(t);
                    }
                  });
                var ze = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                  Ke = new RegExp("^(?:([+-])=|)(" + ze + ")([a-z%]*)$", "i"),
                  Je = ["Top", "Right", "Bottom", "Left"],
                  Qe = pe.documentElement,
                  Ze = function(e) {
                    return Se.contains(e.ownerDocument, e);
                  },
                  et = { composed: !0 };
                Qe.getRootNode &&
                  (Ze = function(e) {
                    return (
                      Se.contains(e.ownerDocument, e) ||
                      e.getRootNode(et) === e.ownerDocument
                    );
                  });
                var tt = function(e, t) {
                    return (
                      (e = t || e),
                      "none" === e.style.display ||
                        ("" === e.style.display &&
                          Ze(e) &&
                          "none" === Se.css(e, "display"))
                    );
                  },
                  rt = function(e, t, r, o) {
                    var n,
                      a,
                      i = {};
                    for (a in t) (i[a] = e.style[a]), (e.style[a] = t[a]);
                    n = r.apply(e, o || []);
                    for (a in t) e.style[a] = i[a];
                    return n;
                  },
                  ot = {};
                Se.fn.extend({
                  show: function() {
                    return T(this, !0);
                  },
                  hide: function() {
                    return T(this);
                  },
                  toggle: function(e) {
                    return "boolean" == typeof e
                      ? e
                        ? this.show()
                        : this.hide()
                      : this.each(function() {
                          tt(this) ? Se(this).show() : Se(this).hide();
                        });
                  }
                });
                var nt = /^(?:checkbox|radio)$/i,
                  at = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                  it = /^$|^module$|\/(?:java|ecma)script/i,
                  st = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                  };
                (st.optgroup = st.option),
                  (st.tbody = st.tfoot = st.colgroup = st.caption = st.thead),
                  (st.th = st.td);
                var lt = /<|&#?\w+;/;
                !(function() {
                  var e = pe.createDocumentFragment(),
                    t = e.appendChild(pe.createElement("div")),
                    r = pe.createElement("input");
                  r.setAttribute("type", "radio"),
                    r.setAttribute("checked", "checked"),
                    r.setAttribute("name", "t"),
                    t.appendChild(r),
                    (Ae.checkClone = t
                      .cloneNode(!0)
                      .cloneNode(!0).lastChild.checked),
                    (t.innerHTML = "<textarea>x</textarea>"),
                    (Ae.noCloneChecked = !!t.cloneNode(!0).lastChild
                      .defaultValue);
                })();
                var ut = /^key/,
                  ct = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                  dt = /^([^.]*)(?:\.(.+)|)/;
                (Se.event = {
                  global: {},
                  add: function(e, t, r, o, n) {
                    var a,
                      i,
                      s,
                      l,
                      u,
                      c,
                      d,
                      p,
                      f,
                      g,
                      h,
                      m = Ge.get(e);
                    if (m)
                      for (
                        r.handler &&
                          ((a = r), (r = a.handler), (n = a.selector)),
                          n && Se.find.matchesSelector(Qe, n),
                          r.guid || (r.guid = Se.guid++),
                          (l = m.events) || (l = m.events = {}),
                          (i = m.handle) ||
                            (i = m.handle = function(t) {
                              return void 0 !== Se &&
                                Se.event.triggered !== t.type
                                ? Se.event.dispatch.apply(e, arguments)
                                : void 0;
                            }),
                          t = (t || "").match(He) || [""],
                          u = t.length;
                        u--;

                      )
                        (s = dt.exec(t[u]) || []),
                          (f = h = s[1]),
                          (g = (s[2] || "").split(".").sort()),
                          f &&
                            ((d = Se.event.special[f] || {}),
                            (f = (n ? d.delegateType : d.bindType) || f),
                            (d = Se.event.special[f] || {}),
                            (c = Se.extend(
                              {
                                type: f,
                                origType: h,
                                data: o,
                                handler: r,
                                guid: r.guid,
                                selector: n,
                                needsContext:
                                  n && Se.expr.match.needsContext.test(n),
                                namespace: g.join(".")
                              },
                              a
                            )),
                            (p = l[f]) ||
                              ((p = l[f] = []),
                              (p.delegateCount = 0),
                              (d.setup && !1 !== d.setup.call(e, o, g, i)) ||
                                (e.addEventListener &&
                                  e.addEventListener(f, i))),
                            d.add &&
                              (d.add.call(e, c),
                              c.handler.guid || (c.handler.guid = r.guid)),
                            n ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                            (Se.event.global[f] = !0));
                  },
                  remove: function(e, t, r, o, n) {
                    var a,
                      i,
                      s,
                      l,
                      u,
                      c,
                      d,
                      p,
                      f,
                      g,
                      h,
                      m = Ge.hasData(e) && Ge.get(e);
                    if (m && (l = m.events)) {
                      for (t = (t || "").match(He) || [""], u = t.length; u--; )
                        if (
                          ((s = dt.exec(t[u]) || []),
                          (f = h = s[1]),
                          (g = (s[2] || "").split(".").sort()),
                          f)
                        ) {
                          for (
                            d = Se.event.special[f] || {},
                              f = (o ? d.delegateType : d.bindType) || f,
                              p = l[f] || [],
                              s =
                                s[2] &&
                                new RegExp(
                                  "(^|\\.)" +
                                    g.join("\\.(?:.*\\.|)") +
                                    "(\\.|$)"
                                ),
                              i = a = p.length;
                            a--;

                          )
                            (c = p[a]),
                              (!n && h !== c.origType) ||
                                (r && r.guid !== c.guid) ||
                                (s && !s.test(c.namespace)) ||
                                (o &&
                                  o !== c.selector &&
                                  ("**" !== o || !c.selector)) ||
                                (p.splice(a, 1),
                                c.selector && p.delegateCount--,
                                d.remove && d.remove.call(e, c));
                          i &&
                            !p.length &&
                            ((d.teardown &&
                              !1 !== d.teardown.call(e, g, m.handle)) ||
                              Se.removeEvent(e, f, m.handle),
                            delete l[f]);
                        } else
                          for (f in l) Se.event.remove(e, f + t[u], r, o, !0);
                      Se.isEmptyObject(l) && Ge.remove(e, "handle events");
                    }
                  },
                  dispatch: function(e) {
                    var t,
                      r,
                      o,
                      n,
                      a,
                      i,
                      s = Se.event.fix(e),
                      l = new Array(arguments.length),
                      u = (Ge.get(this, "events") || {})[s.type] || [],
                      c = Se.event.special[s.type] || {};
                    for (l[0] = s, t = 1; t < arguments.length; t++)
                      l[t] = arguments[t];
                    if (
                      ((s.delegateTarget = this),
                      !c.preDispatch || !1 !== c.preDispatch.call(this, s))
                    ) {
                      for (
                        i = Se.event.handlers.call(this, s, u), t = 0;
                        (n = i[t++]) && !s.isPropagationStopped();

                      )
                        for (
                          s.currentTarget = n.elem, r = 0;
                          (a = n.handlers[r++]) &&
                          !s.isImmediatePropagationStopped();

                        )
                          (s.rnamespace &&
                            !1 !== a.namespace &&
                            !s.rnamespace.test(a.namespace)) ||
                            ((s.handleObj = a),
                            (s.data = a.data),
                            void 0 !==
                              (o = (
                                (Se.event.special[a.origType] || {}).handle ||
                                a.handler
                              ).apply(n.elem, l)) &&
                              !1 === (s.result = o) &&
                              (s.preventDefault(), s.stopPropagation()));
                      return (
                        c.postDispatch && c.postDispatch.call(this, s), s.result
                      );
                    }
                  },
                  handlers: function(e, t) {
                    var r,
                      o,
                      n,
                      a,
                      i,
                      s = [],
                      l = t.delegateCount,
                      u = e.target;
                    if (
                      l &&
                      u.nodeType &&
                      !("click" === e.type && e.button >= 1)
                    )
                      for (; u !== this; u = u.parentNode || this)
                        if (
                          1 === u.nodeType &&
                          ("click" !== e.type || !0 !== u.disabled)
                        ) {
                          for (a = [], i = {}, r = 0; r < l; r++)
                            (o = t[r]),
                              (n = o.selector + " "),
                              void 0 === i[n] &&
                                (i[n] = o.needsContext
                                  ? Se(n, this).index(u) > -1
                                  : Se.find(n, this, null, [u]).length),
                              i[n] && a.push(o);
                          a.length && s.push({ elem: u, handlers: a });
                        }
                    return (
                      (u = this),
                      l < t.length && s.push({ elem: u, handlers: t.slice(l) }),
                      s
                    );
                  },
                  addProp: function(e, t) {
                    Object.defineProperty(Se.Event.prototype, e, {
                      enumerable: !0,
                      configurable: !0,
                      get: Te(t)
                        ? function() {
                            if (this.originalEvent)
                              return t(this.originalEvent);
                          }
                        : function() {
                            if (this.originalEvent)
                              return this.originalEvent[e];
                          },
                      set: function(t) {
                        Object.defineProperty(this, e, {
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                          value: t
                        });
                      }
                    });
                  },
                  fix: function(e) {
                    return e[Se.expando] ? e : new Se.Event(e);
                  },
                  special: {
                    load: { noBubble: !0 },
                    click: {
                      setup: function(e) {
                        var t = this || e;
                        return (
                          nt.test(t.type) &&
                            t.click &&
                            u(t, "input") &&
                            D(t, "click", R),
                          !1
                        );
                      },
                      trigger: function(e) {
                        var t = this || e;
                        return (
                          nt.test(t.type) &&
                            t.click &&
                            u(t, "input") &&
                            D(t, "click"),
                          !0
                        );
                      },
                      _default: function(e) {
                        var t = e.target;
                        return (
                          (nt.test(t.type) &&
                            t.click &&
                            u(t, "input") &&
                            Ge.get(t, "click")) ||
                          u(t, "a")
                        );
                      }
                    },
                    beforeunload: {
                      postDispatch: function(e) {
                        void 0 !== e.result &&
                          e.originalEvent &&
                          (e.originalEvent.returnValue = e.result);
                      }
                    }
                  }
                }),
                  (Se.removeEvent = function(e, t, r) {
                    e.removeEventListener && e.removeEventListener(t, r);
                  }),
                  (Se.Event = function(e, t) {
                    if (!(this instanceof Se.Event)) return new Se.Event(e, t);
                    e && e.type
                      ? ((this.originalEvent = e),
                        (this.type = e.type),
                        (this.isDefaultPrevented =
                          e.defaultPrevented ||
                          (void 0 === e.defaultPrevented &&
                            !1 === e.returnValue)
                            ? R
                            : L),
                        (this.target =
                          e.target && 3 === e.target.nodeType
                            ? e.target.parentNode
                            : e.target),
                        (this.currentTarget = e.currentTarget),
                        (this.relatedTarget = e.relatedTarget))
                      : (this.type = e),
                      t && Se.extend(this, t),
                      (this.timeStamp = (e && e.timeStamp) || Date.now()),
                      (this[Se.expando] = !0);
                  }),
                  (Se.Event.prototype = {
                    constructor: Se.Event,
                    isDefaultPrevented: L,
                    isPropagationStopped: L,
                    isImmediatePropagationStopped: L,
                    isSimulated: !1,
                    preventDefault: function() {
                      var e = this.originalEvent;
                      (this.isDefaultPrevented = R),
                        e && !this.isSimulated && e.preventDefault();
                    },
                    stopPropagation: function() {
                      var e = this.originalEvent;
                      (this.isPropagationStopped = R),
                        e && !this.isSimulated && e.stopPropagation();
                    },
                    stopImmediatePropagation: function() {
                      var e = this.originalEvent;
                      (this.isImmediatePropagationStopped = R),
                        e && !this.isSimulated && e.stopImmediatePropagation(),
                        this.stopPropagation();
                    }
                  }),
                  Se.each(
                    {
                      altKey: !0,
                      bubbles: !0,
                      cancelable: !0,
                      changedTouches: !0,
                      ctrlKey: !0,
                      detail: !0,
                      eventPhase: !0,
                      metaKey: !0,
                      pageX: !0,
                      pageY: !0,
                      shiftKey: !0,
                      view: !0,
                      char: !0,
                      code: !0,
                      charCode: !0,
                      key: !0,
                      keyCode: !0,
                      button: !0,
                      buttons: !0,
                      clientX: !0,
                      clientY: !0,
                      offsetX: !0,
                      offsetY: !0,
                      pointerId: !0,
                      pointerType: !0,
                      screenX: !0,
                      screenY: !0,
                      targetTouches: !0,
                      toElement: !0,
                      touches: !0,
                      which: function(e) {
                        var t = e.button;
                        return null == e.which && ut.test(e.type)
                          ? null != e.charCode
                            ? e.charCode
                            : e.keyCode
                          : !e.which && void 0 !== t && ct.test(e.type)
                          ? 1 & t
                            ? 1
                            : 2 & t
                            ? 3
                            : 4 & t
                            ? 2
                            : 0
                          : e.which;
                      }
                    },
                    Se.event.addProp
                  ),
                  Se.each({ focus: "focusin", blur: "focusout" }, function(
                    e,
                    t
                  ) {
                    Se.event.special[e] = {
                      setup: function() {
                        return D(this, e, N), !1;
                      },
                      trigger: function() {
                        return D(this, e), !0;
                      },
                      delegateType: t
                    };
                  }),
                  Se.each(
                    {
                      mouseenter: "mouseover",
                      mouseleave: "mouseout",
                      pointerenter: "pointerover",
                      pointerleave: "pointerout"
                    },
                    function(e, t) {
                      Se.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                          var r,
                            o = this,
                            n = e.relatedTarget,
                            a = e.handleObj;
                          return (
                            (n && (n === o || Se.contains(o, n))) ||
                              ((e.type = a.origType),
                              (r = a.handler.apply(this, arguments)),
                              (e.type = t)),
                            r
                          );
                        }
                      };
                    }
                  ),
                  Se.fn.extend({
                    on: function(e, t, r, o) {
                      return O(this, e, t, r, o);
                    },
                    one: function(e, t, r, o) {
                      return O(this, e, t, r, o, 1);
                    },
                    off: function(e, t, r) {
                      var o, n;
                      if (e && e.preventDefault && e.handleObj)
                        return (
                          (o = e.handleObj),
                          Se(e.delegateTarget).off(
                            o.namespace
                              ? o.origType + "." + o.namespace
                              : o.origType,
                            o.selector,
                            o.handler
                          ),
                          this
                        );
                      if ("object" == typeof e) {
                        for (n in e) this.off(n, t, e[n]);
                        return this;
                      }
                      return (
                        (!1 !== t && "function" != typeof t) ||
                          ((r = t), (t = void 0)),
                        !1 === r && (r = L),
                        this.each(function() {
                          Se.event.remove(this, e, r, t);
                        })
                      );
                    }
                  });
                var pt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                  ft = /<script|<style|<link/i,
                  gt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                  ht = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                Se.extend({
                  htmlPrefilter: function(e) {
                    return e.replace(pt, "<$1></$2>");
                  },
                  clone: function(e, t, r) {
                    var o,
                      n,
                      a,
                      i,
                      s = e.cloneNode(!0),
                      l = Ze(e);
                    if (
                      !(
                        Ae.noCloneChecked ||
                        (1 !== e.nodeType && 11 !== e.nodeType) ||
                        Se.isXMLDoc(e)
                      )
                    )
                      for (i = C(s), a = C(e), o = 0, n = a.length; o < n; o++)
                        H(a[o], i[o]);
                    if (t)
                      if (r)
                        for (
                          a = a || C(e), i = i || C(s), o = 0, n = a.length;
                          o < n;
                          o++
                        )
                          j(a[o], i[o]);
                      else j(e, s);
                    return (
                      (i = C(s, "script")),
                      i.length > 0 && w(i, !l && C(e, "script")),
                      s
                    );
                  },
                  cleanData: function(e) {
                    for (
                      var t, r, o, n = Se.event.special, a = 0;
                      void 0 !== (r = e[a]);
                      a++
                    )
                      if (Ve(r)) {
                        if ((t = r[Ge.expando])) {
                          if (t.events)
                            for (o in t.events)
                              n[o]
                                ? Se.event.remove(r, o)
                                : Se.removeEvent(r, o, t.handle);
                          r[Ge.expando] = void 0;
                        }
                        r[Ye.expando] && (r[Ye.expando] = void 0);
                      }
                  }
                }),
                  Se.fn.extend({
                    detach: function(e) {
                      return F(this, e, !0);
                    },
                    remove: function(e) {
                      return F(this, e);
                    },
                    text: function(e) {
                      return We(
                        this,
                        function(e) {
                          return void 0 === e
                            ? Se.text(this)
                            : this.empty().each(function() {
                                (1 !== this.nodeType &&
                                  11 !== this.nodeType &&
                                  9 !== this.nodeType) ||
                                  (this.textContent = e);
                              });
                        },
                        null,
                        e,
                        arguments.length
                      );
                    },
                    append: function() {
                      return q(this, arguments, function(e) {
                        if (
                          1 === this.nodeType ||
                          11 === this.nodeType ||
                          9 === this.nodeType
                        ) {
                          P(this, e).appendChild(e);
                        }
                      });
                    },
                    prepend: function() {
                      return q(this, arguments, function(e) {
                        if (
                          1 === this.nodeType ||
                          11 === this.nodeType ||
                          9 === this.nodeType
                        ) {
                          var t = P(this, e);
                          t.insertBefore(e, t.firstChild);
                        }
                      });
                    },
                    before: function() {
                      return q(this, arguments, function(e) {
                        this.parentNode &&
                          this.parentNode.insertBefore(e, this);
                      });
                    },
                    after: function() {
                      return q(this, arguments, function(e) {
                        this.parentNode &&
                          this.parentNode.insertBefore(e, this.nextSibling);
                      });
                    },
                    empty: function() {
                      for (var e, t = 0; null != (e = this[t]); t++)
                        1 === e.nodeType &&
                          (Se.cleanData(C(e, !1)), (e.textContent = ""));
                      return this;
                    },
                    clone: function(e, t) {
                      return (
                        (e = null != e && e),
                        (t = null == t ? e : t),
                        this.map(function() {
                          return Se.clone(this, e, t);
                        })
                      );
                    },
                    html: function(e) {
                      return We(
                        this,
                        function(e) {
                          var t = this[0] || {},
                            r = 0,
                            o = this.length;
                          if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                          if (
                            "string" == typeof e &&
                            !ft.test(e) &&
                            !st[(at.exec(e) || ["", ""])[1].toLowerCase()]
                          ) {
                            e = Se.htmlPrefilter(e);
                            try {
                              for (; r < o; r++)
                                (t = this[r] || {}),
                                  1 === t.nodeType &&
                                    (Se.cleanData(C(t, !1)), (t.innerHTML = e));
                              t = 0;
                            } catch (e) {}
                          }
                          t && this.empty().append(e);
                        },
                        null,
                        e,
                        arguments.length
                      );
                    },
                    replaceWith: function() {
                      var e = [];
                      return q(
                        this,
                        arguments,
                        function(t) {
                          var r = this.parentNode;
                          Se.inArray(this, e) < 0 &&
                            (Se.cleanData(C(this)),
                            r && r.replaceChild(t, this));
                        },
                        e
                      );
                    }
                  }),
                  Se.each(
                    {
                      appendTo: "append",
                      prependTo: "prepend",
                      insertBefore: "before",
                      insertAfter: "after",
                      replaceAll: "replaceWith"
                    },
                    function(e, t) {
                      Se.fn[e] = function(e) {
                        for (
                          var r, o = [], n = Se(e), a = n.length - 1, i = 0;
                          i <= a;
                          i++
                        )
                          (r = i === a ? this : this.clone(!0)),
                            Se(n[i])[t](r),
                            me.apply(o, r.get());
                        return this.pushStack(o);
                      };
                    }
                  );
                var mt = new RegExp("^(" + ze + ")(?!px)[a-z%]+$", "i"),
                  vt = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return (t && t.opener) || (t = r), t.getComputedStyle(e);
                  },
                  xt = new RegExp(Je.join("|"), "i");
                !(function() {
                  function e() {
                    if (u) {
                      (l.style.cssText =
                        "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                        (u.style.cssText =
                          "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                        Qe.appendChild(l).appendChild(u);
                      var e = r.getComputedStyle(u);
                      (o = "1%" !== e.top),
                        (s = 12 === t(e.marginLeft)),
                        (u.style.right = "60%"),
                        (i = 36 === t(e.right)),
                        (n = 36 === t(e.width)),
                        (u.style.position = "absolute"),
                        (a = 12 === t(u.offsetWidth / 3)),
                        Qe.removeChild(l),
                        (u = null);
                    }
                  }
                  function t(e) {
                    return Math.round(parseFloat(e));
                  }
                  var o,
                    n,
                    a,
                    i,
                    s,
                    l = pe.createElement("div"),
                    u = pe.createElement("div");
                  u.style &&
                    ((u.style.backgroundClip = "content-box"),
                    (u.cloneNode(!0).style.backgroundClip = ""),
                    (Ae.clearCloneStyle =
                      "content-box" === u.style.backgroundClip),
                    Se.extend(Ae, {
                      boxSizingReliable: function() {
                        return e(), n;
                      },
                      pixelBoxStyles: function() {
                        return e(), i;
                      },
                      pixelPosition: function() {
                        return e(), o;
                      },
                      reliableMarginLeft: function() {
                        return e(), s;
                      },
                      scrollboxSize: function() {
                        return e(), a;
                      }
                    }));
                })();
                var yt = ["Webkit", "Moz", "ms"],
                  bt = pe.createElement("div").style,
                  _t = {},
                  Et = /^(none|table(?!-c[ea]).+)/,
                  At = /^--/,
                  Tt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                  },
                  Ct = { letterSpacing: "0", fontWeight: "400" };
                Se.extend({
                  cssHooks: {
                    opacity: {
                      get: function(e, t) {
                        if (t) {
                          var r = W(e, "opacity");
                          return "" === r ? "1" : r;
                        }
                      }
                    }
                  },
                  cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                  },
                  cssProps: {},
                  style: function(e, t, r, o) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                      var n,
                        a,
                        i,
                        s = x(t),
                        l = At.test(t),
                        u = e.style;
                      if (
                        (l || (t = V(s)),
                        (i = Se.cssHooks[t] || Se.cssHooks[s]),
                        void 0 === r)
                      )
                        return i &&
                          "get" in i &&
                          void 0 !== (n = i.get(e, !1, o))
                          ? n
                          : u[t];
                      (a = typeof r),
                        "string" === a &&
                          (n = Ke.exec(r)) &&
                          n[1] &&
                          ((r = E(e, t, n)), (a = "number")),
                        null != r &&
                          r === r &&
                          ("number" !== a ||
                            l ||
                            (r += (n && n[3]) || (Se.cssNumber[s] ? "" : "px")),
                          Ae.clearCloneStyle ||
                            "" !== r ||
                            0 !== t.indexOf("background") ||
                            (u[t] = "inherit"),
                          (i &&
                            "set" in i &&
                            void 0 === (r = i.set(e, r, o))) ||
                            (l ? u.setProperty(t, r) : (u[t] = r)));
                    }
                  },
                  css: function(e, t, r, o) {
                    var n,
                      a,
                      i,
                      s = x(t);
                    return (
                      At.test(t) || (t = V(s)),
                      (i = Se.cssHooks[t] || Se.cssHooks[s]),
                      i && "get" in i && (n = i.get(e, !0, r)),
                      void 0 === n && (n = W(e, t, o)),
                      "normal" === n && t in Ct && (n = Ct[t]),
                      "" === r || r
                        ? ((a = parseFloat(n)),
                          !0 === r || isFinite(a) ? a || 0 : n)
                        : n
                    );
                  }
                }),
                  Se.each(["height", "width"], function(e, t) {
                    Se.cssHooks[t] = {
                      get: function(e, r, o) {
                        if (r)
                          return !Et.test(Se.css(e, "display")) ||
                            (e.getClientRects().length &&
                              e.getBoundingClientRect().width)
                            ? $(e, t, o)
                            : rt(e, Tt, function() {
                                return $(e, t, o);
                              });
                      },
                      set: function(e, r, o) {
                        var n,
                          a = vt(e),
                          i = !Ae.scrollboxSize() && "absolute" === a.position,
                          s = i || o,
                          l =
                            s && "border-box" === Se.css(e, "boxSizing", !1, a),
                          u = o ? Y(e, t, o, l, a) : 0;
                        return (
                          l &&
                            i &&
                            (u -= Math.ceil(
                              e["offset" + t[0].toUpperCase() + t.slice(1)] -
                                parseFloat(a[t]) -
                                Y(e, t, "border", !1, a) -
                                0.5
                            )),
                          u &&
                            (n = Ke.exec(r)) &&
                            "px" !== (n[3] || "px") &&
                            ((e.style[t] = r), (r = Se.css(e, t))),
                          G(e, r, u)
                        );
                      }
                    };
                  }),
                  (Se.cssHooks.marginLeft = B(Ae.reliableMarginLeft, function(
                    e,
                    t
                  ) {
                    if (t)
                      return (
                        (parseFloat(W(e, "marginLeft")) ||
                          e.getBoundingClientRect().left -
                            rt(e, { marginLeft: 0 }, function() {
                              return e.getBoundingClientRect().left;
                            })) + "px"
                      );
                  })),
                  Se.each(
                    { margin: "", padding: "", border: "Width" },
                    function(e, t) {
                      (Se.cssHooks[e + t] = {
                        expand: function(r) {
                          for (
                            var o = 0,
                              n = {},
                              a = "string" == typeof r ? r.split(" ") : [r];
                            o < 4;
                            o++
                          )
                            n[e + Je[o] + t] = a[o] || a[o - 2] || a[0];
                          return n;
                        }
                      }),
                        "margin" !== e && (Se.cssHooks[e + t].set = G);
                    }
                  ),
                  Se.fn.extend({
                    css: function(e, t) {
                      return We(
                        this,
                        function(e, t, r) {
                          var o,
                            n,
                            a = {},
                            i = 0;
                          if (Array.isArray(t)) {
                            for (o = vt(e), n = t.length; i < n; i++)
                              a[t[i]] = Se.css(e, t[i], !1, o);
                            return a;
                          }
                          return void 0 !== r
                            ? Se.style(e, t, r)
                            : Se.css(e, t);
                        },
                        e,
                        t,
                        arguments.length > 1
                      );
                    }
                  }),
                  (Se.Tween = X),
                  (X.prototype = {
                    constructor: X,
                    init: function(e, t, r, o, n, a) {
                      (this.elem = e),
                        (this.prop = r),
                        (this.easing = n || Se.easing._default),
                        (this.options = t),
                        (this.start = this.now = this.cur()),
                        (this.end = o),
                        (this.unit = a || (Se.cssNumber[r] ? "" : "px"));
                    },
                    cur: function() {
                      var e = X.propHooks[this.prop];
                      return e && e.get
                        ? e.get(this)
                        : X.propHooks._default.get(this);
                    },
                    run: function(e) {
                      var t,
                        r = X.propHooks[this.prop];
                      return (
                        this.options.duration
                          ? (this.pos = t = Se.easing[this.easing](
                              e,
                              this.options.duration * e,
                              0,
                              1,
                              this.options.duration
                            ))
                          : (this.pos = t = e),
                        (this.now = (this.end - this.start) * t + this.start),
                        this.options.step &&
                          this.options.step.call(this.elem, this.now, this),
                        r && r.set
                          ? r.set(this)
                          : X.propHooks._default.set(this),
                        this
                      );
                    }
                  }),
                  (X.prototype.init.prototype = X.prototype),
                  (X.propHooks = {
                    _default: {
                      get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType ||
                          (null != e.elem[e.prop] &&
                            null == e.elem.style[e.prop])
                          ? e.elem[e.prop]
                          : ((t = Se.css(e.elem, e.prop, "")),
                            t && "auto" !== t ? t : 0);
                      },
                      set: function(e) {
                        Se.fx.step[e.prop]
                          ? Se.fx.step[e.prop](e)
                          : 1 !== e.elem.nodeType ||
                            (!Se.cssHooks[e.prop] &&
                              null == e.elem.style[V(e.prop)])
                          ? (e.elem[e.prop] = e.now)
                          : Se.style(e.elem, e.prop, e.now + e.unit);
                      }
                    }
                  }),
                  (X.propHooks.scrollTop = X.propHooks.scrollLeft = {
                    set: function(e) {
                      e.elem.nodeType &&
                        e.elem.parentNode &&
                        (e.elem[e.prop] = e.now);
                    }
                  }),
                  (Se.easing = {
                    linear: function(e) {
                      return e;
                    },
                    swing: function(e) {
                      return 0.5 - Math.cos(e * Math.PI) / 2;
                    },
                    _default: "swing"
                  }),
                  (Se.fx = X.prototype.init),
                  (Se.fx.step = {});
                var wt,
                  St,
                  Rt = /^(?:toggle|show|hide)$/,
                  Lt = /queueHooks$/;
                (Se.Animation = Se.extend(te, {
                  tweeners: {
                    "*": [
                      function(e, t) {
                        var r = this.createTween(e, t);
                        return E(r.elem, e, Ke.exec(t), r), r;
                      }
                    ]
                  },
                  tweener: function(e, t) {
                    Te(e) ? ((t = e), (e = ["*"])) : (e = e.match(He));
                    for (var r, o = 0, n = e.length; o < n; o++)
                      (r = e[o]),
                        (te.tweeners[r] = te.tweeners[r] || []),
                        te.tweeners[r].unshift(t);
                  },
                  prefilters: [Z],
                  prefilter: function(e, t) {
                    t ? te.prefilters.unshift(e) : te.prefilters.push(e);
                  }
                })),
                  (Se.speed = function(e, t, r) {
                    var o =
                      e && "object" == typeof e
                        ? Se.extend({}, e)
                        : {
                            complete: r || (!r && t) || (Te(e) && e),
                            duration: e,
                            easing: (r && t) || (t && !Te(t) && t)
                          };
                    return (
                      Se.fx.off
                        ? (o.duration = 0)
                        : "number" != typeof o.duration &&
                          (o.duration in Se.fx.speeds
                            ? (o.duration = Se.fx.speeds[o.duration])
                            : (o.duration = Se.fx.speeds._default)),
                      (null != o.queue && !0 !== o.queue) || (o.queue = "fx"),
                      (o.old = o.complete),
                      (o.complete = function() {
                        Te(o.old) && o.old.call(this),
                          o.queue && Se.dequeue(this, o.queue);
                      }),
                      o
                    );
                  }),
                  Se.fn.extend({
                    fadeTo: function(e, t, r, o) {
                      return this.filter(tt)
                        .css("opacity", 0)
                        .show()
                        .end()
                        .animate({ opacity: t }, e, r, o);
                    },
                    animate: function(e, t, r, o) {
                      var n = Se.isEmptyObject(e),
                        a = Se.speed(t, r, o),
                        i = function() {
                          var t = te(this, Se.extend({}, e), a);
                          (n || Ge.get(this, "finish")) && t.stop(!0);
                        };
                      return (
                        (i.finish = i),
                        n || !1 === a.queue
                          ? this.each(i)
                          : this.queue(a.queue, i)
                      );
                    },
                    stop: function(e, t, r) {
                      var o = function(e) {
                        var t = e.stop;
                        delete e.stop, t(r);
                      };
                      return (
                        "string" != typeof e &&
                          ((r = t), (t = e), (e = void 0)),
                        t && !1 !== e && this.queue(e || "fx", []),
                        this.each(function() {
                          var t = !0,
                            n = null != e && e + "queueHooks",
                            a = Se.timers,
                            i = Ge.get(this);
                          if (n) i[n] && i[n].stop && o(i[n]);
                          else
                            for (n in i)
                              i[n] && i[n].stop && Lt.test(n) && o(i[n]);
                          for (n = a.length; n--; )
                            a[n].elem !== this ||
                              (null != e && a[n].queue !== e) ||
                              (a[n].anim.stop(r), (t = !1), a.splice(n, 1));
                          (!t && r) || Se.dequeue(this, e);
                        })
                      );
                    },
                    finish: function(e) {
                      return (
                        !1 !== e && (e = e || "fx"),
                        this.each(function() {
                          var t,
                            r = Ge.get(this),
                            o = r[e + "queue"],
                            n = r[e + "queueHooks"],
                            a = Se.timers,
                            i = o ? o.length : 0;
                          for (
                            r.finish = !0,
                              Se.queue(this, e, []),
                              n && n.stop && n.stop.call(this, !0),
                              t = a.length;
                            t--;

                          )
                            a[t].elem === this &&
                              a[t].queue === e &&
                              (a[t].anim.stop(!0), a.splice(t, 1));
                          for (t = 0; t < i; t++)
                            o[t] && o[t].finish && o[t].finish.call(this);
                          delete r.finish;
                        })
                      );
                    }
                  }),
                  Se.each(["toggle", "show", "hide"], function(e, t) {
                    var r = Se.fn[t];
                    Se.fn[t] = function(e, o, n) {
                      return null == e || "boolean" == typeof e
                        ? r.apply(this, arguments)
                        : this.animate(J(t, !0), e, o, n);
                    };
                  }),
                  Se.each(
                    {
                      slideDown: J("show"),
                      slideUp: J("hide"),
                      slideToggle: J("toggle"),
                      fadeIn: { opacity: "show" },
                      fadeOut: { opacity: "hide" },
                      fadeToggle: { opacity: "toggle" }
                    },
                    function(e, t) {
                      Se.fn[e] = function(e, r, o) {
                        return this.animate(t, e, r, o);
                      };
                    }
                  ),
                  (Se.timers = []),
                  (Se.fx.tick = function() {
                    var e,
                      t = 0,
                      r = Se.timers;
                    for (wt = Date.now(); t < r.length; t++)
                      (e = r[t])() || r[t] !== e || r.splice(t--, 1);
                    r.length || Se.fx.stop(), (wt = void 0);
                  }),
                  (Se.fx.timer = function(e) {
                    Se.timers.push(e), Se.fx.start();
                  }),
                  (Se.fx.interval = 13),
                  (Se.fx.start = function() {
                    St || ((St = !0), z());
                  }),
                  (Se.fx.stop = function() {
                    St = null;
                  }),
                  (Se.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                  (Se.fn.delay = function(e, t) {
                    return (
                      (e = Se.fx ? Se.fx.speeds[e] || e : e),
                      (t = t || "fx"),
                      this.queue(t, function(t, o) {
                        var n = r.setTimeout(t, e);
                        o.stop = function() {
                          r.clearTimeout(n);
                        };
                      })
                    );
                  }),
                  (function() {
                    var e = pe.createElement("input"),
                      t = pe.createElement("select"),
                      r = t.appendChild(pe.createElement("option"));
                    (e.type = "checkbox"),
                      (Ae.checkOn = "" !== e.value),
                      (Ae.optSelected = r.selected),
                      (e = pe.createElement("input")),
                      (e.value = "t"),
                      (e.type = "radio"),
                      (Ae.radioValue = "t" === e.value);
                  })();
                var Nt,
                  It = Se.expr.attrHandle;
                Se.fn.extend({
                  attr: function(e, t) {
                    return We(this, Se.attr, e, t, arguments.length > 1);
                  },
                  removeAttr: function(e) {
                    return this.each(function() {
                      Se.removeAttr(this, e);
                    });
                  }
                }),
                  Se.extend({
                    attr: function(e, t, r) {
                      var o,
                        n,
                        a = e.nodeType;
                      if (3 !== a && 8 !== a && 2 !== a)
                        return void 0 === e.getAttribute
                          ? Se.prop(e, t, r)
                          : ((1 === a && Se.isXMLDoc(e)) ||
                              (n =
                                Se.attrHooks[t.toLowerCase()] ||
                                (Se.expr.match.bool.test(t) ? Nt : void 0)),
                            void 0 !== r
                              ? null === r
                                ? void Se.removeAttr(e, t)
                                : n &&
                                  "set" in n &&
                                  void 0 !== (o = n.set(e, r, t))
                                ? o
                                : (e.setAttribute(t, r + ""), r)
                              : n && "get" in n && null !== (o = n.get(e, t))
                              ? o
                              : ((o = Se.find.attr(e, t)),
                                null == o ? void 0 : o));
                    },
                    attrHooks: {
                      type: {
                        set: function(e, t) {
                          if (
                            !Ae.radioValue &&
                            "radio" === t &&
                            u(e, "input")
                          ) {
                            var r = e.value;
                            return (
                              e.setAttribute("type", t), r && (e.value = r), t
                            );
                          }
                        }
                      }
                    },
                    removeAttr: function(e, t) {
                      var r,
                        o = 0,
                        n = t && t.match(He);
                      if (n && 1 === e.nodeType)
                        for (; (r = n[o++]); ) e.removeAttribute(r);
                    }
                  }),
                  (Nt = {
                    set: function(e, t, r) {
                      return (
                        !1 === t ? Se.removeAttr(e, r) : e.setAttribute(r, r), r
                      );
                    }
                  }),
                  Se.each(Se.expr.match.bool.source.match(/\w+/g), function(
                    e,
                    t
                  ) {
                    var r = It[t] || Se.find.attr;
                    It[t] = function(e, t, o) {
                      var n,
                        a,
                        i = t.toLowerCase();
                      return (
                        o ||
                          ((a = It[i]),
                          (It[i] = n),
                          (n = null != r(e, t, o) ? i : null),
                          (It[i] = a)),
                        n
                      );
                    };
                  });
                var Ot = /^(?:input|select|textarea|button)$/i,
                  Dt = /^(?:a|area)$/i;
                Se.fn.extend({
                  prop: function(e, t) {
                    return We(this, Se.prop, e, t, arguments.length > 1);
                  },
                  removeProp: function(e) {
                    return this.each(function() {
                      delete this[Se.propFix[e] || e];
                    });
                  }
                }),
                  Se.extend({
                    prop: function(e, t, r) {
                      var o,
                        n,
                        a = e.nodeType;
                      if (3 !== a && 8 !== a && 2 !== a)
                        return (
                          (1 === a && Se.isXMLDoc(e)) ||
                            ((t = Se.propFix[t] || t), (n = Se.propHooks[t])),
                          void 0 !== r
                            ? n && "set" in n && void 0 !== (o = n.set(e, r, t))
                              ? o
                              : (e[t] = r)
                            : n && "get" in n && null !== (o = n.get(e, t))
                            ? o
                            : e[t]
                        );
                    },
                    propHooks: {
                      tabIndex: {
                        get: function(e) {
                          var t = Se.find.attr(e, "tabindex");
                          return t
                            ? parseInt(t, 10)
                            : Ot.test(e.nodeName) ||
                              (Dt.test(e.nodeName) && e.href)
                            ? 0
                            : -1;
                        }
                      }
                    },
                    propFix: { for: "htmlFor", class: "className" }
                  }),
                  Ae.optSelected ||
                    (Se.propHooks.selected = {
                      get: function(e) {
                        var t = e.parentNode;
                        return (
                          t && t.parentNode && t.parentNode.selectedIndex, null
                        );
                      },
                      set: function(e) {
                        var t = e.parentNode;
                        t &&
                          (t.selectedIndex,
                          t.parentNode && t.parentNode.selectedIndex);
                      }
                    }),
                  Se.each(
                    [
                      "tabIndex",
                      "readOnly",
                      "maxLength",
                      "cellSpacing",
                      "cellPadding",
                      "rowSpan",
                      "colSpan",
                      "useMap",
                      "frameBorder",
                      "contentEditable"
                    ],
                    function() {
                      Se.propFix[this.toLowerCase()] = this;
                    }
                  ),
                  Se.fn.extend({
                    addClass: function(e) {
                      var t,
                        r,
                        o,
                        n,
                        a,
                        i,
                        s,
                        l = 0;
                      if (Te(e))
                        return this.each(function(t) {
                          Se(this).addClass(e.call(this, t, oe(this)));
                        });
                      if (((t = ne(e)), t.length))
                        for (; (r = this[l++]); )
                          if (
                            ((n = oe(r)),
                            (o = 1 === r.nodeType && " " + re(n) + " "))
                          ) {
                            for (i = 0; (a = t[i++]); )
                              o.indexOf(" " + a + " ") < 0 && (o += a + " ");
                            (s = re(o)), n !== s && r.setAttribute("class", s);
                          }
                      return this;
                    },
                    removeClass: function(e) {
                      var t,
                        r,
                        o,
                        n,
                        a,
                        i,
                        s,
                        l = 0;
                      if (Te(e))
                        return this.each(function(t) {
                          Se(this).removeClass(e.call(this, t, oe(this)));
                        });
                      if (!arguments.length) return this.attr("class", "");
                      if (((t = ne(e)), t.length))
                        for (; (r = this[l++]); )
                          if (
                            ((n = oe(r)),
                            (o = 1 === r.nodeType && " " + re(n) + " "))
                          ) {
                            for (i = 0; (a = t[i++]); )
                              for (; o.indexOf(" " + a + " ") > -1; )
                                o = o.replace(" " + a + " ", " ");
                            (s = re(o)), n !== s && r.setAttribute("class", s);
                          }
                      return this;
                    },
                    toggleClass: function(e, t) {
                      var r = typeof e,
                        o = "string" === r || Array.isArray(e);
                      return "boolean" == typeof t && o
                        ? t
                          ? this.addClass(e)
                          : this.removeClass(e)
                        : Te(e)
                        ? this.each(function(r) {
                            Se(this).toggleClass(
                              e.call(this, r, oe(this), t),
                              t
                            );
                          })
                        : this.each(function() {
                            var t, n, a, i;
                            if (o)
                              for (
                                n = 0, a = Se(this), i = ne(e);
                                (t = i[n++]);

                              )
                                a.hasClass(t)
                                  ? a.removeClass(t)
                                  : a.addClass(t);
                            else
                              (void 0 !== e && "boolean" !== r) ||
                                ((t = oe(this)),
                                t && Ge.set(this, "__className__", t),
                                this.setAttribute &&
                                  this.setAttribute(
                                    "class",
                                    t || !1 === e
                                      ? ""
                                      : Ge.get(this, "__className__") || ""
                                  ));
                          });
                    },
                    hasClass: function(e) {
                      var t,
                        r,
                        o = 0;
                      for (t = " " + e + " "; (r = this[o++]); )
                        if (
                          1 === r.nodeType &&
                          (" " + re(oe(r)) + " ").indexOf(t) > -1
                        )
                          return !0;
                      return !1;
                    }
                  });
                var Pt = /\r/g;
                Se.fn.extend({
                  val: function(e) {
                    var t,
                      r,
                      o,
                      n = this[0];
                    {
                      if (arguments.length)
                        return (
                          (o = Te(e)),
                          this.each(function(r) {
                            var n;
                            1 === this.nodeType &&
                              ((n = o ? e.call(this, r, Se(this).val()) : e),
                              null == n
                                ? (n = "")
                                : "number" == typeof n
                                ? (n += "")
                                : Array.isArray(n) &&
                                  (n = Se.map(n, function(e) {
                                    return null == e ? "" : e + "";
                                  })),
                              ((t =
                                Se.valHooks[this.type] ||
                                Se.valHooks[this.nodeName.toLowerCase()]) &&
                                "set" in t &&
                                void 0 !== t.set(this, n, "value")) ||
                                (this.value = n));
                          })
                        );
                      if (n)
                        return (t =
                          Se.valHooks[n.type] ||
                          Se.valHooks[n.nodeName.toLowerCase()]) &&
                          "get" in t &&
                          void 0 !== (r = t.get(n, "value"))
                          ? r
                          : ((r = n.value),
                            "string" == typeof r
                              ? r.replace(Pt, "")
                              : null == r
                              ? ""
                              : r);
                    }
                  }
                }),
                  Se.extend({
                    valHooks: {
                      option: {
                        get: function(e) {
                          var t = Se.find.attr(e, "value");
                          return null != t ? t : re(Se.text(e));
                        }
                      },
                      select: {
                        get: function(e) {
                          var t,
                            r,
                            o,
                            n = e.options,
                            a = e.selectedIndex,
                            i = "select-one" === e.type,
                            s = i ? null : [],
                            l = i ? a + 1 : n.length;
                          for (o = a < 0 ? l : i ? a : 0; o < l; o++)
                            if (
                              ((r = n[o]),
                              (r.selected || o === a) &&
                                !r.disabled &&
                                (!r.parentNode.disabled ||
                                  !u(r.parentNode, "optgroup")))
                            ) {
                              if (((t = Se(r).val()), i)) return t;
                              s.push(t);
                            }
                          return s;
                        },
                        set: function(e, t) {
                          for (
                            var r,
                              o,
                              n = e.options,
                              a = Se.makeArray(t),
                              i = n.length;
                            i--;

                          )
                            (o = n[i]),
                              (o.selected =
                                Se.inArray(Se.valHooks.option.get(o), a) >
                                -1) && (r = !0);
                          return r || (e.selectedIndex = -1), a;
                        }
                      }
                    }
                  }),
                  Se.each(["radio", "checkbox"], function() {
                    (Se.valHooks[this] = {
                      set: function(e, t) {
                        if (Array.isArray(t))
                          return (e.checked = Se.inArray(Se(e).val(), t) > -1);
                      }
                    }),
                      Ae.checkOn ||
                        (Se.valHooks[this].get = function(e) {
                          return null === e.getAttribute("value")
                            ? "on"
                            : e.value;
                        });
                  }),
                  (Ae.focusin = "onfocusin" in r);
                var Mt = /^(?:focusinfocus|focusoutblur)$/,
                  kt = function(e) {
                    e.stopPropagation();
                  };
                Se.extend(Se.event, {
                  trigger: function(e, t, o, n) {
                    var a,
                      i,
                      s,
                      l,
                      u,
                      c,
                      d,
                      p,
                      f = [o || pe],
                      g = be.call(e, "type") ? e.type : e,
                      h = be.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (
                      ((i = p = s = o = o || pe),
                      3 !== o.nodeType &&
                        8 !== o.nodeType &&
                        !Mt.test(g + Se.event.triggered) &&
                        (g.indexOf(".") > -1 &&
                          ((h = g.split(".")), (g = h.shift()), h.sort()),
                        (u = g.indexOf(":") < 0 && "on" + g),
                        (e = e[Se.expando]
                          ? e
                          : new Se.Event(g, "object" == typeof e && e)),
                        (e.isTrigger = n ? 2 : 3),
                        (e.namespace = h.join(".")),
                        (e.rnamespace = e.namespace
                          ? new RegExp(
                              "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                            )
                          : null),
                        (e.result = void 0),
                        e.target || (e.target = o),
                        (t = null == t ? [e] : Se.makeArray(t, [e])),
                        (d = Se.event.special[g] || {}),
                        n || !d.trigger || !1 !== d.trigger.apply(o, t)))
                    ) {
                      if (!n && !d.noBubble && !Ce(o)) {
                        for (
                          l = d.delegateType || g,
                            Mt.test(l + g) || (i = i.parentNode);
                          i;
                          i = i.parentNode
                        )
                          f.push(i), (s = i);
                        s === (o.ownerDocument || pe) &&
                          f.push(s.defaultView || s.parentWindow || r);
                      }
                      for (a = 0; (i = f[a++]) && !e.isPropagationStopped(); )
                        (p = i),
                          (e.type = a > 1 ? l : d.bindType || g),
                          (c =
                            (Ge.get(i, "events") || {})[e.type] &&
                            Ge.get(i, "handle")),
                          c && c.apply(i, t),
                          (c = u && i[u]) &&
                            c.apply &&
                            Ve(i) &&
                            ((e.result = c.apply(i, t)),
                            !1 === e.result && e.preventDefault());
                      return (
                        (e.type = g),
                        n ||
                          e.isDefaultPrevented() ||
                          (d._default && !1 !== d._default.apply(f.pop(), t)) ||
                          !Ve(o) ||
                          (u &&
                            Te(o[g]) &&
                            !Ce(o) &&
                            ((s = o[u]),
                            s && (o[u] = null),
                            (Se.event.triggered = g),
                            e.isPropagationStopped() &&
                              p.addEventListener(g, kt),
                            o[g](),
                            e.isPropagationStopped() &&
                              p.removeEventListener(g, kt),
                            (Se.event.triggered = void 0),
                            s && (o[u] = s))),
                        e.result
                      );
                    }
                  },
                  simulate: function(e, t, r) {
                    var o = Se.extend(new Se.Event(), r, {
                      type: e,
                      isSimulated: !0
                    });
                    Se.event.trigger(o, null, t);
                  }
                }),
                  Se.fn.extend({
                    trigger: function(e, t) {
                      return this.each(function() {
                        Se.event.trigger(e, t, this);
                      });
                    },
                    triggerHandler: function(e, t) {
                      var r = this[0];
                      if (r) return Se.event.trigger(e, t, r, !0);
                    }
                  }),
                  Ae.focusin ||
                    Se.each({ focus: "focusin", blur: "focusout" }, function(
                      e,
                      t
                    ) {
                      var r = function(e) {
                        Se.event.simulate(t, e.target, Se.event.fix(e));
                      };
                      Se.event.special[t] = {
                        setup: function() {
                          var o = this.ownerDocument || this,
                            n = Ge.access(o, t);
                          n || o.addEventListener(e, r, !0),
                            Ge.access(o, t, (n || 0) + 1);
                        },
                        teardown: function() {
                          var o = this.ownerDocument || this,
                            n = Ge.access(o, t) - 1;
                          n
                            ? Ge.access(o, t, n)
                            : (o.removeEventListener(e, r, !0),
                              Ge.remove(o, t));
                        }
                      };
                    });
                var jt = r.location,
                  Ht = Date.now(),
                  qt = /\?/;
                Se.parseXML = function(e) {
                  var t;
                  if (!e || "string" != typeof e) return null;
                  try {
                    t = new r.DOMParser().parseFromString(e, "text/xml");
                  } catch (e) {
                    t = void 0;
                  }
                  return (
                    (t && !t.getElementsByTagName("parsererror").length) ||
                      Se.error("Invalid XML: " + e),
                    t
                  );
                };
                var Ft = /\[\]$/,
                  Wt = /\r?\n/g,
                  Bt = /^(?:submit|button|image|reset|file)$/i,
                  Ut = /^(?:input|select|textarea|keygen)/i;
                (Se.param = function(e, t) {
                  var r,
                    o = [],
                    n = function(e, t) {
                      var r = Te(t) ? t() : t;
                      o[o.length] =
                        encodeURIComponent(e) +
                        "=" +
                        encodeURIComponent(null == r ? "" : r);
                    };
                  if (null == e) return "";
                  if (Array.isArray(e) || (e.jquery && !Se.isPlainObject(e)))
                    Se.each(e, function() {
                      n(this.name, this.value);
                    });
                  else for (r in e) ae(r, e[r], t, n);
                  return o.join("&");
                }),
                  Se.fn.extend({
                    serialize: function() {
                      return Se.param(this.serializeArray());
                    },
                    serializeArray: function() {
                      return this.map(function() {
                        var e = Se.prop(this, "elements");
                        return e ? Se.makeArray(e) : this;
                      })
                        .filter(function() {
                          var e = this.type;
                          return (
                            this.name &&
                            !Se(this).is(":disabled") &&
                            Ut.test(this.nodeName) &&
                            !Bt.test(e) &&
                            (this.checked || !nt.test(e))
                          );
                        })
                        .map(function(e, t) {
                          var r = Se(this).val();
                          return null == r
                            ? null
                            : Array.isArray(r)
                            ? Se.map(r, function(e) {
                                return {
                                  name: t.name,
                                  value: e.replace(Wt, "\r\n")
                                };
                              })
                            : { name: t.name, value: r.replace(Wt, "\r\n") };
                        })
                        .get();
                    }
                  });
                var Vt = /%20/g,
                  Gt = /#.*$/,
                  Yt = /([?&])_=[^&]*/,
                  $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                  Xt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                  zt = /^(?:GET|HEAD)$/,
                  Kt = /^\/\//,
                  Jt = {},
                  Qt = {},
                  Zt = "*/".concat("*"),
                  er = pe.createElement("a");
                (er.href = jt.href),
                  Se.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                      url: jt.href,
                      type: "GET",
                      isLocal: Xt.test(jt.protocol),
                      global: !0,
                      processData: !0,
                      async: !0,
                      contentType:
                        "application/x-www-form-urlencoded; charset=UTF-8",
                      accepts: {
                        "*": Zt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                      },
                      contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                      },
                      responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                      },
                      converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": Se.parseXML
                      },
                      flatOptions: { url: !0, context: !0 }
                    },
                    ajaxSetup: function(e, t) {
                      return t
                        ? le(le(e, Se.ajaxSettings), t)
                        : le(Se.ajaxSettings, e);
                    },
                    ajaxPrefilter: ie(Jt),
                    ajaxTransport: ie(Qt),
                    ajax: function(e, t) {
                      function o(e, t, o, s) {
                        var u,
                          p,
                          f,
                          b,
                          _,
                          E = t;
                        c ||
                          ((c = !0),
                          l && r.clearTimeout(l),
                          (n = void 0),
                          (i = s || ""),
                          (A.readyState = e > 0 ? 4 : 0),
                          (u = (e >= 200 && e < 300) || 304 === e),
                          o && (b = ue(g, A, o)),
                          (b = ce(g, b, A, u)),
                          u
                            ? (g.ifModified &&
                                ((_ = A.getResponseHeader("Last-Modified")),
                                _ && (Se.lastModified[a] = _),
                                (_ = A.getResponseHeader("etag")) &&
                                  (Se.etag[a] = _)),
                              204 === e || "HEAD" === g.type
                                ? (E = "nocontent")
                                : 304 === e
                                ? (E = "notmodified")
                                : ((E = b.state),
                                  (p = b.data),
                                  (f = b.error),
                                  (u = !f)))
                            : ((f = E),
                              (!e && E) || ((E = "error"), e < 0 && (e = 0))),
                          (A.status = e),
                          (A.statusText = (t || E) + ""),
                          u
                            ? v.resolveWith(h, [p, E, A])
                            : v.rejectWith(h, [A, E, f]),
                          A.statusCode(y),
                          (y = void 0),
                          d &&
                            m.trigger(u ? "ajaxSuccess" : "ajaxError", [
                              A,
                              g,
                              u ? p : f
                            ]),
                          x.fireWith(h, [A, E]),
                          d &&
                            (m.trigger("ajaxComplete", [A, g]),
                            --Se.active || Se.event.trigger("ajaxStop")));
                      }
                      "object" == typeof e && ((t = e), (e = void 0)),
                        (t = t || {});
                      var n,
                        a,
                        i,
                        s,
                        l,
                        u,
                        c,
                        d,
                        p,
                        f,
                        g = Se.ajaxSetup({}, t),
                        h = g.context || g,
                        m =
                          g.context && (h.nodeType || h.jquery)
                            ? Se(h)
                            : Se.event,
                        v = Se.Deferred(),
                        x = Se.Callbacks("once memory"),
                        y = g.statusCode || {},
                        b = {},
                        _ = {},
                        E = "canceled",
                        A = {
                          readyState: 0,
                          getResponseHeader: function(e) {
                            var t;
                            if (c) {
                              if (!s)
                                for (s = {}; (t = $t.exec(i)); )
                                  s[t[1].toLowerCase() + " "] = (
                                    s[t[1].toLowerCase() + " "] || []
                                  ).concat(t[2]);
                              t = s[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                          },
                          getAllResponseHeaders: function() {
                            return c ? i : null;
                          },
                          setRequestHeader: function(e, t) {
                            return (
                              null == c &&
                                ((e = _[e.toLowerCase()] =
                                  _[e.toLowerCase()] || e),
                                (b[e] = t)),
                              this
                            );
                          },
                          overrideMimeType: function(e) {
                            return null == c && (g.mimeType = e), this;
                          },
                          statusCode: function(e) {
                            var t;
                            if (e)
                              if (c) A.always(e[A.status]);
                              else for (t in e) y[t] = [y[t], e[t]];
                            return this;
                          },
                          abort: function(e) {
                            var t = e || E;
                            return n && n.abort(t), o(0, t), this;
                          }
                        };
                      if (
                        (v.promise(A),
                        (g.url = ((e || g.url || jt.href) + "").replace(
                          Kt,
                          jt.protocol + "//"
                        )),
                        (g.type = t.method || t.type || g.method || g.type),
                        (g.dataTypes = (g.dataType || "*")
                          .toLowerCase()
                          .match(He) || [""]),
                        null == g.crossDomain)
                      ) {
                        u = pe.createElement("a");
                        try {
                          (u.href = g.url),
                            (u.href = u.href),
                            (g.crossDomain =
                              er.protocol + "//" + er.host !=
                              u.protocol + "//" + u.host);
                        } catch (e) {
                          g.crossDomain = !0;
                        }
                      }
                      if (
                        (g.data &&
                          g.processData &&
                          "string" != typeof g.data &&
                          (g.data = Se.param(g.data, g.traditional)),
                        se(Jt, g, t, A),
                        c)
                      )
                        return A;
                      (d = Se.event && g.global),
                        d && 0 == Se.active++ && Se.event.trigger("ajaxStart"),
                        (g.type = g.type.toUpperCase()),
                        (g.hasContent = !zt.test(g.type)),
                        (a = g.url.replace(Gt, "")),
                        g.hasContent
                          ? g.data &&
                            g.processData &&
                            0 ===
                              (g.contentType || "").indexOf(
                                "application/x-www-form-urlencoded"
                              ) &&
                            (g.data = g.data.replace(Vt, "+"))
                          : ((f = g.url.slice(a.length)),
                            g.data &&
                              (g.processData || "string" == typeof g.data) &&
                              ((a += (qt.test(a) ? "&" : "?") + g.data),
                              delete g.data),
                            !1 === g.cache &&
                              ((a = a.replace(Yt, "$1")),
                              (f = (qt.test(a) ? "&" : "?") + "_=" + Ht++ + f)),
                            (g.url = a + f)),
                        g.ifModified &&
                          (Se.lastModified[a] &&
                            A.setRequestHeader(
                              "If-Modified-Since",
                              Se.lastModified[a]
                            ),
                          Se.etag[a] &&
                            A.setRequestHeader("If-None-Match", Se.etag[a])),
                        ((g.data && g.hasContent && !1 !== g.contentType) ||
                          t.contentType) &&
                          A.setRequestHeader("Content-Type", g.contentType),
                        A.setRequestHeader(
                          "Accept",
                          g.dataTypes[0] && g.accepts[g.dataTypes[0]]
                            ? g.accepts[g.dataTypes[0]] +
                                ("*" !== g.dataTypes[0]
                                  ? ", " + Zt + "; q=0.01"
                                  : "")
                            : g.accepts["*"]
                        );
                      for (p in g.headers) A.setRequestHeader(p, g.headers[p]);
                      if (
                        g.beforeSend &&
                        (!1 === g.beforeSend.call(h, A, g) || c)
                      )
                        return A.abort();
                      if (
                        ((E = "abort"),
                        x.add(g.complete),
                        A.done(g.success),
                        A.fail(g.error),
                        (n = se(Qt, g, t, A)))
                      ) {
                        if (
                          ((A.readyState = 1),
                          d && m.trigger("ajaxSend", [A, g]),
                          c)
                        )
                          return A;
                        g.async &&
                          g.timeout > 0 &&
                          (l = r.setTimeout(function() {
                            A.abort("timeout");
                          }, g.timeout));
                        try {
                          (c = !1), n.send(b, o);
                        } catch (e) {
                          if (c) throw e;
                          o(-1, e);
                        }
                      } else o(-1, "No Transport");
                      return A;
                    },
                    getJSON: function(e, t, r) {
                      return Se.get(e, t, r, "json");
                    },
                    getScript: function(e, t) {
                      return Se.get(e, void 0, t, "script");
                    }
                  }),
                  Se.each(["get", "post"], function(e, t) {
                    Se[t] = function(e, r, o, n) {
                      return (
                        Te(r) && ((n = n || o), (o = r), (r = void 0)),
                        Se.ajax(
                          Se.extend(
                            {
                              url: e,
                              type: t,
                              dataType: n,
                              data: r,
                              success: o
                            },
                            Se.isPlainObject(e) && e
                          )
                        )
                      );
                    };
                  }),
                  (Se._evalUrl = function(e, t) {
                    return Se.ajax({
                      url: e,
                      type: "GET",
                      dataType: "script",
                      cache: !0,
                      async: !1,
                      global: !1,
                      converters: { "text script": function() {} },
                      dataFilter: function(e) {
                        Se.globalEval(e, t);
                      }
                    });
                  }),
                  Se.fn.extend({
                    wrapAll: function(e) {
                      var t;
                      return (
                        this[0] &&
                          (Te(e) && (e = e.call(this[0])),
                          (t = Se(e, this[0].ownerDocument)
                            .eq(0)
                            .clone(!0)),
                          this[0].parentNode && t.insertBefore(this[0]),
                          t
                            .map(function() {
                              for (var e = this; e.firstElementChild; )
                                e = e.firstElementChild;
                              return e;
                            })
                            .append(this)),
                        this
                      );
                    },
                    wrapInner: function(e) {
                      return Te(e)
                        ? this.each(function(t) {
                            Se(this).wrapInner(e.call(this, t));
                          })
                        : this.each(function() {
                            var t = Se(this),
                              r = t.contents();
                            r.length ? r.wrapAll(e) : t.append(e);
                          });
                    },
                    wrap: function(e) {
                      var t = Te(e);
                      return this.each(function(r) {
                        Se(this).wrapAll(t ? e.call(this, r) : e);
                      });
                    },
                    unwrap: function(e) {
                      return (
                        this.parent(e)
                          .not("body")
                          .each(function() {
                            Se(this).replaceWith(this.childNodes);
                          }),
                        this
                      );
                    }
                  }),
                  (Se.expr.pseudos.hidden = function(e) {
                    return !Se.expr.pseudos.visible(e);
                  }),
                  (Se.expr.pseudos.visible = function(e) {
                    return !!(
                      e.offsetWidth ||
                      e.offsetHeight ||
                      e.getClientRects().length
                    );
                  }),
                  (Se.ajaxSettings.xhr = function() {
                    try {
                      return new r.XMLHttpRequest();
                    } catch (e) {}
                  });
                var tr = { 0: 200, 1223: 204 },
                  rr = Se.ajaxSettings.xhr();
                (Ae.cors = !!rr && "withCredentials" in rr),
                  (Ae.ajax = rr = !!rr),
                  Se.ajaxTransport(function(e) {
                    var t, o;
                    if (Ae.cors || (rr && !e.crossDomain))
                      return {
                        send: function(n, a) {
                          var i,
                            s = e.xhr();
                          if (
                            (s.open(
                              e.type,
                              e.url,
                              e.async,
                              e.username,
                              e.password
                            ),
                            e.xhrFields)
                          )
                            for (i in e.xhrFields) s[i] = e.xhrFields[i];
                          e.mimeType &&
                            s.overrideMimeType &&
                            s.overrideMimeType(e.mimeType),
                            e.crossDomain ||
                              n["X-Requested-With"] ||
                              (n["X-Requested-With"] = "XMLHttpRequest");
                          for (i in n) s.setRequestHeader(i, n[i]);
                          (t = function(e) {
                            return function() {
                              t &&
                                ((t = o = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                "abort" === e
                                  ? s.abort()
                                  : "error" === e
                                  ? "number" != typeof s.status
                                    ? a(0, "error")
                                    : a(s.status, s.statusText)
                                  : a(
                                      tr[s.status] || s.status,
                                      s.statusText,
                                      "text" !== (s.responseType || "text") ||
                                        "string" != typeof s.responseText
                                        ? { binary: s.response }
                                        : { text: s.responseText },
                                      s.getAllResponseHeaders()
                                    ));
                            };
                          }),
                            (s.onload = t()),
                            (o = s.onerror = s.ontimeout = t("error")),
                            void 0 !== s.onabort
                              ? (s.onabort = o)
                              : (s.onreadystatechange = function() {
                                  4 === s.readyState &&
                                    r.setTimeout(function() {
                                      t && o();
                                    });
                                }),
                            (t = t("abort"));
                          try {
                            s.send((e.hasContent && e.data) || null);
                          } catch (e) {
                            if (t) throw e;
                          }
                        },
                        abort: function() {
                          t && t();
                        }
                      };
                  }),
                  Se.ajaxPrefilter(function(e) {
                    e.crossDomain && (e.contents.script = !1);
                  }),
                  Se.ajaxSetup({
                    accepts: {
                      script:
                        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: { script: /\b(?:java|ecma)script\b/ },
                    converters: {
                      "text script": function(e) {
                        return Se.globalEval(e), e;
                      }
                    }
                  }),
                  Se.ajaxPrefilter("script", function(e) {
                    void 0 === e.cache && (e.cache = !1),
                      e.crossDomain && (e.type = "GET");
                  }),
                  Se.ajaxTransport("script", function(e) {
                    if (e.crossDomain || e.scriptAttrs) {
                      var t, r;
                      return {
                        send: function(o, n) {
                          (t = Se("<script>")
                            .attr(e.scriptAttrs || {})
                            .prop({ charset: e.scriptCharset, src: e.url })
                            .on(
                              "load error",
                              (r = function(e) {
                                t.remove(),
                                  (r = null),
                                  e &&
                                    n("error" === e.type ? 404 : 200, e.type);
                              })
                            )),
                            pe.head.appendChild(t[0]);
                        },
                        abort: function() {
                          r && r();
                        }
                      };
                    }
                  });
                var or = [],
                  nr = /(=)\?(?=&|$)|\?\?/;
                Se.ajaxSetup({
                  jsonp: "callback",
                  jsonpCallback: function() {
                    var e = or.pop() || Se.expando + "_" + Ht++;
                    return (this[e] = !0), e;
                  }
                }),
                  Se.ajaxPrefilter("json jsonp", function(e, t, o) {
                    var n,
                      a,
                      i,
                      s =
                        !1 !== e.jsonp &&
                        (nr.test(e.url)
                          ? "url"
                          : "string" == typeof e.data &&
                            0 ===
                              (e.contentType || "").indexOf(
                                "application/x-www-form-urlencoded"
                              ) &&
                            nr.test(e.data) &&
                            "data");
                    if (s || "jsonp" === e.dataTypes[0])
                      return (
                        (n = e.jsonpCallback = Te(e.jsonpCallback)
                          ? e.jsonpCallback()
                          : e.jsonpCallback),
                        s
                          ? (e[s] = e[s].replace(nr, "$1" + n))
                          : !1 !== e.jsonp &&
                            (e.url +=
                              (qt.test(e.url) ? "&" : "?") + e.jsonp + "=" + n),
                        (e.converters["script json"] = function() {
                          return i || Se.error(n + " was not called"), i[0];
                        }),
                        (e.dataTypes[0] = "json"),
                        (a = r[n]),
                        (r[n] = function() {
                          i = arguments;
                        }),
                        o.always(function() {
                          void 0 === a ? Se(r).removeProp(n) : (r[n] = a),
                            e[n] &&
                              ((e.jsonpCallback = t.jsonpCallback), or.push(n)),
                            i && Te(a) && a(i[0]),
                            (i = a = void 0);
                        }),
                        "script"
                      );
                  }),
                  (Ae.createHTMLDocument = (function() {
                    var e = pe.implementation.createHTMLDocument("").body;
                    return (
                      (e.innerHTML = "<form></form><form></form>"),
                      2 === e.childNodes.length
                    );
                  })()),
                  (Se.parseHTML = function(e, t, r) {
                    if ("string" != typeof e) return [];
                    "boolean" == typeof t && ((r = t), (t = !1));
                    var o, n, a;
                    return (
                      t ||
                        (Ae.createHTMLDocument
                          ? ((t = pe.implementation.createHTMLDocument("")),
                            (o = t.createElement("base")),
                            (o.href = pe.location.href),
                            t.head.appendChild(o))
                          : (t = pe)),
                      (n = De.exec(e)),
                      (a = !r && []),
                      n
                        ? [t.createElement(n[1])]
                        : ((n = S([e], t, a)),
                          a && a.length && Se(a).remove(),
                          Se.merge([], n.childNodes))
                    );
                  }),
                  (Se.fn.load = function(e, t, r) {
                    var o,
                      n,
                      a,
                      i = this,
                      s = e.indexOf(" ");
                    return (
                      s > -1 && ((o = re(e.slice(s))), (e = e.slice(0, s))),
                      Te(t)
                        ? ((r = t), (t = void 0))
                        : t && "object" == typeof t && (n = "POST"),
                      i.length > 0 &&
                        Se.ajax({
                          url: e,
                          type: n || "GET",
                          dataType: "html",
                          data: t
                        })
                          .done(function(e) {
                            (a = arguments),
                              i.html(
                                o
                                  ? Se("<div>")
                                      .append(Se.parseHTML(e))
                                      .find(o)
                                  : e
                              );
                          })
                          .always(
                            r &&
                              function(e, t) {
                                i.each(function() {
                                  r.apply(this, a || [e.responseText, t, e]);
                                });
                              }
                          ),
                      this
                    );
                  }),
                  Se.each(
                    [
                      "ajaxStart",
                      "ajaxStop",
                      "ajaxComplete",
                      "ajaxError",
                      "ajaxSuccess",
                      "ajaxSend"
                    ],
                    function(e, t) {
                      Se.fn[t] = function(e) {
                        return this.on(t, e);
                      };
                    }
                  ),
                  (Se.expr.pseudos.animated = function(e) {
                    return Se.grep(Se.timers, function(t) {
                      return e === t.elem;
                    }).length;
                  }),
                  (Se.offset = {
                    setOffset: function(e, t, r) {
                      var o,
                        n,
                        a,
                        i,
                        s,
                        l,
                        u,
                        c = Se.css(e, "position"),
                        d = Se(e),
                        p = {};
                      "static" === c && (e.style.position = "relative"),
                        (s = d.offset()),
                        (a = Se.css(e, "top")),
                        (l = Se.css(e, "left")),
                        (u =
                          ("absolute" === c || "fixed" === c) &&
                          (a + l).indexOf("auto") > -1),
                        u
                          ? ((o = d.position()), (i = o.top), (n = o.left))
                          : ((i = parseFloat(a) || 0),
                            (n = parseFloat(l) || 0)),
                        Te(t) && (t = t.call(e, r, Se.extend({}, s))),
                        null != t.top && (p.top = t.top - s.top + i),
                        null != t.left && (p.left = t.left - s.left + n),
                        "using" in t ? t.using.call(e, p) : d.css(p);
                    }
                  }),
                  Se.fn.extend({
                    offset: function(e) {
                      if (arguments.length)
                        return void 0 === e
                          ? this
                          : this.each(function(t) {
                              Se.offset.setOffset(this, e, t);
                            });
                      var t,
                        r,
                        o = this[0];
                      if (o)
                        return o.getClientRects().length
                          ? ((t = o.getBoundingClientRect()),
                            (r = o.ownerDocument.defaultView),
                            {
                              top: t.top + r.pageYOffset,
                              left: t.left + r.pageXOffset
                            })
                          : { top: 0, left: 0 };
                    },
                    position: function() {
                      if (this[0]) {
                        var e,
                          t,
                          r,
                          o = this[0],
                          n = { top: 0, left: 0 };
                        if ("fixed" === Se.css(o, "position"))
                          t = o.getBoundingClientRect();
                        else {
                          for (
                            t = this.offset(),
                              r = o.ownerDocument,
                              e = o.offsetParent || r.documentElement;
                            e &&
                            (e === r.body || e === r.documentElement) &&
                            "static" === Se.css(e, "position");

                          )
                            e = e.parentNode;
                          e &&
                            e !== o &&
                            1 === e.nodeType &&
                            ((n = Se(e).offset()),
                            (n.top += Se.css(e, "borderTopWidth", !0)),
                            (n.left += Se.css(e, "borderLeftWidth", !0)));
                        }
                        return {
                          top: t.top - n.top - Se.css(o, "marginTop", !0),
                          left: t.left - n.left - Se.css(o, "marginLeft", !0)
                        };
                      }
                    },
                    offsetParent: function() {
                      return this.map(function() {
                        for (
                          var e = this.offsetParent;
                          e && "static" === Se.css(e, "position");

                        )
                          e = e.offsetParent;
                        return e || Qe;
                      });
                    }
                  }),
                  Se.each(
                    { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
                    function(e, t) {
                      var r = "pageYOffset" === t;
                      Se.fn[e] = function(o) {
                        return We(
                          this,
                          function(e, o, n) {
                            var a;
                            if (
                              (Ce(e)
                                ? (a = e)
                                : 9 === e.nodeType && (a = e.defaultView),
                              void 0 === n)
                            )
                              return a ? a[t] : e[o];
                            a
                              ? a.scrollTo(
                                  r ? a.pageXOffset : n,
                                  r ? n : a.pageYOffset
                                )
                              : (e[o] = n);
                          },
                          e,
                          o,
                          arguments.length
                        );
                      };
                    }
                  ),
                  Se.each(["top", "left"], function(e, t) {
                    Se.cssHooks[t] = B(Ae.pixelPosition, function(e, r) {
                      if (r)
                        return (
                          (r = W(e, t)),
                          mt.test(r) ? Se(e).position()[t] + "px" : r
                        );
                    });
                  }),
                  Se.each({ Height: "height", Width: "width" }, function(e, t) {
                    Se.each(
                      { padding: "inner" + e, content: t, "": "outer" + e },
                      function(r, o) {
                        Se.fn[o] = function(n, a) {
                          var i =
                              arguments.length && (r || "boolean" != typeof n),
                            s =
                              r || (!0 === n || !0 === a ? "margin" : "border");
                          return We(
                            this,
                            function(t, r, n) {
                              var a;
                              return Ce(t)
                                ? 0 === o.indexOf("outer")
                                  ? t["inner" + e]
                                  : t.document.documentElement["client" + e]
                                : 9 === t.nodeType
                                ? ((a = t.documentElement),
                                  Math.max(
                                    t.body["scroll" + e],
                                    a["scroll" + e],
                                    t.body["offset" + e],
                                    a["offset" + e],
                                    a["client" + e]
                                  ))
                                : void 0 === n
                                ? Se.css(t, r, s)
                                : Se.style(t, r, n, s);
                            },
                            t,
                            i ? n : void 0,
                            i
                          );
                        };
                      }
                    );
                  }),
                  Se.each(
                    "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                      " "
                    ),
                    function(e, t) {
                      Se.fn[t] = function(e, r) {
                        return arguments.length > 0
                          ? this.on(t, null, e, r)
                          : this.trigger(t);
                      };
                    }
                  ),
                  Se.fn.extend({
                    hover: function(e, t) {
                      return this.mouseenter(e).mouseleave(t || e);
                    }
                  }),
                  Se.fn.extend({
                    bind: function(e, t, r) {
                      return this.on(e, null, t, r);
                    },
                    unbind: function(e, t) {
                      return this.off(e, null, t);
                    },
                    delegate: function(e, t, r, o) {
                      return this.on(t, e, r, o);
                    },
                    undelegate: function(e, t, r) {
                      return 1 === arguments.length
                        ? this.off(e, "**")
                        : this.off(t, e || "**", r);
                    }
                  }),
                  (Se.proxy = function(e, t) {
                    var r, o, n;
                    if (
                      ("string" == typeof t && ((r = e[t]), (t = e), (e = r)),
                      Te(e))
                    )
                      return (
                        (o = ge.call(arguments, 2)),
                        (n = function() {
                          return e.apply(
                            t || this,
                            o.concat(ge.call(arguments))
                          );
                        }),
                        (n.guid = e.guid = e.guid || Se.guid++),
                        n
                      );
                  }),
                  (Se.holdReady = function(e) {
                    e ? Se.readyWait++ : Se.ready(!0);
                  }),
                  (Se.isArray = Array.isArray),
                  (Se.parseJSON = JSON.parse),
                  (Se.nodeName = u),
                  (Se.isFunction = Te),
                  (Se.isWindow = Ce),
                  (Se.camelCase = x),
                  (Se.type = s),
                  (Se.now = Date.now),
                  (Se.isNumeric = function(e) {
                    var t = Se.type(e);
                    return (
                      ("number" === t || "string" === t) &&
                      !isNaN(e - parseFloat(e))
                    );
                  }),
                  (o = []),
                  void 0 !==
                    (n = function() {
                      return Se;
                    }.apply(t, o)) && (e.exports = n);
                var ar = r.jQuery,
                  ir = r.$;
                return (
                  (Se.noConflict = function(e) {
                    return (
                      r.$ === Se && (r.$ = ir),
                      e && r.jQuery === Se && (r.jQuery = ar),
                      Se
                    );
                  }),
                  a || (r.jQuery = r.$ = Se),
                  Se
                );
              });
            },
            function(e, t, r) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.hasTrack = t.hasAccessibileText = t.title = t.doctype = t.getAttribute = t.hasAttribute = t.getElements = t.getElement = void 0);
              var o = r(3),
                n = (function(e) {
                  return e && e.__esModule ? e : { default: e };
                })(o),
                a = function(e) {
                  return (0, n.default)(e)[0];
                },
                i = function(e) {
                  return (0, n.default)(e);
                },
                s = function(e, t) {
                  return !!(0, n.default)(e).attr(t);
                },
                l = function(e, t) {
                  return (0, n.default)(e).attr(t);
                },
                u = document.doctype,
                c = document.title,
                d = function(e) {
                  return s(e, "aria-label") || s(e, "aria-labelledby");
                },
                p = function(e) {
                  return 0 === e.textTracks.length;
                };
              (t.getElement = a),
                (t.getElements = i),
                (t.hasAttribute = s),
                (t.getAttribute = l),
                (t.doctype = u),
                (t.title = c),
                (t.hasAccessibileText = d),
                (t.hasTrack = p);
            },
            function(e, t, r) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var o = r(12),
                n = r(11),
                a = r(14),
                i = r(9),
                s = {
                  htmlError: [],
                  contrastError: null,
                  interactionError: [],
                  ariaError: []
                },
                l = {
                  htmlWarning: [],
                  interactionWarning: [],
                  ariaWarning: []
                },
                u = function() {
                  s.htmlError.push(o.hasDocumentType()),
                    s.htmlError.push(o.hasDocumentTitle()),
                    s.htmlError.push(o.hasDocumentLanguage()),
                    s.htmlError.push(o.hasDocumentMetaCharset()),
                    s.htmlError.push(o.hasDocumentScalable()),
                    s.htmlError.push(o.hasHeadingOnce()),
                    s.htmlError.push(o.hasImagesAlt()),
                    l.htmlWarning.push(o.hasLinksText()),
                    s.htmlError.push(o.hasLinksHref()),
                    s.htmlError.push(o.hasSVGRole()),
                    s.htmlError.push(o.hasIframeTitle()),
                    s.htmlError.push(o.hasVideoTrack()),
                    s.htmlError.push(o.hasAudioTrack()),
                    s.htmlError.push(o.hasDuplicateIds()),
                    s.htmlError.push(o.replaceWithStrongTag()),
                    (s.htmlError = s.htmlError.filter(function(e) {
                      return e.length > 0;
                    })),
                    (l.htmlWarning = l.htmlWarning.filter(function(e) {
                      return e.length > 0;
                    }));
                },
                c = function() {
                  s.contrastError = n.ContrastPlugin();
                },
                d = function() {
                  s.interactionError.push(a.hasSingleKeyShortcut()),
                    l.interactionWarning.push(a.isAnimated()),
                    l.interactionWarning.push(a.isTouchable()),
                    (s.interactionError = s.interactionError.filter(function(
                      e
                    ) {
                      return e.length > 0;
                    })),
                    (l.interactionWarning = l.interactionWarning.filter(
                      function(e) {
                        return e.length > 0;
                      }
                    ));
                },
                p = function() {
                  s.ariaError.push(i.inputsHaveAutoComplete()),
                    s.ariaError.push(i.hasButtonsText()),
                    s.ariaError.push(i.hasForLabel()),
                    s.ariaError.push(i.hasFormsLabel()),
                    l.ariaWarning.push(i.hasLinksTarget()),
                    l.ariaWarning.push(i.sectionsHaveAriaTag()),
                    (s.ariaError = s.ariaError.filter(function(e) {
                      return e.length > 0;
                    })),
                    (l.ariaWarning = l.ariaWarning.filter(function(e) {
                      return e.length > 0;
                    }));
                };
              (t.htmlCheck = u),
                (t.colorContrast = c),
                (t.interactions = d),
                (t.ariaRelated = p),
                (t.errors = s),
                (t.warnings = l);
            },
            function(module, exports, __webpack_require__) {
              var __WEBPACK_AMD_DEFINE_FACTORY__,
                __WEBPACK_AMD_DEFINE_ARRAY__,
                __WEBPACK_AMD_DEFINE_RESULT__,
                fn = function() {
                  function escapeId(e) {
                    return e.replace(/[^a-zA-Z0-9_-]/g, function(e) {
                      return "\\" + e;
                    });
                  }
                  var COMPILED = !0,
                    goog = goog || {};
                  (goog.global = this),
                    (goog.isDef = function(e) {
                      return void 0 !== e;
                    }),
                    (goog.exportPath_ = function(e, t, r) {
                      (e = e.split(".")),
                        (r = r || goog.global),
                        e[0] in r ||
                          !r.execScript ||
                          r.execScript("var " + e[0]);
                      for (var o; e.length && (o = e.shift()); )
                        !e.length && goog.isDef(t)
                          ? (r[o] = t)
                          : (r = r[o] ? r[o] : (r[o] = {}));
                    }),
                    (goog.define = function(e, t) {
                      var r = t;
                      COMPILED ||
                        (goog.global.CLOSURE_UNCOMPILED_DEFINES &&
                        Object.prototype.hasOwnProperty.call(
                          goog.global.CLOSURE_UNCOMPILED_DEFINES,
                          e
                        )
                          ? (r = goog.global.CLOSURE_UNCOMPILED_DEFINES[e])
                          : goog.global.CLOSURE_DEFINES &&
                            Object.prototype.hasOwnProperty.call(
                              goog.global.CLOSURE_DEFINES,
                              e
                            ) &&
                            (r = goog.global.CLOSURE_DEFINES[e])),
                        goog.exportPath_(e, r);
                    }),
                    (goog.DEBUG = !0),
                    (goog.LOCALE = "en"),
                    (goog.TRUSTED_SITE = !0),
                    (goog.STRICT_MODE_COMPATIBLE = !1),
                    (goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG),
                    (goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1),
                    (goog.provide = function(e) {
                      if (goog.isInModuleLoader_())
                        throw Error(
                          "goog.provide can not be used within a goog.module."
                        );
                      if (!COMPILED && goog.isProvided_(e))
                        throw Error('Namespace "' + e + '" already declared.');
                      goog.constructNamespace_(e);
                    }),
                    (goog.constructNamespace_ = function(e, t) {
                      if (!COMPILED) {
                        delete goog.implicitNamespaces_[e];
                        for (
                          var r = e;
                          (r = r.substring(0, r.lastIndexOf("."))) &&
                          !goog.getObjectByName(r);

                        )
                          goog.implicitNamespaces_[r] = !0;
                      }
                      goog.exportPath_(e, t);
                    }),
                    (goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/),
                    (goog.module = function(e) {
                      if (
                        !goog.isString(e) ||
                        !e ||
                        -1 == e.search(goog.VALID_MODULE_RE_)
                      )
                        throw Error("Invalid module identifier");
                      if (!goog.isInModuleLoader_())
                        throw Error(
                          "Module " +
                            e +
                            " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide."
                        );
                      if (goog.moduleLoaderState_.moduleName)
                        throw Error(
                          "goog.module may only be called once per module."
                        );
                      if (
                        ((goog.moduleLoaderState_.moduleName = e), !COMPILED)
                      ) {
                        if (goog.isProvided_(e))
                          throw Error(
                            'Namespace "' + e + '" already declared.'
                          );
                        delete goog.implicitNamespaces_[e];
                      }
                    }),
                    (goog.module.get = function(e) {
                      return goog.module.getInternal_(e);
                    }),
                    (goog.module.getInternal_ = function(e) {
                      if (!COMPILED) {
                        if (e in goog.loadedModules_)
                          return goog.loadedModules_[e];
                        if (!goog.implicitNamespaces_[e])
                          return (
                            (e = goog.getObjectByName(e)), null != e ? e : null
                          );
                      }
                      return null;
                    }),
                    (goog.moduleLoaderState_ = null),
                    (goog.isInModuleLoader_ = function() {
                      return null != goog.moduleLoaderState_;
                    }),
                    (goog.module.declareLegacyNamespace = function() {
                      if (!COMPILED && !goog.isInModuleLoader_())
                        throw Error(
                          "goog.module.declareLegacyNamespace must be called from within a goog.module"
                        );
                      if (!COMPILED && !goog.moduleLoaderState_.moduleName)
                        throw Error(
                          "goog.module must be called prior to goog.module.declareLegacyNamespace."
                        );
                      goog.moduleLoaderState_.declareLegacyNamespace = !0;
                    }),
                    (goog.setTestOnly = function(e) {
                      if (goog.DISALLOW_TEST_ONLY_CODE)
                        throw ((e = e || ""),
                        Error(
                          "Importing test-only code into non-debug environment" +
                            (e ? ": " + e : ".")
                        ));
                    }),
                    (goog.forwardDeclare = function(e) {}),
                    COMPILED ||
                      ((goog.isProvided_ = function(e) {
                        return (
                          e in goog.loadedModules_ ||
                          (!goog.implicitNamespaces_[e] &&
                            goog.isDefAndNotNull(goog.getObjectByName(e)))
                        );
                      }),
                      (goog.implicitNamespaces_ = { "goog.module": !0 })),
                    (goog.getObjectByName = function(e, t) {
                      for (
                        var r, o = e.split("."), n = t || goog.global;
                        (r = o.shift());

                      ) {
                        if (!goog.isDefAndNotNull(n[r])) return null;
                        n = n[r];
                      }
                      return n;
                    }),
                    (goog.globalize = function(e, t) {
                      var r,
                        o = t || goog.global;
                      for (r in e) o[r] = e[r];
                    }),
                    (goog.addDependency = function(e, t, r, o) {
                      if (goog.DEPENDENCIES_ENABLED) {
                        var n;
                        e = e.replace(/\\/g, "/");
                        var a = goog.dependencies_;
                        (o && "boolean" != typeof o) ||
                          (o = o ? { module: "goog" } : {});
                        for (var i = 0; (n = t[i]); i++)
                          (a.nameToPath[n] = e), (a.loadFlags[e] = o);
                        for (o = 0; (t = r[o]); o++)
                          e in a.requires || (a.requires[e] = {}),
                            (a.requires[e][t] = !0);
                      }
                    }),
                    (goog.ENABLE_DEBUG_LOADER = !0),
                    (goog.logToConsole_ = function(e) {
                      goog.global.console && goog.global.console.error(e);
                    }),
                    (goog.require = function(e) {
                      if (!COMPILED) {
                        if (
                          (goog.ENABLE_DEBUG_LOADER &&
                            goog.IS_OLD_IE_ &&
                            goog.maybeProcessDeferredDep_(e),
                          goog.isProvided_(e))
                        ) {
                          if (goog.isInModuleLoader_())
                            return goog.module.getInternal_(e);
                        } else if (goog.ENABLE_DEBUG_LOADER) {
                          var t = goog.getPathFromDeps_(e);
                          if (!t)
                            throw ((e = "goog.require could not find: " + e),
                            goog.logToConsole_(e),
                            Error(e));
                          goog.writeScripts_(t);
                        }
                        return null;
                      }
                    }),
                    (goog.basePath = ""),
                    (goog.nullFunction = function() {}),
                    (goog.abstractMethod = function() {
                      throw Error("unimplemented abstract method");
                    }),
                    (goog.addSingletonGetter = function(e) {
                      e.getInstance = function() {
                        return e.instance_
                          ? e.instance_
                          : (goog.DEBUG &&
                              (goog.instantiatedSingletons_[
                                goog.instantiatedSingletons_.length
                              ] = e),
                            (e.instance_ = new e()));
                      };
                    }),
                    (goog.instantiatedSingletons_ = []),
                    (goog.LOAD_MODULE_USING_EVAL = !0),
                    (goog.SEAL_MODULE_EXPORTS = goog.DEBUG),
                    (goog.loadedModules_ = {}),
                    (goog.DEPENDENCIES_ENABLED =
                      !COMPILED && goog.ENABLE_DEBUG_LOADER),
                    (goog.TRANSPILE = "detect"),
                    (goog.TRANSPILER = "transpile.js"),
                    goog.DEPENDENCIES_ENABLED &&
                      ((goog.dependencies_ = {
                        loadFlags: {},
                        nameToPath: {},
                        requires: {},
                        visited: {},
                        written: {},
                        deferred: {}
                      }),
                      (goog.inHtmlDocument_ = function() {
                        var e = goog.global.document;
                        return null != e && "write" in e;
                      }),
                      (goog.findBasePath_ = function() {
                        if (goog.isDef(goog.global.CLOSURE_BASE_PATH))
                          goog.basePath = goog.global.CLOSURE_BASE_PATH;
                        else if (goog.inHtmlDocument_())
                          for (
                            var e = goog.global.document.getElementsByTagName(
                                "SCRIPT"
                              ),
                              t = e.length - 1;
                            0 <= t;
                            --t
                          ) {
                            var r = e[t].src,
                              o = r.lastIndexOf("?"),
                              o = -1 == o ? r.length : o;
                            if ("base.js" == r.substr(o - 7, 7)) {
                              goog.basePath = r.substr(0, o - 7);
                              break;
                            }
                          }
                      }),
                      (goog.importScript_ = function(e, t) {
                        (
                          goog.global.CLOSURE_IMPORT_SCRIPT ||
                          goog.writeScriptTag_
                        )(e, t) && (goog.dependencies_.written[e] = !0);
                      }),
                      (goog.IS_OLD_IE_ = !(
                        goog.global.atob ||
                        !goog.global.document ||
                        !goog.global.document.all
                      )),
                      (goog.importProcessedScript_ = function(e, t, r) {
                        goog.importScript_(
                          "",
                          'goog.retrieveAndExec_("' +
                            e +
                            '", ' +
                            t +
                            ", " +
                            r +
                            ");"
                        );
                      }),
                      (goog.queuedModules_ = []),
                      (goog.wrapModule_ = function(e, t) {
                        return goog.LOAD_MODULE_USING_EVAL &&
                          goog.isDef(goog.global.JSON)
                          ? "goog.loadModule(" +
                              goog.global.JSON.stringify(
                                t + "\n//# sourceURL=" + e + "\n"
                              ) +
                              ");"
                          : 'goog.loadModule(function(exports) {"use strict";' +
                              t +
                              "\n;return exports});\n//# sourceURL=" +
                              e +
                              "\n";
                      }),
                      (goog.loadQueuedModules_ = function() {
                        var e = goog.queuedModules_.length;
                        if (0 < e) {
                          var t = goog.queuedModules_;
                          goog.queuedModules_ = [];
                          for (var r = 0; r < e; r++)
                            goog.maybeProcessDeferredPath_(t[r]);
                        }
                      }),
                      (goog.maybeProcessDeferredDep_ = function(e) {
                        goog.isDeferredModule_(e) &&
                          goog.allDepsAreAvailable_(e) &&
                          ((e = goog.getPathFromDeps_(e)),
                          goog.maybeProcessDeferredPath_(goog.basePath + e));
                      }),
                      (goog.isDeferredModule_ = function(e) {
                        var t =
                            ((e = goog.getPathFromDeps_(e)) &&
                              goog.dependencies_.loadFlags[e]) ||
                            {},
                          r = t.lang || "es3";
                        return (
                          !(
                            !e ||
                            ("goog" != t.module && !goog.needsTranspile_(r))
                          ) && goog.basePath + e in goog.dependencies_.deferred
                        );
                      }),
                      (goog.allDepsAreAvailable_ = function(e) {
                        if (
                          (e = goog.getPathFromDeps_(e)) &&
                          e in goog.dependencies_.requires
                        )
                          for (var t in goog.dependencies_.requires[e])
                            if (
                              !goog.isProvided_(t) &&
                              !goog.isDeferredModule_(t)
                            )
                              return !1;
                        return !0;
                      }),
                      (goog.maybeProcessDeferredPath_ = function(e) {
                        if (e in goog.dependencies_.deferred) {
                          var t = goog.dependencies_.deferred[e];
                          delete goog.dependencies_.deferred[e],
                            goog.globalEval(t);
                        }
                      }),
                      (goog.loadModuleFromUrl = function(e) {
                        goog.retrieveAndExec_(e, !0, !1);
                      }),
                      (goog.writeScriptSrcNode_ = function(e) {
                        goog.global.document.write(
                          '<script type="text/javascript" src="' +
                            e +
                            '"></script>'
                        );
                      }),
                      (goog.appendScriptSrcNode_ = function(e) {
                        var t = goog.global.document,
                          r = t.createElement("script");
                        (r.type = "text/javascript"),
                          (r.src = e),
                          (r.defer = !1),
                          (r.async = !1),
                          t.head.appendChild(r);
                      }),
                      (goog.writeScriptTag_ = function(e, t) {
                        if (goog.inHtmlDocument_()) {
                          var r = goog.global.document;
                          if (
                            !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING &&
                            "complete" == r.readyState
                          ) {
                            if (/\bdeps.js$/.test(e)) return !1;
                            throw Error(
                              'Cannot write "' + e + '" after document load'
                            );
                          }
                          if (void 0 === t)
                            if (goog.IS_OLD_IE_) {
                              var o =
                                " onreadystatechange='goog.onScriptLoad_(this, " +
                                ++goog.lastNonModuleScriptIndex_ +
                                ")' ";
                              r.write(
                                '<script type="text/javascript" src="' +
                                  e +
                                  '"' +
                                  o +
                                  "></script>"
                              );
                            } else
                              goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING
                                ? goog.appendScriptSrcNode_(e)
                                : goog.writeScriptSrcNode_(e);
                          else
                            r.write(
                              '<script type="text/javascript">' +
                                goog.protectScriptTag_(t) +
                                "</script>"
                            );
                          return !0;
                        }
                        return !1;
                      }),
                      (goog.protectScriptTag_ = function(e) {
                        return e.replace(/<\/(SCRIPT)/gi, "\\x3c\\$1");
                      }),
                      (goog.needsTranspile_ = function(e) {
                        if ("always" == goog.TRANSPILE) return !0;
                        if ("never" == goog.TRANSPILE) return !1;
                        if (
                          (goog.requiresTranspilation_ ||
                            (goog.requiresTranspilation_ = goog.createRequiresTranspilation_()),
                          e in goog.requiresTranspilation_)
                        )
                          return goog.requiresTranspilation_[e];
                        throw Error("Unknown language mode: " + e);
                      }),
                      (goog.requiresTranspilation_ = null),
                      (goog.lastNonModuleScriptIndex_ = 0),
                      (goog.onScriptLoad_ = function(e, t) {
                        return (
                          "complete" == e.readyState &&
                            goog.lastNonModuleScriptIndex_ == t &&
                            goog.loadQueuedModules_(),
                          !0
                        );
                      }),
                      (goog.writeScripts_ = function(e) {
                        function t(e) {
                          if (!(e in n.written || e in n.visited)) {
                            if (((n.visited[e] = !0), e in n.requires))
                              for (var a in n.requires[e])
                                if (!goog.isProvided_(a)) {
                                  if (!(a in n.nameToPath))
                                    throw Error(
                                      "Undefined nameToPath for " + a
                                    );
                                  t(n.nameToPath[a]);
                                }
                            e in o || ((o[e] = !0), r.push(e));
                          }
                        }
                        var r = [],
                          o = {},
                          n = goog.dependencies_;
                        for (t(e), e = 0; e < r.length; e++) {
                          var a = r[e];
                          goog.dependencies_.written[a] = !0;
                        }
                        var i = goog.moduleLoaderState_;
                        for (
                          goog.moduleLoaderState_ = null, e = 0;
                          e < r.length;
                          e++
                        ) {
                          if (!(a = r[e]))
                            throw ((goog.moduleLoaderState_ = i),
                            Error("Undefined script input"));
                          var s = n.loadFlags[a] || {},
                            l = goog.needsTranspile_(s.lang || "es3");
                          "goog" == s.module || l
                            ? goog.importProcessedScript_(
                                goog.basePath + a,
                                "goog" == s.module,
                                l
                              )
                            : goog.importScript_(goog.basePath + a);
                        }
                        goog.moduleLoaderState_ = i;
                      }),
                      (goog.getPathFromDeps_ = function(e) {
                        return e in goog.dependencies_.nameToPath
                          ? goog.dependencies_.nameToPath[e]
                          : null;
                      }),
                      goog.findBasePath_(),
                      goog.global.CLOSURE_NO_DEPS ||
                        goog.importScript_(goog.basePath + "deps.js")),
                    (goog.loadModule = function(e) {
                      var t = goog.moduleLoaderState_;
                      try {
                        goog.moduleLoaderState_ = {
                          moduleName: void 0,
                          declareLegacyNamespace: !1
                        };
                        var r;
                        if (goog.isFunction(e)) r = e.call(void 0, {});
                        else {
                          if (!goog.isString(e))
                            throw Error("Invalid module definition");
                          r = goog.loadModuleFromSource_.call(void 0, e);
                        }
                        var o = goog.moduleLoaderState_.moduleName;
                        if (!goog.isString(o) || !o)
                          throw Error('Invalid module name "' + o + '"');
                        goog.moduleLoaderState_.declareLegacyNamespace
                          ? goog.constructNamespace_(o, r)
                          : goog.SEAL_MODULE_EXPORTS &&
                            Object.seal &&
                            goog.isObject(r) &&
                            Object.seal(r),
                          (goog.loadedModules_[o] = r);
                      } finally {
                        goog.moduleLoaderState_ = t;
                      }
                    }),
                    (goog.loadModuleFromSource_ = function(a) {
                      return eval(a), {};
                    }),
                    (goog.normalizePath_ = function(e) {
                      e = e.split("/");
                      for (var t = 0; t < e.length; )
                        "." == e[t]
                          ? e.splice(t, 1)
                          : t && ".." == e[t] && e[t - 1] && ".." != e[t - 1]
                          ? e.splice(--t, 2)
                          : t++;
                      return e.join("/");
                    }),
                    (goog.loadFileSync_ = function(e) {
                      if (goog.global.CLOSURE_LOAD_FILE_SYNC)
                        return goog.global.CLOSURE_LOAD_FILE_SYNC(e);
                      try {
                        var t = new goog.global.XMLHttpRequest();
                        return (
                          t.open("get", e, !1),
                          t.send(),
                          0 == t.status || 200 == t.status
                            ? t.responseText
                            : null
                        );
                      } catch (e) {
                        return null;
                      }
                    }),
                    (goog.retrieveAndExec_ = function(e, t, r) {
                      if (!COMPILED) {
                        var o = e;
                        e = goog.normalizePath_(e);
                        var n =
                            goog.global.CLOSURE_IMPORT_SCRIPT ||
                            goog.writeScriptTag_,
                          a = goog.loadFileSync_(e);
                        if (null == a)
                          throw Error('Load of "' + e + '" failed');
                        r && (a = goog.transpile_.call(goog.global, a, e)),
                          (a = t
                            ? goog.wrapModule_(e, a)
                            : a + "\n//# sourceURL=" + e),
                          goog.IS_OLD_IE_
                            ? ((goog.dependencies_.deferred[o] = a),
                              goog.queuedModules_.push(o))
                            : n(e, a);
                      }
                    }),
                    (goog.transpile_ = function(a, b) {
                      var c = goog.global.$jscomp;
                      c || (goog.global.$jscomp = c = {});
                      var d = c.transpile;
                      if (!d) {
                        var e = goog.basePath + goog.TRANSPILER,
                          f = goog.loadFileSync_(e);
                        if (f) {
                          if (
                            (eval(f + "\n//# sourceURL=" + e),
                            goog.global.$gwtExport &&
                              goog.global.$gwtExport.$jscomp &&
                              !goog.global.$gwtExport.$jscomp.transpile)
                          )
                            throw Error(
                              'The transpiler did not properly export the "transpile" method. $gwtExport: ' +
                                JSON.stringify(goog.global.$gwtExport)
                            );
                          (goog.global.$jscomp.transpile =
                            goog.global.$gwtExport.$jscomp.transpile),
                            (c = goog.global.$jscomp),
                            (d = c.transpile);
                        }
                      }
                      return (
                        d ||
                          (d = c.transpile = function(e, t) {
                            return (
                              goog.logToConsole_(
                                t +
                                  " requires transpilation but no transpiler was found."
                              ),
                              e
                            );
                          }),
                        d(a, b)
                      );
                    }),
                    (goog.typeOf = function(e) {
                      var t = typeof e;
                      if ("object" == t) {
                        if (!e) return "null";
                        if (e instanceof Array) return "array";
                        if (e instanceof Object) return t;
                        var r = Object.prototype.toString.call(e);
                        if ("[object Window]" == r) return "object";
                        if (
                          "[object Array]" == r ||
                          ("number" == typeof e.length &&
                            void 0 !== e.splice &&
                            void 0 !== e.propertyIsEnumerable &&
                            !e.propertyIsEnumerable("splice"))
                        )
                          return "array";
                        if (
                          "[object Function]" == r ||
                          (void 0 !== e.call &&
                            void 0 !== e.propertyIsEnumerable &&
                            !e.propertyIsEnumerable("call"))
                        )
                          return "function";
                      } else if ("function" == t && void 0 === e.call)
                        return "object";
                      return t;
                    }),
                    (goog.isNull = function(e) {
                      return null === e;
                    }),
                    (goog.isDefAndNotNull = function(e) {
                      return null != e;
                    }),
                    (goog.isArray = function(e) {
                      return "array" == goog.typeOf(e);
                    }),
                    (goog.isArrayLike = function(e) {
                      var t = goog.typeOf(e);
                      return (
                        "array" == t ||
                        ("object" == t && "number" == typeof e.length)
                      );
                    }),
                    (goog.isDateLike = function(e) {
                      return (
                        goog.isObject(e) && "function" == typeof e.getFullYear
                      );
                    }),
                    (goog.isString = function(e) {
                      return "string" == typeof e;
                    }),
                    (goog.isBoolean = function(e) {
                      return "boolean" == typeof e;
                    }),
                    (goog.isNumber = function(e) {
                      return "number" == typeof e;
                    }),
                    (goog.isFunction = function(e) {
                      return "function" == goog.typeOf(e);
                    }),
                    (goog.isObject = function(e) {
                      var t = typeof e;
                      return ("object" == t && null != e) || "function" == t;
                    }),
                    (goog.getUid = function(e) {
                      return (
                        e[goog.UID_PROPERTY_] ||
                        (e[goog.UID_PROPERTY_] = ++goog.uidCounter_)
                      );
                    }),
                    (goog.hasUid = function(e) {
                      return !!e[goog.UID_PROPERTY_];
                    }),
                    (goog.removeUid = function(e) {
                      null !== e &&
                        "removeAttribute" in e &&
                        e.removeAttribute(goog.UID_PROPERTY_);
                      try {
                        delete e[goog.UID_PROPERTY_];
                      } catch (e) {}
                    }),
                    (goog.UID_PROPERTY_ =
                      "closure_uid_" + ((1e9 * Math.random()) >>> 0)),
                    (goog.uidCounter_ = 0),
                    (goog.getHashCode = goog.getUid),
                    (goog.removeHashCode = goog.removeUid),
                    (goog.cloneObject = function(e) {
                      var t = goog.typeOf(e);
                      if ("object" == t || "array" == t) {
                        if (e.clone) return e.clone();
                        var r,
                          t = "array" == t ? [] : {};
                        for (r in e) t[r] = goog.cloneObject(e[r]);
                        return t;
                      }
                      return e;
                    }),
                    (goog.bindNative_ = function(e, t, r) {
                      return e.call.apply(e.bind, arguments);
                    }),
                    (goog.bindJs_ = function(e, t, r) {
                      if (!e) throw Error();
                      if (2 < arguments.length) {
                        var o = Array.prototype.slice.call(arguments, 2);
                        return function() {
                          var r = Array.prototype.slice.call(arguments);
                          return (
                            Array.prototype.unshift.apply(r, o), e.apply(t, r)
                          );
                        };
                      }
                      return function() {
                        return e.apply(t, arguments);
                      };
                    }),
                    (goog.bind = function(e, t, r) {
                      return (
                        Function.prototype.bind &&
                        -1 !=
                          Function.prototype.bind
                            .toString()
                            .indexOf("native code")
                          ? (goog.bind = goog.bindNative_)
                          : (goog.bind = goog.bindJs_),
                        goog.bind.apply(null, arguments)
                      );
                    }),
                    (goog.partial = function(e, t) {
                      var r = Array.prototype.slice.call(arguments, 1);
                      return function() {
                        var t = r.slice();
                        return t.push.apply(t, arguments), e.apply(this, t);
                      };
                    }),
                    (goog.mixin = function(e, t) {
                      for (var r in t) e[r] = t[r];
                    }),
                    (goog.now =
                      (goog.TRUSTED_SITE && Date.now) ||
                      function() {
                        return +new Date();
                      }),
                    (goog.globalEval = function(e) {
                      if (goog.global.execScript)
                        goog.global.execScript(e, "JavaScript");
                      else {
                        if (!goog.global.eval)
                          throw Error("goog.globalEval not available");
                        if (null == goog.evalWorksForGlobals_)
                          if (
                            (goog.global.eval("var _evalTest_ = 1;"),
                            void 0 !== goog.global._evalTest_)
                          ) {
                            try {
                              delete goog.global._evalTest_;
                            } catch (e) {}
                            goog.evalWorksForGlobals_ = !0;
                          } else goog.evalWorksForGlobals_ = !1;
                        if (goog.evalWorksForGlobals_) goog.global.eval(e);
                        else {
                          var t = goog.global.document,
                            r = t.createElement("SCRIPT");
                          (r.type = "text/javascript"),
                            (r.defer = !1),
                            r.appendChild(t.createTextNode(e)),
                            t.body.appendChild(r),
                            t.body.removeChild(r);
                        }
                      }
                    }),
                    (goog.evalWorksForGlobals_ = null),
                    (goog.getCssName = function(e, t) {
                      if ("." == String(e).charAt(0))
                        throw Error(
                          'className passed in goog.getCssName must not start with ".". You passed: ' +
                            e
                        );
                      var r = function(e) {
                          return goog.cssNameMapping_[e] || e;
                        },
                        o = function(e) {
                          e = e.split("-");
                          for (var t = [], o = 0; o < e.length; o++)
                            t.push(r(e[o]));
                          return t.join("-");
                        },
                        o = goog.cssNameMapping_
                          ? "BY_WHOLE" == goog.cssNameMappingStyle_
                            ? r
                            : o
                          : function(e) {
                              return e;
                            },
                        o = t ? e + "-" + o(t) : o(e);
                      return goog.global.CLOSURE_CSS_NAME_MAP_FN
                        ? goog.global.CLOSURE_CSS_NAME_MAP_FN(o)
                        : o;
                    }),
                    (goog.setCssNameMapping = function(e, t) {
                      (goog.cssNameMapping_ = e),
                        (goog.cssNameMappingStyle_ = t);
                    }),
                    !COMPILED &&
                      goog.global.CLOSURE_CSS_NAME_MAPPING &&
                      (goog.cssNameMapping_ =
                        goog.global.CLOSURE_CSS_NAME_MAPPING),
                    (goog.getMsg = function(e, t) {
                      return (
                        t &&
                          (e = e.replace(/\{\$([^}]+)}/g, function(e, r) {
                            return null != t && r in t ? t[r] : e;
                          })),
                        e
                      );
                    }),
                    (goog.getMsgWithFallback = function(e, t) {
                      return e;
                    }),
                    (goog.exportSymbol = function(e, t, r) {
                      goog.exportPath_(e, t, r);
                    }),
                    (goog.exportProperty = function(e, t, r) {
                      e[t] = r;
                    }),
                    (goog.inherits = function(e, t) {
                      function r() {}
                      (r.prototype = t.prototype),
                        (e.superClass_ = t.prototype),
                        (e.prototype = new r()),
                        (e.prototype.constructor = e),
                        (e.base = function(e, r, o) {
                          for (
                            var n = Array(arguments.length - 2), a = 2;
                            a < arguments.length;
                            a++
                          )
                            n[a - 2] = arguments[a];
                          return t.prototype[r].apply(e, n);
                        });
                    }),
                    (goog.base = function(e, t, r) {
                      var o = arguments.callee.caller;
                      if (goog.STRICT_MODE_COMPATIBLE || (goog.DEBUG && !o))
                        throw Error(
                          "arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C"
                        );
                      if (o.superClass_) {
                        for (
                          var n = Array(arguments.length - 1), a = 1;
                          a < arguments.length;
                          a++
                        )
                          n[a - 1] = arguments[a];
                        return o.superClass_.constructor.apply(e, n);
                      }
                      for (
                        n = Array(arguments.length - 2), a = 2;
                        a < arguments.length;
                        a++
                      )
                        n[a - 2] = arguments[a];
                      for (
                        var a = !1, i = e.constructor;
                        i;
                        i = i.superClass_ && i.superClass_.constructor
                      )
                        if (i.prototype[t] === o) a = !0;
                        else if (a) return i.prototype[t].apply(e, n);
                      if (e[t] === o)
                        return e.constructor.prototype[t].apply(e, n);
                      throw Error(
                        "goog.base called from a method of one name to a method of a different name"
                      );
                    }),
                    (goog.scope = function(e) {
                      if (goog.isInModuleLoader_())
                        throw Error(
                          "goog.scope is not supported within a goog.module."
                        );
                      e.call(goog.global);
                    }),
                    COMPILED || (goog.global.COMPILED = COMPILED),
                    (goog.defineClass = function(e, t) {
                      var r = t.constructor,
                        o = t.statics;
                      return (
                        (r && r != Object.prototype.constructor) ||
                          (r = function() {
                            throw Error(
                              "cannot instantiate an interface (no constructor defined)."
                            );
                          }),
                        (r = goog.defineClass.createSealingConstructor_(r, e)),
                        e && goog.inherits(r, e),
                        delete t.constructor,
                        delete t.statics,
                        goog.defineClass.applyProperties_(r.prototype, t),
                        null != o &&
                          (o instanceof Function
                            ? o(r)
                            : goog.defineClass.applyProperties_(r, o)),
                        r
                      );
                    }),
                    (goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG),
                    (goog.defineClass.createSealingConstructor_ = function(
                      e,
                      t
                    ) {
                      if (!goog.defineClass.SEAL_CLASS_INSTANCES) return e;
                      var r = !goog.defineClass.isUnsealable_(t),
                        o = function() {
                          var t = e.apply(this, arguments) || this;
                          return (
                            (t[goog.UID_PROPERTY_] = t[goog.UID_PROPERTY_]),
                            this.constructor === o &&
                              r &&
                              Object.seal instanceof Function &&
                              Object.seal(t),
                            t
                          );
                        };
                      return o;
                    }),
                    (goog.defineClass.isUnsealable_ = function(e) {
                      return (
                        e &&
                        e.prototype &&
                        e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]
                      );
                    }),
                    (goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
                      " "
                    )),
                    (goog.defineClass.applyProperties_ = function(e, t) {
                      for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) &&
                          (e[r] = t[r]);
                      for (
                        var o = 0;
                        o < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;
                        o++
                      )
                        (r = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[o]),
                          Object.prototype.hasOwnProperty.call(t, r) &&
                            (e[r] = t[r]);
                    }),
                    (goog.tagUnsealableClass = function(e) {
                      !COMPILED &&
                        goog.defineClass.SEAL_CLASS_INSTANCES &&
                        (e.prototype[
                          goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_
                        ] = !0);
                    }),
                    (goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ =
                      "goog_defineClass_legacy_unsealable"),
                    (goog.createRequiresTranspilation_ = function() {
                      function a(e, t) {
                        d ? (c[e] = !0) : t() ? (c[e] = !1) : (d = c[e] = !0);
                      }
                      function b(a) {
                        try {
                          return !!eval(a);
                        } catch (e) {
                          return !1;
                        }
                      }
                      var c = { es3: !1 },
                        d = !1;
                      return (
                        a("es5", function() {
                          return b("[1,].length==1");
                        }),
                        a("es6", function() {
                          return b(
                            '(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()'
                          );
                        }),
                        a("es6-impl", function() {
                          return !0;
                        }),
                        a("es7", function() {
                          return b("2 ** 2 == 4");
                        }),
                        a("es8", function() {
                          return b("async () => 1, true");
                        }),
                        c
                      );
                    });
                  var axs = {};
                  (axs.browserUtils = {}),
                    (axs.browserUtils.matchSelector = function(e, t) {
                      return e.matches
                        ? e.matches(t)
                        : e.webkitMatchesSelector
                        ? e.webkitMatchesSelector(t)
                        : e.mozMatchesSelector
                        ? e.mozMatchesSelector(t)
                        : !!e.msMatchesSelector && e.msMatchesSelector(t);
                    }),
                    (axs.color = {}),
                    (axs.color.Color = function(e, t, r, o) {
                      (this.red = e),
                        (this.green = t),
                        (this.blue = r),
                        (this.alpha = o);
                    }),
                    (axs.color.YCbCr = function(e) {
                      (this.luma = this.z = e[0]),
                        (this.Cb = this.x = e[1]),
                        (this.Cr = this.y = e[2]);
                    }),
                    (axs.color.YCbCr.prototype = {
                      multiply: function(e) {
                        return new axs.color.YCbCr([
                          this.luma * e,
                          this.Cb * e,
                          this.Cr * e
                        ]);
                      },
                      add: function(e) {
                        return new axs.color.YCbCr([
                          this.luma + e.luma,
                          this.Cb + e.Cb,
                          this.Cr + e.Cr
                        ]);
                      },
                      subtract: function(e) {
                        return new axs.color.YCbCr([
                          this.luma - e.luma,
                          this.Cb - e.Cb,
                          this.Cr - e.Cr
                        ]);
                      }
                    }),
                    (axs.color.calculateContrastRatio = function(e, t) {
                      1 > e.alpha && (e = axs.color.flattenColors(e, t));
                      var r = axs.color.calculateLuminance(e),
                        o = axs.color.calculateLuminance(t);
                      return (Math.max(r, o) + 0.05) / (Math.min(r, o) + 0.05);
                    }),
                    (axs.color.calculateLuminance = function(e) {
                      return axs.color.toYCbCr(e).luma;
                    }),
                    (axs.color.luminanceRatio = function(e, t) {
                      return (Math.max(e, t) + 0.05) / (Math.min(e, t) + 0.05);
                    }),
                    (axs.color.parseColor = function(e) {
                      if ("transparent" === e)
                        return new axs.color.Color(0, 0, 0, 0);
                      var t = e.match(/^rgb\((\d+), (\d+), (\d+)\)$/);
                      if (t) {
                        e = parseInt(t[1], 10);
                        var r = parseInt(t[2], 10),
                          o = parseInt(t[3], 10);
                        return new axs.color.Color(e, r, o, 1);
                      }
                      return (t = e.match(
                        /^rgba\((\d+), (\d+), (\d+), (\d*(\.\d+)?)\)/
                      ))
                        ? ((e = parseInt(t[1], 10)),
                          (r = parseInt(t[2], 10)),
                          (o = parseInt(t[3], 10)),
                          (t = parseFloat(t[4])),
                          new axs.color.Color(e, r, o, t))
                        : null;
                    }),
                    (axs.color.colorChannelToString = function(e) {
                      return (
                        (e = Math.round(e)),
                        15 >= e ? "0" + e.toString(16) : e.toString(16)
                      );
                    }),
                    (axs.color.colorToString = function(e) {
                      return 1 == e.alpha
                        ? "#" +
                            axs.color.colorChannelToString(e.red) +
                            axs.color.colorChannelToString(e.green) +
                            axs.color.colorChannelToString(e.blue)
                        : "rgba(" +
                            [e.red, e.green, e.blue, e.alpha].join() +
                            ")";
                    }),
                    (axs.color.luminanceFromContrastRatio = function(e, t, r) {
                      return r ? (e + 0.05) * t - 0.05 : (e + 0.05) / t - 0.05;
                    }),
                    (axs.color.translateColor = function(e, t) {
                      for (
                        var r =
                            t > e.luma
                              ? axs.color.WHITE_YCC
                              : axs.color.BLACK_YCC,
                          o =
                            r == axs.color.WHITE_YCC
                              ? axs.color.YCC_CUBE_FACES_WHITE
                              : axs.color.YCC_CUBE_FACES_BLACK,
                          n = new axs.color.YCbCr([0, e.Cb, e.Cr]),
                          a = new axs.color.YCbCr([1, e.Cb, e.Cr]),
                          a = { a: n, b: a },
                          n = null,
                          i = 0;
                        i < o.length &&
                        ((n = axs.color.findIntersection(a, o[i])),
                        !(0 <= n.z && 1 >= n.z));
                        i++
                      );
                      if (!n)
                        throw "Couldn't find intersection with YCbCr color cube for Cb=" +
                          e.Cb +
                          ", Cr=" +
                          e.Cr +
                          ".";
                      if (n.x != e.x || n.y != e.y)
                        throw "Intersection has wrong Cb/Cr values.";
                      return Math.abs(r.luma - n.luma) < Math.abs(r.luma - t)
                        ? ((r = [t, e.Cb, e.Cr]), axs.color.fromYCbCrArray(r))
                        : ((r = (t - n.luma) / (r.luma - n.luma)),
                          (r = [t, n.Cb - n.Cb * r, n.Cr - n.Cr * r]),
                          axs.color.fromYCbCrArray(r));
                    }),
                    (axs.color.suggestColors = function(e, t, r) {
                      var o,
                        n = {},
                        a = axs.color.calculateLuminance(e),
                        i = axs.color.calculateLuminance(t),
                        s = i > a,
                        l = axs.color.toYCbCr(t),
                        u = axs.color.toYCbCr(e);
                      for (o in r) {
                        var c = r[o],
                          d = axs.color.luminanceFromContrastRatio(
                            a,
                            c + 0.02,
                            s
                          );
                        if (1 >= d && 0 <= d) {
                          var p = axs.color.translateColor(l, d),
                            c = axs.color.calculateContrastRatio(p, e),
                            d = {};
                          (d.fg = axs.color.colorToString(p)),
                            (d.bg = axs.color.colorToString(e)),
                            (d.contrast = c.toFixed(2)),
                            (n[o] = d);
                        } else
                          1 >=
                            (c = axs.color.luminanceFromContrastRatio(
                              i,
                              c + 0.02,
                              !s
                            )) &&
                            0 <= c &&
                            ((p = axs.color.translateColor(u, c)),
                            (c = axs.color.calculateContrastRatio(t, p)),
                            (d = {}),
                            (d.bg = axs.color.colorToString(p)),
                            (d.fg = axs.color.colorToString(t)),
                            (d.contrast = c.toFixed(2)),
                            (n[o] = d));
                      }
                      return n;
                    }),
                    (axs.color.flattenColors = function(e, t) {
                      var r = e.alpha;
                      return new axs.color.Color(
                        (1 - r) * t.red + r * e.red,
                        (1 - r) * t.green + r * e.green,
                        (1 - r) * t.blue + r * e.blue,
                        e.alpha + t.alpha * (1 - e.alpha)
                      );
                    }),
                    (axs.color.multiplyMatrixVector = function(e, t) {
                      var r = t[0],
                        o = t[1],
                        n = t[2];
                      return [
                        e[0][0] * r + e[0][1] * o + e[0][2] * n,
                        e[1][0] * r + e[1][1] * o + e[1][2] * n,
                        e[2][0] * r + e[2][1] * o + e[2][2] * n
                      ];
                    }),
                    (axs.color.toYCbCr = function(e) {
                      var t = e.red / 255,
                        r = e.green / 255;
                      return (
                        (e = e.blue / 255),
                        new axs.color.YCbCr(
                          axs.color.multiplyMatrixVector(axs.color.YCC_MATRIX, [
                            0.03928 >= t
                              ? t / 12.92
                              : Math.pow((t + 0.055) / 1.055, 2.4),
                            0.03928 >= r
                              ? r / 12.92
                              : Math.pow((r + 0.055) / 1.055, 2.4),
                            0.03928 >= e
                              ? e / 12.92
                              : Math.pow((e + 0.055) / 1.055, 2.4)
                          ])
                        )
                      );
                    }),
                    (axs.color.fromYCbCr = function(e) {
                      return axs.color.fromYCbCrArray([e.luma, e.Cb, e.Cr]);
                    }),
                    (axs.color.fromYCbCrArray = function(e) {
                      var t = axs.color.multiplyMatrixVector(
                        axs.color.INVERTED_YCC_MATRIX,
                        e
                      );
                      e = t[0];
                      var r = t[1],
                        t = t[2];
                      return new axs.color.Color(
                        Math.min(
                          Math.max(
                            Math.round(
                              255 *
                                (0.00303949 >= e
                                  ? 12.92 * e
                                  : 1.055 * Math.pow(e, 1 / 2.4) - 0.055)
                            ),
                            0
                          ),
                          255
                        ),
                        Math.min(
                          Math.max(
                            Math.round(
                              255 *
                                (0.00303949 >= r
                                  ? 12.92 * r
                                  : 1.055 * Math.pow(r, 1 / 2.4) - 0.055)
                            ),
                            0
                          ),
                          255
                        ),
                        Math.min(
                          Math.max(
                            Math.round(
                              255 *
                                (0.00303949 >= t
                                  ? 12.92 * t
                                  : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
                            ),
                            0
                          ),
                          255
                        ),
                        1
                      );
                    }),
                    (axs.color.RGBToYCbCrMatrix = function(e, t) {
                      return [
                        [e, 1 - e - t, t],
                        [
                          -e / (2 - 2 * t),
                          (e + t - 1) / (2 - 2 * t),
                          (1 - t) / (2 - 2 * t)
                        ],
                        [
                          (1 - e) / (2 - 2 * e),
                          (e + t - 1) / (2 - 2 * e),
                          -t / (2 - 2 * e)
                        ]
                      ];
                    }),
                    (axs.color.invert3x3Matrix = function(e) {
                      var t = e[0][0],
                        r = e[0][1],
                        o = e[0][2],
                        n = e[1][0],
                        a = e[1][1],
                        i = e[1][2],
                        s = e[2][0],
                        l = e[2][1];
                      return (
                        (e = e[2][2]),
                        axs.color.scalarMultiplyMatrix(
                          [
                            [a * e - i * l, o * l - r * e, r * i - o * a],
                            [i * s - n * e, t * e - o * s, o * n - t * i],
                            [n * l - a * s, s * r - t * l, t * a - r * n]
                          ],
                          1 /
                            (t * (a * e - i * l) -
                              r * (e * n - i * s) +
                              o * (n * l - a * s))
                        )
                      );
                    }),
                    (axs.color.findIntersection = function(e, t) {
                      var r = [e.a.x - t.p0.x, e.a.y - t.p0.y, e.a.z - t.p0.z],
                        o = axs.color.invert3x3Matrix([
                          [e.a.x - e.b.x, t.p1.x - t.p0.x, t.p2.x - t.p0.x],
                          [e.a.y - e.b.y, t.p1.y - t.p0.y, t.p2.y - t.p0.y],
                          [e.a.z - e.b.z, t.p1.z - t.p0.z, t.p2.z - t.p0.z]
                        ]),
                        r = axs.color.multiplyMatrixVector(o, r)[0];
                      return e.a.add(e.b.subtract(e.a).multiply(r));
                    }),
                    (axs.color.scalarMultiplyMatrix = function(e, t) {
                      for (var r = [], o = 0; 3 > o; o++)
                        r[o] = axs.color.scalarMultiplyVector(e[o], t);
                      return r;
                    }),
                    (axs.color.scalarMultiplyVector = function(e, t) {
                      for (var r = [], o = 0; o < e.length; o++)
                        r[o] = e[o] * t;
                      return r;
                    }),
                    (axs.color.kR = 0.2126),
                    (axs.color.kB = 0.0722),
                    (axs.color.YCC_MATRIX = axs.color.RGBToYCbCrMatrix(
                      axs.color.kR,
                      axs.color.kB
                    )),
                    (axs.color.INVERTED_YCC_MATRIX = axs.color.invert3x3Matrix(
                      axs.color.YCC_MATRIX
                    )),
                    (axs.color.BLACK = new axs.color.Color(0, 0, 0, 1)),
                    (axs.color.BLACK_YCC = axs.color.toYCbCr(axs.color.BLACK)),
                    (axs.color.WHITE = new axs.color.Color(255, 255, 255, 1)),
                    (axs.color.WHITE_YCC = axs.color.toYCbCr(axs.color.WHITE)),
                    (axs.color.RED = new axs.color.Color(255, 0, 0, 1)),
                    (axs.color.RED_YCC = axs.color.toYCbCr(axs.color.RED)),
                    (axs.color.GREEN = new axs.color.Color(0, 255, 0, 1)),
                    (axs.color.GREEN_YCC = axs.color.toYCbCr(axs.color.GREEN)),
                    (axs.color.BLUE = new axs.color.Color(0, 0, 255, 1)),
                    (axs.color.BLUE_YCC = axs.color.toYCbCr(axs.color.BLUE)),
                    (axs.color.CYAN = new axs.color.Color(0, 255, 255, 1)),
                    (axs.color.CYAN_YCC = axs.color.toYCbCr(axs.color.CYAN)),
                    (axs.color.MAGENTA = new axs.color.Color(255, 0, 255, 1)),
                    (axs.color.MAGENTA_YCC = axs.color.toYCbCr(
                      axs.color.MAGENTA
                    )),
                    (axs.color.YELLOW = new axs.color.Color(255, 255, 0, 1)),
                    (axs.color.YELLOW_YCC = axs.color.toYCbCr(
                      axs.color.YELLOW
                    )),
                    (axs.color.YCC_CUBE_FACES_BLACK = [
                      {
                        p0: axs.color.BLACK_YCC,
                        p1: axs.color.RED_YCC,
                        p2: axs.color.GREEN_YCC
                      },
                      {
                        p0: axs.color.BLACK_YCC,
                        p1: axs.color.GREEN_YCC,
                        p2: axs.color.BLUE_YCC
                      },
                      {
                        p0: axs.color.BLACK_YCC,
                        p1: axs.color.BLUE_YCC,
                        p2: axs.color.RED_YCC
                      }
                    ]),
                    (axs.color.YCC_CUBE_FACES_WHITE = [
                      {
                        p0: axs.color.WHITE_YCC,
                        p1: axs.color.CYAN_YCC,
                        p2: axs.color.MAGENTA_YCC
                      },
                      {
                        p0: axs.color.WHITE_YCC,
                        p1: axs.color.MAGENTA_YCC,
                        p2: axs.color.YELLOW_YCC
                      },
                      {
                        p0: axs.color.WHITE_YCC,
                        p1: axs.color.YELLOW_YCC,
                        p2: axs.color.CYAN_YCC
                      }
                    ]),
                    (axs.constants = {}),
                    (axs.constants.ARIA_ROLES = {
                      alert: { namefrom: ["author"], parent: ["region"] },
                      alertdialog: {
                        namefrom: ["author"],
                        namerequired: !0,
                        parent: ["alert", "dialog"]
                      },
                      application: {
                        namefrom: ["author"],
                        namerequired: !0,
                        parent: ["landmark"]
                      },
                      article: {
                        namefrom: ["author"],
                        parent: ["document", "region"]
                      },
                      banner: { namefrom: ["author"], parent: ["landmark"] },
                      button: {
                        childpresentational: !0,
                        namefrom: ["contents", "author"],
                        namerequired: !0,
                        parent: ["command"],
                        properties: ["aria-expanded", "aria-pressed"]
                      },
                      checkbox: {
                        namefrom: ["contents", "author"],
                        namerequired: !0,
                        parent: ["input"],
                        requiredProperties: ["aria-checked"],
                        properties: ["aria-checked"]
                      },
                      columnheader: {
                        namefrom: ["contents", "author"],
                        namerequired: !0,
                        parent: ["gridcell", "sectionhead", "widget"],
                        properties: ["aria-sort"],
                        scope: ["row"]
                      },
                      combobox: {
                        mustcontain: ["listbox", "textbox"],
                        namefrom: ["author"],
                        namerequired: !0,
                        parent: ["select"],
                        requiredProperties: ["aria-expanded"],
                        properties: [
                          "aria-expanded",
                          "aria-autocomplete",
                          "aria-required"
                        ]
                      },
                      command: {
                        abstract: !0,
                        namefrom: ["author"],
                        parent: ["widget"]
                      },
                      complementary: {
                        namefrom: ["author"],
                        parent: ["landmark"]
                      },
                      composite: {
                        abstract: !0,
                        childpresentational: !1,
                        namefrom: ["author"],
                        parent: ["widget"],
                        properties: ["aria-activedescendant"]
                      },
                      contentinfo: {
                        namefrom: ["author"],
                        parent: ["landmark"]
                      },
                      definition: { namefrom: ["author"], parent: ["section"] },
                      dialog: {
                        namefrom: ["author"],
                        namerequired: !0,
                        parent: ["window"]
                      },
                      directory: {
                        namefrom: ["contents", "author"],
                        parent: ["list"]
                      },
                      document: {
                        namefrom: [" author"],
                        namerequired: !0,
                        parent: ["structure"],
                        properties: ["aria-expanded"]
                      },
                      form: { namefrom: ["author"], parent: ["landmark"] },
                      grid: {
                        mustcontain: ["row", "rowgroup"],
                        namefrom: ["author"],
                        namerequired: !0,
                        parent: ["composite", "region"],
                        properties: [
                          "aria-level",
                          "aria-multiselectable",
                          "aria-readonly"
                        ]
                      },
                      gridcell: {
                        namefrom: ["contents", "author"],
                        namerequired: !0,
                        parent: ["section", "widget"],
                        properties: [
                          "aria-readonly",
                          "aria-required",
                          "aria-selected"
                        ],
                        scope: ["row"]
                      },
                      group: {
                        namefrom: [" author"],
                        parent: ["section"],
                        properties: ["aria-activedescendant"]
                      },
                      heading: {
                        namerequired: !0,
                        parent: ["sectionhead"],
                        properties: ["aria-level"]
                      },
                      img: {
                        childpresentational: !0,
                        namefrom: ["author"],
                        namerequired: !0,
                        parent: ["section"]
                      },
                      input: {
                        abstract: !0,
                        namefrom: ["author"],
                        parent: ["widget"]
                      },
                      landmark: {
                        abstract: !0,
                        namefrom: ["contents", "author"],
                        namerequired: !1,
                        parent: ["region"]
                      },
                      link: {
                        namefrom: ["contents", "author"],
                        namerequired: !0,
                        parent: ["command"],
                        properties: ["aria-expanded"]
                      },
                      list: {
                        mustcontain: ["group", "listitem"],
                        namefrom: ["author"],
                        parent: ["region"]
                      },
                      listbox: {
                        mustcontain: ["option"],
                        namefrom: ["author"],
                        namerequired: !0,
                        parent: ["list", "select"],
                        properties: ["aria-multiselectable", "aria-required"]
                      },
                      listitem: {
                        namefrom: ["contents", "author"],
                        namerequired: !0,
                        parent: ["section"],
                        properties: [
                          "aria-level",
                          "aria-posinset",
                          "aria-setsize"
                        ],
                        scope: ["list"]
                      },
                      log: {
                        namefrom: [" author"],
                        namerequired: !0,
                        parent: ["region"]
                      },
                      main: { namefrom: ["author"], parent: ["landmark"] },
                      marquee: { namerequired: !0, parent: ["section"] },
                      math: {
                        childpresentational: !0,
                        namefrom: ["author"],
                        parent: ["section"]
                      },
                      menu: {
                        mustcontain: [
                          "group",
                          "menuitemradio",
                          "menuitem",
                          "menuitemcheckbox"
                        ],
                        namefrom: ["author"],
                        namerequired: !0,
                        parent: ["list", "select"]
                      },
                      menubar: { namefrom: ["author"], parent: ["menu"] },
                      menuitem: {
                        namefrom: ["contents", "author"],
                        namerequired: !0,
                        parent: ["command"],
                        scope: ["menu", "menubar"]
                      },
                      menuitemcheckbox: {
                        namefrom: ["contents", "author"],
                        namerequired: !0,
                        parent: ["checkbox", "menuitem"],
                        scope: ["menu", "menubar"]
                      },
                      menuitemradio: {
                        namefrom: ["contents", "author"],
                        namerequired: !0,
                        parent: ["menuitemcheckbox", "radio"],
                        scope: ["menu", "menubar"]
                      },
                      navigation: {
                        namefrom: ["author"],
                        parent: ["landmark"]
                      },
                      note: { namefrom: ["author"], parent: ["section"] },
                      option: {
                        namefrom: ["contents", "author"],
                        namerequired: !0,
                        parent: ["input"],
                        properties: [
                          "aria-checked",
                          "aria-posinset",
                          "aria-selected",
                          "aria-setsize"
                        ]
                      },
                      presentation: { parent: ["structure"] },
                      progressbar: {
                        childpresentational: !0,
                        namefrom: ["author"],
                        namerequired: !0,
                        parent: ["range"]
                      },
                      radio: {
                        namefrom: ["contents", "author"],
                        namerequired: !0,
                        parent: ["checkbox", "option"]
                      },
                      radiogroup: {
                        mustcontain: ["radio"],
                        namefrom: ["author"],
                        namerequired: !0,
                        parent: ["select"],
                        properties: ["aria-required"]
                      },
                      range: {
                        abstract: !0,
                        namefrom: ["author"],
                        parent: ["widget"],
                        properties: [
                          "aria-valuemax",
                          "aria-valuemin",
                          "aria-valuenow",
                          "aria-valuetext"
                        ]
                      },
                      region: { namefrom: [" author"], parent: ["section"] },
                      roletype: {
                        abstract: !0,
                        properties: "aria-atomic aria-busy aria-controls aria-describedby aria-disabled aria-dropeffect aria-flowto aria-grabbed aria-haspopup aria-hidden aria-invalid aria-label aria-labelledby aria-live aria-owns aria-relevant".split(
                          " "
                        )
                      },
                      row: {
                        mustcontain: ["columnheader", "gridcell", "rowheader"],
                        namefrom: ["contents", "author"],
                        parent: ["group", "widget"],
                        properties: ["aria-level", "aria-selected"],
                        scope: ["grid", "rowgroup", "treegrid"]
                      },
                      rowgroup: {
                        mustcontain: ["row"],
                        namefrom: ["contents", "author"],
                        parent: ["group"],
                        scope: ["grid"]
                      },
                      rowheader: {
                        namefrom: ["contents", "author"],
                        namerequired: !0,
                        parent: ["gridcell", "sectionhead", "widget"],
                        properties: ["aria-sort"],
                        scope: ["row"]
                      },
                      search: { namefrom: ["author"], parent: ["landmark"] },
                      section: {
                        abstract: !0,
                        namefrom: ["contents", "author"],
                        parent: ["structure"],
                        properties: ["aria-expanded"]
                      },
                      sectionhead: {
                        abstract: !0,
                        namefrom: ["contents", "author"],
                        parent: ["structure"],
                        properties: ["aria-expanded"]
                      },
                      select: {
                        abstract: !0,
                        namefrom: ["author"],
                        parent: ["composite", "group", "input"]
                      },
                      separator: {
                        childpresentational: !0,
                        namefrom: ["author"],
                        parent: ["structure"],
                        properties: ["aria-expanded", "aria-orientation"]
                      },
                      scrollbar: {
                        childpresentational: !0,
                        namefrom: ["author"],
                        namerequired: !1,
                        parent: ["input", "range"],
                        requiredProperties: [
                          "aria-controls",
                          "aria-orientation",
                          "aria-valuemax",
                          "aria-valuemin",
                          "aria-valuenow"
                        ],
                        properties: [
                          "aria-controls",
                          "aria-orientation",
                          "aria-valuemax",
                          "aria-valuemin",
                          "aria-valuenow"
                        ]
                      },
                      slider: {
                        childpresentational: !0,
                        namefrom: ["author"],
                        namerequired: !0,
                        parent: ["input", "range"],
                        requiredProperties: [
                          "aria-valuemax",
                          "aria-valuemin",
                          "aria-valuenow"
                        ],
                        properties: [
                          "aria-valuemax",
                          "aria-valuemin",
                          "aria-valuenow",
                          "aria-orientation"
                        ]
                      },
                      spinbutton: {
                        namefrom: ["author"],
                        namerequired: !0,
                        parent: ["input", "range"],
                        requiredProperties: [
                          "aria-valuemax",
                          "aria-valuemin",
                          "aria-valuenow"
                        ],
                        properties: [
                          "aria-valuemax",
                          "aria-valuemin",
                          "aria-valuenow",
                          "aria-required"
                        ]
                      },
                      status: { parent: ["region"] },
                      structure: { abstract: !0, parent: ["roletype"] },
                      tab: {
                        namefrom: ["contents", "author"],
                        parent: ["sectionhead", "widget"],
                        properties: ["aria-selected"],
                        scope: ["tablist"]
                      },
                      tablist: {
                        mustcontain: ["tab"],
                        namefrom: ["author"],
                        parent: ["composite", "directory"],
                        properties: ["aria-level"]
                      },
                      tabpanel: {
                        namefrom: ["author"],
                        namerequired: !0,
                        parent: ["region"]
                      },
                      textbox: {
                        namefrom: ["author"],
                        namerequired: !0,
                        parent: ["input"],
                        properties: [
                          "aria-activedescendant",
                          "aria-autocomplete",
                          "aria-multiline",
                          "aria-readonly",
                          "aria-required"
                        ]
                      },
                      timer: {
                        namefrom: ["author"],
                        namerequired: !0,
                        parent: ["status"]
                      },
                      toolbar: { namefrom: ["author"], parent: ["group"] },
                      tooltip: { namerequired: !0, parent: ["section"] },
                      tree: {
                        mustcontain: ["group", "treeitem"],
                        namefrom: ["author"],
                        namerequired: !0,
                        parent: ["select"],
                        properties: ["aria-multiselectable", "aria-required"]
                      },
                      treegrid: {
                        mustcontain: ["row"],
                        namefrom: ["author"],
                        namerequired: !0,
                        parent: ["grid", "tree"]
                      },
                      treeitem: {
                        namefrom: ["contents", "author"],
                        namerequired: !0,
                        parent: ["listitem", "option"],
                        scope: ["group", "tree"]
                      },
                      widget: { abstract: !0, parent: ["roletype"] },
                      window: {
                        abstract: !0,
                        namefrom: [" author"],
                        parent: ["roletype"],
                        properties: ["aria-expanded"]
                      }
                    }),
                    (axs.constants.WIDGET_ROLES = {}),
                    (axs.constants.addAllParentRolesToSet_ = function(e, t) {
                      if (e.parent)
                        for (var r = e.parent, o = 0; o < r.length; o++) {
                          var n = r[o];
                          (t[n] = !0),
                            axs.constants.addAllParentRolesToSet_(
                              axs.constants.ARIA_ROLES[n],
                              t
                            );
                        }
                    }),
                    (axs.constants.addAllPropertiesToSet_ = function(e, t, r) {
                      var o = e[t];
                      if (o) for (var n = 0; n < o.length; n++) r[o[n]] = !0;
                      if (e.parent)
                        for (e = e.parent, o = 0; o < e.length; o++)
                          axs.constants.addAllPropertiesToSet_(
                            axs.constants.ARIA_ROLES[e[o]],
                            t,
                            r
                          );
                    });
                  for (var roleName in axs.constants.ARIA_ROLES) {
                    var role = axs.constants.ARIA_ROLES[roleName],
                      propertiesSet = {};
                    axs.constants.addAllPropertiesToSet_(
                      role,
                      "properties",
                      propertiesSet
                    ),
                      (role.propertiesSet = propertiesSet);
                    var requiredPropertiesSet = {};
                    axs.constants.addAllPropertiesToSet_(
                      role,
                      "requiredProperties",
                      requiredPropertiesSet
                    ),
                      (role.requiredPropertiesSet = requiredPropertiesSet);
                    var parentRolesSet = {};
                    axs.constants.addAllParentRolesToSet_(role, parentRolesSet),
                      (role.allParentRolesSet = parentRolesSet),
                      "widget" in parentRolesSet &&
                        (axs.constants.WIDGET_ROLES[roleName] = role);
                  }
                  return (
                    (axs.constants.ARIA_PROPERTIES = {
                      activedescendant: {
                        type: "property",
                        valueType: "idref"
                      },
                      atomic: {
                        defaultValue: "false",
                        type: "property",
                        valueType: "boolean"
                      },
                      autocomplete: {
                        defaultValue: "none",
                        type: "property",
                        valueType: "token",
                        values: ["inline", "list", "both", "none"]
                      },
                      busy: {
                        defaultValue: "false",
                        type: "state",
                        valueType: "boolean"
                      },
                      checked: {
                        defaultValue: "undefined",
                        type: "state",
                        valueType: "token",
                        values: ["true", "false", "mixed", "undefined"]
                      },
                      controls: { type: "property", valueType: "idref_list" },
                      describedby: {
                        type: "property",
                        valueType: "idref_list"
                      },
                      disabled: {
                        defaultValue: "false",
                        type: "state",
                        valueType: "boolean"
                      },
                      dropeffect: {
                        defaultValue: "none",
                        type: "property",
                        valueType: "token_list",
                        values: "copy move link execute popup none".split(" ")
                      },
                      expanded: {
                        defaultValue: "undefined",
                        type: "state",
                        valueType: "token",
                        values: ["true", "false", "undefined"]
                      },
                      flowto: { type: "property", valueType: "idref_list" },
                      grabbed: {
                        defaultValue: "undefined",
                        type: "state",
                        valueType: "token",
                        values: ["true", "false", "undefined"]
                      },
                      haspopup: {
                        defaultValue: "false",
                        type: "property",
                        valueType: "boolean"
                      },
                      hidden: {
                        defaultValue: "false",
                        type: "state",
                        valueType: "boolean"
                      },
                      invalid: {
                        defaultValue: "false",
                        type: "state",
                        valueType: "token",
                        values: ["grammar", "false", "spelling", "true"]
                      },
                      label: { type: "property", valueType: "string" },
                      labelledby: { type: "property", valueType: "idref_list" },
                      level: { type: "property", valueType: "integer" },
                      live: {
                        defaultValue: "off",
                        type: "property",
                        valueType: "token",
                        values: ["off", "polite", "assertive"]
                      },
                      multiline: {
                        defaultValue: "false",
                        type: "property",
                        valueType: "boolean"
                      },
                      multiselectable: {
                        defaultValue: "false",
                        type: "property",
                        valueType: "boolean"
                      },
                      orientation: {
                        defaultValue: "vertical",
                        type: "property",
                        valueType: "token",
                        values: ["horizontal", "vertical"]
                      },
                      owns: { type: "property", valueType: "idref_list" },
                      posinset: { type: "property", valueType: "integer" },
                      pressed: {
                        defaultValue: "undefined",
                        type: "state",
                        valueType: "token",
                        values: ["true", "false", "mixed", "undefined"]
                      },
                      readonly: {
                        defaultValue: "false",
                        type: "property",
                        valueType: "boolean"
                      },
                      relevant: {
                        defaultValue: "additions text",
                        type: "property",
                        valueType: "token_list",
                        values: ["additions", "removals", "text", "all"]
                      },
                      required: {
                        defaultValue: "false",
                        type: "property",
                        valueType: "boolean"
                      },
                      selected: {
                        defaultValue: "undefined",
                        type: "state",
                        valueType: "token",
                        values: ["true", "false", "undefined"]
                      },
                      setsize: { type: "property", valueType: "integer" },
                      sort: {
                        defaultValue: "none",
                        type: "property",
                        valueType: "token",
                        values: ["ascending", "descending", "none", "other"]
                      },
                      valuemax: { type: "property", valueType: "decimal" },
                      valuemin: { type: "property", valueType: "decimal" },
                      valuenow: { type: "property", valueType: "decimal" },
                      valuetext: { type: "property", valueType: "string" }
                    }),
                    (function() {
                      for (var e in axs.constants.ARIA_PROPERTIES) {
                        var t = axs.constants.ARIA_PROPERTIES[e];
                        if (t.values) {
                          for (var r = {}, o = 0; o < t.values.length; o++)
                            r[t.values[o]] = !0;
                          t.valuesSet = r;
                        }
                      }
                    })(),
                    (axs.constants.GLOBAL_PROPERTIES =
                      axs.constants.ARIA_ROLES.roletype.propertiesSet),
                    (axs.constants.NO_ROLE_NAME = " "),
                    (axs.constants.WIDGET_ROLE_TO_NAME = {
                      alert: "aria_role_alert",
                      alertdialog: "aria_role_alertdialog",
                      button: "aria_role_button",
                      checkbox: "aria_role_checkbox",
                      columnheader: "aria_role_columnheader",
                      combobox: "aria_role_combobox",
                      dialog: "aria_role_dialog",
                      grid: "aria_role_grid",
                      gridcell: "aria_role_gridcell",
                      link: "aria_role_link",
                      listbox: "aria_role_listbox",
                      log: "aria_role_log",
                      marquee: "aria_role_marquee",
                      menu: "aria_role_menu",
                      menubar: "aria_role_menubar",
                      menuitem: "aria_role_menuitem",
                      menuitemcheckbox: "aria_role_menuitemcheckbox",
                      menuitemradio: "aria_role_menuitemradio",
                      option: axs.constants.NO_ROLE_NAME,
                      progressbar: "aria_role_progressbar",
                      radio: "aria_role_radio",
                      radiogroup: "aria_role_radiogroup",
                      rowheader: "aria_role_rowheader",
                      scrollbar: "aria_role_scrollbar",
                      slider: "aria_role_slider",
                      spinbutton: "aria_role_spinbutton",
                      status: "aria_role_status",
                      tab: "aria_role_tab",
                      tabpanel: "aria_role_tabpanel",
                      textbox: "aria_role_textbox",
                      timer: "aria_role_timer",
                      toolbar: "aria_role_toolbar",
                      tooltip: "aria_role_tooltip",
                      treeitem: "aria_role_treeitem"
                    }),
                    (axs.constants.STRUCTURE_ROLE_TO_NAME = {
                      article: "aria_role_article",
                      application: "aria_role_application",
                      banner: "aria_role_banner",
                      columnheader: "aria_role_columnheader",
                      complementary: "aria_role_complementary",
                      contentinfo: "aria_role_contentinfo",
                      definition: "aria_role_definition",
                      directory: "aria_role_directory",
                      document: "aria_role_document",
                      form: "aria_role_form",
                      group: "aria_role_group",
                      heading: "aria_role_heading",
                      img: "aria_role_img",
                      list: "aria_role_list",
                      listitem: "aria_role_listitem",
                      main: "aria_role_main",
                      math: "aria_role_math",
                      navigation: "aria_role_navigation",
                      note: "aria_role_note",
                      region: "aria_role_region",
                      rowheader: "aria_role_rowheader",
                      search: "aria_role_search",
                      separator: "aria_role_separator"
                    }),
                    (axs.constants.ATTRIBUTE_VALUE_TO_STATUS = [
                      {
                        name: "aria-autocomplete",
                        values: {
                          inline: "aria_autocomplete_inline",
                          list: "aria_autocomplete_list",
                          both: "aria_autocomplete_both"
                        }
                      },
                      {
                        name: "aria-checked",
                        values: {
                          true: "aria_checked_true",
                          false: "aria_checked_false",
                          mixed: "aria_checked_mixed"
                        }
                      },
                      {
                        name: "aria-disabled",
                        values: { true: "aria_disabled_true" }
                      },
                      {
                        name: "aria-expanded",
                        values: {
                          true: "aria_expanded_true",
                          false: "aria_expanded_false"
                        }
                      },
                      {
                        name: "aria-invalid",
                        values: {
                          true: "aria_invalid_true",
                          grammar: "aria_invalid_grammar",
                          spelling: "aria_invalid_spelling"
                        }
                      },
                      {
                        name: "aria-multiline",
                        values: { true: "aria_multiline_true" }
                      },
                      {
                        name: "aria-multiselectable",
                        values: { true: "aria_multiselectable_true" }
                      },
                      {
                        name: "aria-pressed",
                        values: {
                          true: "aria_pressed_true",
                          false: "aria_pressed_false",
                          mixed: "aria_pressed_mixed"
                        }
                      },
                      {
                        name: "aria-readonly",
                        values: { true: "aria_readonly_true" }
                      },
                      {
                        name: "aria-required",
                        values: { true: "aria_required_true" }
                      },
                      {
                        name: "aria-selected",
                        values: {
                          true: "aria_selected_true",
                          false: "aria_selected_false"
                        }
                      }
                    ]),
                    (axs.constants.INPUT_TYPE_TO_INFORMATION_TABLE_MSG = {
                      button: "input_type_button",
                      checkbox: "input_type_checkbox",
                      color: "input_type_color",
                      datetime: "input_type_datetime",
                      "datetime-local": "input_type_datetime_local",
                      date: "input_type_date",
                      email: "input_type_email",
                      file: "input_type_file",
                      image: "input_type_image",
                      month: "input_type_month",
                      number: "input_type_number",
                      password: "input_type_password",
                      radio: "input_type_radio",
                      range: "input_type_range",
                      reset: "input_type_reset",
                      search: "input_type_search",
                      submit: "input_type_submit",
                      tel: "input_type_tel",
                      text: "input_type_text",
                      url: "input_type_url",
                      week: "input_type_week"
                    }),
                    (axs.constants.TAG_TO_INFORMATION_TABLE_VERBOSE_MSG = {
                      A: "tag_link",
                      BUTTON: "tag_button",
                      H1: "tag_h1",
                      H2: "tag_h2",
                      H3: "tag_h3",
                      H4: "tag_h4",
                      H5: "tag_h5",
                      H6: "tag_h6",
                      LI: "tag_li",
                      OL: "tag_ol",
                      SELECT: "tag_select",
                      TEXTAREA: "tag_textarea",
                      UL: "tag_ul",
                      SECTION: "tag_section",
                      NAV: "tag_nav",
                      ARTICLE: "tag_article",
                      ASIDE: "tag_aside",
                      HGROUP: "tag_hgroup",
                      HEADER: "tag_header",
                      FOOTER: "tag_footer",
                      TIME: "tag_time",
                      MARK: "tag_mark"
                    }),
                    (axs.constants.TAG_TO_INFORMATION_TABLE_BRIEF_MSG = {
                      BUTTON: "tag_button",
                      SELECT: "tag_select",
                      TEXTAREA: "tag_textarea"
                    }),
                    (axs.constants.MIXED_VALUES = {
                      true: !0,
                      false: !0,
                      mixed: !0
                    }),
                    (axs.constants.Severity = {
                      INFO: "Info",
                      WARNING: "Warning",
                      SEVERE: "Severe"
                    }),
                    (axs.constants.AuditResult = {
                      PASS: "PASS",
                      FAIL: "FAIL",
                      NA: "NA"
                    }),
                    (axs.constants.InlineElements = {
                      TT: !0,
                      I: !0,
                      B: !0,
                      BIG: !0,
                      SMALL: !0,
                      EM: !0,
                      STRONG: !0,
                      DFN: !0,
                      CODE: !0,
                      SAMP: !0,
                      KBD: !0,
                      VAR: !0,
                      CITE: !0,
                      ABBR: !0,
                      ACRONYM: !0,
                      A: !0,
                      IMG: !0,
                      OBJECT: !0,
                      BR: !0,
                      SCRIPT: !0,
                      MAP: !0,
                      Q: !0,
                      SUB: !0,
                      SUP: !0,
                      SPAN: !0,
                      BDO: !0,
                      INPUT: !0,
                      SELECT: !0,
                      TEXTAREA: !0,
                      LABEL: !0,
                      BUTTON: !0
                    }),
                    (axs.constants.NATIVELY_DISABLEABLE = {
                      BUTTON: !0,
                      INPUT: !0,
                      SELECT: !0,
                      TEXTAREA: !0,
                      FIELDSET: !0,
                      OPTGROUP: !0,
                      OPTION: !0
                    }),
                    (axs.constants.ARIA_TO_HTML_ATTRIBUTE = {
                      "aria-checked": "checked",
                      "aria-disabled": "disabled",
                      "aria-hidden": "hidden",
                      "aria-expanded": "open",
                      "aria-valuemax": "max",
                      "aria-valuemin": "min",
                      "aria-readonly": "readonly",
                      "aria-required": "required",
                      "aria-selected": "selected",
                      "aria-valuenow": "value"
                    }),
                    (axs.constants.TAG_TO_IMPLICIT_SEMANTIC_INFO = {
                      A: [
                        {
                          role: "link",
                          allowed: "button checkbox menuitem menuitemcheckbox menuitemradio tab treeitem".split(
                            " "
                          ),
                          selector: "a[href]"
                        }
                      ],
                      ADDRESS: [
                        { role: "", allowed: ["contentinfo", "presentation"] }
                      ],
                      AREA: [{ role: "link", selector: "area[href]" }],
                      ARTICLE: [
                        {
                          role: "article",
                          allowed: [
                            "presentation",
                            "article",
                            "document",
                            "application",
                            "main"
                          ]
                        }
                      ],
                      ASIDE: [
                        {
                          role: "complementary",
                          allowed: [
                            "note",
                            "complementary",
                            "search",
                            "presentation"
                          ]
                        }
                      ],
                      AUDIO: [
                        { role: "", allowed: ["application", "presentation"] }
                      ],
                      BASE: [{ role: "", reserved: !0 }],
                      BODY: [{ role: "document", allowed: ["presentation"] }],
                      BUTTON: [
                        {
                          role: "button",
                          allowed: [
                            "link",
                            "menuitem",
                            "menuitemcheckbox",
                            "menuitemradio",
                            "radio"
                          ],
                          selector:
                            'button:not([aria-pressed]):not([type="menu"])'
                        },
                        {
                          role: "button",
                          allowed: ["button"],
                          selector: "button[aria-pressed]"
                        },
                        {
                          role: "button",
                          attributes: { "aria-haspopup": !0 },
                          allowed: [
                            "link",
                            "menuitem",
                            "menuitemcheckbox",
                            "menuitemradio",
                            "radio"
                          ],
                          selector: 'button[type="menu"]'
                        }
                      ],
                      CAPTION: [{ role: "", allowed: ["presentation"] }],
                      COL: [{ role: "", reserved: !0 }],
                      COLGROUP: [{ role: "", reserved: !0 }],
                      DATALIST: [
                        {
                          role: "listbox",
                          attributes: { "aria-multiselectable": !1 },
                          allowed: ["presentation"]
                        }
                      ],
                      DEL: [{ role: "", allowed: ["*"] }],
                      DD: [{ role: "", allowed: ["presentation"] }],
                      DT: [{ role: "", allowed: ["presentation"] }],
                      DETAILS: [
                        { role: "group", allowed: ["group", "presentation"] }
                      ],
                      DIALOG: [
                        {
                          role: "dialog",
                          allowed: "dialog alert alertdialog application log marquee status".split(
                            " "
                          ),
                          selector: "dialog[open]"
                        },
                        {
                          role: "dialog",
                          attributes: { "aria-hidden": !0 },
                          allowed: "dialog alert alertdialog application log marquee status".split(
                            " "
                          ),
                          selector: "dialog:not([open])"
                        }
                      ],
                      DIV: [{ role: "", allowed: ["*"] }],
                      DL: [{ role: "list", allowed: ["presentation"] }],
                      EMBED: [
                        {
                          role: "",
                          allowed: [
                            "application",
                            "document",
                            "img",
                            "presentation"
                          ]
                        }
                      ],
                      FIGURE: [{ role: "", allowed: ["*"] }],
                      FOOTER: [
                        { role: "", allowed: ["contentinfo", "presentation"] }
                      ],
                      FORM: [{ role: "form", allowed: ["presentation"] }],
                      P: [{ role: "", allowed: ["*"] }],
                      PRE: [{ role: "", allowed: ["*"] }],
                      BLOCKQUOTE: [{ role: "", allowed: ["*"] }],
                      H1: [{ role: "heading" }],
                      H2: [{ role: "heading" }],
                      H3: [{ role: "heading" }],
                      H4: [{ role: "heading" }],
                      H5: [{ role: "heading" }],
                      H6: [{ role: "heading" }],
                      HEAD: [{ role: "", reserved: !0 }],
                      HEADER: [
                        { role: "", allowed: ["banner", "presentation"] }
                      ],
                      HR: [{ role: "separator", allowed: ["presentation"] }],
                      HTML: [{ role: "", reserved: !0 }],
                      IFRAME: [
                        {
                          role: "",
                          allowed: [
                            "application",
                            "document",
                            "img",
                            "presentation"
                          ],
                          selector: "iframe:not([seamless])"
                        },
                        {
                          role: "",
                          allowed: [
                            "application",
                            "document",
                            "img",
                            "presentation",
                            "group"
                          ],
                          selector: "iframe[seamless]"
                        }
                      ],
                      IMG: [
                        {
                          role: "presentation",
                          reserved: !0,
                          selector: 'img[alt=""]'
                        },
                        {
                          role: "img",
                          allowed: ["*"],
                          selector: 'img[alt]:not([alt=""])'
                        }
                      ],
                      INPUT: [
                        {
                          role: "button",
                          allowed: [
                            "link",
                            "menuitem",
                            "menuitemcheckbox",
                            "menuitemradio",
                            "radio"
                          ],
                          selector: 'input[type="button"]:not([aria-pressed])'
                        },
                        {
                          role: "button",
                          allowed: ["button"],
                          selector: 'input[type="button"][aria-pressed]'
                        },
                        {
                          role: "checkbox",
                          allowed: ["checkbox"],
                          selector: 'input[type="checkbox"]'
                        },
                        { role: "", selector: 'input[type="color"]' },
                        { role: "", selector: 'input[type="date"]' },
                        { role: "", selector: 'input[type="datetime"]' },
                        {
                          role: "textbox",
                          selector: 'input[type="email"]:not([list])'
                        },
                        { role: "", selector: 'input[type="file"]' },
                        {
                          role: "",
                          reserved: !0,
                          selector: 'input[type="hidden"]'
                        },
                        {
                          role: "button",
                          allowed: ["button"],
                          selector: 'input[type="image"][aria-pressed]'
                        },
                        {
                          role: "button",
                          allowed: [
                            "link",
                            "menuitem",
                            "menuitemcheckbox",
                            "menuitemradio",
                            "radio"
                          ],
                          selector: 'input[type="image"]:not([aria-pressed])'
                        },
                        { role: "", selector: 'input[type="month"]' },
                        { role: "", selector: 'input[type="number"]' },
                        { role: "textbox", selector: 'input[type="password"]' },
                        {
                          role: "radio",
                          allowed: ["menuitemradio"],
                          selector: 'input[type="radio"]'
                        },
                        { role: "slider", selector: 'input[type="range"]' },
                        { role: "button", selector: 'input[type="reset"]' },
                        {
                          role: "combobox",
                          selector: 'input[type="search"][list]'
                        },
                        {
                          role: "textbox",
                          selector: 'input[type="search"]:not([list])'
                        },
                        { role: "button", selector: 'input[type="submit"]' },
                        {
                          role: "combobox",
                          selector: 'input[type="tel"][list]'
                        },
                        {
                          role: "textbox",
                          selector: 'input[type="tel"]:not([list])'
                        },
                        {
                          role: "combobox",
                          selector: 'input[type="text"][list]'
                        },
                        {
                          role: "textbox",
                          selector: 'input[type="text"]:not([list])'
                        },
                        { role: "textbox", selector: "input:not([type])" },
                        { role: "", selector: 'input[type="time"]' },
                        {
                          role: "combobox",
                          selector: 'input[type="url"][list]'
                        },
                        {
                          role: "textbox",
                          selector: 'input[type="url"]:not([list])'
                        },
                        { role: "", selector: 'input[type="week"]' }
                      ],
                      INS: [{ role: "", allowed: ["*"] }],
                      KEYGEN: [{ role: "" }],
                      LABEL: [{ role: "", allowed: ["presentation"] }],
                      LI: [
                        {
                          role: "listitem",
                          allowed: "menuitem menuitemcheckbox menuitemradio option tab treeitem presentation".split(
                            " "
                          ),
                          selector:
                            'ol:not([role="presentation"])>li, ul:not([role="presentation"])>li'
                        },
                        {
                          role: "listitem",
                          allowed: "listitem menuitem menuitemcheckbox menuitemradio option tab treeitem presentation".split(
                            " "
                          ),
                          selector:
                            'ol[role="presentation"]>li, ul[role="presentation"]>li'
                        }
                      ],
                      LINK: [
                        { role: "link", reserved: !0, selector: "link[href]" }
                      ],
                      MAIN: [{ role: "", allowed: ["main", "presentation"] }],
                      MAP: [{ role: "", reserved: !0 }],
                      MATH: [{ role: "", allowed: ["presentation"] }],
                      MENU: [
                        { role: "toolbar", selector: 'menu[type="toolbar"]' }
                      ],
                      MENUITEM: [
                        {
                          role: "menuitem",
                          selector: 'menuitem[type="command"]'
                        },
                        {
                          role: "menuitemcheckbox",
                          selector: 'menuitem[type="checkbox"]'
                        },
                        {
                          role: "menuitemradio",
                          selector: 'menuitem[type="radio"]'
                        }
                      ],
                      META: [{ role: "", reserved: !0 }],
                      METER: [
                        { role: "progressbar", allowed: ["presentation"] }
                      ],
                      NAV: [
                        {
                          role: "navigation",
                          allowed: ["navigation", "presentation"]
                        }
                      ],
                      NOSCRIPT: [{ role: "", reserved: !0 }],
                      OBJECT: [
                        {
                          role: "",
                          allowed: [
                            "application",
                            "document",
                            "img",
                            "presentation"
                          ]
                        }
                      ],
                      OL: [
                        {
                          role: "list",
                          allowed: "directory group listbox menu menubar tablist toolbar tree presentation".split(
                            " "
                          )
                        }
                      ],
                      OPTGROUP: [{ role: "", allowed: ["presentation"] }],
                      OPTION: [{ role: "option" }],
                      OUTPUT: [{ role: "status", allowed: ["*"] }],
                      PARAM: [{ role: "", reserved: !0 }],
                      PICTURE: [{ role: "", reserved: !0 }],
                      PROGRESS: [
                        { role: "progressbar", allowed: ["presentation"] }
                      ],
                      SCRIPT: [{ role: "", reserved: !0 }],
                      SECTION: [
                        {
                          role: "region",
                          allowed: "alert alertdialog application contentinfo dialog document log marquee search status presentation".split(
                            " "
                          )
                        }
                      ],
                      SELECT: [{ role: "listbox" }],
                      SOURCE: [{ role: "", reserved: !0 }],
                      SPAN: [{ role: "", allowed: ["*"] }],
                      STYLE: [{ role: "", reserved: !0 }],
                      SVG: [
                        {
                          role: "",
                          allowed: [
                            "application",
                            "document",
                            "img",
                            "presentation"
                          ]
                        }
                      ],
                      SUMMARY: [{ role: "", allowed: ["presentation"] }],
                      TABLE: [{ role: "", allowed: ["*"] }],
                      TEMPLATE: [{ role: "", reserved: !0 }],
                      TEXTAREA: [{ role: "textbox" }],
                      TBODY: [{ role: "rowgroup", allowed: ["*"] }],
                      THEAD: [{ role: "rowgroup", allowed: ["*"] }],
                      TFOOT: [{ role: "rowgroup", allowed: ["*"] }],
                      TITLE: [{ role: "", reserved: !0 }],
                      TD: [{ role: "", allowed: ["*"] }],
                      TH: [{ role: "", allowed: ["*"] }],
                      TR: [{ role: "", allowed: ["*"] }],
                      TRACK: [{ role: "", reserved: !0 }],
                      UL: [
                        {
                          role: "list",
                          allowed: "directory group listbox menu menubar tablist toolbar tree presentation".split(
                            " "
                          )
                        }
                      ],
                      VIDEO: [
                        { role: "", allowed: ["application", "presentation"] }
                      ]
                    }),
                    (axs.dom = {}),
                    (axs.dom.parentElement = function(e) {
                      if (!e) return null;
                      if (!(e = axs.dom.composedParentNode(e))) return null;
                      switch (e.nodeType) {
                        case Node.ELEMENT_NODE:
                          return e;
                        default:
                          return axs.dom.parentElement(e);
                      }
                    }),
                    (axs.dom.shadowHost = function(e) {
                      return "host" in e ? e.host : null;
                    }),
                    (axs.dom.composedParentNode = function(e) {
                      if (!e) return null;
                      if (e.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
                        return axs.dom.shadowHost(e);
                      var t = e.parentNode;
                      return t
                        ? t.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                          ? axs.dom.shadowHost(t)
                          : t.shadowRoot
                          ? (e.nodeType === Node.ELEMENT_NODE ||
                              e.nodeType === Node.TEXT_NODE) &&
                            ((t = e.assignedSlot),
                            HTMLSlotElement && t instanceof HTMLSlotElement)
                            ? axs.dom.composedParentNode(t)
                            : "function" ==
                                typeof e.getDestinationInsertionPoints &&
                              ((e = e.getDestinationInsertionPoints()),
                              0 < e.length)
                            ? axs.dom.composedParentNode(e[e.length - 1])
                            : null
                          : t
                        : null;
                    }),
                    (axs.dom.asElement = function(e) {
                      switch (e.nodeType) {
                        case Node.COMMENT_NODE:
                          break;
                        case Node.ELEMENT_NODE:
                          if (
                            "script" == e.localName ||
                            "template" == e.localName
                          )
                            break;
                          return e;
                        case Node.DOCUMENT_FRAGMENT_NODE:
                          return e.host;
                        case Node.TEXT_NODE:
                          return axs.dom.parentElement(e);
                        default:
                          console.warn("Unhandled node type: ", e.nodeType);
                      }
                      return null;
                    }),
                    (axs.dom.composedTreeSearch = function(e, t, r, o, n) {
                      if (e === t) return !0;
                      if (e.nodeType == Node.ELEMENT_NODE) var a = e;
                      var i = !1;
                      if (((o = Object.create(o)), a)) {
                        var s = a.localName;
                        if (
                          (o.collectIdRefs &&
                            (o.idrefs = axs.utils.getReferencedIds(a)),
                          (!o.disabled ||
                            ("legend" === s &&
                              axs.browserUtils.matchSelector(
                                a,
                                "fieldset>legend:first-of-type"
                              ))) &&
                            (o.disabled = axs.utils.isElementDisabled(a, !0)),
                          o.hidden || (o.hidden = axs.utils.isElementHidden(a)),
                          r.preorder && !r.preorder(a, o))
                        )
                          return i;
                        var l = a.shadowRoot || a.webkitShadowRoot;
                        if (l)
                          return (
                            o.level++,
                            (i = axs.dom.composedTreeSearch(l, t, r, o, l)),
                            a && r.postorder && !i && r.postorder(a, o),
                            i
                          );
                        if (
                          "content" == s &&
                          "function" == typeof a.getDistributedNodes
                        ) {
                          for (
                            e = a.getDistributedNodes(), s = 0;
                            s < e.length && !i;
                            s++
                          )
                            i = axs.dom.composedTreeSearch(e[s], t, r, o, n);
                          return (
                            r.postorder && !i && r.postorder.call(null, a, o), i
                          );
                        }
                      }
                      for (e = e.firstChild; null != e && !i; )
                        (i = axs.dom.composedTreeSearch(e, t, r, o, n)),
                          (e = e.nextSibling);
                      return (
                        a && r.postorder && !i && r.postorder.call(null, a, o),
                        i
                      );
                    }),
                    (axs.utils = {}),
                    (axs.utils.FOCUSABLE_ELEMENTS_SELECTOR =
                      "input:not([type=hidden]):not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),a[href],iframe,[tabindex]"),
                    (axs.utils.LABELABLE_ELEMENTS_SELECTOR =
                      "button,input:not([type=hidden]),keygen,meter,output,progress,select,textarea"),
                    (axs.utils.elementIsTransparent = function(e) {
                      return "0" == e.style.opacity;
                    }),
                    (axs.utils.elementHasZeroArea = function(e) {
                      e = e.getBoundingClientRect();
                      var t = e.top - e.bottom;
                      return !(e.right - e.left && t);
                    }),
                    (axs.utils.elementIsOutsideScrollArea = function(e) {
                      for (
                        var t = axs.dom.parentElement(e),
                          r = e.ownerDocument.defaultView;
                        t != r.document.body;

                      ) {
                        if (axs.utils.isClippedBy(e, t)) return !0;
                        if (
                          axs.utils.canScrollTo(e, t) &&
                          !axs.utils.elementIsOutsideScrollArea(t)
                        )
                          return !1;
                        t = axs.dom.parentElement(t);
                      }
                      return !axs.utils.canScrollTo(e, r.document.body);
                    }),
                    (axs.utils.canScrollTo = function(e, t) {
                      var r = e.getBoundingClientRect(),
                        o = t.getBoundingClientRect();
                      if (t == t.ownerDocument.body)
                        var n = o.top,
                          a = o.left;
                      else
                        (n = o.top - t.scrollTop), (a = o.left - t.scrollLeft);
                      var i = n + t.scrollHeight,
                        s = a + t.scrollWidth;
                      return (
                        !(
                          r.right < a ||
                          r.bottom < n ||
                          r.left > s ||
                          r.top > i
                        ) &&
                        ((n = e.ownerDocument.defaultView),
                        (a = n.getComputedStyle(t)),
                        !(r.left > o.right || r.top > o.bottom) ||
                          "scroll" == a.overflow ||
                          "auto" == a.overflow ||
                          t instanceof n.HTMLBodyElement)
                      );
                    }),
                    (axs.utils.isClippedBy = function(e, t) {
                      var r = e.getBoundingClientRect(),
                        o = t.getBoundingClientRect(),
                        n = o.top - t.scrollTop,
                        a = o.left - t.scrollLeft,
                        i = e.ownerDocument.defaultView.getComputedStyle(t);
                      return (
                        ((r.right < o.left ||
                          r.bottom < o.top ||
                          r.left > o.right ||
                          r.top > o.bottom) &&
                          "hidden" == i.overflow) ||
                        ((r.right < a || r.bottom < n) &&
                          "visible" != i.overflow)
                      );
                    }),
                    (axs.utils.isAncestor = function(e, t) {
                      if (null == t) return !1;
                      if (t === e) return !0;
                      var r = axs.dom.composedParentNode(t);
                      return axs.utils.isAncestor(e, r);
                    }),
                    (axs.utils.overlappingElements = function(e) {
                      if (axs.utils.elementHasZeroArea(e)) return null;
                      for (
                        var t = [], r = e.getClientRects(), o = 0;
                        o < r.length;
                        o++
                      ) {
                        var n = r[o],
                          n = document.elementFromPoint(
                            (n.left + n.right) / 2,
                            (n.top + n.bottom) / 2
                          );
                        if (
                          null != n &&
                          n != e &&
                          !axs.utils.isAncestor(n, e) &&
                          !axs.utils.isAncestor(e, n)
                        ) {
                          var a = window.getComputedStyle(n, null);
                          a &&
                            (a = axs.utils.getBgColor(a, n)) &&
                            0 < a.alpha &&
                            0 > t.indexOf(n) &&
                            t.push(n);
                        }
                      }
                      return t;
                    }),
                    (axs.utils.elementIsHtmlControl = function(e) {
                      var t = e.ownerDocument.defaultView;
                      return (
                        e instanceof t.HTMLButtonElement ||
                        e instanceof t.HTMLInputElement ||
                        e instanceof t.HTMLSelectElement ||
                        e instanceof t.HTMLTextAreaElement
                      );
                    }),
                    (axs.utils.elementIsAriaWidget = function(e) {
                      return !!(
                        e.hasAttribute("role") &&
                        (e = e.getAttribute("role")) &&
                        (e = axs.constants.ARIA_ROLES[e]) &&
                        "widget" in e.allParentRolesSet
                      );
                    }),
                    (axs.utils.elementIsVisible = function(e) {
                      return !(
                        axs.utils.elementIsTransparent(e) ||
                        axs.utils.elementHasZeroArea(e) ||
                        axs.utils.elementIsOutsideScrollArea(e) ||
                        axs.utils.overlappingElements(e).length
                      );
                    }),
                    (axs.utils.isLargeFont = function(e) {
                      var t = e.fontSize;
                      e = "bold" == e.fontWeight;
                      var r = t.match(/(\d+)px/);
                      if (r) {
                        if (
                          ((t = parseInt(r[1], 10)),
                          (r = window
                            .getComputedStyle(document.body, null)
                            .fontSize.match(/(\d+)px/)))
                        )
                          var o = parseInt(r[1], 10),
                            r = 1.2 * o,
                            o = 1.5 * o;
                        else (r = 19.2), (o = 24);
                        return (e && t >= r) || t >= o;
                      }
                      return (r = t.match(/(\d+)em/))
                        ? ((t = parseInt(r[1], 10)),
                          !!((e && 1.2 <= t) || 1.5 <= t))
                        : (r = t.match(/(\d+)%/))
                        ? ((t = parseInt(r[1], 10)),
                          !!((e && 120 <= t) || 150 <= t))
                        : !!(
                            (r = t.match(/(\d+)pt/)) &&
                            ((t = parseInt(r[1], 10)),
                            (e && 14 <= t) || 18 <= t)
                          );
                    }),
                    (axs.utils.getBgColor = function(e, t) {
                      var r = axs.color.parseColor(e.backgroundColor);
                      if (!r) return null;
                      if (
                        (1 > e.opacity && (r.alpha *= e.opacity), 1 > r.alpha)
                      ) {
                        var o = axs.utils.getParentBgColor(t);
                        if (null == o) return null;
                        r = axs.color.flattenColors(r, o);
                      }
                      return r;
                    }),
                    (axs.utils.getParentBgColor = function(e) {
                      var t = e;
                      e = [];
                      for (var r = null; (t = axs.dom.parentElement(t)); ) {
                        var o = window.getComputedStyle(t, null);
                        if (o) {
                          var n = axs.color.parseColor(o.backgroundColor);
                          if (
                            n &&
                            (1 > o.opacity && (n.alpha *= o.opacity),
                            0 != n.alpha && (e.push(n), 1 == n.alpha))
                          ) {
                            r = !0;
                            break;
                          }
                        }
                      }
                      for (
                        r || e.push(new axs.color.Color(255, 255, 255, 1)),
                          t = e.pop();
                        e.length;

                      )
                        (r = e.pop()), (t = axs.color.flattenColors(r, t));
                      return t;
                    }),
                    (axs.utils.getFgColor = function(e, t, r) {
                      var o = axs.color.parseColor(e.color);
                      return o
                        ? (1 > o.alpha && (o = axs.color.flattenColors(o, r)),
                          1 > e.opacity &&
                            ((t = axs.utils.getParentBgColor(t)),
                            (o.alpha *= e.opacity),
                            (o = axs.color.flattenColors(o, t))),
                          o)
                        : null;
                    }),
                    (axs.utils.getContrastRatioForElement = function(e) {
                      var t = window.getComputedStyle(e, null);
                      return axs.utils.getContrastRatioForElementWithComputedStyle(
                        t,
                        e
                      );
                    }),
                    (axs.utils.getContrastRatioForElementWithComputedStyle = function(
                      e,
                      t
                    ) {
                      if (axs.utils.isElementHidden(t)) return null;
                      var r = axs.utils.getBgColor(e, t);
                      if (!r) return null;
                      var o = axs.utils.getFgColor(e, t, r);
                      return o ? axs.color.calculateContrastRatio(o, r) : null;
                    }),
                    (axs.utils.isNativeTextElement = function(e) {
                      var t = e.tagName.toLowerCase();
                      if (
                        ((e = e.type ? e.type.toLowerCase() : ""),
                        "textarea" == t)
                      )
                        return !0;
                      if ("input" != t) return !1;
                      switch (e) {
                        case "email":
                        case "number":
                        case "password":
                        case "search":
                        case "text":
                        case "tel":
                        case "url":
                        case "":
                          return !0;
                        default:
                          return !1;
                      }
                    }),
                    (axs.utils.isLowContrast = function(e, t, r) {
                      return (
                        (e = Math.round(10 * e) / 10),
                        r
                          ? 4.5 > e || (!axs.utils.isLargeFont(t) && 7 > e)
                          : 3 > e || (!axs.utils.isLargeFont(t) && 4.5 > e)
                      );
                    }),
                    (axs.utils.hasLabel = function(e) {
                      var t = e.tagName.toLowerCase(),
                        r = e.type ? e.type.toLowerCase() : "";
                      if (
                        e.hasAttribute("aria-label") ||
                        e.hasAttribute("title") ||
                        ("img" == t && e.hasAttribute("alt")) ||
                        ("input" == t &&
                          "image" == r &&
                          e.hasAttribute("alt")) ||
                        ("input" == t && ("submit" == r || "reset" == r)) ||
                        e.hasAttribute("aria-labelledby") ||
                        (e.hasAttribute("id") &&
                          0 <
                            document.querySelectorAll(
                              'label[for="' + e.id + '"]'
                            ).length)
                      )
                        return !0;
                      for (t = axs.dom.parentElement(e); t; ) {
                        if (
                          "label" == t.tagName.toLowerCase() &&
                          t.control == e
                        )
                          return !0;
                        t = axs.dom.parentElement(t);
                      }
                      return !1;
                    }),
                    (axs.utils.isNativelyDisableable = function(e) {
                      return (
                        e.tagName.toUpperCase() in
                        axs.constants.NATIVELY_DISABLEABLE
                      );
                    }),
                    (axs.utils.isElementDisabled = function(e, t) {
                      if (
                        axs.browserUtils.matchSelector(
                          e,
                          t
                            ? "[aria-disabled=true]"
                            : "[aria-disabled=true], [aria-disabled=true] *"
                        )
                      )
                        return !0;
                      if (
                        !axs.utils.isNativelyDisableable(e) ||
                        axs.browserUtils.matchSelector(
                          e,
                          "fieldset>legend:first-of-type *"
                        )
                      )
                        return !1;
                      for (
                        var r = e;
                        null !== r;
                        r = axs.dom.parentElement(r)
                      ) {
                        if (r.hasAttribute("disabled")) return !0;
                        if (t) break;
                      }
                      return !1;
                    }),
                    (axs.utils.isElementHidden = function(e) {
                      if (
                        !(e instanceof e.ownerDocument.defaultView.HTMLElement)
                      )
                        return !1;
                      if (e.hasAttribute("chromevoxignoreariahidden"))
                        var t = !0;
                      var r = window.getComputedStyle(e, null);
                      return (
                        "none" == r.display ||
                        "hidden" == r.visibility ||
                        (!(
                          !e.hasAttribute("aria-hidden") ||
                          "true" != e.getAttribute("aria-hidden").toLowerCase()
                        ) &&
                          !t)
                      );
                    }),
                    (axs.utils.isElementOrAncestorHidden = function(e) {
                      return (
                        !!axs.utils.isElementHidden(e) ||
                        (!!axs.dom.parentElement(e) &&
                          axs.utils.isElementOrAncestorHidden(
                            axs.dom.parentElement(e)
                          ))
                      );
                    }),
                    (axs.utils.isInlineElement = function(e) {
                      return (
                        (e = e.tagName.toUpperCase()),
                        axs.constants.InlineElements[e]
                      );
                    }),
                    (axs.utils.getRoles = function(e, t) {
                      if (
                        !e ||
                        e.nodeType !== Node.ELEMENT_NODE ||
                        (!e.hasAttribute("role") && !t)
                      )
                        return null;
                      var r = e.getAttribute("role");
                      if (
                        (!r && t && (r = axs.properties.getImplicitRole(e)), !r)
                      )
                        return null;
                      for (
                        var r = r.split(" "),
                          o = { roles: [], valid: !1 },
                          n = 0;
                        n < r.length;
                        n++
                      ) {
                        var a = r[n],
                          i = axs.constants.ARIA_ROLES[a],
                          a = { name: a };
                        i && !i.abstract
                          ? ((a.details = i),
                            o.applied || (o.applied = a),
                            (a.valid = o.valid = !0))
                          : (a.valid = !1),
                          o.roles.push(a);
                      }
                      return o;
                    }),
                    (axs.utils.getAriaPropertyValue = function(e, t, r) {
                      var o = e.replace(/^aria-/, ""),
                        n = axs.constants.ARIA_PROPERTIES[o],
                        o = { name: e, rawValue: t };
                      if (!n)
                        return (
                          (o.valid = !1),
                          (o.reason =
                            '"' + e + '" is not a valid ARIA property'),
                          o
                        );
                      if (!(n = n.valueType))
                        return (
                          (o.valid = !1),
                          (o.reason =
                            '"' + e + '" is not a valid ARIA property'),
                          o
                        );
                      switch (n) {
                        case "idref":
                          (e = axs.utils.isValidIDRefValue(t, r)),
                            (o.valid = e.valid),
                            (o.reason = e.reason),
                            (o.idref = e.idref);
                        case "idref_list":
                          for (
                            e = t.split(/\s+/), o.valid = !0, t = 0;
                            t < e.length;
                            t++
                          )
                            (n = axs.utils.isValidIDRefValue(e[t], r)),
                              n.valid || (o.valid = !1),
                              o.values ? o.values.push(n) : (o.values = [n]);
                          return o;
                        case "integer":
                          return (
                            (r = axs.utils.isValidNumber(t)),
                            r.valid
                              ? (Math.floor(r.value) !== r.value
                                  ? ((o.valid = !1),
                                    (o.reason = t + " is not a whole integer"))
                                  : ((o.valid = !0), (o.value = r.value)),
                                o)
                              : ((o.valid = !1), (o.reason = r.reason), o)
                          );
                        case "decimal":
                        case "number":
                          return (
                            (r = axs.utils.isValidNumber(t)),
                            ((o.valid = r.valid), r.valid)
                              ? ((o.value = r.value), o)
                              : ((o.reason = r.reason), o)
                          );
                        case "string":
                          return (o.valid = !0), (o.value = t), o;
                        case "token":
                          return (
                            (r = axs.utils.isValidTokenValue(
                              e,
                              t.toLowerCase()
                            )),
                            r.valid
                              ? ((o.valid = !0), (o.value = r.value))
                              : ((o.valid = !1),
                                (o.value = t),
                                (o.reason = r.reason)),
                            o
                          );
                        case "token_list":
                          for (
                            n = t.split(/\s+/), o.valid = !0, t = 0;
                            t < n.length;
                            t++
                          )
                            (r = axs.utils.isValidTokenValue(
                              e,
                              n[t].toLowerCase()
                            )),
                              r.valid ||
                                ((o.valid = !1),
                                o.reason
                                  ? ((o.reason = [o.reason]),
                                    o.reason.push(r.reason))
                                  : ((o.reason = r.reason),
                                    (o.possibleValues = r.possibleValues))),
                              o.values
                                ? o.values.push(r.value)
                                : (o.values = [r.value]);
                          return o;
                        case "tristate":
                          return (
                            (r = axs.utils.isPossibleValue(
                              t.toLowerCase(),
                              axs.constants.MIXED_VALUES,
                              e
                            )),
                            r.valid
                              ? ((o.valid = !0), (o.value = r.value))
                              : ((o.valid = !1),
                                (o.value = t),
                                (o.reason = r.reason)),
                            o
                          );
                        case "boolean":
                          return (
                            (r = axs.utils.isValidBoolean(t)),
                            r.valid
                              ? ((o.valid = !0), (o.value = r.value))
                              : ((o.valid = !1),
                                (o.value = t),
                                (o.reason = r.reason)),
                            o
                          );
                      }
                      return (
                        (o.valid = !1),
                        (o.reason = "Not a valid ARIA property"),
                        o
                      );
                    }),
                    (axs.utils.isValidTokenValue = function(e, t) {
                      var r = e.replace(/^aria-/, "");
                      return axs.utils.isPossibleValue(
                        t,
                        axs.constants.ARIA_PROPERTIES[r].valuesSet,
                        e
                      );
                    }),
                    (axs.utils.isPossibleValue = function(e, t, r) {
                      return t[e]
                        ? { valid: !0, value: e }
                        : {
                            valid: !1,
                            value: e,
                            reason: '"' + e + '" is not a valid value for ' + r,
                            possibleValues: Object.keys(t)
                          };
                    }),
                    (axs.utils.isValidBoolean = function(e) {
                      try {
                        var t = JSON.parse(e);
                      } catch (e) {
                        t = "";
                      }
                      return "boolean" != typeof t
                        ? {
                            valid: !1,
                            value: e,
                            reason: '"' + e + '" is not a true/false value'
                          }
                        : { valid: !0, value: t };
                    }),
                    (axs.utils.isValidIDRefValue = function(e, t) {
                      return 0 == e.length
                        ? { valid: !0, idref: e }
                        : t.ownerDocument.getElementById(e)
                        ? { valid: !0, idref: e }
                        : {
                            valid: !1,
                            idref: e,
                            reason: 'No element with ID "' + e + '"'
                          };
                    }),
                    (axs.utils.isValidNumber = function(e) {
                      var t = {
                        valid: !1,
                        value: e,
                        reason: '"' + e + '" is not a number'
                      };
                      return e
                        ? /^0x/i.test(e)
                          ? ((t.reason = '"' + e + '" is not a decimal number'),
                            t)
                          : ((e *= 1),
                            isFinite(e) ? { valid: !0, value: e } : t)
                        : t;
                    }),
                    (axs.utils.isElementImplicitlyFocusable = function(e) {
                      var t = e.ownerDocument.defaultView;
                      return e instanceof t.HTMLAnchorElement ||
                        e instanceof t.HTMLAreaElement
                        ? e.hasAttribute("href")
                        : (e instanceof t.HTMLInputElement ||
                            e instanceof t.HTMLSelectElement ||
                            e instanceof t.HTMLTextAreaElement ||
                            e instanceof t.HTMLButtonElement ||
                            e instanceof t.HTMLIFrameElement) &&
                            !e.disabled;
                    }),
                    (axs.utils.values = function(e) {
                      var t,
                        r = [];
                      for (t in e)
                        e.hasOwnProperty(t) &&
                          "function" != typeof e[t] &&
                          r.push(e[t]);
                      return r;
                    }),
                    (axs.utils.namedValues = function(e) {
                      var t,
                        r = {};
                      for (t in e)
                        e.hasOwnProperty(t) &&
                          "function" != typeof e[t] &&
                          (r[t] = e[t]);
                      return r;
                    }),
                    (axs.utils.getQuerySelectorText = function(e) {
                      if (null == e || "HTML" == e.tagName) return "html";
                      if ("BODY" == e.tagName) return "body";
                      if (e.hasAttribute) {
                        if (e.id) return "#" + escapeId(e.id);
                        if (e.className) {
                          for (var t = "", r = 0; r < e.classList.length; r++)
                            t += "." + e.classList[r];
                          var o = 0;
                          if (e.parentNode)
                            for (r = 0; r < e.parentNode.children.length; r++) {
                              var n = e.parentNode.children[r];
                              if (
                                (axs.browserUtils.matchSelector(n, t) && o++,
                                n === e)
                              )
                                break;
                            }
                          else o = 1;
                          if (1 == o)
                            return (
                              axs.utils.getQuerySelectorText(e.parentNode) +
                              " > " +
                              t
                            );
                        }
                        if (e.parentNode) {
                          for (
                            t = e.parentNode.children, o = 1, r = 0;
                            t[r] !== e;

                          )
                            t[r].tagName == e.tagName && o++, r++;
                          return (
                            (r = ""),
                            "BODY" != e.parentNode.tagName &&
                              (r =
                                axs.utils.getQuerySelectorText(e.parentNode) +
                                " > "),
                            1 == o
                              ? r + e.tagName
                              : r + e.tagName + ":nth-of-type(" + o + ")"
                          );
                        }
                      } else if (e.selectorText) return e.selectorText;
                      return "";
                    }),
                    (axs.utils.getAriaIdReferrers = function(e, t) {
                      var r = function(e) {
                        var t = axs.constants.ARIA_PROPERTIES[e];
                        if (t) {
                          if ("idref" === t.valueType)
                            return "[aria-" + e + "='" + o + "']";
                          if ("idref_list" === t.valueType)
                            return "[aria-" + e + "~='" + o + "']";
                        }
                        return "";
                      };
                      if (!e) return null;
                      var o = e.id;
                      if (!o) return null;
                      if (((o = o.replace(/'/g, "\\'")), !t)) {
                        var n = [];
                        for (a in axs.constants.ARIA_PROPERTIES)
                          (i = r(a)) && n.push(i);
                        return e.ownerDocument.querySelectorAll(n.join(","));
                      }
                      var a = t.replace(/^aria-/, ""),
                        i = r(a);
                      return i ? e.ownerDocument.querySelectorAll(i) : null;
                    }),
                    (axs.utils.getHtmlIdReferrers = function(e) {
                      if (!e) return null;
                      var t = e.id;
                      if (!t) return null;
                      var t = t.replace(/'/g, "\\'"),
                        r = "[contextmenu='{id}'] [itemref~='{id}'] button[form='{id}'] button[menu='{id}'] fieldset[form='{id}'] input[form='{id}'] input[list='{id}'] keygen[form='{id}'] label[for='{id}'] label[form='{id}'] menuitem[command='{id}'] object[form='{id}'] output[for~='{id}'] output[form='{id}'] select[form='{id}'] td[headers~='{id}'] textarea[form='{id}'] tr[headers~='{id}']"
                          .split(" ")
                          .map(function(e) {
                            return e.replace("{id}", t);
                          });
                      return e.ownerDocument.querySelectorAll(r.join(","));
                    }),
                    (axs.utils.getReferencedIds = function(e) {
                      for (
                        var t = [],
                          r = function(e) {
                            e &&
                              (0 < e.indexOf(" ")
                                ? (t = t.concat(a.value.split(" ")))
                                : t.push(e));
                          },
                          o = 0;
                        o < e.attributes.length;
                        o++
                      ) {
                        var n = e.tagName.toLowerCase(),
                          a = e.attributes[o];
                        if (a.specified) {
                          var i = a.name,
                            s = i.match(/aria-(.+)/);
                          if (s)
                            !(n = axs.constants.ARIA_PROPERTIES[s[1]]) ||
                              ("idref" !== n.valueType &&
                                "idref_list" !== n.valueType) ||
                              r(a.value);
                          else
                            switch (i) {
                              case "contextmenu":
                              case "itemref":
                                r(a.value);
                                break;
                              case "form":
                                ("button" != n &&
                                  "fieldset" != n &&
                                  "input" != n &&
                                  "keygen" != n &&
                                  "label" != n &&
                                  "object" != n &&
                                  "output" != n &&
                                  "select" != n &&
                                  "textarea" != n) ||
                                  r(a.value);
                                break;
                              case "for":
                                ("label" != n && "output" != n) || r(a.value);
                                break;
                              case "menu":
                                "button" == n && r(a.value);
                                break;
                              case "list":
                                "input" == n && r(a.value);
                                break;
                              case "command":
                                "menuitem" == n && r(a.value);
                                break;
                              case "headers":
                                ("td" != n && "tr" != n) || r(a.value);
                            }
                        }
                      }
                      return t;
                    }),
                    (axs.utils.getIdReferrers = function(e) {
                      var t = [],
                        r = axs.utils.getHtmlIdReferrers(e);
                      return (
                        r && (t = t.concat(Array.prototype.slice.call(r))),
                        (r = axs.utils.getAriaIdReferrers(e)) &&
                          (t = t.concat(Array.prototype.slice.call(r))),
                        t
                      );
                    }),
                    (axs.utils.getIdReferents = function(e, t) {
                      var r = [],
                        o = e.replace(/^aria-/, ""),
                        o = axs.constants.ARIA_PROPERTIES[o];
                      if (!o || !t.hasAttribute(e)) return r;
                      if ("idref_list" === (o = o.valueType) || "idref" === o)
                        for (
                          var o = t.ownerDocument,
                            n = t.getAttribute(e),
                            n = n.split(/\s+/),
                            a = 0,
                            i = n.length;
                          a < i;
                          a++
                        ) {
                          var s = o.getElementById(n[a]);
                          s && (r[r.length] = s);
                        }
                      return r;
                    }),
                    (axs.utils.getAriaPropertiesByValueType = function(e) {
                      var t,
                        r = {};
                      for (t in axs.constants.ARIA_PROPERTIES) {
                        var o = axs.constants.ARIA_PROPERTIES[t];
                        o && 0 <= e.indexOf(o.valueType) && (r[t] = o);
                      }
                      return r;
                    }),
                    (axs.utils.getSelectorForAriaProperties = function(e) {
                      return (
                        (e = Object.keys(e).map(function(e) {
                          return "[aria-" + e + "]";
                        })),
                        e.sort(),
                        e.join(",")
                      );
                    }),
                    (axs.utils.findDescendantsWithRole = function(e, t) {
                      if (!e || !t) return [];
                      var r = axs.properties.getSelectorForRole(t);
                      return r && (r = e.querySelectorAll(r))
                        ? (r = Array.prototype.map.call(r, function(e) {
                            return e;
                          }))
                        : [];
                    }),
                    (axs.properties = {}),
                    (axs.properties.TEXT_CONTENT_XPATH =
                      './/text()[normalize-space(.)!=""]/parent::*[name()!="script"]'),
                    (axs.properties.getFocusProperties = function(e) {
                      var t = {},
                        r = e.getAttribute("tabindex");
                      if (
                        (void 0 != r
                          ? (t.tabindex = { value: r, valid: !0 })
                          : axs.utils.isElementImplicitlyFocusable(e) &&
                            (t.implicitlyFocusable = { value: !0, valid: !0 }),
                        0 == Object.keys(t).length)
                      )
                        return null;
                      var o = axs.utils.elementIsTransparent(e),
                        n = axs.utils.elementHasZeroArea(e),
                        a = axs.utils.elementIsOutsideScrollArea(e),
                        i = axs.utils.overlappingElements(e);
                      if (o || n || a || 0 < i.length) {
                        var r = axs.utils.isElementOrAncestorHidden(e),
                          s = { value: !1, valid: r };
                        o && (s.transparent = !0),
                          n && (s.zeroArea = !0),
                          a && (s.outsideScrollArea = !0),
                          i && 0 < i.length && (s.overlappingElements = i),
                          (o = { value: r, valid: r }),
                          r && (o.reason = axs.properties.getHiddenReason(e)),
                          (s.hidden = o),
                          (t.visible = s);
                      } else t.visible = { value: !0, valid: !0 };
                      return t;
                    }),
                    (axs.properties.getHiddenReason = function(e) {
                      if (
                        !(
                          e &&
                          e instanceof e.ownerDocument.defaultView.HTMLElement
                        )
                      )
                        return null;
                      if (e.hasAttribute("chromevoxignoreariahidden"))
                        var t = !0;
                      var r = window.getComputedStyle(e, null);
                      return "none" == r.display
                        ? { property: "display: none", on: e }
                        : "hidden" == r.visibility
                        ? { property: "visibility: hidden", on: e }
                        : e.hasAttribute("aria-hidden") &&
                          "true" ==
                            e.getAttribute("aria-hidden").toLowerCase() &&
                          !t
                        ? { property: "aria-hidden", on: e }
                        : axs.properties.getHiddenReason(
                            axs.dom.parentElement(e)
                          );
                    }),
                    (axs.properties.getColorProperties = function(e) {
                      var t = {};
                      return (
                        (e = axs.properties.getContrastRatioProperties(e)) &&
                          (t.contrastRatio = e),
                        0 == Object.keys(t).length ? null : t
                      );
                    }),
                    (axs.properties.hasDirectTextDescendant = function(e) {
                      var t;
                      return (
                        (t =
                          e.nodeType == Node.DOCUMENT_NODE
                            ? e
                            : e.ownerDocument),
                        t.evaluate
                          ? (function() {
                              for (
                                var r = t.evaluate(
                                    axs.properties.TEXT_CONTENT_XPATH,
                                    e,
                                    null,
                                    XPathResult.ANY_TYPE,
                                    null
                                  ),
                                  o = r.iterateNext();
                                null != o;
                                o = r.iterateNext()
                              )
                                if (o === e) return !0;
                              return !1;
                            })()
                          : (function() {
                              for (
                                var r = t.createTreeWalker(
                                  e,
                                  NodeFilter.SHOW_TEXT,
                                  null,
                                  !1
                                );
                                r.nextNode();

                              ) {
                                var o = r.currentNode,
                                  n = o.parentNode,
                                  n = n.host || n,
                                  n = n.tagName.toLowerCase();
                                if (
                                  o.nodeValue.trim() &&
                                  "script" !== n &&
                                  e !== o
                                )
                                  return !0;
                              }
                              return !1;
                            })()
                      );
                    }),
                    (axs.properties.getContrastRatioProperties = function(e) {
                      if (!axs.properties.hasDirectTextDescendant(e))
                        return null;
                      var t = {},
                        r = window.getComputedStyle(e, null),
                        o = axs.utils.getBgColor(r, e);
                      if (!o) return null;
                      t.backgroundColor = axs.color.colorToString(o);
                      var n = axs.utils.getFgColor(r, e, o);
                      if (
                        ((t.foregroundColor = axs.color.colorToString(n)),
                        !(e = axs.utils.getContrastRatioForElementWithComputedStyle(
                          r,
                          e
                        )))
                      )
                        return null;
                      (t.value = e.toFixed(2)),
                        axs.utils.isLowContrast(e, r) && (t.alert = !0);
                      var a = axs.utils.isLargeFont(r) ? 3 : 4.5,
                        r = axs.utils.isLargeFont(r) ? 4.5 : 7,
                        i = {};
                      return (
                        a > e && (i.AA = a),
                        r > e && (i.AAA = r),
                        Object.keys(i).length
                          ? ((o = axs.color.suggestColors(o, n, i)) &&
                              Object.keys(o).length &&
                              (t.suggestedColors = o),
                            t)
                          : t
                      );
                    }),
                    (axs.properties.findTextAlternatives = function(
                      e,
                      t,
                      r,
                      o
                    ) {
                      var n = r || !1;
                      if (
                        !(r = axs.dom.asElement(e)) ||
                        (!o && axs.utils.isElementOrAncestorHidden(r))
                      )
                        return null;
                      if (e.nodeType == Node.TEXT_NODE)
                        return (
                          (r = { type: "text" }),
                          (r.text = e.textContent),
                          (r.lastWord = axs.properties.getLastWord(r.text)),
                          (t.content = r),
                          e.textContent
                        );
                      if (
                        ((e = null),
                        n ||
                          (e = axs.properties.getTextFromAriaLabelledby(r, t)),
                        r.hasAttribute("aria-label"))
                      ) {
                        var a = { type: "text" };
                        (a.text = r.getAttribute("aria-label")),
                          (a.lastWord = axs.properties.getLastWord(a.text)),
                          e
                            ? (a.unused = !0)
                            : (n && axs.utils.elementIsHtmlControl(r)) ||
                              (e = a.text),
                          (t.ariaLabel = a);
                      }
                      if (
                        ((r.hasAttribute("role") &&
                          "presentation" == r.getAttribute("role")) ||
                          (e = axs.properties.getTextFromHostLanguageAttributes(
                            r,
                            t,
                            e,
                            n
                          )),
                        n &&
                          axs.utils.elementIsHtmlControl(r) &&
                          ((a = r.ownerDocument.defaultView),
                          r instanceof a.HTMLInputElement &&
                            ("text" == r.type &&
                              r.value &&
                              0 < r.value.length &&
                              (t.controlValue = { text: r.value }),
                            "range" == r.type &&
                              (t.controlValue = { text: r.value })),
                          r instanceof a.HTMLSelectElement &&
                            (t.controlValue = { text: r.value }),
                          t.controlValue &&
                            ((a = t.controlValue),
                            e ? (a.unused = !0) : (e = a.text))),
                        n && axs.utils.elementIsAriaWidget(r))
                      ) {
                        if (
                          ((n = r.getAttribute("role")),
                          "textbox" == n &&
                            r.textContent &&
                            0 < r.textContent.length &&
                            (t.controlValue = { text: r.textContent }),
                          ("slider" != n && "spinbutton" != n) ||
                            (r.hasAttribute("aria-valuetext")
                              ? (t.controlValue = {
                                  text: r.getAttribute("aria-valuetext")
                                })
                              : r.hasAttribute("aria-valuenow") &&
                                (t.controlValue = {
                                  value: r.getAttribute("aria-valuenow"),
                                  text: "" + r.getAttribute("aria-valuenow")
                                })),
                          "menu" == n)
                        ) {
                          for (
                            var i = r.querySelectorAll(
                                "[role=menuitemcheckbox], [role=menuitemradio]"
                              ),
                              a = [],
                              s = 0;
                            s < i.length;
                            s++
                          )
                            "true" == i[s].getAttribute("aria-checked") &&
                              a.push(i[s]);
                          if (0 < a.length) {
                            for (i = "", s = 0; s < a.length; s++)
                              (i += axs.properties.findTextAlternatives(
                                a[s],
                                {},
                                !0
                              )),
                                s < a.length - 1 && (i += ", ");
                            t.controlValue = { text: i };
                          }
                        }
                        ("combobox" != n && "select" != n) ||
                          (t.controlValue = { text: "TODO" }),
                          t.controlValue &&
                            ((a = t.controlValue),
                            e ? (a.unused = !0) : (e = a.text));
                      }
                      return (
                        (a = !0),
                        r.hasAttribute("role") &&
                          ((n = r.getAttribute("role")),
                          (n = axs.constants.ARIA_ROLES[n]) &&
                            (!n.namefrom ||
                              0 > n.namefrom.indexOf("contents")) &&
                            (a = !1)),
                        (o = axs.properties.getTextFromDescendantContent(
                          r,
                          o
                        )) &&
                          a &&
                          ((n = { type: "text" }),
                          (n.text = o),
                          (n.lastWord = axs.properties.getLastWord(n.text)),
                          e ? (n.unused = !0) : (e = o),
                          (t.content = n)),
                        r.hasAttribute("title") &&
                          ((o = { type: "string", valid: !0 }),
                          (o.text = r.getAttribute("title")),
                          (o.lastWord = axs.properties.getLastWord(o.lastWord)),
                          e ? (o.unused = !0) : (e = o.text),
                          (t.title = o)),
                        0 == Object.keys(t).length && null == e ? null : e
                      );
                    }),
                    (axs.properties.getTextFromDescendantContent = function(
                      e,
                      t
                    ) {
                      for (
                        var r = e.childNodes, o = [], n = 0;
                        n < r.length;
                        n++
                      ) {
                        var a = axs.properties.findTextAlternatives(
                          r[n],
                          {},
                          !0,
                          t
                        );
                        a && o.push(a.trim());
                      }
                      if (o.length) {
                        for (r = "", n = 0; n < o.length; n++)
                          r = [r, o[n]].join(" ").trim();
                        return r;
                      }
                      return null;
                    }),
                    (axs.properties.getTextFromAriaLabelledby = function(e, t) {
                      var r = null;
                      if (!e.hasAttribute("aria-labelledby")) return r;
                      for (
                        var o = e.getAttribute("aria-labelledby").split(/\s+/),
                          n = { valid: !0 },
                          a = [],
                          i = [],
                          s = 0;
                        s < o.length;
                        s++
                      ) {
                        var l = { type: "element" },
                          u = o[s];
                        l.value = u;
                        var c = document.getElementById(u);
                        c
                          ? ((l.valid = !0),
                            (l.text = axs.properties.findTextAlternatives(
                              c,
                              {},
                              !0,
                              !0
                            )),
                            (l.lastWord = axs.properties.getLastWord(l.text)),
                            a.push(l.text),
                            (l.element = c))
                          : ((l.valid = !1),
                            (n.valid = !1),
                            (l.errorMessage = {
                              messageKey: "noElementWithId",
                              args: [u]
                            })),
                          i.push(l);
                      }
                      return (
                        0 < i.length &&
                          ((i[i.length - 1].last = !0),
                          (n.values = i),
                          (n.text = a.join(" ")),
                          (n.lastWord = axs.properties.getLastWord(n.text)),
                          (r = n.text),
                          (t.ariaLabelledby = n)),
                        r
                      );
                    }),
                    (axs.properties.getTextFromHostLanguageAttributes = function(
                      e,
                      t,
                      r,
                      o
                    ) {
                      if (
                        axs.browserUtils.matchSelector(e, "img") &&
                        e.hasAttribute("alt")
                      ) {
                        var n = { type: "string", valid: !0 };
                        (n.text = e.getAttribute("alt")),
                          r ? (n.unused = !0) : (r = n.text),
                          (t.alt = n);
                      }
                      if (
                        axs.browserUtils.matchSelector(
                          e,
                          'input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), video:not([disabled])'
                        ) &&
                        !o
                      ) {
                        if (e.hasAttribute("id")) {
                          o = document.querySelectorAll(
                            'label[for="' + e.id + '"]'
                          );
                          for (
                            var n = {}, a = [], i = [], s = 0;
                            s < o.length;
                            s++
                          ) {
                            var l = { type: "element" },
                              u = o[s],
                              c = axs.properties.findTextAlternatives(
                                u,
                                {},
                                !0
                              );
                            c &&
                              0 < c.trim().length &&
                              ((l.text = c.trim()), i.push(c.trim())),
                              (l.element = u),
                              a.push(l);
                          }
                          0 < a.length &&
                            ((a[a.length - 1].last = !0),
                            (n.values = a),
                            (n.text = i.join(" ")),
                            (n.lastWord = axs.properties.getLastWord(n.text)),
                            r ? (n.unused = !0) : (r = n.text),
                            (t.labelFor = n));
                        }
                        for (o = axs.dom.parentElement(e), n = {}; o; ) {
                          if (
                            "label" == o.tagName.toLowerCase() &&
                            ((a = o), a.control == e)
                          ) {
                            (n.type = "element"),
                              (n.text = axs.properties.findTextAlternatives(
                                a,
                                {},
                                !0
                              )),
                              (n.lastWord = axs.properties.getLastWord(n.text)),
                              (n.element = a);
                            break;
                          }
                          o = axs.dom.parentElement(o);
                        }
                        n.text &&
                          (r ? (n.unused = !0) : (r = n.text),
                          (t.labelWrapped = n)),
                          axs.browserUtils.matchSelector(
                            e,
                            'input[type="image"]'
                          ) &&
                            e.hasAttribute("alt") &&
                            ((n = { type: "string", valid: !0 }),
                            (n.text = e.getAttribute("alt")),
                            r ? (n.unused = !0) : (r = n.text),
                            (t.alt = n)),
                          Object.keys(t).length || (t.noLabel = !0);
                      }
                      return r;
                    }),
                    (axs.properties.getLastWord = function(e) {
                      if (!e) return null;
                      var t = e.lastIndexOf(" ") + 1,
                        r = e.length - 10;
                      return e.substring(t > r ? t : r);
                    }),
                    (axs.properties.getTextProperties = function(e) {
                      var t = {},
                        r = axs.properties.findTextAlternatives(e, t, !1, !0);
                      return 0 != Object.keys(t).length ||
                        ((e = axs.dom.asElement(e)) &&
                          axs.browserUtils.matchSelector(e, "img") &&
                          ((t.alt = {
                            valid: !1,
                            errorMessage: "No alt value provided"
                          }),
                          "string" == typeof (e = e.src) &&
                            ((r = e.split("/").pop()),
                            (t.filename = { text: r }))),
                        r)
                        ? ((t.hasProperties = !!Object.keys(t).length),
                          (t.computedText = r),
                          (t.lastWord = axs.properties.getLastWord(r)),
                          t)
                        : null;
                    }),
                    (axs.properties.getAriaProperties = function(e) {
                      var t,
                        r = {},
                        o = axs.properties.getGlobalAriaProperties(e);
                      for (t in axs.constants.ARIA_PROPERTIES) {
                        var n = "aria-" + t;
                        if (e.hasAttribute(n)) {
                          var a = e.getAttribute(n);
                          o[n] = axs.utils.getAriaPropertyValue(n, a, e);
                        }
                      }
                      if (
                        (0 < Object.keys(o).length &&
                          (r.properties = axs.utils.values(o)),
                        !(a = axs.utils.getRoles(e)))
                      )
                        return Object.keys(r).length ? r : null;
                      if (((r.roles = a), !a.valid || !a.roles)) return r;
                      for (var n = a.roles, i = 0; i < n.length; i++) {
                        var s = n[i];
                        if (s.details && s.details.propertiesSet)
                          for (t in s.details.propertiesSet)
                            t in o ||
                              (e.hasAttribute(t)
                                ? ((a = e.getAttribute(t)),
                                  (o[t] = axs.utils.getAriaPropertyValue(
                                    t,
                                    a,
                                    e
                                  )),
                                  "values" in o[t] &&
                                    ((a = o[t].values),
                                    (a[a.length - 1].isLast = !0)))
                                : s.details.requiredPropertiesSet[t] &&
                                  (o[t] = {
                                    name: t,
                                    valid: !1,
                                    reason: "Required property not set"
                                  }));
                      }
                      return (
                        0 < Object.keys(o).length &&
                          (r.properties = axs.utils.values(o)),
                        0 < Object.keys(r).length ? r : null
                      );
                    }),
                    (axs.properties.getGlobalAriaProperties = function(e) {
                      var t,
                        r = {};
                      for (t in axs.constants.GLOBAL_PROPERTIES)
                        if (e.hasAttribute(t)) {
                          var o = e.getAttribute(t);
                          r[t] = axs.utils.getAriaPropertyValue(t, o, e);
                        }
                      return r;
                    }),
                    (axs.properties.getVideoProperties = function(e) {
                      if (!axs.browserUtils.matchSelector(e, "video"))
                        return null;
                      var t = {};
                      return (
                        (t.captionTracks = axs.properties.getTrackElements(
                          e,
                          "captions"
                        )),
                        (t.descriptionTracks = axs.properties.getTrackElements(
                          e,
                          "descriptions"
                        )),
                        (t.chapterTracks = axs.properties.getTrackElements(
                          e,
                          "chapters"
                        )),
                        t
                      );
                    }),
                    (axs.properties.getTrackElements = function(e, t) {
                      var r = e.querySelectorAll("track[kind=" + t + "]"),
                        o = {};
                      if (!r.length)
                        return (
                          (o.valid = !1),
                          (o.reason = {
                            messageKey: "noTracksProvided",
                            args: [[t]]
                          }),
                          o
                        );
                      o.valid = !0;
                      for (var n = [], a = 0; a < r.length; a++) {
                        var i = {},
                          s = r[a].getAttribute("src"),
                          l = r[a].getAttribute("srcLang"),
                          u = r[a].getAttribute("label");
                        s
                          ? ((i.valid = !0), (i.src = s))
                          : ((i.valid = !1),
                            (i.reason = { messageKey: "noSrcProvided" })),
                          (s = ""),
                          u && ((s += u), l && (s += " ")),
                          l && (s += "(" + l + ")"),
                          "" == s && (s = "[[object Object]]"),
                          (i.name = s),
                          n.push(i);
                      }
                      return (o.values = n), o;
                    }),
                    (axs.properties.getAllProperties = function(e) {
                      var t = axs.dom.asElement(e);
                      if (!t) return {};
                      var r = {};
                      return (
                        (r.ariaProperties = axs.properties.getAriaProperties(
                          t
                        )),
                        (r.colorProperties = axs.properties.getColorProperties(
                          t
                        )),
                        (r.focusProperties = axs.properties.getFocusProperties(
                          t
                        )),
                        (r.textProperties = axs.properties.getTextProperties(
                          e
                        )),
                        (r.videoProperties = axs.properties.getVideoProperties(
                          t
                        )),
                        r
                      );
                    }),
                    (function() {
                      function e(e) {
                        if (!e) return null;
                        var t = e.tagName;
                        if (!t) return null;
                        if (
                          ((t = t.toUpperCase()),
                          !(t =
                            axs.constants.TAG_TO_IMPLICIT_SEMANTIC_INFO[t]) ||
                            !t.length)
                        )
                          return null;
                        for (var r = null, o = 0, n = t.length; o < n; o++) {
                          var a = t[o];
                          if (a.selector) {
                            if (axs.browserUtils.matchSelector(e, a.selector))
                              return a;
                          } else r = a;
                        }
                        return r;
                      }
                      (axs.properties.getImplicitRole = function(t) {
                        return (t = e(t)) ? t.role : "";
                      }),
                        (axs.properties.canTakeAriaAttributes = function(t) {
                          return !(t = e(t)) || !t.reserved;
                        });
                    })(),
                    (axs.properties.getNativelySupportedAttributes = function(
                      e
                    ) {
                      var t = [];
                      if (!e) return t;
                      e = e.cloneNode(!1);
                      for (
                        var r = Object.keys(
                            axs.constants.ARIA_TO_HTML_ATTRIBUTE
                          ),
                          o = 0;
                        o < r.length;
                        o++
                      ) {
                        var n = r[o];
                        axs.constants.ARIA_TO_HTML_ATTRIBUTE[n] in e &&
                          (t[t.length] = n);
                      }
                      return t;
                    }),
                    (function() {
                      var e = {};
                      axs.properties.getSelectorForRole = function(t) {
                        if (!t) return "";
                        if (e[t] && e.hasOwnProperty(t)) return e[t];
                        var r = ['[role="' + t + '"]'];
                        return (
                          Object.keys(
                            axs.constants.TAG_TO_IMPLICIT_SEMANTIC_INFO
                          ).forEach(function(e) {
                            var o =
                              axs.constants.TAG_TO_IMPLICIT_SEMANTIC_INFO[e];
                            if (o && o.length)
                              for (var n = 0; n < o.length; n++) {
                                var a = o[n];
                                if (a.role === t) {
                                  if (!a.selector) {
                                    r[r.length] = e;
                                    break;
                                  }
                                  r[r.length] = a.selector;
                                }
                              }
                          }),
                          (e[t] = r.join(","))
                        );
                      };
                    })(),
                    (axs.AuditRule = function(e) {
                      for (
                        var t = e.opt_requires || {}, r = !0, o = [], n = 0;
                        n < axs.AuditRule.requiredFields.length;
                        n++
                      ) {
                        var a = axs.AuditRule.requiredFields[n];
                        a in e || ((r = !1), o.push(a));
                      }
                      if (!r)
                        throw "Invalid spec; the following fields were not specified: " +
                          o.join(", ") +
                          "\n" +
                          JSON.stringify(e);
                      (this.name = e.name),
                        (this.severity = e.severity),
                        (this.relevantElementMatcher_ =
                          e.relevantElementMatcher),
                        (this.isRelevant_ =
                          e.isRelevant ||
                          function(e, t) {
                            return !0;
                          }),
                        (this.test_ = e.test),
                        (this.code = e.code),
                        (this.heading = e.heading || ""),
                        (this.url = e.url || ""),
                        (this.requiresConsoleAPI = !!t.consoleAPI),
                        (this.relevantElements = []),
                        (this.relatedElements = []),
                        (this.collectIdRefs = t.idRefs || !1);
                    }),
                    (axs.AuditRule.requiredFields = "name severity relevantElementMatcher test code heading".split(
                      " "
                    )),
                    (axs.AuditRule.NOT_APPLICABLE = {
                      result: axs.constants.AuditResult.NA
                    }),
                    (axs.AuditRule.prototype.addElement = function(e, t) {
                      e.push(t);
                    }),
                    (axs.AuditRule.prototype.collectMatchingElement = function(
                      e,
                      t
                    ) {
                      return (
                        !(!this.relevantElementMatcher_(e, t) || !t.inScope) &&
                        (this.relevantElements.push({ element: e, flags: t }),
                        !0)
                      );
                    }),
                    (axs.AuditRule.prototype.canRun = function(e) {
                      return !(
                        this.disabled ||
                        (!e.withConsoleApi && this.requiresConsoleAPI)
                      );
                    }),
                    (axs.AuditRule.Result = function(e, t) {
                      var r = axs.utils.namedValues(t);
                      (r.severity = e.getSeverity(t.name) || r.severity),
                        (this.rule = r),
                        (this.maxResults = e.maxResults),
                        this.update(axs.constants.AuditResult.NA);
                    }),
                    (axs.AuditRule.Result.prototype.update = function(e, t) {
                      if (e === axs.constants.AuditResult.FAIL) {
                        var r = this.elements || (this.elements = []);
                        (this.result = e),
                          this.maxResults &&
                          this.elements.length >= this.maxResults
                            ? (this.resultsTruncated = !0)
                            : t && r.push(t);
                      } else
                        e === axs.constants.AuditResult.PASS
                          ? (this.elements || (this.elements = []),
                            this.result !== axs.constants.AuditResult.FAIL &&
                              (this.result = e))
                          : this.result || (this.result = e);
                    }),
                    (axs.AuditRule.prototype.run = function(e) {
                      try {
                        for (
                          var t,
                            r = this._options || {},
                            o = new axs.AuditRule.Result(e, this);
                          (t = this.relevantElements.shift());

                        ) {
                          var n = t.element,
                            a = t.flags;
                          this.isRelevant_(n, a) &&
                            (this.test_(n, a, r.config)
                              ? o.update(axs.constants.AuditResult.FAIL, n)
                              : o.update(axs.constants.AuditResult.PASS, n));
                        }
                        return o;
                      } finally {
                        this.relatedElements.length = 0;
                      }
                    }),
                    (axs.AuditRules = {}),
                    (function() {
                      var e = {},
                        t = {};
                      (axs.AuditRules.specs = {}),
                        (axs.AuditRules.addRule = function(r) {
                          var o = new axs.AuditRule(r);
                          if (o.code in t)
                            throw Error(
                              'Can not add audit rule with same code: "' +
                                o.code +
                                '"'
                            );
                          if (o.name in e)
                            throw Error(
                              'Can not add audit rule with same name: "' +
                                o.name +
                                '"'
                            );
                          (e[o.name] = t[o.code] = o),
                            (axs.AuditRules.specs[r.name] = r);
                        }),
                        (axs.AuditRules.getRule = function(r) {
                          return e[r] || t[r] || null;
                        }),
                        (axs.AuditRules.getRules = function(t) {
                          var r = Object.keys(e);
                          return t
                            ? r
                            : r.map(function(e) {
                                return this.getRule(e);
                              }, axs.AuditRules);
                        }),
                        (axs.AuditRules.getActiveRules = function(e) {
                          var t;
                          if (
                            ((t =
                              e.auditRulesToRun && 0 < e.auditRulesToRun.length
                                ? e.auditRulesToRun
                                : axs.AuditRules.getRules(!0)),
                            e.auditRulesToIgnore)
                          )
                            for (
                              var r = 0;
                              r < e.auditRulesToIgnore.length;
                              r++
                            ) {
                              var o = e.auditRulesToIgnore[r];
                              0 > t.indexOf(o) || t.splice(t.indexOf(o), 1);
                            }
                          return t.map(axs.AuditRules.getRule);
                        });
                    })(),
                    (axs.AuditResults = function() {
                      (this.errors_ = []), (this.warnings_ = []);
                    }),
                    goog.exportSymbol("axs.AuditResults", axs.AuditResults),
                    (axs.AuditResults.prototype.addError = function(e) {
                      "" != e && this.errors_.push(e);
                    }),
                    goog.exportProperty(
                      axs.AuditResults.prototype,
                      "addError",
                      axs.AuditResults.prototype.addError
                    ),
                    (axs.AuditResults.prototype.addWarning = function(e) {
                      "" != e && this.warnings_.push(e);
                    }),
                    goog.exportProperty(
                      axs.AuditResults.prototype,
                      "addWarning",
                      axs.AuditResults.prototype.addWarning
                    ),
                    (axs.AuditResults.prototype.numErrors = function() {
                      return this.errors_.length;
                    }),
                    goog.exportProperty(
                      axs.AuditResults.prototype,
                      "numErrors",
                      axs.AuditResults.prototype.numErrors
                    ),
                    (axs.AuditResults.prototype.numWarnings = function() {
                      return this.warnings_.length;
                    }),
                    goog.exportProperty(
                      axs.AuditResults.prototype,
                      "numWarnings",
                      axs.AuditResults.prototype.numWarnings
                    ),
                    (axs.AuditResults.prototype.getErrors = function() {
                      return this.errors_;
                    }),
                    goog.exportProperty(
                      axs.AuditResults.prototype,
                      "getErrors",
                      axs.AuditResults.prototype.getErrors
                    ),
                    (axs.AuditResults.prototype.getWarnings = function() {
                      return this.warnings_;
                    }),
                    goog.exportProperty(
                      axs.AuditResults.prototype,
                      "getWarnings",
                      axs.AuditResults.prototype.getWarnings
                    ),
                    (axs.AuditResults.prototype.toString = function() {
                      for (var e = "", t = 0; t < this.errors_.length; t++) {
                        0 == t && (e += "\nErrors:\n");
                        var r = this.errors_[t],
                          e = e + (r + "\n\n");
                      }
                      for (t = 0; t < this.warnings_.length; t++)
                        0 == t && (e += "\nWarnings:\n"),
                          (r = this.warnings_[t]),
                          (e += r + "\n\n");
                      return e;
                    }),
                    goog.exportProperty(
                      axs.AuditResults.prototype,
                      "toString",
                      axs.AuditResults.prototype.toString
                    ),
                    (axs.Audit = {}),
                    (axs.AuditConfiguration = function(e) {
                      null == e && (e = {}),
                        (this.rules_ = {}),
                        (this.maxResults = this.auditRulesToIgnore = this.auditRulesToRun = this.scope = null),
                        (this.withConsoleApi = !1),
                        (this.showUnsupportedRulesWarning = this.walkDom = !0);
                      for (var t in this)
                        this.hasOwnProperty(t) && t in e && (this[t] = e[t]);
                      goog.exportProperty(this, "scope", this.scope),
                        goog.exportProperty(
                          this,
                          "auditRulesToRun",
                          this.auditRulesToRun
                        ),
                        goog.exportProperty(
                          this,
                          "auditRulesToIgnore",
                          this.auditRulesToIgnore
                        ),
                        goog.exportProperty(
                          this,
                          "withConsoleApi",
                          this.withConsoleApi
                        ),
                        goog.exportProperty(this, "walkDom", this.walkDom),
                        goog.exportProperty(
                          this,
                          "showUnsupportedRulesWarning",
                          this.showUnsupportedRulesWarning
                        );
                    }),
                    goog.exportSymbol(
                      "axs.AuditConfiguration",
                      axs.AuditConfiguration
                    ),
                    (axs.AuditConfiguration.prototype = {
                      ignoreSelectors: function(e, t) {
                        e in this.rules_ || (this.rules_[e] = {}),
                          "ignore" in this.rules_[e] ||
                            (this.rules_[e].ignore = []),
                          Array.prototype.push.call(this.rules_[e].ignore, t);
                      },
                      getIgnoreSelectors: function(e) {
                        return e in this.rules_ && "ignore" in this.rules_[e]
                          ? this.rules_[e].ignore
                          : [];
                      },
                      setSeverity: function(e, t) {
                        e in this.rules_ || (this.rules_[e] = {}),
                          (this.rules_[e].severity = t);
                      },
                      getSeverity: function(e) {
                        return e in this.rules_ && "severity" in this.rules_[e]
                          ? this.rules_[e].severity
                          : null;
                      },
                      setRuleConfig: function(e, t) {
                        e in this.rules_ || (this.rules_[e] = {}),
                          (this.rules_[e].config = t);
                      },
                      getRuleConfig: function(e) {
                        return e in this.rules_ && "config" in this.rules_[e]
                          ? this.rules_[e].config
                          : null;
                      }
                    }),
                    goog.exportProperty(
                      axs.AuditConfiguration.prototype,
                      "ignoreSelectors",
                      axs.AuditConfiguration.prototype.ignoreSelectors
                    ),
                    goog.exportProperty(
                      axs.AuditConfiguration.prototype,
                      "getIgnoreSelectors",
                      axs.AuditConfiguration.prototype.getIgnoreSelectors
                    ),
                    (axs.Audit.unsupportedRulesWarningShown = !1),
                    (axs.Audit.getRulesCannotRun = function(e) {
                      return e.withConsoleApi
                        ? []
                        : axs.AuditRules.getRules()
                            .filter(function(e) {
                              return e.requiresConsoleAPI;
                            })
                            .map(function(e) {
                              return e.code;
                            });
                    }),
                    (axs.Audit.run = function(e) {
                      if (
                        ((e = e || new axs.AuditConfiguration()),
                        !axs.Audit.unsupportedRulesWarningShown &&
                          e.showUnsupportedRulesWarning)
                      ) {
                        var t = axs.Audit.getRulesCannotRun(e);
                        0 < t.length &&
                          (console.warn(
                            "Some rules cannot be checked using the axs.Audit.run() method call. Use the Chrome plugin to check these rules: " +
                              t.join(", ")
                          ),
                          console.warn(
                            "To remove this message, pass an AuditConfiguration object to axs.Audit.run() and set configuration.showUnsupportedRulesWarning = false."
                          )),
                          (axs.Audit.unsupportedRulesWarningShown = !0);
                      }
                      (t = axs.AuditRules.getActiveRules(e)),
                        (e.collectIdRefs = t.some(function(e) {
                          return e.collectIdRefs;
                        })),
                        e.scope || (e.scope = document.documentElement),
                        axs.Audit.collectMatchingElements(e, t);
                      for (var r = [], o = 0; o < t.length; o++) {
                        var n = t[o];
                        n.canRun(e) && r.push(n.run(e));
                      }
                      return r;
                    }),
                    goog.exportSymbol("axs.Audit.run", axs.Audit.run),
                    (function() {
                      function e(e, t) {
                        var r = e.getIgnoreSelectors(t.name);
                        (0 < r.length || e.scope) && (this.ignoreSelectors = r),
                          (r = e.getRuleConfig(t.name)) && (this.config = r);
                      }
                      (axs.Audit.collectMatchingElements = function(t, r) {
                        axs.dom.composedTreeSearch(
                          t.walkDom ? document.documentElement : t.scope,
                          null,
                          {
                            preorder: function(o, n) {
                              n.inScope || (n.inScope = o === t.scope);
                              for (var a = 0; a < r.length; a++) {
                                var i = r[a];
                                i.canRun(t) &&
                                  ((i._options = new e(t, i)),
                                  n.ignoring[i.name] ||
                                    (n.ignoring[
                                      i.name
                                    ] = i._options.shouldIgnore(o)) ||
                                    i.collectMatchingElement(o, n));
                              }
                              return !0;
                            }
                          },
                          {
                            walkDom: t.walkDom,
                            collectIdRefs: t.collectIdRefs,
                            level: 0,
                            ignoring: {},
                            disabled: !1,
                            hidden: !1
                          }
                        );
                      }),
                        (e.prototype.shouldIgnore = function(e) {
                          var t = this.ignoreSelectors;
                          if (t)
                            for (var r = 0; r < t.length; r++)
                              if (axs.browserUtils.matchSelector(e, t[r]))
                                return !0;
                          return !1;
                        });
                    })(),
                    (axs.Audit.auditResults = function(e) {
                      for (
                        var t = new axs.AuditResults(), r = 0;
                        r < e.length;
                        r++
                      ) {
                        var o = e[r];
                        o.result == axs.constants.AuditResult.FAIL &&
                          (o.rule.severity == axs.constants.Severity.SEVERE
                            ? t.addError(axs.Audit.accessibilityErrorMessage(o))
                            : t.addWarning(
                                axs.Audit.accessibilityErrorMessage(o)
                              ));
                      }
                      return t;
                    }),
                    goog.exportSymbol(
                      "axs.Audit.auditResults",
                      axs.Audit.auditResults
                    ),
                    (axs.Audit.createReport = function(e, t) {
                      var r;
                      return (
                        (r =
                          "*** Begin accessibility audit results ***\nAn accessibility audit found " +
                          axs.Audit.auditResults(e).toString()),
                        t &&
                          (r = r + "\nFor more information, please see " + t),
                        r + "\n*** End accessibility audit results ***"
                      );
                    }),
                    goog.exportSymbol(
                      "axs.Audit.createReport",
                      axs.Audit.createReport
                    ),
                    (axs.Audit.accessibilityErrorMessage = function(e) {
                      for (
                        var t =
                            e.rule.severity == axs.constants.Severity.SEVERE
                              ? "Error: "
                              : "Warning: ",
                          t =
                            t +
                            (e.rule.code + " (") +
                            e.rule.heading +
                            ") failed on the following " +
                            (1 == e.elements.length ? "element" : "elements"),
                          t =
                            1 == e.elements.length
                              ? t + ":"
                              : t +
                                " (1 - " +
                                Math.min(5, e.elements.length) +
                                " of " +
                                e.elements.length +
                                "):",
                          r = Math.min(e.elements.length, 5),
                          o = 0;
                        o < r;
                        o++
                      ) {
                        var n = e.elements[o],
                          t = t + "\n";
                        try {
                          t += axs.utils.getQuerySelectorText(n);
                        } catch (e) {
                          (t += " tagName:" + n.tagName), (t += " id:" + n.id);
                        }
                      }
                      return (
                        "" != e.rule.url &&
                          (t +=
                            "\nSee " + e.rule.url + " for more information."),
                        t
                      );
                    }),
                    goog.exportSymbol(
                      "axs.Audit.accessibilityErrorMessage",
                      axs.Audit.accessibilityErrorMessage
                    ),
                    axs.AuditRules.addRule({
                      name: "ariaOnReservedElement",
                      heading:
                        "This element does not support ARIA roles, states and properties",
                      url:
                        "https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_12",
                      severity: axs.constants.Severity.WARNING,
                      relevantElementMatcher: function(e) {
                        return !axs.properties.canTakeAriaAttributes(e);
                      },
                      test: function(e) {
                        return null !== axs.properties.getAriaProperties(e);
                      },
                      code: "AX_ARIA_12"
                    }),
                    axs.AuditRules.addRule({
                      name: "ariaOwnsDescendant",
                      heading:
                        "aria-owns should not be used if ownership is implicit in the DOM",
                      url:
                        "https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_06",
                      severity: axs.constants.Severity.WARNING,
                      relevantElementMatcher: function(e) {
                        return axs.browserUtils.matchSelector(e, "[aria-owns]");
                      },
                      test: function(e) {
                        return axs.utils
                          .getIdReferents("aria-owns", e)
                          .some(function(t) {
                            return (
                              e.compareDocumentPosition(t) &
                              Node.DOCUMENT_POSITION_CONTAINED_BY
                            );
                          });
                      },
                      code: "AX_ARIA_06"
                    }),
                    axs.AuditRules.addRule({
                      name: "ariaRoleNotScoped",
                      heading:
                        "Elements with ARIA roles must be in the correct scope",
                      url:
                        "https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_09",
                      severity: axs.constants.Severity.SEVERE,
                      relevantElementMatcher: function(e) {
                        return axs.browserUtils.matchSelector(e, "[role]");
                      },
                      test: function(e) {
                        var t = axs.utils.getRoles(e);
                        if (!t || !t.applied) return !1;
                        if (!(t = t.applied.details.scope) || 0 === t.length)
                          return !1;
                        for (var r = e; (r = axs.dom.parentElement(r)); ) {
                          var o = axs.utils.getRoles(r, !0);
                          if (o && o.applied && 0 <= t.indexOf(o.applied.name))
                            return !1;
                        }
                        if ((e = axs.utils.getAriaIdReferrers(e, "aria-owns")))
                          for (r = 0; r < e.length; r++)
                            if (
                              (o = axs.utils.getRoles(e[r], !0)) &&
                              o.applied &&
                              0 <= t.indexOf(o.applied.name)
                            )
                              return !1;
                        return !0;
                      },
                      code: "AX_ARIA_09"
                    }),
                    axs.AuditRules.addRule({
                      name: "audioWithoutControls",
                      heading: "Audio elements should have controls",
                      url:
                        "https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_audio_01",
                      severity: axs.constants.Severity.WARNING,
                      relevantElementMatcher: function(e) {
                        return axs.browserUtils.matchSelector(
                          e,
                          "audio[autoplay]"
                        );
                      },
                      test: function(e) {
                        return (
                          !e.querySelectorAll("[controls]").length &&
                          3 < e.duration
                        );
                      },
                      code: "AX_AUDIO_01"
                    }),
                    (function() {
                      var e = /^aria\-/;
                      axs.AuditRules.addRule({
                        name: "badAriaAttribute",
                        heading: "This element has an invalid ARIA attribute",
                        url:
                          "https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_11",
                        severity: axs.constants.Severity.WARNING,
                        relevantElementMatcher: function(t) {
                          t = t.attributes;
                          for (var r = 0, o = t.length; r < o; r++)
                            if (e.test(t[r].name)) return !0;
                          return !1;
                        },
                        test: function(t) {
                          t = t.attributes;
                          for (var r = 0, o = t.length; r < o; r++) {
                            var n = t[r].name;
                            if (
                              e.test(n) &&
                              ((n = n.replace(e, "")),
                              !axs.constants.ARIA_PROPERTIES.hasOwnProperty(n))
                            )
                              return !0;
                          }
                          return !1;
                        },
                        code: "AX_ARIA_11"
                      });
                    })(),
                    axs.AuditRules.addRule({
                      name: "badAriaAttributeValue",
                      heading: "ARIA state and property values must be valid",
                      url:
                        "https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_04",
                      severity: axs.constants.Severity.SEVERE,
                      relevantElementMatcher: function(e) {
                        var t = axs.utils.getSelectorForAriaProperties(
                          axs.constants.ARIA_PROPERTIES
                        );
                        return axs.browserUtils.matchSelector(e, t);
                      },
                      test: function(e) {
                        for (var t in axs.constants.ARIA_PROPERTIES) {
                          var r = "aria-" + t;
                          if (e.hasAttribute(r)) {
                            var o = e.getAttribute(r);
                            if (!axs.utils.getAriaPropertyValue(r, o, e).valid)
                              return !0;
                          }
                        }
                        return !1;
                      },
                      code: "AX_ARIA_04"
                    }),
                    axs.AuditRules.addRule({
                      name: "badAriaRole",
                      heading:
                        "Elements with ARIA roles must use a valid, non-abstract ARIA role",
                      url:
                        "https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_01",
                      severity: axs.constants.Severity.SEVERE,
                      relevantElementMatcher: function(e) {
                        return axs.browserUtils.matchSelector(e, "[role]");
                      },
                      test: function(e) {
                        return !axs.utils.getRoles(e).valid;
                      },
                      code: "AX_ARIA_01"
                    }),
                    axs.AuditRules.addRule({
                      name: "controlsWithoutLabel",
                      heading: "Controls and media elements should have labels",
                      url:
                        "https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_text_01",
                      severity: axs.constants.Severity.SEVERE,
                      relevantElementMatcher: function(e) {
                        if (
                          !axs.browserUtils.matchSelector(
                            e,
                            'input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), video:not([disabled])'
                          ) ||
                          "presentation" == e.getAttribute("role")
                        )
                          return !1;
                        if (0 <= e.tabIndex) return !0;
                        for (
                          e = axs.dom.parentElement(e);
                          null != e;
                          e = axs.dom.parentElement(e)
                        )
                          if (axs.utils.elementIsAriaWidget(e)) return !1;
                        return !0;
                      },
                      test: function(e, t) {
                        if (
                          t.hidden ||
                          ("input" == e.tagName.toLowerCase() &&
                            "button" == e.type &&
                            e.value.length) ||
                          ("button" == e.tagName.toLowerCase() &&
                            e.textContent.replace(/^\s+|\s+$/g, "").length) ||
                          axs.utils.hasLabel(e)
                        )
                          return !1;
                        var r = axs.properties.findTextAlternatives(e, {});
                        return null === r || "" === r.trim();
                      },
                      code: "AX_TEXT_01",
                      ruleName: "Controls and media elements should have labels"
                    }),
                    axs.AuditRules.addRule({
                      name: "duplicateId",
                      heading:
                        "Any ID referred to via an IDREF must be unique in the DOM",
                      url:
                        "https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_html_02",
                      severity: axs.constants.Severity.SEVERE,
                      opt_requires: { idRefs: !0 },
                      relevantElementMatcher: function(e, t) {
                        return (
                          t.idrefs.length &&
                            !t.hidden &&
                            this.relatedElements.push({ element: e, flags: t }),
                          !!e.hasAttribute("id")
                        );
                      },
                      isRelevant: function(e, t) {
                        var r = e.id,
                          o = t.level;
                        return this.relatedElements.some(function(e) {
                          var t = e.flags.idrefs;
                          return e.flags.level === o && 0 <= t.indexOf(r);
                        });
                      },
                      test: function(e) {
                        var t = "[id='" + e.id.replace(/'/g, "\\'") + "']";
                        return 1 < e.ownerDocument.querySelectorAll(t).length;
                      },
                      code: "AX_HTML_02"
                    }),
                    axs
                  );
                },
                axs;
              (__WEBPACK_AMD_DEFINE_ARRAY__ = []),
                (__WEBPACK_AMD_DEFINE_FACTORY__ = fn),
                void 0 !==
                  (__WEBPACK_AMD_DEFINE_RESULT__ =
                    "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__
                      ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                          exports,
                          __WEBPACK_AMD_DEFINE_ARRAY__
                        )
                      : __WEBPACK_AMD_DEFINE_FACTORY__) &&
                  (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
            },
            function(e, t, r) {
              "use strict";
              var o = r(5),
                n = (function(e) {
                  if (e && e.__esModule) return e;
                  var t = {};
                  if (null != e)
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  return (t.default = e), t;
                })(o);
              console.clear(),
                (function() {
                  n.htmlCheck(),
                    n.colorContrast(),
                    n.interactions(),
                    n.ariaRelated(),
                    console.log(
                      "----------------------------------------------------"
                    ),
                    console.log("ERRORS: "),
                    console.log("BASIC HTML ERRORS: "),
                    (finalerrors = n.errors);
                  finalwarnings = n.warnings;
                  n.errors.htmlError.forEach(function(e) {
                    e.forEach(function(e) {
                      //finalerrors.htmlError.push(e);
                      console.log("%c Rule: " + e.rule, "color: #725afa"),
                        console.log("%c Error: " + e.error, "color: #725afa"),
                        console.log("%c Code: " + e.snippet, "color: #725afa"),
                        console.log("%c Fix: " + e.fix, "color: #725afa"),
                        console.log("-----------------------------");
                    });
                  }),
                    console.log("COLOR CONTRAST ERRORS: "),
                    n.errors.contrastError.forEach(function(e) {
                      console.log("%c Rule: " + e.rule, "color: #79f233"),
                        console.log("%c Error: " + e.error, "color: #79f233"),
                        console.log("%c Code: " + e.snippet, "color: #79f233"),
                        console.log("%c Fix: " + e.fix, "color: #79f233"),
                        console.log("-----------------------------");
                    }),
                    console.log("INTERACTIONS BASED ERRORS: "),
                    n.errors.interactionError.forEach(function(e) {
                      e.forEach(function(e) {
                        //finalerrors.interactionError.push(e)
                        console.log("%c Rule: " + e.rule, "color: #ff8554"),
                          console.log("%c Error: " + e.error, "color: #ff8554"),
                          console.log(
                            "%c Code: " + e.snippet,
                            "color: #ff8554"
                          ),
                          console.log("%c Fix: " + e.fix, "color: #ff8554"),
                          console.log("-----------------------------");
                      });
                    }),
                    console.log("ARIA BASED ERRORS: "),
                    n.errors.ariaError.forEach(function(e) {
                      e.forEach(function(e) {
                        //finalerrors.ariaError.push(e)
                        console.log("%c Rule: " + e.rule, "color: #ed8aa7"),
                          console.log("%c Error: " + e.error, "color: #ed8aa7"),
                          console.log(
                            "%c Code: " + e.snippet,
                            "color: #ed8aa7"
                          ),
                          console.log("%c Fix: " + e.fix, "color: #ed8aa7"),
                          console.log("-----------------------------");
                      });
                    }),
                    console.log(
                      "----------------------------------------------------"
                    ),
                    console.log("WARNINGS: "),
                    console.log("BASIC HTML WARNINGS: "),
                    n.warnings.htmlWarning.forEach(function(e) {
                      e.forEach(function(e) {
                        console.log("%c Rule: " + e.rule, "color: #725afa"),
                          console.log(
                            "%c Warning: " + e.warning,
                            "color: #725afa"
                          ),
                          console.log(
                            "%c Code: " + e.snippet,
                            "color: #725afa"
                          ),
                          console.log("%c Fix: " + e.fix, "color: #725afa"),
                          console.log("-----------------------------");
                      });
                    }),
                    console.log("INTERACTIONS BASED WARNINGS: "),
                    n.warnings.interactionWarning.forEach(function(e) {
                      e.forEach(function(e) {
                        console.log("%c Rule: " + e.rule, "color: #ff8554"),
                          console.log(
                            "%c Warning: " + e.warning,
                            "color: #ff8554"
                          ),
                          console.log(
                            "%c Code: " + e.snippet,
                            "color: #ff8554"
                          ),
                          console.log("%c Fix: " + e.fix, "color: #ff8554"),
                          console.log("-----------------------------");
                      });
                    }),
                    console.log("ARIA BASED WARNINGS: "),
                    n.warnings.ariaWarning.forEach(function(e) {
                      e.forEach(function(e) {
                        console.log("%c Rule: " + e.rule, "color: #ed8aa7"),
                          console.log(
                            "%c Warning: " + e.warning,
                            "color: #ed8aa7"
                          ),
                          console.log(
                            "%c Code: " + e.snippet,
                            "color: #ed8aa7"
                          ),
                          console.log("%c Fix: " + e.fix, "color: #ed8aa7"),
                          console.log("-----------------------------");
                      });
                    });
                })();
            },
            function(e, t, r) {
              "use strict";
              function o(e) {
                return e && e.__esModule ? e : { default: e };
              }
              function n(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, r = Array(e.length); t < e.length; t++)
                    r[t] = e[t];
                  return r;
                }
                return Array.from(e);
              }
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.sectionsHaveAriaTag = t.inputsHaveAutoComplete = void 0);
              var a = r(4),
                i = (function(e) {
                  if (e && e.__esModule) return e;
                  var t = {};
                  if (null != e)
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  return (t.default = e), t;
                })(a),
                s = r(0),
                l = o(s),
                u = r(2),
                c = o(u),
                d = r(1),
                p = o(d),
                f = function(e) {
                  return "" === e.trim();
                },
                g = function() {
                  var e = [],
                    t = [].concat(n(i.getElements("input"))),
                    r = function(t) {
                      if (
                        !i.hasAttribute(t, "autocomplete") ||
                        f(i.getAttribute(t, "autocomplete"))
                      ) {
                        var r = { str: "Add autocomplete='INPUT PURPOSE'" };
                        e.push({
                          rule: "WCAG 2.1: 1.3.5",
                          error: (0, l.default)(
                            "AutoComplete is missing in input tag."
                          ),
                          snippet: (0, c.default)(t.outerHTML),
                          fix: (0, p.default)(r)
                        });
                      }
                    };
                  return t.forEach(r), e;
                },
                h = function() {
                  var e = [],
                    t = [].concat(
                      n(i.getElements("section")),
                      n(i.getElements("forms")),
                      n(i.getElements("nav")),
                      n(i.getElements("main"))
                    ),
                    r = function(t) {
                      if (!i.hasAttribute(t, "role")) {
                        var r = { str: "Add role='PURPOSE'" };
                        e.push({
                          rule: "WCAG 2.1: 1.3.6",
                          warning: (0, l.default)(
                            "Using ARIA landmarks to identify regions of a page is Missing."
                          ),
                          snippet: (0, c.default)(t.outerHTML),
                          fix: (0, p.default)(r)
                        });
                      }
                    };
                  return t.forEach(r), e;
                };
              (t.inputsHaveAutoComplete = g), (t.sectionsHaveAriaTag = h);
            },
            function(e, t, r) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.sectionsHaveAriaTag = t.hasFormsLabel = t.hasForLabel = t.hasButtonsText = t.hasLinksTarget = t.inputsHaveAutoComplete = void 0);
              var o = r(8),
                n = r(10);
              (t.inputsHaveAutoComplete = o.inputsHaveAutoComplete),
                (t.hasLinksTarget = n.hasLinksTarget),
                (t.hasButtonsText = n.hasButtonsText),
                (t.hasForLabel = n.hasForLabel),
                (t.hasFormsLabel = n.hasFormsLabel),
                (t.sectionsHaveAriaTag = o.sectionsHaveAriaTag);
            },
            function(e, t, r) {
              "use strict";
              function o(e) {
                return e && e.__esModule ? e : { default: e };
              }
              function n(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, r = Array(e.length); t < e.length; t++)
                    r[t] = e[t];
                  return r;
                }
                return Array.from(e);
              }
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.hasFormsLabel = t.hasForLabel = t.hasButtonsText = t.hasLinksTarget = void 0);
              var a = r(4),
                i = (function(e) {
                  if (e && e.__esModule) return e;
                  var t = {};
                  if (null != e)
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  return (t.default = e), t;
                })(a),
                s = r(0),
                l = o(s),
                u = r(2),
                c = o(u),
                d = r(1),
                p = o(d),
                f = function(e) {
                  return "" === e.trim();
                },
                g = function() {
                  var e = [],
                    t = [].concat(n(i.getElements("a"))),
                    r = t.filter(function(e) {
                      return (
                        "_blank" === i.getAttribute(e, "target") &&
                        !i.hasAttribute(e, "aria-describedby")
                      );
                    });
                  return (
                    r.length > 0 &&
                      r.forEach(function(t) {
                        var r = { str: "Add aria-describedby='ELEMENT ID'" };
                        e.push({
                          rule: "WCAG 2.1: 2.5.3",
                          warning: (0, l.default)(
                            "Hint message is missing. Should add hint message to recognize this link will open in new tab."
                          ),
                          snippet: (0, c.default)(t.outerHTML),
                          fix: (0, p.default)(r)
                        });
                      }),
                    e
                  );
                },
                h = function() {
                  var e = [],
                    t = [].concat(n(i.getElements("button"))),
                    r = t.filter(function(e) {
                      return f(e.textContent) && !i.hasAccessibileText(e);
                    });
                  return (
                    r.length > 0 &&
                      r.forEach(function(t) {
                        var r = {
                          str:
                            "Add aria-label='VALUE' or <button>VALUE</button>"
                        };
                        e.push({
                          rule: "WCAG 2.1: 2.5.3",
                          error: (0, l.default)(
                            "Button text or aria-label is missing"
                          ),
                          snippet: (0, c.default)(t.outerHTML),
                          fix: (0, p.default)(r)
                        });
                      }),
                    e
                  );
                },
                m = function() {
                  var e = [],
                    t = [].concat(n(i.getElements("label"))),
                    r = function(t) {
                      if (
                        !i.hasAttribute(t, "for") ||
                        f(i.getAttribute(t, "for"))
                      ) {
                        var r = { str: "Add for='INPUT ID'" };
                        e.push({
                          rule: "WCAG 2.1: 2.5.3",
                          error: (0, l.default)("For is missing in label."),
                          snippet: (0, c.default)(t.outerHTML),
                          fix: (0, p.default)(r)
                        });
                      }
                    };
                  return t.forEach(r), e;
                },
                v = function() {
                  var e = [];
                  if (
                    [].concat(n(i.getElements("form"))).some(function(e) {
                      return !i.hasAccessibileText(e);
                    })
                  ) {
                    var t = { str: "Add aria-label, aria-labelledby" };
                    e.push({
                      rule: "WCAG 2.1: 2.5.3",
                      error: (0, l.default)("Forms Label is missing."),
                      snippet: (0, c.default)("<form>"),
                      fix: (0, p.default)(t)
                    });
                  }
                  return e;
                };
              (t.hasLinksTarget = g),
                (t.hasButtonsText = h),
                (t.hasForLabel = m),
                (t.hasFormsLabel = v);
            },
            function(e, t, r) {
              "use strict";
              function o(e) {
                return e && e.__esModule ? e : { default: e };
              }
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.ContrastPlugin = void 0);
              var n = r(6),
                a = o(n),
                i = r(3),
                s = o(i),
                l = r(0),
                u = o(l),
                c = r(2),
                d = o(c),
                p = r(1),
                f = o(p),
                g = function() {
                  var e = [],
                    t = function(e, t, r) {
                      return a.default.color.suggestColors(t, r, { AA: e }).AA;
                    };
                  return (
                    (0, s.default)("*").each(function(r, o) {
                      if (
                        a.default.properties.hasDirectTextDescendant(o) &&
                        !a.default.utils.elementIsTransparent(o) &&
                        !a.default.utils.elementHasZeroArea(o)
                      ) {
                        var n = getComputedStyle(o),
                          i = a.default.utils.getBgColor(n, o),
                          s = a.default.utils.getFgColor(n, o, i),
                          l = a.default.color
                            .calculateContrastRatio(s, i)
                            .toFixed(2),
                          c = a.default.utils.isLargeFont(n) ? 3 : 4.5;
                        if (l < c) {
                          var p = {
                            suggestedFgColorHex:
                              "Suggested FgColor in Hex: " + t(c, i, s).fg,
                            suggestedBgColorHex:
                              "Suggested BgColor in Hex: " + t(c, i, s).bg,
                            suggestedColorsRatio:
                              "Suggested Color Ratio: " + t(c, i, s).contrast
                          };
                          e.push({
                            rule: "WCAG 2.1: 1.4.11 & WCAG 2.0: 1.4.3",
                            error: (0, u.default)(
                              "Contrast Ratio Required is not Satisfied, Required: " +
                                c +
                                ", Found: " +
                                l
                            ),
                            snippet: (0, d.default)(o.outerHTML),
                            fix: (0, f.default)(p)
                          });
                        }
                      }
                    }),
                    e
                  );
                };
              t.ContrastPlugin = g;
            },
            function(e, t, r) {
              "use strict";
              function o(e) {
                return e && e.__esModule ? e : { default: e };
              }
              function n(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, r = Array(e.length); t < e.length; t++)
                    r[t] = e[t];
                  return r;
                }
                return Array.from(e);
              }
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.hasDocumentMetaCharset = t.replaceWithStrongTag = t.hasDuplicateIds = t.hasAudioTrack = t.hasVideoTrack = t.hasIframeTitle = t.hasSVGRole = t.hasLinksHref = t.hasLinksText = t.hasImagesAlt = t.hasHeadingOnce = t.hasDocumentScalable = t.hasDocumentTitle = t.hasDocumentLanguage = t.hasDocumentType = void 0);
              var a = r(4),
                i = (function(e) {
                  if (e && e.__esModule) return e;
                  var t = {};
                  if (null != e)
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  return (t.default = e), t;
                })(a),
                s = r(0),
                l = o(s),
                u = r(2),
                c = o(u),
                d = r(1),
                p = o(d),
                f = function(e) {
                  return "" === e.trim();
                },
                g = function(e) {
                  return null === e;
                },
                h = function() {
                  var e = [];
                  if (!i.doctype) {
                    var t = { str: "Add <!DOCTYPE html>" };
                    e.push({
                      rule: "WCAG 2.0: 4.1.1",
                      error: (0, l.default)("Doctype is missing."),
                      snippet: (0, c.default)("none"),
                      fix: (0, p.default)(t)
                    });
                  }
                  return e;
                },
                m = function() {
                  var e = [];
                  if (f(i.title)) {
                    var t = { str: "<title>WELL DESCRIBED TITLE</title>" };
                    e.push({
                      rule: "WCAG 2.0: 2.4.2",
                      error: (0, l.default)("Title is missing."),
                      snippet: (0, c.default)("none"),
                      fix: (0, p.default)(t)
                    });
                  }
                  return e;
                },
                v = function() {
                  var e = [],
                    t = i.getElement("html");
                  if (i.hasAttribute(t, "lang")) {
                    var r = i.getAttribute(t, "lang");
                    if (f(r)) {
                      var o = { str: "Add lang='LANGUAGE VALUE' to <html>" };
                      e.push({
                        rule: "WCAG 2.0: 3.1.1",
                        error: (0, l.default)(
                          "Language value is missing in HTML element."
                        ),
                        snippet: (0, c.default)("<html>...</html>"),
                        fix: (0, p.default)(o)
                      });
                    }
                  }
                  return e;
                },
                x = function() {
                  var e = [];
                  if (
                    ![].concat(n(i.getElements("meta"))).some(function(e) {
                      return i.hasAttribute(e, "charset");
                    })
                  ) {
                    var t = { str: "Add <meta charset='utf-8'/>" };
                    e.push({
                      rule: "WCAG",
                      error: (0, l.default)("Document encoding is missing."),
                      snippet: (0, c.default)("<head>...</head>"),
                      fix: (0, p.default)(t)
                    });
                  }
                  return e;
                },
                y = function() {
                  var e = [];
                  if (
                    [].concat(n(i.getElements("meta"))).some(function(e) {
                      return "no" === i.getAttribute(e, "user-scalable");
                    })
                  ) {
                    var t = {
                      str: "Remove user-scalable=no from <meta name=viewport>"
                    };
                    e.push({
                      rule: "WCAG",
                      error: (0, l.default)(
                        "Document must not use the user-scalable=no."
                      ),
                      snippet: (0, c.default)("none"),
                      fix: (0, p.default)(t)
                    });
                  }
                  return e;
                },
                b = function() {
                  var e = [];
                  if (i.getElements("h1").length > 1) {
                    var t = { str: "Use only one <h1> in the page." };
                    e.push({
                      rule: "WCAG",
                      error: (0, l.default)("Page has Multi <h1> tag."),
                      snippet: (0, c.default)("none"),
                      fix: (0, p.default)(t)
                    });
                  }
                  return e;
                },
                _ = function() {
                  var e = [],
                    t = [].concat(n(i.getElements("img"))),
                    r = t.filter(function(e) {
                      return !i.hasAttribute(e, "alt");
                    }),
                    o = t.filter(function(e) {
                      return !i.hasAttribute(e, "src");
                    });
                  return (
                    (r.length > 0 || o.length > 0) &&
                      (r.forEach(function(t) {
                        var r = { str: "Add alt='IMAGE WELL DESCRIBED'" };
                        e.push({
                          rule: "WCAG 2.0: H37",
                          error: (0, l.default)("Image Alt is missing."),
                          snippet: (0, c.default)(t.outerHTML),
                          fix: (0, p.default)(r)
                        });
                      }),
                      o.forEach(function(t) {
                        var r = { str: "Add src='<source>'" };
                        e.push({
                          rule: "WCAG 2.0: H37",
                          error: (0, l.default)("Image Source is missing."),
                          snippet: (0, c.default)(t.outerHTML),
                          fix: (0, p.default)(r)
                        });
                      })),
                    e
                  );
                },
                E = function() {
                  var e = [],
                    t = [].concat(n(i.getElements("a"))),
                    r = t.filter(function(e) {
                      return f(e.textContent) && !i.hasAccessibileText(e);
                    });
                  return (
                    r.length > 0 &&
                      r.forEach(function(t) {
                        var r = { str: "DESCRIBE PURPOSE OF LINK" };
                        e.push({
                          rule: "WCAG 2.0: 2.4.4 & WCAG 2.0: 2.4.9",
                          warning: (0, l.default)("Link text is missing."),
                          snippet: (0, c.default)(t.outerHTML),
                          fix: (0, p.default)(r)
                        });
                      }),
                    e
                  );
                },
                A = function() {
                  var e = [],
                    t = [].concat(n(i.getElements("a"))),
                    r = t.filter(function(e) {
                      return (
                        (!i.hasAttribute(e, "href") ||
                          f(i.getAttribute(e, "href"))) &&
                        !i.hasAttribute(e, "role")
                      );
                    });
                  return (
                    r.length > 0 &&
                      r.forEach(function(t) {
                        var r = { str: "Add href='LINK URL'" };
                        e.push({
                          rule: "WCAG 2.0: 2.4.9",
                          error: (0, l.default)("Link Href is missing."),
                          snippet: (0, c.default)(t.outerHTML),
                          fix: (0, p.default)(r)
                        });
                      }),
                    e
                  );
                },
                T = function() {
                  var e = [];
                  if (
                    [].concat(n(i.getElements("SVG"))).some(function(e) {
                      return (
                        "true" !== i.getAttribute(e, "aria-hidden") &&
                        !i.hasAttribute(e, "role") &&
                        !i.getAttribute(e, "id")
                      );
                    })
                  ) {
                    var t = {
                      str:
                        "Add role='img' or (aria-hidden='true' if you need to hide element from SR)."
                    };
                    e.push({
                      rule: "WCAG 2.0: 4.1.2",
                      error: (0, l.default)("SVG Role is missing."),
                      snippet: (0, c.default)("none"),
                      fix: (0, p.default)(t)
                    });
                  }
                  return e;
                },
                C = function() {
                  var e = [];
                  if (
                    [].concat(n(i.getElements("iframe"))).some(function(e) {
                      return !i.hasAttribute(e, "title");
                    })
                  ) {
                    var t = { str: "Add title='DESCRIBE CONTENT OF FRAME'" };
                    e.push({
                      rule: "WCAG 2.0: H64",
                      error: (0, l.default)("Title is missing in iframe."),
                      snippet: (0, c.default)("<iframe>"),
                      fix: (0, p.default)(t)
                    });
                  }
                  return e;
                },
                w = function() {
                  var e = [];
                  if ([].concat(n(i.getElements("video"))).some(i.hasTrack)) {
                    var t = {
                      str: "Add <track> element with subtitles, captions"
                    };
                    e.push({
                      rule: "WCAG 2.0: H96",
                      error: (0, l.default)("Video track is missing."),
                      snippet: (0, c.default)("<video>"),
                      fix: (0, p.default)(t)
                    });
                  }
                  return e;
                },
                S = function() {
                  var e = [];
                  if ([].concat(n(i.getElements("audio"))).some(i.hasTrack)) {
                    var t = {
                      str: "Add <track> element with subtitles, captions"
                    };
                    e.push({
                      rule: "WCAG 2.0: 1.2.3",
                      error: (0, l.default)("Audio track is missing."),
                      snippet: (0, c.default)("<audio>"),
                      fix: (0, p.default)(t)
                    });
                  }
                  return e;
                },
                R = function() {
                  var e = [],
                    t = [].concat(n(i.getElements("*"))),
                    r = t
                      .map(function(e) {
                        return i.getAttribute(e, "id");
                      })
                      .filter(function(e) {
                        return !g(e);
                      }),
                    o = [].concat(n(new Set(r)));
                  if (r.length > o.length) {
                    var a = { str: "Remove/Replace duplicate id" };
                    e.push({
                      rule: "WCAG 2.0: 4.1.1",
                      error: (0, l.default)(
                        "Avoid duplicate ids, ID must be unique."
                      ),
                      snippet: (0, c.default)("none"),
                      fix: (0, p.default)(a)
                    });
                  }
                  return e;
                },
                L = function() {
                  var e = [],
                    t = [].concat(n(i.getElements("i")), n(i.getElements("b")));
                  return (
                    t.length > 0 &&
                      t.forEach(function(t) {
                        var r = { str: "Replace with <em> or <strong> tags" };
                        e.push({
                          rule: "WCAG 2.0",
                          error: (0, l.default)(
                            "Avoid using " + t.outerHTML + "."
                          ),
                          snippet: (0, c.default)(t.outerHTML),
                          fix: (0, p.default)(r)
                        });
                      }),
                    e
                  );
                };
              (t.hasDocumentType = h),
                (t.hasDocumentLanguage = v),
                (t.hasDocumentTitle = m),
                (t.hasDocumentScalable = y),
                (t.hasHeadingOnce = b),
                (t.hasImagesAlt = _),
                (t.hasLinksText = E),
                (t.hasLinksHref = A),
                (t.hasSVGRole = T),
                (t.hasIframeTitle = C),
                (t.hasVideoTrack = w),
                (t.hasAudioTrack = S),
                (t.hasDuplicateIds = R),
                (t.replaceWithStrongTag = L),
                (t.hasDocumentMetaCharset = x);
            },
            function(e, t, r) {
              "use strict";
              function o(e) {
                return e && e.__esModule ? e : { default: e };
              }
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.isAnimated = void 0);
              var n = r(3),
                a = o(n),
                i = r(0),
                s = o(i),
                l = r(2),
                u = o(l),
                c = r(1),
                d = o(c),
                p = function() {
                  var e = [];
                  return (
                    (0, a.default)("*").each(function(t, r) {
                      if ((0, a.default)(r).is(":animated")) {
                        var o = {
                          str: "Provide ways to diasble Animations to Users"
                        };
                        e.push({
                          rule: "WCAG 2.1: 2.3.3",
                          warning: (0, s.default)("Animations are present."),
                          snippet: (0, u.default)(r.outerHTML),
                          fix: (0, d.default)(o)
                        });
                      }
                    }),
                    e
                  );
                };
              t.isAnimated = p;
            },
            function(e, t, r) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.isTouchable = t.isAnimated = t.hasSingleKeyShortcut = void 0);
              var o = r(15),
                n = r(13),
                a = r(16),
                i = (function(e) {
                  return e && e.__esModule ? e : { default: e };
                })(a);
              (t.hasSingleKeyShortcut = o.hasSingleKeyShortcut),
                (t.isAnimated = n.isAnimated),
                (t.isTouchable = i.default);
            },
            function(e, t, r) {
              "use strict";
              function o(e) {
                return e && e.__esModule ? e : { default: e };
              }
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.hasSingleKeyShortcut = void 0);
              var n = r(3),
                a = o(n),
                i = r(0),
                s = o(i),
                l = r(2),
                u = o(l),
                c = r(1),
                d = o(c),
                p = function() {
                  for (
                    var e = [],
                      t = a.default.Event("keydown", function() {
                        var r = { str: "Avoid using Single Key Shortcuts" };
                        e.push({
                          rule: "WCAG 2.1: 2.1.4",
                          error: (0, s.default)(
                            "Single Key Shortcuts found: " + t.key + "."
                          ),
                          snippet: (0, u.default)("none"),
                          fix: (0, d.default)(r)
                        });
                      }),
                      r = 65;
                    r < 90;
                    r++
                  )
                    (t.which = r), (0, a.default)(document).trigger(t);
                  for (var r = 97; r < 122; r++)
                    (t.which = r), (0, a.default)(document).trigger(t);
                  return e;
                };
              t.hasSingleKeyShortcut = p;
            },
            function(e, t, r) {
              "use strict";
              function o(e) {
                return e && e.__esModule ? e : { default: e };
              }
              function n(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, r = Array(e.length); t < e.length; t++)
                    r[t] = e[t];
                  return r;
                }
                return Array.from(e);
              }
              Object.defineProperty(t, "__esModule", { value: !0 });
              var a = r(4),
                i = (function(e) {
                  if (e && e.__esModule) return e;
                  var t = {};
                  if (null != e)
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  return (t.default = e), t;
                })(a),
                s = r(0),
                l = o(s),
                u = r(2),
                c = o(u),
                d = r(1),
                p = o(d),
                f = r(3),
                g = o(f),
                h = function() {
                  var e = [],
                    t = [].concat(
                      n(i.getElements("input")),
                      n(i.getElements("button")),
                      n(i.getElements("img"))
                    ),
                    r = function(t) {
                      var r = (0, g.default)(t)
                          .css("width")
                          .split("px")[0],
                        o = (0, g.default)(t)
                          .css("height")
                          .split("px")[0];
                      if (r < 44 || o < 44) {
                        var n = {
                          str:
                            r < 44
                              ? "Increase Width to atleast 44px"
                              : "Increase Height to atleast 44px"
                        };
                        e.push({
                          rule: "WCAG 2.1: 2.5.5",
                          warning: (0, l.default)(
                            "Touchable element size is less than the minimum required"
                          ),
                          snippet: (0, c.default)(t.outerHTML),
                          fix: (0, p.default)(n)
                        });
                      }
                    };
                  return t.forEach(r), e;
                };
              t.default = h;
            }
          ]);
        });

        return { finalerrors, finalwarnings };
      },
      finalerrors,
      finalwarnings
    );

    await page.waitFor(500);

    await navigationPromise;

    await browser.close();

    res.json(allErrors);
  })();
});

app.listen(8000, () => {
  console.log("server starteds");
});
