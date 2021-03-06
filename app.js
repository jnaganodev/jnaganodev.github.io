! function() {
    "use strict";
    var e = "undefined" == typeof global ? self : global;
    if ("function" != typeof e.require) {
        var o = {},
            a = {},
            t = {},
            n = {}.hasOwnProperty,
            s = /^\.\.?(\/|$)/,
            r = function(e, o) {
                for (var a, t = [], n = (s.test(o) ? e + "/" + o : o).split("/"), r = 0, l = n.length; r < l; r++) a = n[r], ".." === a ? t.pop() : "." !== a && "" !== a && t.push(a);
                return t.join("/")
            },
            l = function(e) {
                return e.split("/").slice(0, -1).join("/")
            },
            u = function(o) {
                return function(a) {
                    var t = r(l(o), a);
                    return e.require(t, o)
                }
            },
            c = function(e, o) {
                var t = x && x.createHot(e),
                    n = {
                        id: e,
                        exports: {},
                        hot: t
                    };
                return a[e] = n, o(n.exports, u(e), n), n.exports
            },
            p = function(e) {
                return t[e] ? p(t[e]) : e
            },
            i = function(e, o) {
                return p(r(l(e), o))
            },
            d = function(e, t) {
                null == t && (t = "/");
                var s = p(e);
                if (n.call(a, s)) return a[s].exports;
                if (n.call(o, s)) return c(s, o[s]);
                throw new Error("Cannot find module '" + e + "' from '" + t + "'")
            };
        d.alias = function(e, o) {
            t[o] = e
        };
        var w = /\.[^.\/]+$/,
            f = /\/index(\.[^\/]+)?$/,
            h = function(e) {
                if (w.test(e)) {
                    var o = e.replace(w, "");
                    n.call(t, o) && t[o].replace(w, "") !== o + "/index" || (t[o] = e)
                }
                if (f.test(e)) {
                    var a = e.replace(f, "");
                    n.call(t, a) || (t[a] = e)
                }
            };
        d.register = d.define = function(e, t) {
            if (e && "object" == typeof e)
                for (var s in e) n.call(e, s) && d.register(s, e[s]);
            else o[e] = t, delete a[e], h(e)
        }, d.list = function() {
            var e = [];
            for (var a in o) n.call(o, a) && e.push(a);
            return e
        };
        var x = e._hmr && new e._hmr(i, d, o, a);
        d._cache = a, d.hmr = x && x.wrap, d.brunch = !0, e.require = d
    }
}(),
function() {
    var e;
    "undefined" == typeof window ? this : window;
    require.register("js/animation.js", function(e, o, a) {
        "use strict";

        function t() {
            var e = Array.from(document.getElementById("lyrics-desktop").getElementsByClassName("lyric")),
                o = Array.from(document.getElementsByClassName("player__playlist__lyric")),
                a = (Array.from(document.getElementsByClassName("credit")), Array.from(document.getElementsByClassName("creditMobile")), []);
            o.forEach(function(o, t) {
                o.getElementsByClassName("lyric")[0].innerHTML = e[t].innerHTML, o.getElementsByClassName("lyric")[0].className = e[t].classList, a.push(o.getElementsByClassName("lyric")[0])
            }), TweenMax.to([".player", ".external", ".press", ".shop", ".shop-cd"], .1, {
                force3D: !0,
                x: -100,
                autoAlpha: 0,
                ease: Power1.easeOut
            }), TweenMax.to(".App__view-cart", .1, {
                force3D: !0,
                x: 100,
                autoAlpha: 0,
                ease: Power1.easeOut
            }), TweenMax.to([".shop-holder", ".shop-cd-holder"], .1, {
                autoAlpha: 0
            }), $("#internal").on("click", function() {
                $(".player-col").removeClass("wide"), TweenMax.to(".credit-mobile", .5, {
                    force3D: !0,
                    autoAlpha: 1,
                    ease: Power1.easeOut
                }), TweenMax.to(".App__view-cart", .5, {
                    force3D: !0,
                    x: 100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to(".player", .5, {
                    delay: .5,
                    force3D: !0,
                    x: 0,
                    autoAlpha: 1,
                    ease: Power1.easeOut
                }), TweenMax.to("#lyrics-desktop", .5, {
                    delay: .7,
                    force3D: !0,
                    x: 0,
                    autoAlpha: 1,
                    ease: Power1.easeOut
                }), TweenMax.to(".cred-desk", .5, {
                    delay: .7,
                    force3D: !0,
                    autoAlpha: 1,
                    ease: Power1.easeOut
                }), TweenMax.to(".external", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to(".press", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to(".shop", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut,
                    onComplete: function() {
                        TweenMax.to(".shop-holder", .1, {
                            autoAlpha: 0
                        }), $(".App__view-cart--open").click()
                    }
                }), TweenMax.to(".shop-cd", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut,
                    onComplete: function() {
                        TweenMax.to(".shop-cd-holder", .1, {
                            autoAlpha: 0
                        }), $(".App__view-cart--open").click()
                    }
                }), $(".product--open").click()
            }), $("#home").on("click", function() {
                TweenMax.to([".cred-desk", ".credit-mobile"], .1, {
                    force3D: !0,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to(".App__view-cart", .5, {
                    force3D: !0,
                    x: 100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to(".player", .5, {
                    delay: .2,
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to("#lyrics-desktop", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to(".external", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to(".press", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to(".shop", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut,
                    onComplete: function() {
                        TweenMax.to(".shop-holder", .1, {
                            autoAlpha: 0
                        }), $(".App__view-cart--open").click()
                    }
                }), TweenMax.to(".shop-cd", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut,
                    onComplete: function() {
                        TweenMax.to(".shop-cd-holder", .1, {
                            autoAlpha: 0
                        }), $(".App__view-cart--open").click()
                    }
                }), $(".product--open").click()
            }), $("#external").on("click", function() {
                TweenMax.to(".App__view-cart", .5, {
                    force3D: !0,
                    x: 100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to([".cred-desk", ".credit-mobile"], .01, {
                    force3D: !0,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to(".external", .5, {
                    delay: .6,
                    force3D: !0,
                    x: 0,
                    autoAlpha: 1,
                    ease: Power1.easeOut
                }), TweenMax.to(".player", .5, {
                    delay: .2,
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to("#lyrics-desktop", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to(".shop", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut,
                    onComplete: function() {
                        TweenMax.to(".shop-holder", .1, {
                            autoAlpha: 0
                        }), $(".App__view-cart--open").click()
                    }
                }), TweenMax.to(".shop-cd", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut,
                    onComplete: function() {
                        TweenMax.to(".shop-cd-holder", .1, {
                            autoAlpha: 0
                        }), $(".App__view-cart--open").click()
                    }
                }), TweenMax.to(".press", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), $(".product--open").click()
            }), $("#info").on("click", function() {
                TweenMax.to(".App__view-cart", .5, {
                    force3D: !0,
                    x: 100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to(".cred-desk", .1, {
                    force3D: !0,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to(".press", .5, {
                    force3D: !0,
                    x: 0,
                    delay: .6,
                    autoAlpha: 1,
                    ease: Power1.easeOut
                }), TweenMax.to(".player", .5, {
                    delay: .2,
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    onComplete: function() {
                        $(".player-col").addClass("wide")
                    }
                }), TweenMax.to("#lyrics-desktop", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), $(".product--open").click(), TweenMax.to(".shop", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut,
                    onComplete: function() {
                        TweenMax.to(".shop-holder", .1, {
                            autoAlpha: 0
                        }), $(".App__view-cart--open").click()
                    }
                }), TweenMax.to(".shop-cd", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut,
                    onComplete: function() {
                        TweenMax.to(".shop-cd-holder", .1, {
                            autoAlpha: 0
                        }), $(".App__view-cart--open").click()
                    }
                }), TweenMax.to(".external", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                })
            }), $("#shop").on("click", function() {
                $(".product--open").click(), $(".App__view-cart--open").click(), $(".App__header").css("display", "flex"), TweenMax.to(".App__view-cart", .5, {
                    force3D: !0,
                    x: 100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to(".shop-holder", .01, {
                    force3D: !0,
                    autoAlpha: 1,
                    ease: Power1.easeOut
                }), TweenMax.to(".cred-desk", .1, {
                    force3D: !0,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to(".shop", .5, {
                    force3D: !0,
                    x: 0,
                    delay: .6,
                    autoAlpha: 1,
                    ease: Power1.easeOut,
                    onComplete: function() {}
                }), TweenMax.to(".App__view-cart", .5, {
                    delay: .7,
                    force3D: !0,
                    autoAlpha: 1,
                    x: 0,
                    ease: Power1.easeOut
                }), TweenMax.to(".player", .5, {
                    delay: .2,
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut,
                    onComplete: function() {
                        $(".player-col").addClass("wide")
                    }
                }), TweenMax.to("#lyrics-desktop", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to(".shop-cd", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut,
                    onComplete: function() {
                        TweenMax.to(".shop-cd-holder", .1, {
                            autoAlpha: 0
                        }), $(".App__view-cart--open").click()
                    }
                }), TweenMax.to(".press", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to(".external", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                })
            }), $("#physical").on("click", function() {
                $(".product--open").click(), $(".App__view-cart--open").click(), $(".App__header").css("display", "flex"), TweenMax.to(".App__view-cart", .5, {
                    force3D: !0,
                    x: 100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to(".shop-cd-holder", .01, {
                    force3D: !0,
                    autoAlpha: 1,
                    ease: Power1.easeOut
                }), TweenMax.to(".cred-desk", .1, {
                    force3D: !0,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to(".shop-cd", .5, {
                    force3D: !0,
                    x: 0,
                    delay: .6,
                    autoAlpha: 1,
                    ease: Power1.easeOut,
                    onComplete: function() {}
                }), TweenMax.to(".App__view-cart", .5, {
                    delay: .7,
                    force3D: !0,
                    autoAlpha: 1,
                    x: 0,
                    ease: Power1.easeOut
                }), TweenMax.to(".player", .5, {
                    delay: .2,
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut,
                    onComplete: function() {
                        $(".player-col").addClass("wide")
                    }
                }), TweenMax.to("#lyrics-desktop", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to(".shop", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut,
                    onComplete: function() {
                        TweenMax.to(".shop-holder", .1, {
                            autoAlpha: 0
                        }), $(".App__view-cart--open").click()
                    }
                }), TweenMax.to(".press", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }), TweenMax.to(".external", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                })
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = t
    }), require.register("js/initialize.js", function(e, o, a) {
        "use strict";

        function t(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = o("./musicPlayer"),
            s = t(n),
            r = o("./animation"),
            l = t(r);
        document.addEventListener("DOMContentLoaded", function() {
            console.log("initialized");
            var e = .01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", e + "px"), window.addEventListener("resize", function() {
                var e = .01 * window.innerHeight;
                document.documentElement.style.setProperty("--vh", e + "px")
            }), (0, s["default"])(), (0, l["default"])()
        })
    }), require.register("js/musicPlayer.js", function(e, o, a) {
        "use strict";

        function t() {
            function e(e) {
                $(".play").show(), $(".pause").hide()
            }

            function o(e) {
                $(".bg-holder__image").hasClass("animate") || setTimeout(function() {
                    $(".bg-holder__image").addClass("animate")
                }, 1e3), $(".global-play").show(), n = e, s = r[e], f || (w[r[n]].play(), setTimeout(function() {
                    f = !0
                }, 100));
                var o = Array.from(u[n].getElementsByTagName("p")),
                    a = Array.from(d[n].getElementsByTagName("p"));
                w[s].fade(0, 1, 1e3), TweenMax.to([u, p, i], .2, {
                    force3D: !0,
                    autoAlpha: 0,
                    ease: Power1.easeIn
                }), TweenMax.to([u[n], d[n]], .1, {
                    force3D: !0,
                    delay: .1,
                    autoAlpha: 1
                }), TweenMax.to([u[n], d[n]], .1, {
                    force3D: !0,
                    delay: .1,
                    autoAlpha: 1
                }), TweenMax.to(p[n], .4, {
                    delay: .2,
                    autoAlpha: 1,
                    force3D: !0,
                    ease: Power4.easeInOut
                }), TweenMax.to(i[n], .4, {
                    delay: .4,
                    autoAlpha: 1,
                    force3D: !0,
                    ease: Power4.easeInOut
                }), $("#lyrics-desktop").hasClass("hidden") && (TweenMax.to("#lyrics-desktop", .5, {
                    delay: .1,
                    force3D: !0,
                    x: 0,
                    autoAlpha: 1,
                    ease: Power1.easeOut
                }), TweenMax.to(".cred-desk", .4, {
                    delay: .2,
                    force3D: !0,
                    autoAlpha: 1,
                    ease: Power1.easeOut
                })), TweenMax.from(o, .5, {
                    delay: .1,
                    x: -100,
                    autoAlpha: 0,
                    force3D: !0,
                    ease: "Power4.in"
                }), TweenMax.from(a, .1, {
                    autoAlpha: 0,
                    force3D: !0,
                    ease: Power4.easeInOut
                })
            }

            function a(e, o) {
                $(".bg-holder__image").removeClass("animate"), e && (w[e].fade(1, 0, 1e3), f = !1, setTimeout(function() {
                    w[e].stop()
                }, 1e3))
            }

            function t(e) {
                $("#lyrics-desktop").hasClass("hidden") ? (console.log("asdfasdfasdf"), $(".global-play").show(), TweenMax.to("#lyrics-desktop", .5, {
                    force3D: !0,
                    x: 0,
                    autoAlpha: 1,
                    ease: Power1.easeOut,
                    onComplete: function() {
                        $("#lyrics-desktop").removeClass("hidden")
                    }
                }), TweenMax.to(".cred-desk", .5, {
                    force3D: !0,
                    autoAlpha: 1,
                    ease: Power1.easeOut
                })) : ($(".global-play").hide(), TweenMax.to("#lyrics-desktop", .5, {
                    force3D: !0,
                    x: -100,
                    autoAlpha: 0,
                    ease: Power1.easeOut,
                    onComplete: function() {
                        $("#lyrics-desktop").addClass("hidden")
                    }
                }), TweenMax.to(".cred-desk", .5, {
                    force3D: !0,
                    autoAlpha: 0,
                    ease: Power1.easeOut
                }))
            }
            var n = 0,
                s = null,
                r = ["sound_01", "sound_02", "sound_03", "sound_04", "sound_05", "sound_06", "sound_07", "sound_08", "sound_09", "sound_10", "sound_11", "sound_12"],
                l = Array.from(document.getElementsByClassName("player__playlist__track")),
                u = Array.from(document.getElementById("lyrics-desktop").getElementsByClassName("lyric")),
                c = Array.from(document.getElementsByClassName("player__playlist__lyric")),
                p = Array.from(document.getElementsByClassName("credit")),
                i = Array.from(document.getElementsByClassName("creditMobile")),
                d = [];
            c.forEach(function(e, o) {
                e.getElementsByClassName("lyric")[0].innerHTML = u[o].innerHTML, e.getElementsByClassName("lyric")[0].className = u[o].classList, d.push(e.getElementsByClassName("lyric")[0])
            }), $(".global-play").hide(), $(".play").hide(), Howler.autoUnlock = !1;
            var w = {
                    sound_01: new Howl({
                        src: ["trax/MSHC.mp3"],
                        onend: function() {
                            e(0)
                        },
                        autoSuspend: !1
                    }),
                    sound_02: new Howl({
                        src: ["trax/vishna.mp3"],
                        onend: function() {
                            e(1)
                        },
                        autoSuspend: !1
                    }),
                    sound_03: new Howl({
                        src: ["trax/MTR.mp3"],
                        onend: function() {
                            e(2)
                        },
                        autoSuspend: !1
                    }),
                    sound_04: new Howl({
                        src: ["trax/cyberdelia.mp3"],
                        onend: function() {
                            e(3)
                        },
                        autoSuspend: !1
                    }),
                    sound_05: new Howl({
                        src: ["trax/everylittle.mp3"],
                        onend: function() {
                            e(4)
                        },
                        autoSuspend: !1
                    }),
                    sound_06: new Howl({
                        src: ["trax/0612.mp3"],
                        onend: function() {
                            e(5)
                        },
                        autoSuspend: !1
                    }),
                    sound_07: new Howl({
                        src: ["trax/dissipation.mp3"],
                        onend: function() {
                            e(6)
                        },
                        autoSuspend: !1
                    }),
                    sound_08: new Howl({
                        src: ["trax/0XP.mp3"],
                        onend: function() {
                            e(7)
                        },
                        autoSuspend: !1
                    }),
                    sound_09: new Howl({
                        src: ["trax/11H25.mp3"],
                        onend: function() {
                            e(7)
                        },
                        autoSuspend: !1
                    }),
                    sound_10: new Howl({
                        src: ["trax/vicejammin.mp3"],
                        onend: function() {
                            e(7)
                        },
                        autoSuspend: !1
                    }),
                    sound_11: new Howl({
                        src: ["trax/cov.mp3"],
                        onend: function() {
                            e(7)
                        },
                        autoSuspend: !1
                    }),
                    sound_12: new Howl({
                        src: ["trax/icomn.mp3"],
                        onend: function() {
                            e(7)
                        },
                        autoSuspend: !1
                    })
                },
                f = !1;
            $(".global-play").on("click", function(e) {
                var o = e.target.dataset.player;
                console.log(o), n = o, s = r[o], w[r[o]].playing() ? ($(".bg-holder__image").addClass("animation-pause"), $(".global-play").removeClass("playing"), $(".play").show(), $(".pause").hide(), w[s].fade(1, 0, 1e3), setTimeout(function() {
                    w[r[o]].pause()
                }, 1e3)) : ($(".global-play").addClass("playing"), $(".bg-holder__image").removeClass("animation-pause"), $(".pause").show(), $(".play").hide(), w[s].fade(0, 1, 1e3), w[r[n]].play())
            }), l.forEach(function(e, n) {
                e.addEventListener("click", function() {
                    var l = $(e),
                        u = s === r[n];
                    $(".global-play").attr("data-player", n), $(".global-play").hasClass("playing") || $(".global-play").addClass("playing"), u ? (t(n), l.hasClass("open") ? (l.removeClass("open"), TweenMax.to(".credit-mobile", .4, {
                        force3D: !0,
                        autoAlpha: 0,
                        ease: Power4.easeOut
                    })) : (l.addClass("open"), TweenMax.to(".credit-mobile", .4, {
                        force3D: !0,
                        autoAlpha: 1,
                        ease: Power4.easeOut
                    }))) : (a(s, e.dataset.id), o(n), $(".open").length ? ($(".open").removeClass("open"), setTimeout(function() {
                        l.addClass("open")
                    }, 1e3)) : l.addClass("open"))
                })
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = t
    }), require.alias("process/browser.js", "process"), e = require("process"), require.register("___globals___", function(e, o, a) {
        window.jQuery = o("jquery"), window.$ = o("jquery"), window.bootstrap = o("bootstrap")
    })
}(), require("___globals___"), require("js/initialize");
