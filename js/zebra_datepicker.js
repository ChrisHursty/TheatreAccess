! function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
    "use strict";
    a.Zebra_DatePicker = function(b, c) {
        var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = {
                always_visible: !1,
                container: a("body"),
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                days_abbr: !1,
                default_position: "above",
                direction: 0,
                disabled_dates: !1,
                enabled_dates: !1,
                first_day_of_week: 1,
                format: "Y-m-d",
                header_captions: {
                    days: "F, Y",
                    months: "Y",
                    years: "Y1 - Y2"
                },
                header_navigation: ["&#171;", "&#187;"],
                inside: !0,
                lang_clear_date: "Clear date",
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                months_abbr: !1,
                offset: [5, -5],
                pair: !1,
                readonly_element: !0,
                select_other_months: !1,
                show_clear_date: 0,
                show_icon: !0,
                show_other_months: !0,
                show_select_today: "Today",
                show_week_number: !1,
                start_date: !1,
                strict: !1,
                view: "days",
                weekend_days: [0, 6],
                zero_pad: !1,
                onChange: null,
                onClear: null,
                onOpen: null,
                onClose: null,
                onSelect: null
            },
            P = this;
        P.settings = {};
        var Q = a(b),
            R = function(b) {
                if (N = Math.floor(65536 * (1 + Math.random())).toString(16), !b) {
                    P.settings = a.extend({}, O, c);
                    for (var y in Q.data()) 0 === y.indexOf("zdp_") && (y = y.replace(/^zdp\_/, ""), void 0 !== O[y] && (P.settings[y] = "pair" == y ? a(Q.data("zdp_" + y)) : Q.data("zdp_" + y)))
                }
                P.settings.readonly_element && Q.attr("readonly", "readonly");
                var E = {
                        days: ["d", "j", "D"],
                        months: ["F", "m", "M", "n", "t"],
                        years: ["o", "Y", "y"]
                    },
                    F = !1,
                    G = !1,
                    R = !1,
                    U = null;
                for (U in E) a.each(E[U], function(a, b) {
                    P.settings.format.indexOf(b) > -1 && ("days" == U ? F = !0 : "months" == U ? G = !0 : "years" == U && (R = !0))
                });
                H = F && G && R ? ["years", "months", "days"] : !F && G && R ? ["years", "months"] : F && G && !R ? ["months", "days"] : F || G || !R ? F || !G || R ? ["years", "months", "days"] : ["months"] : ["years"], -1 == a.inArray(P.settings.view, H) && (P.settings.view = H[H.length - 1]), x = [], w = [];
                for (var V, W = 0; 2 > W; W++) V = 0 === W ? P.settings.disabled_dates : P.settings.enabled_dates, a.isArray(V) && V.length > 0 && a.each(V, function() {
                    for (var b = this.split(" "), c = 0; 4 > c; c++) {
                        b[c] || (b[c] = "*"), b[c] = b[c].indexOf(",") > -1 ? b[c].split(",") : new Array(b[c]);
                        for (var d = 0; d < b[c].length; d++)
                            if (b[c][d].indexOf("-") > -1) {
                                var e = b[c][d].match(/^([0-9]+)\-([0-9]+)/);
                                if (null !== e) {
                                    for (var f = fa(e[1]); f <= fa(e[2]); f++) - 1 == a.inArray(f, b[c]) && b[c].push(f + "");
                                    b[c].splice(d, 1)
                                }
                            }
                        for (d = 0; d < b[c].length; d++) b[c][d] = isNaN(fa(b[c][d])) ? b[c][d] : fa(b[c][d])
                    }
                    0 === W ? x.push(b) : w.push(b)
                });
                var X, Y, Z = new Date,
                    aa = P.settings.reference_date ? P.settings.reference_date : Q.data("zdp_reference_date") && void 0 !== Q.data("zdp_reference_date") ? Q.data("zdp_reference_date") : Z;
                if (z = void 0, A = void 0, o = aa.getMonth(), l = Z.getMonth(), p = aa.getFullYear(), m = Z.getFullYear(), q = aa.getDate(), n = Z.getDate(), P.settings.direction === !0) z = aa;
                else if (P.settings.direction === !1) A = aa, D = A.getMonth(), C = A.getFullYear(), B = A.getDate();
                else if (!a.isArray(P.settings.direction) && _(P.settings.direction) && fa(P.settings.direction) > 0 || a.isArray(P.settings.direction) && ((X = S(P.settings.direction[0])) || P.settings.direction[0] === !0 || _(P.settings.direction[0]) && P.settings.direction[0] > 0) && ((Y = S(P.settings.direction[1])) || P.settings.direction[1] === !1 || _(P.settings.direction[1]) && P.settings.direction[1] >= 0)) z = X ? X : new Date(p, o, q + fa(a.isArray(P.settings.direction) ? P.settings.direction[0] === !0 ? 0 : P.settings.direction[0] : P.settings.direction)), o = z.getMonth(), p = z.getFullYear(), q = z.getDate(), Y && +Y >= +z ? A = Y : !Y && P.settings.direction[1] !== !1 && a.isArray(P.settings.direction) && (A = new Date(p, o, q + fa(P.settings.direction[1]))), A && (D = A.getMonth(), C = A.getFullYear(), B = A.getDate());
                else if (!a.isArray(P.settings.direction) && _(P.settings.direction) && fa(P.settings.direction) < 0 || a.isArray(P.settings.direction) && (P.settings.direction[0] === !1 || _(P.settings.direction[0]) && P.settings.direction[0] < 0) && ((X = S(P.settings.direction[1])) || _(P.settings.direction[1]) && P.settings.direction[1] >= 0)) A = new Date(p, o, q + fa(a.isArray(P.settings.direction) ? P.settings.direction[0] === !1 ? 0 : P.settings.direction[0] : P.settings.direction)), D = A.getMonth(), C = A.getFullYear(), B = A.getDate(), X && +A > +X ? z = X : !X && a.isArray(P.settings.direction) && (z = new Date(C, D, B - fa(P.settings.direction[1]))), z && (o = z.getMonth(), p = z.getFullYear(), q = z.getDate());
                else if (a.isArray(P.settings.disabled_dates) && P.settings.disabled_dates.length > 0)
                    for (var da in x)
                        if ("*" == x[da][0] && "*" == x[da][1] && "*" == x[da][2] && "*" == x[da][3]) {
                            var ha = [];
                            if (a.each(w, function() {
                                    var a = this;
                                    "*" != a[2][0] && ha.push(parseInt(a[2][0] + ("*" == a[1][0] ? "12" : ea(a[1][0], 2)) + ("*" == a[0][0] ? "*" == a[1][0] ? "31" : new Date(a[2][0], a[1][0], 0).getDate() : ea(a[0][0], 2)), 10))
                                }), ha.sort(), ha.length > 0) {
                                var ja = (ha[0] + "").match(/([0-9]{4})([0-9]{2})([0-9]{2})/);
                                p = parseInt(ja[1], 10), o = parseInt(ja[2], 10) - 1, q = parseInt(ja[3], 10)
                            }
                            break
                        }
                if ($(p, o, q)) {
                    for (; $(p);) z ? (p++, o = 0) : (p--, o = 11);
                    for (; $(p, o);) z ? (o++, q = 1) : (o--, q = new Date(p, o + 1, 0).getDate()), o > 11 ? (p++, o = 0, q = 1) : 0 > o && (p--, o = 11, q = new Date(p, o + 1, 0).getDate());
                    for (; $(p, o, q);) z ? q++ : q--, Z = new Date(p, o, q), p = Z.getFullYear(), o = Z.getMonth(), q = Z.getDate();
                    Z = new Date(p, o, q), p = Z.getFullYear(), o = Z.getMonth(), q = Z.getDate()
                }
                var ka = S(Q.val() || (P.settings.start_date ? P.settings.start_date : ""));
                if (ka && P.settings.strict && $(ka.getFullYear(), ka.getMonth(), ka.getDate()) && Q.val(""), b || void 0 === z && void 0 === ka || ga(void 0 !== z ? z : ka), !P.settings.always_visible) {
                    if (!b) {
                        if (P.settings.show_icon) {
                            "firefox" == ia.name && Q.is('input[type="text"]') && "inline" == Q.css("display") && Q.css("display", "inline-block");
                            var la = a('<span class="Zebra_DatePicker_Icon_Wrapper"></span>').css({
                                display: Q.css("display"),
                                position: "static" == Q.css("position") ? "relative" : Q.css("position"),
                                "float": Q.css("float"),
                                top: Q.css("top"),
                                right: Q.css("right"),
                                bottom: Q.css("bottom"),
                                left: Q.css("left")
                            });
                            Q.wrap(la).css({
                                position: "relative",
                                top: "auto",
                                right: "auto",
                                bottom: "auto",
                                left: "auto"
                            }), f = a('<button type="button" class="Zebra_DatePicker_Icon' + ("disabled" == Q.attr("disabled") ? " Zebra_DatePicker_Icon_Disabled" : "") + '">Pick a date</button>'), P.icon = f, I = f.add(Q)
                        } else I = Q;
                        I.bind("click", function(a) {
                            a.preventDefault(), Q.attr("disabled") || (e.hasClass("dp_visible") ? P.hide() : P.show())
                        }), void 0 !== f && f.insertAfter(Q)
                    }
                    if (void 0 !== f) {
                        f.attr("style", ""), P.settings.inside && f.addClass("Zebra_DatePicker_Icon_Inside");
                        var ma = Q.outerWidth(),
                            na = Q.outerHeight(),
                            oa = parseInt(Q.css("marginLeft"), 10) || 0,
                            pa = parseInt(Q.css("marginTop"), 10) || 0,
                            qa = f.outerWidth(),
                            ra = f.outerHeight(),
                            sa = parseInt(f.css("marginLeft"), 10) || 0,
                            ta = parseInt(f.css("marginRight"), 10) || 0;
                        f.css(P.settings.inside ? {
                            top: pa + (na - ra) / 2,
                            left: oa + (ma - qa - ta)
                        } : {
                            top: pa + (na - ra) / 2,
                            left: oa + ma + sa
                        }), f.removeClass(" Zebra_DatePicker_Icon_Disabled"), "disabled" == Q.attr("disabled") && f.addClass("Zebra_DatePicker_Icon_Disabled")
                    }
                }
                if (L = P.settings.show_select_today !== !1 && a.inArray("days", H) > -1 && !$(m, l, n) ? P.settings.show_select_today : !1, !b) {
                    a(window).bind("resize.Zebra_DatePicker_" + N, function() {
                        P.hide(), void 0 !== f && (clearTimeout(M), M = setTimeout(function() {
                            P.update()
                        }, 100))
                    });
                    var ua = '<div class="Zebra_DatePicker"><table class="dp_header"><tr><td class="dp_previous">' + P.settings.header_navigation[0] + '</td><td class="dp_caption">&#032;</td><td class="dp_next">' + P.settings.header_navigation[1] + '</td></tr></table><table class="dp_daypicker"></table><table class="dp_monthpicker"></table><table class="dp_yearpicker"></table><table class="dp_footer"><tr><td class="dp_today"' + (P.settings.show_clear_date !== !1 ? ' style="width:50%"' : "") + ">" + L + '</td><td class="dp_clear"' + (L !== !1 ? ' style="width:50%"' : "") + ">" + P.settings.lang_clear_date + "</td></tr></table></div>";
                    e = a(ua), P.datepicker = e, g = a("table.dp_header", e), h = a("table.dp_daypicker", e), i = a("table.dp_monthpicker", e), j = a("table.dp_yearpicker", e), K = a("table.dp_footer", e), J = a("td.dp_today", K), k = a("td.dp_clear", K), P.settings.always_visible ? Q.attr("disabled") || (P.settings.always_visible.append(e), P.show()) : P.settings.container.append(e), e.delegate("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_week_number)", "mouseover", function() {
                        a(this).addClass("dp_hover")
                    }).delegate("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_week_number)", "mouseout", function() {
                        a(this).removeClass("dp_hover")
                    }), T(a("td", g)), a(".dp_previous", g).bind("click", function() {
                        "months" == d ? s-- : "years" == d ? s -= 12 : --r < 0 && (r = 11, s--), ba()
                    }), a(".dp_caption", g).bind("click", function() {
                        d = "days" == d ? a.inArray("months", H) > -1 ? "months" : a.inArray("years", H) > -1 ? "years" : "days" : "months" == d ? a.inArray("years", H) > -1 ? "years" : a.inArray("days", H) > -1 ? "days" : "months" : a.inArray("days", H) > -1 ? "days" : a.inArray("months", H) > -1 ? "months" : "years", ba()
                    }), a(".dp_next", g).bind("click", function() {
                        "months" == d ? s++ : "years" == d ? s += 12 : 12 == ++r && (r = 0, s++), ba()
                    }), h.delegate("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_week_number)", "click", function() {
                        P.settings.select_other_months && a(this).attr("class") && null !== (ja = a(this).attr("class").match(/date\_([0-9]{4})(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])/)) ? ca(ja[1], ja[2] - 1, ja[3], "days", a(this)) : ca(s, r, fa(a(this).html()), "days", a(this))
                    }), i.delegate("td:not(.dp_disabled)", "click", function() {
                        var b = a(this).attr("class").match(/dp\_month\_([0-9]+)/);
                        r = fa(b[1]), -1 == a.inArray("days", H) ? ca(s, r, 1, "months", a(this)) : (d = "days", P.settings.always_visible && Q.val(""), ba())
                    }), j.delegate("td:not(.dp_disabled)", "click", function() {
                        s = fa(a(this).html()), -1 == a.inArray("months", H) ? ca(s, 1, 1, "years", a(this)) : (d = "months", P.settings.always_visible && Q.val(""), ba())
                    }), a(J).bind("click", function(b) {
                        b.preventDefault(), ca(m, l, n, "days", a(".dp_current", h)), P.settings.always_visible && P.show(), P.hide()
                    }), a(k).bind("click", function(b) {
                        b.preventDefault(), Q.val(""), P.settings.always_visible ? (t = null, u = null, v = null, a("td.dp_selected", e).removeClass("dp_selected")) : (t = null, u = null, v = null, r = null, s = null), P.hide(), P.settings.onClear && "function" == typeof P.settings.onClear && P.settings.onClear.call(Q, Q)
                    }), P.settings.always_visible || (a(document).bind("mousedown.Zebra_DatePicker_" + N + ", touchstart.Zebra_DatePicker_" + N, function(b) {
                        if (e.hasClass("dp_visible")) {
                            if (P.settings.show_icon && a(b.target).get(0) === f.get(0)) return !0;
                            0 === a(b.target).parents().filter(".Zebra_DatePicker").length && P.hide()
                        }
                    }), a(document).bind("keyup.Zebra_DatePicker_" + N, function(a) {
                        e.hasClass("dp_visible") && 27 == a.which && P.hide()
                    })), ba()
                }
            };
        P.destroy = function() {
            void 0 !== P.icon && P.icon.remove(), P.datepicker.remove(), a(document).unbind("keyup.Zebra_DatePicker_" + N), a(document).unbind("mousedown.Zebra_DatePicker_" + N), a(window).unbind("resize.Zebra_DatePicker_" + N), Q.removeData("Zebra_DatePicker")
        }, P.hide = function() {
            P.settings.always_visible || (Z("hide"), e.removeClass("dp_visible").addClass("dp_hidden"), P.settings.onClose && "function" == typeof P.settings.onClose && P.settings.onClose.call(Q, Q))
        }, P.show = function() {
            d = P.settings.view;
            var b = S(Q.val() || (P.settings.start_date ? P.settings.start_date : ""));
            if (b ? (u = b.getMonth(), r = b.getMonth(), v = b.getFullYear(), s = b.getFullYear(), t = b.getDate(), $(v, u, t) && (P.settings.strict && Q.val(""), r = o, s = p)) : (r = o, s = p), ba(), P.settings.always_visible) e.removeClass("dp_hidden").addClass("dp_visible");
            else {
                if (P.settings.container.is("body")) {
                    var c = e.outerWidth(),
                        g = e.outerHeight(),
                        h = (void 0 !== f ? f.offset().left + f.outerWidth(!0) : Q.offset().left + Q.outerWidth(!0)) + P.settings.offset[0],
                        i = (void 0 !== f ? f.offset().top : Q.offset().top) - g + P.settings.offset[1],
                        j = a(window).width(),
                        k = a(window).height(),
                        l = a(window).scrollTop(),
                        m = a(window).scrollLeft();
                    "below" == P.settings.default_position && (i = (void 0 !== f ? f.offset().top : Q.offset().top) + P.settings.offset[1]), h + c > m + j && (h = m + j - c), m > h && (h = m), i + g > l + k && (i = l + k - g), l > i && (i = l), e.css({
                        left: h,
                        top: i
                    })
                } else e.css({
                    left: 0,
                    top: 0
                });
                e.removeClass("dp_hidden").addClass("dp_visible"), Z()
            }
            P.settings.onOpen && "function" == typeof P.settings.onOpen && P.settings.onOpen.call(Q, Q)
        }, P.update = function(b) {
            P.original_direction && (P.original_direction = P.direction), P.settings = a.extend(P.settings, b), R(!0)
        };
        var S = function(b) {
                if (b += "", "" !== a.trim(b)) {
                    for (var c = U(P.settings.format), d = ["d", "D", "j", "l", "N", "S", "w", "F", "m", "M", "n", "Y", "y"], e = [], f = [], g = null, h = null, i = 0; i < d.length; i++)(g = c.indexOf(d[i])) > -1 && e.push({
                        character: d[i],
                        position: g
                    });
                    if (e.sort(function(a, b) {
                            return a.position - b.position
                        }), a.each(e, function(a, b) {
                            switch (b.character) {
                                case "d":
                                    f.push("0[1-9]|[12][0-9]|3[01]");
                                    break;
                                case "D":
                                    f.push("[a-z]{3}");
                                    break;
                                case "j":
                                    f.push("[1-9]|[12][0-9]|3[01]");
                                    break;
                                case "l":
                                    f.push("[a-z]+");
                                    break;
                                case "N":
                                    f.push("[1-7]");
                                    break;
                                case "S":
                                    f.push("st|nd|rd|th");
                                    break;
                                case "w":
                                    f.push("[0-6]");
                                    break;
                                case "F":
                                    f.push("[a-z]+");
                                    break;
                                case "m":
                                    f.push("0[1-9]|1[012]+");
                                    break;
                                case "M":
                                    f.push("[a-z]{3}");
                                    break;
                                case "n":
                                    f.push("[1-9]|1[012]");
                                    break;
                                case "Y":
                                    f.push("[0-9]{4}");
                                    break;
                                case "y":
                                    f.push("[0-9]{2}")
                            }
                        }), f.length && (e.reverse(), a.each(e, function(a, b) {
                            c = c.replace(b.character, "(" + f[f.length - a - 1] + ")")
                        }), f = new RegExp("^" + c + "$", "ig"), h = f.exec(b))) {
                        var j, k = new Date,
                            l = 1,
                            m = k.getMonth() + 1,
                            n = k.getFullYear(),
                            o = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                            p = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                            q = !0;
                        if (e.reverse(), a.each(e, function(b, c) {
                                if (!q) return !0;
                                switch (c.character) {
                                    case "m":
                                    case "n":
                                        m = fa(h[b + 1]);
                                        break;
                                    case "d":
                                    case "j":
                                        l = fa(h[b + 1]);
                                        break;
                                    case "D":
                                    case "l":
                                    case "F":
                                    case "M":
                                        j = "D" == c.character || "l" == c.character ? P.settings.days : P.settings.months, q = !1, a.each(j, function(a, d) {
                                            if (q) return !0;
                                            if (h[b + 1].toLowerCase() == d.substring(0, "D" == c.character || "M" == c.character ? 3 : d.length).toLowerCase()) {
                                                switch (c.character) {
                                                    case "D":
                                                        h[b + 1] = o[a].substring(0, 3);
                                                        break;
                                                    case "l":
                                                        h[b + 1] = o[a];
                                                        break;
                                                    case "F":
                                                        h[b + 1] = p[a], m = a + 1;
                                                        break;
                                                    case "M":
                                                        h[b + 1] = p[a].substring(0, 3), m = a + 1
                                                }
                                                q = !0
                                            }
                                        });
                                        break;
                                    case "Y":
                                        n = fa(h[b + 1]);
                                        break;
                                    case "y":
                                        n = "19" + fa(h[b + 1])
                                }
                            }), q) {
                            var r = new Date(n, (m || 1) - 1, l || 1);
                            if (r.getFullYear() == n && r.getDate() == (l || 1) && r.getMonth() == (m || 1) - 1) return r
                        }
                    }
                    return !1
                }
            },
            T = function(a) {
                "firefox" == ia.name ? a.css("MozUserSelect", "none") : "explorer" == ia.name ? a.bind("selectstart", function() {
                    return !1
                }) : a.mousedown(function() {
                    return !1
                })
            },
            U = function(a) {
                return a.replace(/([-.,*+?^${}()|[\]\/\\])/g, "\\$1")
            },
            V = function(b) {
                for (var c = "", d = b.getDate(), e = b.getDay(), f = P.settings.days[e], g = b.getMonth() + 1, h = P.settings.months[g - 1], i = b.getFullYear() + "", j = 0; j < P.settings.format.length; j++) {
                    var k = P.settings.format.charAt(j);
                    switch (k) {
                        case "y":
                            i = i.substr(2);
                        case "Y":
                            c += i;
                            break;
                        case "m":
                            g = ea(g, 2);
                        case "n":
                            c += g;
                            break;
                        case "M":
                            h = a.isArray(P.settings.months_abbr) && void 0 !== P.settings.months_abbr[g - 1] ? P.settings.months_abbr[g - 1] : P.settings.months[g - 1].substr(0, 3);
                        case "F":
                            c += h;
                            break;
                        case "d":
                            d = ea(d, 2);
                        case "j":
                            c += d;
                            break;
                        case "D":
                            f = a.isArray(P.settings.days_abbr) && void 0 !== P.settings.days_abbr[e] ? P.settings.days_abbr[e] : P.settings.days[e].substr(0, 3);
                        case "l":
                            c += f;
                            break;
                        case "N":
                            e++;
                        case "w":
                            c += e;
                            break;
                        case "S":
                            c += d % 10 == 1 && "11" != d ? "st" : d % 10 == 2 && "12" != d ? "nd" : d % 10 == 3 && "13" != d ? "rd" : "th";
                            break;
                        default:
                            c += k
                    }
                }
                return c
            },
            W = function() {
                var b = new Date(s, r + 1, 0).getDate(),
                    c = new Date(s, r, 1).getDay(),
                    d = new Date(s, r, 0).getDate(),
                    e = c - P.settings.first_day_of_week;
                e = 0 > e ? 7 + e : e, aa(P.settings.header_captions.days);
                var f = "<tr>";
                P.settings.show_week_number && (f += "<th>" + P.settings.show_week_number + "</th>");
                for (var g = 0; 7 > g; g++) f += "<th>" + (a.isArray(P.settings.days_abbr) && void 0 !== P.settings.days_abbr[(P.settings.first_day_of_week + g) % 7] ? P.settings.days_abbr[(P.settings.first_day_of_week + g) % 7] : P.settings.days[(P.settings.first_day_of_week + g) % 7].substr(0, 2)) + "</th>";
                for (f += "</tr><tr>", g = 0; 42 > g; g++) {
                    g > 0 && g % 7 === 0 && (f += "</tr><tr>"), g % 7 === 0 && P.settings.show_week_number && (f += '<td class="dp_week_number">' + ha(new Date(s, r, g - e + 1)) + "</td>");
                    var i = g - e + 1;
                    if (P.settings.select_other_months && (e > g || i > b)) {
                        var j = new Date(s, r, i),
                            k = j.getFullYear(),
                            o = j.getMonth(),
                            p = j.getDate();
                        j = k + ea(o + 1, 2) + ea(p, 2)
                    }
                    if (e > g) f += '<td class="' + (P.settings.select_other_months && !$(k, o, p) ? "dp_not_in_month_selectable date_" + j : "dp_not_in_month") + '">' + (P.settings.select_other_months || P.settings.show_other_months ? ea(d - e + g + 1, P.settings.zero_pad ? 2 : 0) : "&nbsp;") + "</td>";
                    else if (i > b) f += '<td class="' + (P.settings.select_other_months && !$(k, o, p) ? "dp_not_in_month_selectable date_" + j : "dp_not_in_month") + '">' + (P.settings.select_other_months || P.settings.show_other_months ? ea(i - b, P.settings.zero_pad ? 2 : 0) : "&nbsp;") + "</td>";
                    else {
                        var q = (P.settings.first_day_of_week + g) % 7,
                            w = "";
                        $(s, r, i) ? (a.inArray(q, P.settings.weekend_days) > -1 ? w = "dp_weekend_disabled" : w += " dp_disabled", r == l && s == m && n == i && (w += " dp_disabled_current")) : (a.inArray(q, P.settings.weekend_days) > -1 && (w = "dp_weekend"), r == u && s == v && t == i && (w += " dp_selected"), r == l && s == m && n == i && (w += " dp_current")), f += "<td" + ("" !== w ? ' class="' + a.trim(w) + '"' : "") + ">" + ((P.settings.zero_pad ? ea(i, 2) : i) || "&nbsp;") + "</td>"
                    }
                }
                f += "</tr>", h.html(a(f)), P.settings.always_visible && (E = a("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_week_number)", h)), h.show()
            },
            X = function() {
                aa(P.settings.header_captions.months);
                for (var b = "<tr>", c = 0; 12 > c; c++) {
                    c > 0 && c % 3 === 0 && (b += "</tr><tr>");
                    var d = "dp_month_" + c;
                    $(s, c) ? d += " dp_disabled" : u !== !1 && u == c && s == v ? d += " dp_selected" : l == c && m == s && (d += " dp_current"), b += '<td class="' + a.trim(d) + '">' + (a.isArray(P.settings.months_abbr) && void 0 !== P.settings.months_abbr[c] ? P.settings.months_abbr[c] : P.settings.months[c].substr(0, 3)) + "</td>"
                }
                b += "</tr>", i.html(a(b)), P.settings.always_visible && (F = a("td:not(.dp_disabled)", i)), i.show()
            },
            Y = function() {
                aa(P.settings.header_captions.years);
                for (var b = "<tr>", c = 0; 12 > c; c++) {
                    c > 0 && c % 3 === 0 && (b += "</tr><tr>");
                    var d = "";
                    $(s - 7 + c) ? d += " dp_disabled" : v && v == s - 7 + c ? d += " dp_selected" : m == s - 7 + c && (d += " dp_current"), b += "<td" + ("" !== a.trim(d) ? ' class="' + a.trim(d) + '"' : "") + ">" + (s - 7 + c) + "</td>"
                }
                b += "</tr>", j.html(a(b)), P.settings.always_visible && (G = a("td:not(.dp_disabled)", j)), j.show()
            },
            Z = function(b) {
                if ("explorer" == ia.name && 6 == ia.version) {
                    if (!y) {
                        var c = fa(e.css("zIndex")) - 1;
                        y = a("<iframe>", {
                            src: 'javascript:document.write("")',
                            scrolling: "no",
                            frameborder: 0,
                            css: {
                                zIndex: c,
                                position: "absolute",
                                top: -1e3,
                                left: -1e3,
                                width: e.outerWidth(),
                                height: e.outerHeight(),
                                filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=0)",
                                display: "none"
                            }
                        }), a("body").append(y)
                    }
                    switch (b) {
                        case "hide":
                            y.hide();
                            break;
                        default:
                            var d = e.offset();
                            y.css({
                                top: d.top,
                                left: d.left,
                                display: "block"
                            })
                    }
                }
            },
            $ = function(b, c, d) {
                if ((void 0 === b || isNaN(b)) && (void 0 === c || isNaN(c)) && (void 0 === d || isNaN(d))) return !1;
                if (a.isArray(P.settings.direction) || 0 !== fa(P.settings.direction)) {
                    var e = fa(da(b, "undefined" != typeof c ? ea(c, 2) : "", "undefined" != typeof d ? ea(d, 2) : "")),
                        f = (e + "").length;
                    if (8 == f && ("undefined" != typeof z && e < fa(da(p, ea(o, 2), ea(q, 2))) || "undefined" != typeof A && e > fa(da(C, ea(D, 2), ea(B, 2))))) return !0;
                    if (6 == f && ("undefined" != typeof z && e < fa(da(p, ea(o, 2))) || "undefined" != typeof A && e > fa(da(C, ea(D, 2))))) return !0;
                    if (4 == f && ("undefined" != typeof z && p > e || "undefined" != typeof A && e > C)) return !0
                }
                "undefined" != typeof c && (c += 1);
                var g = !1,
                    h = !1;
                return x && a.each(x, function() {
                    if (!g) {
                        var e = this;
                        if ((a.inArray(b, e[2]) > -1 || a.inArray("*", e[2]) > -1) && ("undefined" != typeof c && a.inArray(c, e[1]) > -1 || a.inArray("*", e[1]) > -1) && ("undefined" != typeof d && a.inArray(d, e[0]) > -1 || a.inArray("*", e[0]) > -1)) {
                            if ("*" == e[3]) return g = !0;
                            var f = new Date(b, c - 1, d).getDay();
                            if (a.inArray(f, e[3]) > -1) return g = !0
                        }
                    }
                }), w && a.each(w, function() {
                    if (!h) {
                        var e = this;
                        if ((a.inArray(b, e[2]) > -1 || a.inArray("*", e[2]) > -1) && (h = !0, "undefined" != typeof c))
                            if (h = !0, a.inArray(c, e[1]) > -1 || a.inArray("*", e[1]) > -1) {
                                if ("undefined" != typeof d)
                                    if (h = !0, a.inArray(d, e[0]) > -1 || a.inArray("*", e[0]) > -1) {
                                        if ("*" == e[3]) return h = !0;
                                        var f = new Date(b, c - 1, d).getDay();
                                        if (a.inArray(f, e[3]) > -1) return h = !0;
                                        h = !1
                                    } else h = !1
                            } else h = !1
                    }
                }), w && h ? !1 : x && g ? !0 : !1
            },
            _ = function(a) {
                return (a + "").match(/^\-?[0-9]+$/) ? !0 : !1
            },
            aa = function(b) {
                !isNaN(parseFloat(r)) && isFinite(r) && (b = b.replace(/\bm\b|\bn\b|\bF\b|\bM\b/, function(b) {
                    switch (b) {
                        case "m":
                            return ea(r + 1, 2);
                        case "n":
                            return r + 1;
                        case "F":
                            return P.settings.months[r];
                        case "M":
                            return a.isArray(P.settings.months_abbr) && void 0 !== P.settings.months_abbr[r] ? P.settings.months_abbr[r] : P.settings.months[r].substr(0, 3);
                        default:
                            return b
                    }
                })), !isNaN(parseFloat(s)) && isFinite(s) && (b = b.replace(/\bY\b/, s).replace(/\by\b/, (s + "").substr(2)).replace(/\bY1\b/i, s - 7).replace(/\bY2\b/i, s + 4)), a(".dp_caption", g).html(b)
            },
            ba = function() {
                if ("" === h.text() || "days" == d) {
                    if ("" === h.text()) {
                        P.settings.always_visible || e.css("left", -1e3), e.css("visibility", "visible"), W();
                        var b = h.outerWidth(),
                            c = h.outerHeight();
                        i.css({
                            width: b,
                            height: c
                        }), j.css({
                            width: b,
                            height: c
                        }), g.css("width", b), K.css("width", b), e.css("visibility", "").addClass("dp_hidden")
                    } else W();
                    i.hide(), j.hide()
                } else "months" == d ? (X(), h.hide(), j.hide()) : "years" == d && (Y(), h.hide(), i.hide());
                if (P.settings.onChange && "function" == typeof P.settings.onChange && void 0 !== d) {
                    var f = "days" == d ? h.find("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month)") : "months" == d ? i.find("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month)") : j.find("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month)");
                    f.each(function() {
                        if ("days" == d)
                            if (a(this).hasClass("dp_not_in_month_selectable")) {
                                var b = a(this).attr("class").match(/date\_([0-9]{4})(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])/);
                                a(this).data("date", b[1] + "-" + b[2] + "-" + b[3])
                            } else a(this).data("date", s + "-" + ea(r + 1, 2) + "-" + ea(fa(a(this).text()), 2));
                        else if ("months" == d) {
                            var b = a(this).attr("class").match(/dp\_month\_([0-9]+)/);
                            a(this).data("date", s + "-" + ea(fa(b[1]) + 1, 2))
                        } else a(this).data("date", fa(a(this).text()))
                    }), P.settings.onChange.call(Q, d, f, Q)
                }
                K.show(), P.settings.show_clear_date === !0 || 0 === P.settings.show_clear_date && "" !== Q.val() || P.settings.always_visible && P.settings.show_clear_date !== !1 ? (k.show(), L ? (J.css("width", "50%"), k.css("width", "50%")) : (J.hide(), k.css("width", "100%"))) : (k.hide(), L ? J.show().css("width", "100%") : K.hide())
            },
            ca = function(a, b, c, d, e) {
                var f = new Date(a, b, c, 12, 0, 0),
                    g = "days" == d ? E : "months" == d ? F : G,
                    h = V(f);
                Q.val(h), P.settings.always_visible && (u = f.getMonth(), r = f.getMonth(), v = f.getFullYear(), s = f.getFullYear(), t = f.getDate(), g.removeClass("dp_selected"), e.addClass("dp_selected"), "days" == d && e.hasClass("dp_not_in_month_selectable") && P.show()), P.hide(), ga(f), P.settings.onSelect && "function" == typeof P.settings.onSelect && P.settings.onSelect.call(Q, h, a + "-" + ea(b + 1, 2) + "-" + ea(c, 2), f, Q, ha(f)), Q.focus()
            },
            da = function() {
                for (var a = "", b = 0; b < arguments.length; b++) a += arguments[b] + "";
                return a
            },
            ea = function(a, b) {
                for (a += ""; a.length < b;) a = "0" + a;
                return a
            },
            fa = function(a) {
                return parseInt(a, 10)
            },
            ga = function(b) {
                P.settings.pair && a.each(P.settings.pair, function() {
                    var c = a(this);
                    if (c.data && c.data("Zebra_DatePicker")) {
                        var d = c.data("Zebra_DatePicker");
                        d.update({
                            reference_date: b,
                            direction: 0 === d.settings.direction ? 1 : d.settings.direction
                        }), d.settings.always_visible && d.show()
                    } else c.data("zdp_reference_date", b)
                })
            },
            ha = function(a) {
                var b, c, d, e, f, g, h, i, j, k = a.getFullYear(),
                    l = a.getMonth() + 1,
                    m = a.getDate();
                return 3 > l ? (b = k - 1, c = (b / 4 | 0) - (b / 100 | 0) + (b / 400 | 0), d = ((b - 1) / 4 | 0) - ((b - 1) / 100 | 0) + ((b - 1) / 400 | 0), e = c - d, f = 0, g = m - 1 + 31 * (l - 1)) : (b = k, c = (b / 4 | 0) - (b / 100 | 0) + (b / 400 | 0), d = ((b - 1) / 4 | 0) - ((b - 1) / 100 | 0) + ((b - 1) / 400 | 0), e = c - d, f = e + 1, g = m + ((153 * (l - 3) + 2) / 5 | 0) + 58 + e), h = (b + c) % 7, m = (g + h - f) % 7, i = g + 3 - m, j = 0 > i ? 53 - ((h - e) / 5 | 0) : i > 364 + e ? 1 : (i / 7 | 0) + 1
            },
            ia = {
                init: function() {
                    this.name = this.searchString(this.dataBrowser) || "", this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || ""
                },
                searchString: function(a) {
                    for (var b = 0; b < a.length; b++) {
                        var c = a[b].string,
                            d = a[b].prop;
                        if (this.versionSearchString = a[b].versionSearch || a[b].identity, c) {
                            if (-1 != c.indexOf(a[b].subString)) return a[b].identity
                        } else if (d) return a[b].identity
                    }
                },
                searchVersion: function(a) {
                    var b = a.indexOf(this.versionSearchString);
                    if (-1 != b) return parseFloat(a.substring(b + this.versionSearchString.length + 1))
                },
                dataBrowser: [{
                    string: navigator.userAgent,
                    subString: "Firefox",
                    identity: "firefox"
                }, {
                    string: navigator.userAgent,
                    subString: "MSIE",
                    identity: "explorer",
                    versionSearch: "MSIE"
                }]
            };
        ia.init(), R()
    }, a.fn.Zebra_DatePicker = function(b) {
        return this.each(function() {
            void 0 !== a(this).data("Zebra_DatePicker") && a(this).data("Zebra_DatePicker").destroy();
            var c = new a.Zebra_DatePicker(this, b);
            a(this).data("Zebra_DatePicker", c)
        })
    }
});