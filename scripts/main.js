! function (e) {
	"use strict";

	function t() {
		var e = window.navigator.userAgent,
			t = e.indexOf("MSIE "),
			i = e.indexOf("Trident/"),
			n = e.indexOf("Edge/");
		if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
		if (i > 0) {
			var s = e.indexOf("rv:");
			return parseInt(e.substring(s + 3, e.indexOf(".", s)), 10)
		}
		return n > 0 ? parseInt(e.substring(n + 5, e.indexOf(".", n)), 10) : !1
	}

	function i() {
		Modernizr.touch ? e("body").attr("scroll", "false") : e("body").addClass("js-no-scroll")
	}

	function n() {
		Modernizr.touch ? e("body").attr("scroll", "true") : e("body").removeClass("js-no-scroll")
	}

	function s() {
		for (var e, t = document.body.querySelectorAll("img"), i = 0; i < t.length; i++) Modernizr.retina && !t[i].hasAttribute("data-no-retina") && (e = t[i].getAttribute("src"), e = e.replace(/@2x\./, "."), e = e.replace(/(\.\w+$)/, "@2x$1"), t[i].setAttribute("src", e)), TweenLite.to(t[i], .3, {
			opacity: 1
		})
	}

	function o() {
		var e, t = document.querySelectorAll(".background-image-2x");
		if (Modernizr.retina)
			for (var i = 0; i < t.length; i++) e = t[i].style.backgroundImage.slice(4, -1).replace(/"/g, ""), e = e.replace(/@2x\./, "."), e = e.replace(/(\.\w+$)/, "@2x$1"), t[i].style.backgroundImage = "url(" + e + ")"
	}

	function a(e, t, i, n) {
		var s = new TimelineMax,
			o = e + " .square";
		s.set(e, {
			rotationZ: 0,
			transformOrigin: "50% 50%"
		}).set(o, {
			fill: t
		}).to(e, .25, {
			rotationZ: -22.5
		}).to(e, .25, {
			rotationZ: 190
		}).to(e, .25, {
			rotationZ: 180
		}).to(o, .25, {
			fill: i
		}, "-=0.25").call(function () {
			var t;
			n = n === mt.length - 1 ? 0 : n + 1, t = n === mt.length - 1 ? 0 : n + 1, s.remove(), a(e, mt[n], mt[t], n)
		})
	}

	function r(e, t) {
		var i = e.getBoundingClientRect();
		return {
			x: t.clientX - i.left,
			y: t.clientY - i.top
		}
	}

	function l(e, t, i, n) {
		this.w = e, this.h = t, this.ctx = i, this.mousePos = n, this.vel = .1
	}

	function d(e, t) {
		this.x = e, this.y = t, this.w = 12, this.h = 12, this.vx = 0, this.vy = 1
	}

	function c() {
		yt.push(new d(Math.random() * window.innerWidth, 0))
	}

	function h(e, t, i) {
		e.clearRect(0, 0, t, i)
	}

	function f() {
		kt.each(function () {
			var t = this,
				i = !1;
			if (t.width = window.innerWidth, t.height = J, t.getContext) {
				var n, s = t.getContext("2d"),
					o = 0,
					a = Tt;
				if (e(t).parent().hasClass("callToAction")) {
					var d = !0;
					t.height = e(t).parent().height(), n = {
						x: window.innerWidth / 2,
						y: t.height / 2
					}, vt = new l(t.width, t.height, s, n), xt.addEventListener("mousemove", function (e) {
						n = r(t, e)
					}, !1), i = !0
				} else e("body").hasClass("case-studies--empty") && (a = "176, 176, 191");
				! function c() {
					h(s, t.width, t.height), i && (vt.vel < 5 && d ? o = .05 : vt.vel < -5 ? (o = -.05, d = !0) : (o = -.05, d = !1), vt.draw(), vt.update(n, o));
					for (var e, r = 0; r < yt.length; r++) e = yt[r], e.draw(s, a), e.update(), e.y > t.height && yt.splice(e, r);
					requestAnimationFrame(c)
				}()
			}
		})
	}

	function u() {
		TweenLite.killTweensOf(It), TweenLite.to(It, .3, {
			y: 0,
			onComplete: function () {
				classie.remove(It, "top-nav--isFixed"), m({
					m: 104.518
				}, 304), TweenLite.set(It, {
					opacity: 0
				}), TweenLite.to(It, .3, {
					opacity: 1
				})
			}
		})
	}

	function m(e, t) {
		TweenLite.to(e, .3, {
			m: t,
			onUpdate: function () {
				Lt.setAttribute("d", "M0.000,104.518 C0.000,104.518 1217.879," + e.m + " 1279.000," + e.m + " C1330.373," + e.m + " 2543.938,107.124 2559.813,104.548 L2559.813,314.000 L-0.187,314.000 L-0.187,-0.000 L0.000,-0.000 L0.000,104.518 Z")
			},
			onComplete: function () {
				Ct && (TweenLite.killTweensOf(It), classie.add(It, "top-nav--isFixed"), TweenLite.to(It, .3, {
					y: 100,
					delay: .1
				}))
			}
		})
	}

	function w(e, t) {
		it.css("opacity", 1), TweenLite.to(e, .3, {
			m: t,
			onUpdate: function () {
				Lt.setAttribute("d", "M0.000," + e.m + " C0.000," + e.m + " 1217.879,304.000 1279.000,304.000 C1330.373,304.000 2543.938," + e.m + " 2559.813," + e.m + " L2559.813,314.000 L-0.187,314.000 L-0.187,-0.000 L0.000,-0.000 L0.000,104.518 Z")
			}
		})
	}

	function _(e, t, i, s, o, a, r) {
		classie.toggle(Pt, "menuMobileToggle--active"), TweenLite.to(Ot, e, {
			transformOrigin: "50% 50%",
			scale: t,
			onComplete: function () {
				i && (classie.remove(It, "top-nav--isOpenMobile"), It.style.height = "auto", n())
			}
		});
		for (var l = 0; l < Dt.length; l++) TweenLite.to(Dt[l], s, {
			opacity: o,
			x: a,
			delay: r + .05 * l,
			ease: Back.easeInOut.config(.6)
		})
	}

	function p() {
		Mt ? Ct ? _(.6, 0, !0, .2, 0, -15, 0) : _(.6, 0, !0, .2, 0, -15, 0) : (classie.add(It, "top-nav--isOpenMobile"), It.style.height = $ + "px", i(), TweenLite.set(Dt, {
			opacity: 0,
			x: -15
		}), _(.6, Et, !1, .3, 1, 0, .25)), Mt = !Mt
	}

	function v() {
		function e() {
			var e = new Date,
				s = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0),
				o = e.getTime() - s.getTime(),
				a = o / 36e5,
				r = 60 * a,
				l = 60 * r;
			TweenMax.set(i, {
				transformOrigin: "100% 100%",
				rotation: 30 * a + a / 2 + "_cw"
			}), TweenMax.set(n, {
				transformOrigin: "100% 100%",
				rotation: 6 * r + "_cw"
			}), TweenMax.set(t, {
				transformOrigin: "100% 100%",
				rotation: 6 * l + "_cw"
			})
		}
		var t = document.getElementById("sec"),
			i = document.getElementById("hour"),
			n = document.getElementById("min");
		! function s() {
			requestAnimationFrame(s), e()
		}()
	}

	function g(e) {
		for (var t = "", i = 0; i < e.length; i++) t += "<!-- testimonials__item -->", t += '<li class="testimonials__item twitterFeed__item">', t += e[i], t += '<div class="twitterFeed__item__drag-area">', t += "</li>", t += "<!-- /testimonials__item -->";
		TweenLite.killTweensOf("#twitterLoader"), TweenLite.killTweensOf("#twitterLoader .square"), Xt.innerHTML = t;
		var n = [].slice.call(document.querySelectorAll(".twitterFeed__item")),
			s = e.length;
		new SlidingStack(Xt, {
			slidingTime: 5e3,
			onUpdateStack: function (e) {
				classie.remove(n[0 === e ? s - 1 : e - 1], "isFirst"), classie.add(n[e], "isFirst")
			}
		})
	}

	function y(t) {
		ci = Mi.offset().top, hi = e(Mi).width(), fi = e(Mi).height(), _i = Mi.find(".positions__itemButton"), di = t.title, _i.text("Close"), _i.attr("title", "Close " + di + " position full description"), Ti = e(".container").width(), Si = e(window).width(), Bi = e(window).height(), mi = (Ti - hi) / 2, wi = ci - e(window).scrollTop(), xi = -mi - (Si - Ti) / 2, ui = Si >= 768 ? (140 - fi) / 2 : (220 - (fi - 72)) / 2, e(Mi).wrapAll('<div class="positions__itemContainer" />'), pi = e(Mi).closest(".positions__itemContainer"), pi.height(fi), pi.prepend('<div class="positions__itemTopBar"><a class="visible-xs link link--white positions__itemButton" title="Close ' + t.title + ' position full description" target="_blank"><svg class="pixel--cross"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons.svg#pixel--cross"></use></svg></a></div>'), pi.prepend('<div class="positions__itemOverlay" />'), TweenLite.set(Mi, {
			x: 0,
			y: 0,
			height: fi,
			zIndex: 1200
		}), TweenLite.to(Mi, .3, {
			x: -mi,
			y: -wi + ui,
			width: Ti
		}), vi = pi.find(".positions__itemOverlay"), TweenLite.set(vi, {
			x: xi,
			width: Si
		}), TweenLite.to(vi, .3, {
			y: -wi,
			height: Bi
		}), gi = pi.find(".positions__itemTopBar"), TweenLite.set(gi, {
			x: xi,
			y: -wi,
			width: Si
		}), TweenLite.to(gi, .2, {
			delay: .2,
			opacity: 1
		}), ki = "", ki += '<div class="positions__itemFullDesc">', ki += '<div class="container">', ki += '<div class="row">', ki += '<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">', ki += '<h3 class="title title--center title--uppercase">Description</h3>', ki += t.description, ki += '<h3 class="title title--center title--uppercase">Requirements</h3>', ki += t.requirements, ki += '<h3 class="title title--center title--uppercase">Benefits</h3>', ki += t.benefits, ki += '<a class="button button--center button--bordered" href="' + t.application_url + '"title="Apply for ' + t.title + ' position at Pixelmatters" target="_blank">Apply</a>', ki += "</div>", ki += "</div>", ki += "</div>", ki += "</div>", e(pi).append(ki), yi = pi.find(".positions__itemFullDesc"), TweenLite.set(yi, {
			x: xi,
			y: -wi,
			width: Si,
			height: Bi
		}), TweenLite.to(yi, .3, {
			delay: .2,
			opacity: 1,
			onComplete: function () {
				_i.attr("disabled", !1)
			}
		}), e(Mi).addClass("positions__item--isOpen")
	}

	function k() {
		window.location.hash = "", TweenLite.to(gi, .2, {
			delay: .2,
			opacity: 0,
			onComplete: function () {
				gi.remove()
			}
		}), TweenLite.to(yi, .3, {
			opacity: 0,
			onComplete: function () {
				yi.remove(), _i.text("Apply"), _i.attr("title", "Apply for " + di + " position at Pixelmatters"), TweenLite.to(vi, .3, {
					y: 0,
					zIndex: 0,
					height: 0
				}), TweenLite.to(Mi, .3, {
					x: 0,
					y: 0,
					zIndex: 0,
					height: 0,
					width: pi.width(),
					onComplete: function () {
						e(Mi).removeAttr("style"), e(Mi).insertAfter(e(pi)), pi.remove(), vi.remove(), _i.attr("disabled", !1), Mi = null, Pi = !1, n()
					}
				}), e(Mi).removeClass("positions__item--isOpen")
			}
		})
	}

	function x() {
		Ti = e(".container").width(), Si = e(window).width(), Bi = e(window).height(), bi = pi.width(), mi = -((Ti - bi) / 2), wi = pi.offset().top - e(window).scrollTop(), xi = mi - (Si - Ti) / 2, TweenLite.set(Mi, {
			x: mi,
			y: -wi + ui,
			width: Ti
		}), TweenLite.set(vi, {
			x: xi,
			y: -wi,
			width: Si,
			height: Bi
		}), TweenLite.set(gi, {
			x: xi,
			y: -wi,
			width: Si
		}), TweenLite.set(yi, {
			x: xi,
			y: -wi,
			width: Si,
			height: Bi
		})
	}

	function T(t) {
		e.ajax({
			type: "GET",
			dataType: "json",
			url: "http://pixelmatters.com/job-description.php?job=" + t,
			success: function (e) {
				y(e)
			},
			error: function () {
				console.log("error connecting to the workable API")
			}
		})
	}

	function b(t) {
		var i, n, s, o = t.jobs,
			a = "";
		if (o.length > 1) {
			Ci.addClass("positions__selfApply--hasJobs");
			for (var r in o) "008" !== o[r].code && ("001" === o[r].code ? (i = '<svg class="pixel--ux-ui">', i += '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons.svg#pixel--ux-ui"></use>', i += "</svg>", n = "designer") : "005" === o[r].code ? (i = '<svg class="pixel--ios">', i += '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons.svg#pixel--ios"></use>', i += "</svg>", n = "ios") : "006" === o[r].code ? (i = '<svg class="pixel--android">', i += '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons.svg#pixel--android"></use>', i += "</svg>", n = "android") : "011" === o[r].code ? (i = '<svg class="pixel--qa-developer">', i += '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons.svg#pixel--qa-developer"></use>', i += "</svg>", n = "qa-developer") : "009" === o[r].code || "010" === o[r].code ? (i = '<svg class="pixel--copywriter">', i += '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons.svg#pixel--copywriter"></use>', i += "</svg>", n = "010" === o[r].code ? "project-manager" : "copywriter") : (i = '<svg class="pixel--developer">', i += '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons.svg#pixel--developer"></use>', n = "developer"), s = null !== o[r].location.city && null !== o[r].location.country ? o[r].location.city + ", " + o[r].location.country + " • " : "", a += "<!-- positions__item -->", a += '<div class="positions__item">', a += '<div class="positions__itemImage">', a += i, a += "</div>", a += '<div class="positions__itemText">', a += '<h3 class="title title--uppercase title--noMarginTop title--item positions__itemTitle">' + o[r].title + "</h3>", a += '<h4 class="title title--itemDesc title--light positions__itemDesc">' + s + o[r].department + "</h4>", a += "</div>", a += '<div class="positions__itemAction positions__itemAction--' + n + '">', a += '<button class="no-mobile button button--bordered positions__itemButton" data-position-code="' + o[r].shortcode + '" type="button" title="Apply for ' + o[r].title + ' position at Pixelmatters">Apply</button>', a += '<a href="' + o[r].application_url + '" class="mobile button button--bordered" data-position-code="' + o[r].shortcode + '" type="button" title="Apply for ' + o[r].title + ' position at Pixelmatters" target="_blank">Apply</a>', a += "</div>", a += "</div>", a += "<!-- /positions__item -->")
		} else Li.addClass("positions__subTitle--noPositions"), a += '<a class="button button--bordered button--center positions__selfApplyButton" href="http://pixelmatters.workable.com/jobs/26193/candidates/new" title="Self apply for a position at Pixelmatters" target="_blank">Self-Apply</a>';
		if (TweenLite.killTweensOf("#workableLoader"), TweenLite.killTweensOf("#workableLoader .square"), Ai.innerHTML = a, window.location.hash) {
			var l = e('*[data-position-code="' + window.location.hash.substring(1) + '"]'),
				d = window.innerHeight / 2 - l.height();
			l.length > 0 && TweenLite.to(window, 1, {
				scrollTo: {
					y: l.offset().top - d
				},
				onComplete: function () {
					l.click()
				}
			})
		}
	}

	function S() {
		Ai.innerHTML = '<svg id="workableLoader" class="loader loader--centered" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 100 100"><path class="square" fill="#ff695c" d="M0 0h100v100H0z"/></svg>', a("#workableLoader", mt[0], mt[1], 0), e.ajax({
			type: "GET",
			dataType: "json",
			url: "http://pixelmatters.com/jobs.php",
			success: function (e) {
				var t = e.jobs.filter(function (e) {
					return "53f05" != e.id
				});
				b({
					jobs: t
				})
			},
			error: function () {
				console.log("Error connecting with Workable API.")
			}
		})
	}

	function B() {
		n(), TweenLite.set(it, {
			delay: .6,
			zIndex: 0
		}), TweenLite.set("body", {
			scrollTo: {
				y: 0
			}
		}), TweenLite.to(Fi, .3, {
			opacity: 0,
			visibility: "hidden",
			zIndex: 0,
			onComplete: function () {
				Modernizr.touch && TweenLite.set(St.find("img"), {
					delay: .3,
					opacity: 1
				}), TweenLite.to(St, .3, {
					height: J
				}), TweenLite.to(zi, .3, {
					opacity: 0
				}), TweenLite.set(zi, {
					delay: .3,
					visibility: "hidden"
				}), TweenLite.to([Wi, It], .3, {
					opacity: 1,
					visibility: "visible"
				}), w({
					m: 304
				}, 104.518)
			}
		}), Di.stopVideo(), Vi = !1
	}

	function A() {
		Ni ? Modernizr.touch ? (TweenLite.to(Fi, .9, {
			delay: .3,
			opacity: 1,
			zIndex: 1,
			visibility: "visible"
		}), Vi = !0, e("#videoLoader").hide(), TweenLite.killTweensOf("#videoLoader"), TweenLite.killTweensOf("#videoLoader .square")) : (Di.seekTo(0), Di.playVideo()) : (Di = new YT.Player("heroVideo", {
			height: "390",
			width: "640",
			videoId: Ei,
			playerVars: {
				loop: 1,
				controls: 0,
				showinfo: 0
			},
			events: {
				onReady: function () {
					Modernizr.touch ? (TweenLite.to(Fi, .9, {
						delay: .3,
						opacity: 1,
						zIndex: 1,
						visibility: "visible"
					}), Vi = !0) : Di.playVideo(), TweenLite.set("#videoLoader", {
						opacity: 0
					}), TweenLite.killTweensOf("#videoLoader"), TweenLite.killTweensOf("#videoLoader .square")
				},
				onStateChange: function (e) {
					e.data === YT.PlayerState.ENDED && (B(), ji = !ji), e.data !== YT.PlayerState.PLAYING || Vi || (TweenLite.to(Fi, .9, {
						opacity: 1,
						visibility: "visible"
					}), Vi = !0, TweenLite.set("#videoLoader", {
						opacity: 0
					}), TweenLite.killTweensOf("#videoLoader"), TweenLite.killTweensOf("#videoLoader .square"))
				}
			}
		}), Ni = !0)
	}

	function L() {
		i(), TweenLite.set(it, {
			zIndex: 1e3
		}), TweenLite.to("body", .3, {
			scrollTo: {
				y: 0
			}
		}), Modernizr.touch && TweenLite.set(St.find("img"), {
			opacity: 0
		}), TweenLite.to(St, .3, {
			height: qi,
			onComplete: function () {
				TweenLite.set("#videoLoader", {
					opacity: 1
				})
			}
		}), TweenLite.to([Wi, It, zi], .3, {
			opacity: 0,
			visibility: "hidden"
		}), TweenLite.to(zi, .6, {
			opacity: 1,
			visibility: "visible"
		}), w({
			m: 104.518
		}, 304), A()
	}

	function C(e) {
		var t = [];
		for (var i in e) e[i]["delete"] !== !1 && e[i].is_restricted === !1 && t.push(e[i]);
		return t.sort(function (e, t) {
			var i = e.profile.real_name.toLowerCase(),
				n = t.profile.real_name.toLowerCase();
			return n > i ? -1 : i > n ? 1 : 0
		}), t
	}

	function I(e) {
		if (e.ok) {
			var t = C(e.members),
				i = '<div class="row">';
			for (var n in t) i += '<div class="col-xs-12 col-sm-6 col-md-4 team__member">', i += '<div class="team__memberPhotoContainer">', i += '<img class="team__memberPhoto" src="' + t[n].profile.image_192 + '" alt="' + t[n].real_name + '" data-no-retina />', i += "</div>", i += '<h3 class="title title--item title--noMarginTop team__memberName team__memberName--' + t[n].presence + '">' + t[n].real_name + "</h3>", i += '<p class="title title--itemDesc title--noMarginTop team__memberPos">' + t[n].profile.title + "</p>", i += "</div>";
			i += "</div>", TweenLite.killTweensOf("#slackLoader"), TweenLite.killTweensOf("#slackLoader .square"), en.innerHTML = i
		} else console.log("Error connecting to the slack API")
	}

	function M() {
		console.log("Error connecting to the slack API")
	}

	function P() {
		en.innerHTML = '<div class="clearfix"></div><svg id="slackLoader" class="loader loader--centered" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 100 100"><path class="square" fill="#ff695c" d="M0 0h100v100H0z"/></svg>', a("#slackLoader", mt[0], mt[1], 0), e.ajax({
			type: "GET",
			dataType: "json",
			url: "http://pixelmatters.com/team.php",
			success: function (e) {
				I(e)
			},
			error: function () {
				M()
			}
		})
	}

	function O() {
		var t;
		e(an).each(function (i) {
			return t = e(this).clone(), t.appendTo(on), nn.appended(t), nn.layout(), tn > i
		}), setTimeout(O, ln)
	}

	function E(t) {
		setTimeout(O, ln), dn.add(TweenMax.staggerTo(e(on), rn, {
			y: -2e5,
			repeat: -1
		}, 0)), !Modernizr.touch && t && e(sn).bind("mouseenter", function () {
			dn.pause()
		}).bind("mouseleave", function () {
			dn.resume()
		})
	}

	function D(t) {
		var i = t,
			n = "";
		for (var s in i) n += '<li class="col-xs-6 col-sm-4 col-md-3 photoFeed__item">', n += '<a class="photoFeed__itemLink" href="' + i[s].link + '" target="_blank">', n += '<img class="photoFeed__itemImg" src="' + i[s].images.standard_resolution.url + '" alt="' + i[s].caption.text + '" data-no-retina />', n += '<div class="photoFeed__itemInfo">', n += '<span class="photoFeed__itemInfoText">View on Instagram</span>', n += "</div>", n += "</a>", n += "</li>";
		TweenLite.killTweensOf("#instagramLoader"), TweenLite.killTweensOf("#instagramLoader .square"), on.innerHTML = n, imagesLoaded(on, function () {
			nn = new Masonry(on, {
				itemSelector: an
			}), tn = e(an).size() - 1, E(!0)
		})
	}

	function W() {
		console.log("Erro a conectar com a API do Instagram.")
	}

	function z() {
		on.innerHTML = '<div class="loaderContainer"><svg id="instagramLoader" class="loader loader--centered" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 100 100"><path class="square" fill="#ff695c" d="M0 0h100v100H0z"/></svg></div>', a("#instagramLoader", mt[0], mt[1], 0), e.ajax({
			type: "GET",
			dataType: "json",
			url: "http://pixelmatters.com/instagram.php",
			success: function (e) {
				D(e.contents.data)
			},
			error: function () {
				W()
			}
		})
	}

	function F(t, i) {
		cn = [fn.offsetLeft + 13, fn.offsetTop + 13], e(hn).append(t), un.addClass("location__pointDot--animate"), un.on(at, function () {
			un.removeClass("location__pointDot--animate")
		}), t.removeClass("location__pixelPackage--client");
		var n = new TimelineLite;
		n.add(TweenLite.set(t, {
			x: cn[0],
			y: cn[1]
		})), n.add(TweenLite.to(t, Math.floor(1 + 3 * Math.random()), {
			delay: .8,
			x: mn[i].offsetLeft + 13,
			y: mn[i].offsetTop + 13,
			ease: Power1.easeOut,
			onComplete: function () {
				un.removeClass("location__pointDot--animate"), t.addClass("location__pixelPackage--client"), e(mn[i]).find("span").addClass("location__pointDot--animate"), e(mn[i]).find("span").on(at, function () {
					e(mn[i]).find("span").removeClass("location__pointDot--animate")
				}), TweenLite.to(t, Math.floor(1 + 3 * Math.random()), {
					delay: .8,
					x: cn[0],
					y: cn[1],
					ease: Power1.easeOut,
					onComplete: function () {
						t.remove(), F(t, i)
					}
				})
			}
		})), wn.push(n)
	}

	function q(e) {
		var t = "";
		return t += '<div class="row caseStudies__item">', t += '<a class="link caseStudies__itemFullLink" href="' + e.link + '" title="View ' + e.title + ' case study">', t += '<div class="col-xs-12 col-sm-push-4 col-sm-8 col-md-7 col-md-offset-1 caseStudies__itemThumbContainer">', t += '<img class="caseStudies__itemThumb" src="' + e.thumb + '" alt="' + e.title + ' thumbnail" alt="' + e.title + ' thumbnail" />', t += "</div>", t += '<div class="col-xs-12 col-sm-pull-8 col-sm-4 col-md-3 col-md-offset-1">', t += '<div class="caseStudies__itemInfo">', t += '<div class="caseStudies__itemInfoAlign">', t += '<h3 class="title caseStudies__itemTitle">' + e.title + "</h3>", t += '<h4 class="title caseStudies__itemDesc">' + e.description + "</h4>", t += '<ul class="list-inline hidden-xs hidden-sm caseStudies__itemTags">', t += e.categories.map(function (e) {
			return '<li class="caseStudies__itemTag">' + e + "</li>"
		}).join(""), t += e.tags.map(function (e) {
			return '<li class="caseStudies__itemTag">' + e + "</li>"
		}).join(""), t += "</ul>", t += '<a class="link link--arrow link--arrowBig caseStudies__itemLink" href="' + e.link + '" title="View ' + e.title + ' case study" style="color: ' + e.color + ';">View case study</a>', t += "</div>", t += "</div>", t += "</div>", t += "</a>", t += "</div>"
	}

	function H() {
		for (var t = 0, i = xn.replace(".caseStudies__item--", ""), n = "", o = 0; o < Sn.length; o++)
			if ((-1 === Bn.indexOf(Sn[o].title) && -1 !== Sn[o].categories.indexOf(i) || -1 === Bn.indexOf(Sn[o].title) && "*" === xn) && (n += q(Sn[o]), Bn.push(Sn[o].title), An++ , t++ , An === Sn.length)) {
				e(yn).remove(), e(".caseStudies").addClass("caseStudies--loaded");
				break
			}
		_n.append(n), s()
	}

	function j() {
		var t = xn.replace(".caseStudies__item--", "");
		e(".caseStudies").removeClass("caseStudies--loaded");
		for (var i = 0; i < bn.length; i++)(-1 !== bn[i].categories.indexOf(t) || "*" === xn) && Sn.push(bn[i]);
		Sn.length >= Ln, H()
	}

	function N(t) {
		bn = t, Sn = t;
		for (var i = 0; i < gn.length; i++) Bn.push(e(gn[i]).find(".caseStudies__itemTitle").html()), An = Bn.length
	}

	function V() {
		console.log("Erro loading more Case Studies.")
	}

	function G() {
		Pn.innerHTML = '<div class="loaderContainer"><svg id="dribbbleLoader" class="loader loader--centered" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 100 100"><path class="square" fill="#ff695c" d="M0 0h100v100H0z"/></svg></div>', a("#dribbbleLoader", mt[0], mt[1], 0), e.jribbble.teams(In).shots(Mn).then(function (t) {
			var i = t,
				n = "";
			for (var s in i) n += '<li class="col-xs-6 col-sm-6 col-md-4 col-xl-3 dribbble__item' + (8 === s ? " hidden-sm" : "") + (s > 8 ? " visible-xl" : "") + '">', n += '<a class="link dribbble__itemLink" href="' + i[s].html_url + '" title="' + i[s].title + '" target="_blank">', n += '<img class="dribbble__itemImg" src="' + (Modernizr.retina ? i[s].images.hidpi : i[s].images.normal) + '" alt="' + i[s].title + '" data-no-retina />', n += '<div class="dribbble__itemInfo">', n += '<span class="dribbble__itemInfoText">View on Dribbble</span>', n += "</div>", n += "</a>", n += "</li>";
			TweenLite.killTweensOf("#dribbbleLoader"), TweenLite.killTweensOf("#dribbbleLoader .square"), Pn.innerHTML = n, imagesLoaded(Pn, function () {
				window.innerWidth < 768 && (e(Pn).slick({
					width: 300,
					slidesToShow: 1,
					infinite: !1,
					arrows: !1
				}), On = !0)
			})
		}, function () {
			console.log("Erro a conectar com a API do Dribbble.")
		})
	}

	function R(e, t, i) {
		var n = e.find(".caseStudyDetailsListBlock__listItem--active"),
			s = n.index(),
			o = s + 1;
		o >= t.length && (o = 0), n.removeClass("caseStudyDetailsListBlock__listItem--active"), t.eq(o).addClass("caseStudyDetailsListBlock__listItem--active"), i.removeClass("caseStudyDetailsListBlock__image--active"), i.eq(o).addClass("caseStudyDetailsListBlock__image--active")
	}

	function Y(t, i, n) {
		var s = n.author_url.split("/")[3],
			o = e(n.html).find("p")[0].innerHTML,
			a = e(n.html).find("a:last")[0].innerHTML,
			a = a.replace(",", ""),
			r = "";
		r += '<div class="testimonials__item testimonials__item--unstyled twitterFeed__item ">', r += '<div class="twitterFeed__user">', r += '<a class="u-url profile" href="' + n.author_url + '" aria-label="' + n.author_name + " (screen name: " + s + ')" data-scribe="element:user_link" target="_blank">', r += '<img class="u-photo avatar" alt="" src="https://twitter.com/' + s + '/profile_image?size=bigger" data-scribe="element:avatar" data-no-retina />', r += '<span class="full-name TweetAuthor-name">', r += '<span class="p-name customisable-highlight" data-scribe="element:name">' + n.author_name + "</span>", r += "</span>", r += '<span class="p-nickname TweetAuthor-screenName" dir="ltr" data-scribe="element:screen_name">@<b>' + s + "</b></span>", r += "</a>", r += "</div>", r += '<a class="hidden-xxs twitterFeed__button button button--follow" href="https://twitter.com/intent/follow?screen_name=' + s + '" target="_blank">', r += '<svg class="pixel--twitter">', r += '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons.svg#pixel--twitter"></use>', r += '</svg> <span class="twitterFeed__button__text">Follow</span>', r += "</a>", r += '<p class="twitterFeed__tweet">' + o + "</p>", r += '<time class="twitterFeed__timePosted"><a class="link link--gray" href="' + n.url + '" target="_blank">' + a + "</a></time>", r += '<p class="twitterFeed__interact">', r += '<a class="link link--gray link--noUnderline" href="https://twitter.com/intent/tweet?in_reply_to=' + i + '" target="_blank"><svg class="pixel--reply"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons.svg#pixel--reply"></use></svg></a>', r += '<a class="link link--gray link--noUnderline" href="https://twitter.com/intent/retweet?tweet_id=' + i + '" target="_blank"><svg class="pixel--refresh"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons.svg#pixel--refresh"></use></svg></a>', r += '<a class="link link--gray link--heart link--noUnderline" href="https://twitter.com/intent/favorite?tweet_id=' + i + '" target="_blank"><svg class="pixel--heart"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons.svg#pixel--heart"></use></svg></a>', r += "</p>", r += "</div>", t.html(r)
	}

	function U(e, t) {
		var i = "";
		i += '<img src="' + t + '" />', e.html(i)
	}
	e.fn.isOnScreen = function (t) {
		var i = e(window),
			n = {
				top: i.scrollTop() + t,
				left: i.scrollLeft()
			};
		n.right = n.left + i.width(), n.bottom = n.top + i.height();
		var s = this.offset();
		return s.right = s.left + this.outerWidth(), s.bottom = s.top + this.outerHeight(), !(n.right < s.left || n.left > s.right || n.bottom < s.top || n.top > s.bottom)
	};
	var X = new Date,
		Z = X.getFullYear();
	e(".footer__copyright__year").text(Z);
	var $ = window.innerHeight,
		J = window.innerWidth > 767 ? 565 : e(".hero").hasClass("hero--project") ? 500 : 425,
		Q = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
		K = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor),
		et = "undefined" != typeof InstallTrigger,
		tt = t(),
		it = e(".hero__divider"),
		nt = e(".call-to-action__divider"),
		st = document.getElementById("heroVideoEl"),
		ot = {
			WebkitAnimation: "webkitAnimationIteration",
			MozAnimation: "animationiteration",
			OAnimation: "oAnimationIteration",
			msAnimation: "MSAnimationIteration",
			animation: "animationiteration"
		},
		at = ot[Modernizr.prefixed("animation")];
	if (Modernizr.addTest("retina", function () {
		var e = window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI || 1;
		return e > 1 ? !0 : !1
	}), Q && classie.add(document.documentElement, "chrome"), K && classie.add(document.documentElement, "safari"), et && classie.add(document.documentElement, "firefox"), tt && (classie.add(document.documentElement, "ie"), svg4everybody(), it.height(95 * e(window).width() / 767), nt.height(38 * e(window).width() / 767), window.addEventListener("resize", function () {
		it.height(95 * e(window).width() / 767), nt.height(38 * e(window).width() / 767)
	}, !1)), st) {
		var rt = e(st).attr("poster"),
			lt = e(st).parent().find("img").attr("src"),
			dt = e("<img>").attr("src", rt),
			ct = e("<img>").attr("src", lt);
		Modernizr.touch ? ct.load(function () {
			TweenLite.set("body", {
				delay: .1,
				opacity: 1
			})
		}) : dt.load(function () {
			TweenLite.set("body", {
				delay: .5,
				opacity: 1
			})
		})
	} else TweenLite.set("body", {
		opacity: 1
	});
	window.addEventListener("resize", function () {
		$ = window.innerHeight, qi = $ + 7
	}, !1), e(window).bind("pageshow", function () {
		event.persisted && "false" == e("body").attr("scroll") && (_(0, 0, !0, .2, 0, -15, 0), Mt = !Mt, e("body").removeAttr("scroll"))
	}), e("a").click(function () {
		var t = e(e(this).attr("href")).offset().top - 95;
		return TweenLite.to(window, 1, {
			scrollTo: {
				y: t
			}
		}), !1
	});
	e(document).on("touchmove", function (t) {
		"false" == e("body").attr("scroll") && (t.preventDefault(), t.stopPropagation())
	}), s(), o();
	for (var ht = 0, ft = ["webkit", "moz"], ut = 0; ut < ft.length && !window.requestAnimationFrame; ++ut) window.requestAnimationFrame = window[ft[ut] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[ft[ut] + "CancelAnimationFrame"] || window[ft[ut] + "CancelRequestAnimationFrame"];
	window.requestAnimationFrame || (window.requestAnimationFrame = function (e) {
		var t = (new Date).getTime(),
			i = Math.max(0, 16 - (t - ht)),
			n = window.setTimeout(function () {
				e(t + i)
			}, i);
		return ht = t + i, n
	}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
		clearTimeout(e)
	});
	var mt = ["#ff695c", "#7abcee", "#9fa8da", "#ffde5c"],
		wt = document.getElementsByClassName("fourOfour")[0],
		_t = new TimelineMax({
			delay: 1,
			repeat: 0
		});
	wt && _t.set(["#fourOfour__numberThree", "#anchor"], {
		y: -50
	}).to("#text__square", .3, {
		fill: "#3A3A3A"
	}).to("#fourOfour__numberOne", .3, {
		delay: .3,
		opacity: 1
	}).to("#fourOfour__numberTwo", .3, {
		opacity: 1
	}).to("#fourOfour__numberThree", .3, {
		opacity: 1
	}).to("#selection__square", .3, {
		fill: "#3A3A3A"
	}).to("#text__square", .3, {
		fill: "#4A494A"
	}, "-=0.3").to(".anchor", .3, {
		opacity: "1"
	}, "-=0.3").to("#selection", .3, {
		opacity: "1"
	}, "-=0.3").to("#selection", 1.2, {
		x: 590,
		y: 190
	}).to("#selection", .6, {
		x: 590,
		y: 240
	}).to(["#fourOfour__numberThree", "#anchor"], .6, {
		y: 0
	}, "-=0.6").to("#eyedropper__square", .3, {
		fill: "#3A3A3A"
	}).to("#selection__square", .3, {
		fill: "#4A494A"
	}, "-=0.3").to([".anchor", "#selection"], .3, {
		opacity: "0"
	}, "-=0.3").to("#eyedropper", .3, {
		opacity: "1"
	}, "-=0.3").to("#eyedropper", .6, {
		x: 185,
		y: -80
	}).to("#color", .3, {
		fill: "#EEB860"
	}).to("#eyedropper", .3, {
		opacity: 0
	}).to("#eyedropper__square", .3, {
		fill: "#4A494A"
	}, "-=0.3");
	var pt, vt, gt = .005,
		yt = [],
		kt = e(".pixelRain"),
		xt = document.getElementsByClassName("callToAction")[0],
		Tt = "255, 255, 255";
	l.prototype = {
		draw: function () {
			this.ctx.beginPath(), this.ctx.lineTo(this.w / 2 - 200, this.h / 2 - this.h / 8 - this.vel), this.ctx.lineTo(this.w / 2 + 200, this.h / 2 - this.h / 8 - this.vel), this.ctx.lineTo(this.w / 2 + 50 - this.vel, this.h / 2 + this.h / 3 - this.vel), this.ctx.lineTo(this.w / 2 - 200, this.h / 2 - this.h / 8 - this.vel), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.1)", this.ctx.lineWidth = 3, this.ctx.stroke(), this.ctx.closePath(), this.ctx.beginPath(), this.ctx.arc(this.w / 2 - 200, this.h / 2 - this.h / 8 - this.vel, 10, 0, 2 * Math.PI), this.ctx.lineWidth = 3, this.ctx.stroke(), this.ctx.closePath(), this.ctx.beginPath(), this.ctx.arc(this.w / 2 + 200, this.h / 2 - this.h / 8 - this.vel, 10, 0, 2 * Math.PI), this.ctx.lineWidth = 3, this.ctx.stroke(), this.ctx.closePath(), this.ctx.beginPath(), this.ctx.arc(this.w / 2 + 50 - this.vel, this.h / 2 + this.h / 3 - this.vel, 10, 0, 2 * Math.PI), this.ctx.lineWidth = 3, this.ctx.stroke(), this.ctx.closePath(), this.ctx.beginPath(), this.ctx.moveTo(this.w / 2 - 200, this.h / 2 - this.h / 8 - this.vel), this.ctx.lineTo(this.mousePos.x, this.mousePos.y), this.ctx.lineWidth = 3, this.ctx.stroke(), this.ctx.closePath(), this.ctx.beginPath(), this.ctx.moveTo(this.w / 2 + 200, this.h / 2 - this.h / 8 - this.vel), this.ctx.lineTo(this.mousePos.x, this.mousePos.y), this.ctx.lineWidth = 3, this.ctx.stroke(), this.ctx.closePath(), this.ctx.beginPath(), this.ctx.moveTo(this.w / 2 + 50 - this.vel, this.h / 2 + this.h / 3 - this.vel), this.ctx.lineTo(this.mousePos.x, this.mousePos.y), this.ctx.lineWidth = 3, this.ctx.stroke(), this.ctx.closePath(), this.ctx.beginPath(), this.ctx.arc(this.mousePos.x, this.mousePos.y, 10, 0, 2 * Math.PI), this.ctx.lineWidth = 3, this.ctx.stroke(), this.ctx.closePath()
		},
		update: function (e, t) {
			this.mousePos = e, this.vel += t
		}
	}, d.prototype = {
		draw: function (e, t) {
			e.beginPath(), e.rect(this.x, this.y, this.w, this.h), e.fillStyle = "rgba(" + t + ", 0.18)", e.fill(), e.closePath(), e.beginPath(), e.rect(this.x, this.y - this.h, this.w, this.h), e.fillStyle = "rgba(" + t + ", 0.14)", e.fill(), e.closePath(), e.beginPath(), e.rect(this.x, this.y - 2 * this.h, this.w, this.h), e.fillStyle = "rgba(" + t + ", 0.08)", e.fill(), e.closePath(), e.beginPath(), e.rect(this.x, this.y - 3 * this.h, this.h, this.h), e.fillStyle = "rgba(" + t + ", 0.04)", e.fill(), e.closePath()
		},
		update: function () {
			this.y += this.vy, this.vy += gt
		}
	}, e(window).TabWindowVisibilityManager({
		onFocusCallback: function () {
			yt = [], pt || (clearInterval(pt), pt = e(window).width() > 768 ? setInterval(c, 600) : setInterval(c, 1600))
		},
		onBlurCallback: function () {
			yt = [], clearInterval(pt), pt = null
		}
	}), e(window).load(function () {
		pt = e(window).width() > 768 ? setInterval(c, 600) : setInterval(c, 1600), f()
	}), window.addEventListener("resize", function () {
		kt.each(function () {
			var t = this;
			if (t.width = window.innerWidth, t.height = J, t.getContext) {
				var i = t.getContext("2d");
				if (e(t).parent().hasClass("callToAction")) {
					var n = {
						x: window.innerWidth / 2,
						y: t.height / 2
					};
					t.height = e(t).parent().height(), vt = new l(t.width, t.height, i, n)
				}
			}
		})
	}, !1);
	var bt, St = e(".hero"),
		Bt = it.height() - 50 * it.height() / 147,
		At = J - Bt,
		Lt = document.getElementById("hero__path"),
		Ct = !1,
		It = document.getElementById("top-nav");
	St.length > 0 && (w({
		m: 304
	}, 104.518), e(window).scroll(function () {
		bt = e(document).scrollTop(), bt >= At && Ct === !1 ? (Ct = !0, m({
			m: 304
		}, 104.518)) : At > bt && Ct === !0 && (Ct = !1, u())
	}), window.addEventListener("resize", function () {
		J = window.innerWidth > 767 ? 565 : e(".hero").hasClass("hero--project") ? 500 : 425, Bt = it.height() - 50 * it.height() / 147, At = J - Bt, TweenLite.set(St, {
			height: J
		})
	}, !1));
	var Mt = !1,
		Pt = document.getElementById("menuMobileToggle"),
		Ot = "#overlayCircle",
		Et = 2 * $;
	if (It) {
		var Dt = document.getElementsByClassName("menu--topBar")[0].getElementsByClassName("menu__listItem");
		TweenLite.set(Ot, {
			transformOrigin: "50% 50%",
			scale: 0
		}), window.addEventListener("resize", function () {
			Mt && (It.style.height = $ + "px"), Et = 2 * $
		}, !1)
	}
	Pt && (window.addEventListener("resize", function () {
		window.innerWidth > 768 && (Mt ? _(0, 0, !0, 0, 1, 0, 0) : TweenLite.set(Dt, {
			opacity: 1,
			x: 0
		}), Mt = !1)
	}, !1), Pt.addEventListener("click", p));
	var Wt = document.getElementsByClassName("hero__title--marks");
	Wt && (TweenLite.set([".hero__titleHeightEl", ".hero__titleWidthEl"], {
		scale: 0
	}), TweenLite.set([".hero__titleFontEl"], {
		transformOrigin: "0 100%",
		scale: 0
	}), setTimeout(function () {
		TweenMax.staggerTo(".hero__titleHeightEl", .3, {
			scale: 1
		}, .3, function () {
			TweenLite.to(".hero__titleDimText--height", .3, {
				x: 0,
				opacity: 1,
				ease: Back.easeOut
			}), TweenLite.to(".hero__titleDimText--width", .3, {
				delay: .6,
				y: -6,
				opacity: 1,
				ease: Back.easeOut
			})
		}), TweenMax.staggerTo(".hero__titleWidthEl", .6, {
			delay: .3,
			scale: 1
		}, .6), TweenMax.staggerTo(["#hero__titleMarks", ".hero__titleFontEl"], .2, {
			delay: 1.2,
			scale: 1
		}, .2, function () {
			TweenMax.set(".hero__titleDimText--font", {
				css: {
					perspective: 600
				}
			}), TweenLite.to(".hero__titleDimText--font", .6, {
				x: 0,
				opacity: 1,
				ease: Back.easeOut
			})
		})
	}, 500));
	var zt = document.getElementById("whatWeDo__planner"),
		Ft = new TimelineMax({
			repeat: 0,
			paused: !0
		}),
		qt = document.getElementById("whatWeDo__anchor"),
		Ht = document.getElementById("whatWeDo__anchorCursor"),
		jt = document.getElementById("whatWeDo__anchorLines"),
		Nt = new TimelineMax({
			repeat: 0,
			paused: !0,
			delay: .8
		}),
		Vt = document.getElementById("whatWeDo__code"),
		Gt = new TimelineMax({
			repeat: 0,
			paused: !0,
			delay: 1.8
		}),
		Rt = !1;
	(zt || qt || Vt) && (Ft.set([".whatWeDo__plannerLine", ".whatWeDo__plannerBox"], {
		drawSVG: 0
	}).set(zt, {
		visibility: "visible"
	}).insert(new TweenMax(".whatWeDo__title--first", .3, {
		delay: .6,
		opacity: 1
	})).insert(new TweenMax(".whatWeDo__itemDesc--first", .3, {
		delay: .9,
		opacity: 1
	})).insert(new TweenMax([".whatWeDo__plannerBox"], 2, {
		drawSVG: "100%",
		ease: Power1.easeInOut
	})).insert(new TweenMax([".whatWeDo__plannerLine"], 1.2, {
		delay: .2,
		drawSVG: "100%",
		ease: Power1.easeInOut
	})), Nt.set([qt], {
		visibility: "visible"
	}).set(Ht, {
		x: 50,
		y: -50
	}).to(Ht, .6, {
		x: -15,
		y: -5,
		ease: Power3.ease
	}).insert(new TweenMax(".whatWeDo__title--second", .3, {
		delay: 1.2,
		opacity: 1
	})).insert(new TweenMax(".whatWeDo__itemDesc--second", .3, {
		delay: 1.5,
		opacity: 1
	})).insert(new TweenMax(Ht, .3, {
		delay: .6,
		y: -20,
		ease: Power3.ease
	})).insert(new TweenMax(jt, .3, {
		delay: .6,
		attr: {
			d: "M8,60.7v-22.5 M23,68.2h-7.5"
		},
		ease: Power3.ease
	})).insert(new TweenMax(Ht, .3, {
		delay: .9,
		y: -5,
		ease: Power3.ease
	})).insert(new TweenMax(jt, .3, {
		delay: .9,
		attr: {
			d: "M8,60.7v-7.5 M23,68.2h-7.5"
		},
		ease: Power3.ease
	})).to(Ht, .3, {
		x: 2,
		y: 11,
		ease: Power3.ease
	}, "-=0.6").insert(new TweenMax(Ht, .3, {
		delay: 1.5,
		x: 23,
		ease: Power3.ease
	})).insert(new TweenMax(jt, .3, {
		delay: 1.5,
		attr: {
			d: "M8,60.7v-7.5 M44,68.2h-30"
		},
		ease: Power3.ease
	})).insert(new TweenMax(Ht, .3, {
		delay: 1.8,
		x: 2,
		ease: Power3.ease
	})).insert(new TweenMax(jt, .3, {
		delay: 1.8,
		attr: {
			d: "M8,60.7v-7.5 M23,68.2h-7.5"
		},
		ease: Power3.ease
	})).to(Ht, .9, {
		delay: .1,
		x: 0,
		y: 0,
		ease: Back.easeOut.config(1.2)
	}), Gt.set(["#chevronLeft", "#codeSlash", "#chevronRight"], {
		drawSVG: 0
	}).set(Vt, {
		visibility: "visible"
	}).set(["#chevronLeft"], {
		x: -5
	}).set(["#chevronRight"], {
		x: 5
	}).insert(new TweenMax(".whatWeDo__title--third", .3, {
		delay: .3,
		opacity: 1
	})).insert(new TweenMax(".whatWeDo__itemDesc--third", .3, {
		delay: .6,
		opacity: 1
	})).insert(new TweenMax(["#chevronLeft"], .3, {
		drawSVG: "100%",
		ease: Power1.easeInOut
	})).insert(new TweenMax(["#chevronRight"], .3, {
		delay: .2,
		drawSVG: "100%",
		ease: Power1.easeInOut
	})).insert(new TweenMax(["#chevronLeft", "#chevronRight"], .3, {
		delay: .3,
		x: 0,
		ease: Power1.easeInOut
	})).insert(new TweenMax(["#codeSlash"], .6, {
		delay: .3,
		drawSVG: "100%",
		ease: Power1.easeInOut
	})), (e(zt).isOnScreen(-150) || e(qt).isOnScreen(-150) || e(Vt).isOnScreen(-150)) && !Rt && (Ft.play(), Nt.play(), Gt.play(), Rt = !0), window.onscroll = function () {
		(e(zt).isOnScreen(-150) || e(qt).isOnScreen(-150) || e(Vt).isOnScreen(-150)) && !Rt && (Ft.play(), Nt.play(), Gt.play(), Rt = !0)
	});
	var Yt = document.getElementsByClassName("footer__clerigos")[0];
	Yt && v();
	var Ut, Xt = document.getElementById("twitterFeed"),
		Zt = document.getElementsByClassName("testimonials__slideExplainer")[0],
		$t = !1;
	Xt && (Xt.innerHTML = '<div class="loaderContainer"><svg id="twitterLoader" class="loader loader--centered" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 100 100"><path class="square" fill="#ff695c" d="M0 0h100v100H0z"/></svg></div>', a("#twitterLoader", mt[0], mt[1], 0), twitterFetcher.fetch({
		id: "635919173634367488",
		enableLinks: !0,
		showUser: !0,
		showTime: !0,
		permalinks: !1,
		lang: "en",
		customCallback: g
	}), e(window).scroll(function () {
		bt = e(document).scrollTop(), Ut = document.getElementsByClassName("testimonials")[0].offsetTop - 250, bt >= Ut && $t === !1 && ($t = !0, TweenLite.to(Zt, .3, {
			opacity: 0,
			delay: 1.2
		}))
	}));
	var Jt, Qt, Kt, ei, ti, ii, ni, si, oi = e(".location__point"),
		ai = e("#map"),
		ri = 50;
	oi.length > 0 && (Qt = ai.offset().left + ri, Jt = e(window).width() - (ai.offset().left + ai.outerWidth()) + ri, oi.each(function () {
		if (e(this).hasClass("location__point")) {
			ei = e(this).data("locations").split(";") || "", ti = e(this).data("timezones").split(";") || "", si = "";
			for (var t = 0; t < ei.length; t++) si += "<div class='location__pointInfo'><div class='location__pointLocations'>", si += ei[t], si += "</div> <div class='location__pointTimezone'>", si += ti[t], si += "</div></div>"
		}
		Kt = e(this).find(".location__tooltip"), ii = e(this).find(".location__tooltip__content"), "undefined" != typeof ii && null !== ii && ii.length > 0 && (ii.offset().left < Qt && ii.addClass("over-left"), e(window).width() - (ii.offset().left + ii.outerWidth()) < Jt && ii.addClass("over-right")), ni = e(this).find(".location__tooltip__content__text"), "undefined" != typeof ni && null !== ni && ni.length > 0 && ni.html(si), Modernizr.touch ? e(this).addClass("touch") : (e(this).on("mouseenter", function (t) {
			var i = e(t.target).find(".location__tooltip__content"),
				n = t.target;
			e(t.target).is("span") && (n = e(t.target).parent()), e(n).css("z-index", 100), e(n).find(".location__tooltip").fadeIn("fast"), e(n).hasClass("verifyOffset") && (e(i).removeClass("over-left"), e(i).removeClass("over-right"), void 0 !== e(i).offset() && e(i).offset().left < Qt && e(i).addClass("over-left"), void 0 !== e(i).offset() && e(window).width() - (e(i).offset().left + e(i).outerWidth()) < Jt && e(i).addClass("over-right"), e(n).removeClass("verifyOffset"))
		}), e(this).on("mouseleave", function () {
			e(this).find(".location__tooltip").stop().fadeOut("fast"), e(this).css("z-index", 90)
		}), e(ii).on("mouseleave", function () {
			e(this).parent().stop().fadeOut("fast", function () {
				e(this).css("z-index", 90)
			})
		})), Kt.hide()
	}), e(window).resize(function () {
		e(".location__point").addClass("verifyOffset"), Qt = ai.offset().left + ri, Jt = e(window).width() - (ai.offset().left + ai.outerWidth()) + ri
	}));
	var li, di, ci, hi, fi, ui, mi, wi, _i, pi, vi, gi, yi, ki, xi, Ti, bi, Si, Bi, Ai = document.getElementById("positions__list"),
		Li = e(".positions__subTitle"),
		Ci = e(".positions__selfApply"),
		Ii = ".positions__itemButton",
		Mi = null,
		Pi = !1;
	e(window).bind("popstate", function () {
		"/jobs.html" !== window.location.pathname || window.location.hash || k()
	}), e(document).on("click", Ii, function () {
		e(this).attr("disabled", !0), Pi ? k() : (Pi = !0, Mi = e(this).closest(".positions__item"), li = e(this).data("position-code"), window.location.hash = li, i(), T(li))
	}), window.addEventListener("resize", function () {
		null !== Mi && x()
	}, !1), e(Ai).length > 0 && S();
	var Oi = ".perks__slider";
	e(Oi).slick({
		slidesToShow: 1,
		infinite: !1,
		arrows: !1
	});
	var Ei, Di, Wi = e(".hero__infoContainer"),
		zi = ".hero__overlay",
		Fi = ".hero__overlayInner",
		qi = $ + 7,
		Hi = e(".hero__button--videoTrigger"),
		ji = !1,
		Ni = !1,
		Vi = !1;
	Hi.length > 0 && (Ei = e(Hi[1]).data("id"), Modernizr.touch && e("#videoLoader").show(), a("#videoLoader", mt[0], mt[1], 0), Hi.on("click", function (e) {
		e.preventDefault(), ji ? B() : L(), ji = !ji
	}), window.addEventListener("resize", function () {
		ji && (qi = $ + 7, TweenLite.set(St, {
			height: qi
		}))
	}, !1));
	var Gi, Ri, Yi = "#timeline",
		Ui = document.getElementById("timeline"),
		Xi = new TimelineMax,
		Zi = e(Yi).height() - 100,
		$i = new ScrollMagic.Controller,
		Ji = [".process__timelineBullet--first", ".process__timelineLine--first", [".process__timelineBullet--second", ".process__step--first"], ".process__timelineLine--second", [".process__timelineBullet--third", ".process__step--second"], ".process__timelineLine--third", [".process__timelineBullet--third", ".process__step--second"], ".process__timelineLine--third", [".process__timelineBullet--fourth", ".process__step--third"], ".process__timelineLine--fourthFirstHalf", ".process__timelineIteratePath--first", ".process__timelineIterateText--first", ".process__timelineLine--fourthSecondHalf", [".process__timelineBullet--fifth", ".process__step--fourth"], ".process__timelineLine--fifthFirstHalf", ".process__timelineIteratePath--second", ".process__timelineIterateText--second", ".process__timelineLine--fifthSecondHalf", [".process__timelineBullet--sixth", ".process__step--fifth"], ".process__timelineLine--sixthFirstHalf", ".process__timelineIteratePath--third", ".process__timelineIterateText--third", ".process__timelineLine--sixthSecondHalf", [".process__timelineBullet--seventh", ".process__step--sixth"], ".process__timelineLine--seventh"];
	if (Ui && !et) {
		Ri = window.innerWidth > 768 ? document.getElementsByClassName("process__timelineIteratePath--desktop")[0].getTotalLength() : document.getElementsByClassName("process__timelineIteratePath--mobile")[0].getTotalLength(), Xi.set([".process__timelineBullet", ".process__timelineLine"], {
			transformOrigin: "50% 0",
			scale: 0
		}).set(".process__timelineIteratePath", {
			attr: {
				"stroke-dasharray": Ri,
				"stroke-dashoffset": 0
			}
		}).set([".process__timelineIterateText", ".process__step"], {
			transformOrigin: "0 0",
			opacity: 0
		});
		for (var Qi = 0; Qi < Ji.length; Qi++) {
			var Ki = Ji[Qi];
			".process__timelineIteratePath--second" === Ji[Qi] ? Xi.to(Ki, .1, {
				attr: {
					"stroke-dashoffset": Ri
				}
			}) : ".process__timelineIteratePath--first" === Ji[Qi] || ".process__timelineIteratePath--third" === Ji[Qi] ? Xi.to(Ki, .1, {
				attr: {
					"stroke-dashoffset": -Ri
				}
			}) : Xi.to(Ji[Qi], .1, {
				scale: 1,
				opacity: 1,
				onComplete: function () {
					var t = this.target;
					t.constructor === Array && (t = t[1]), void 0 !== t.selector && (t = t.selector), (t.indexOf(".process__step--first") > -1 || t.indexOf(".process__step--second") > -1 || t.indexOf(".process__step--third") > -1 || t.indexOf(".process__step--fourth") > -1 || t.indexOf(".process__step--fifth") > -1 || t.indexOf(".process__step--sixth") > -1 || t.indexOf(".process__step--seventh") > -1) && e(t).addClass("process__step--isAnimated")
				}
			})
		}
		Gi = new ScrollMagic.Scene({
			triggerElement: Yi,
			duration: Zi,
			reverse: !1
		}).setTween(Xi).addTo($i), window.addEventListener("resize", function () {
			Ri = window.innerWidth > 768 ? document.getElementsByClassName("process__timelineIteratePath--desktop")[0].getTotalLength() : document.getElementsByClassName("process__timelineIteratePath--mobile")[0].getTotalLength(), e(".process__step--isAnimated").removeAttr("style")
		}, !1)
	}
	var en = document.getElementById("team__membersList");
	en && P();
	var tn, nn, sn = ".photoFeed__itemsContainer",
		on = document.getElementById("photoFeed__items"),
		an = ".photoFeed__item",
		rn = 1e4,
		ln = 27500,
		dn = new TimelineLite;
	on && z();
	var cn, hn = document.getElementById("map"),
		fn = document.getElementById("pixelLocation"),
		un = e(fn).find("span"),
		mn = document.getElementsByClassName("location__point--client"),
		wn = [];
	hn && !Modernizr.touch && (cn = [fn.offsetLeft + 13, fn.offsetTop + 13], window.onload = function () {
		for (var t = 0; t < mn.length; t++) F(e('<div class="location__pixelPackage"></div>'), t)
	}, window.addEventListener("resize", function () {
		e(".location__pixelPackage").remove(), e(".location__pointDot").removeClass("location__pointDot--animate"), cn = [fn.offsetLeft + 13, fn.offsetTop + 13];
		for (var t = 0; t < wn.length; t++) wn[t].restart()
	}, !1));
	var _n = (e(".caseStudies"), e("#caseStudies__items")),
		pn = e("#caseStudies__filters"),
		vn = e(".caseStudies__filterItem"),
		gn = document.getElementsByClassName("caseStudies__item"),
		yn = document.getElementById("loadMoreCaseStudies"),
		kn = !1,
		xn = "*",
		Tn = 0,
		bn = [],
		Sn = [],
		Bn = [],
		An = 0,
		Ln = 5;
	_n.length > 0 && (e.ajax({
		type: "GET",
		dataType: "json",
		url: "data/case-studies.json",
		data: {
			format: "json"
		},
		success: function (e) {
			N(e.caseStudies)
		},
		error: function () {
			V()
		}
	}), vn.on("click", function () {
		window.innerWidth > 768 ? (_n.html(""), Bn = [], An = 0, Sn = [], xn = e(this).data("filter"), Tn = parseInt(e(this).index()), vn.removeClass("caseStudies__filterItem--active"), e(this).addClass("caseStudies__filterItem--active"), j()) : pn.slick("slickGoTo", e(this).index())
	}), window.innerWidth < 768 && (pn.slick({
		width: 300,
		slidesToShow: 1,
		infinite: !1,
		arrows: !1,
		centerMode: !0,
		variableWidth: !0
	}), pn.on("beforeChange", function (t, i, n, s) {
		var o = e(document.getElementsByClassName("caseStudies__filterItem")[s]);
		xn = o.data("filter"), Tn !== s && (Tn = s, _n.html(""), Bn = [], An = 0, Sn = [], vn.removeClass("caseStudies__filterItem--active"), o.addClass("caseStudies__filterItem--active"), j())
	}), kn = !0), window.addEventListener("resize", function () {
		window.innerWidth >= 768 && kn ? (pn.slick("unslick"), kn = !1) : window.innerWidth <= 768 && !kn && (pn.slick({
			width: 300,
			slidesToShow: 1,
			infinite: !1,
			arrows: !1,
			centerMode: !0,
			variableWidth: !0,
			initialSlide: Tn
		}), pn.on("beforeChange", function (t, i, n, s) {
			var o = e(document.getElementsByClassName("caseStudies__filterItem")[s]);
			xn = o.data("filter"), Tn !== s && (Tn = s, _n.html(""), Bn = [], An = 0, Sn = [], vn.removeClass("caseStudies__filterItem--active"), o.addClass("caseStudies__filterItem--active"), j())
		}), kn = !0)
	}, !1));
	var Cn = "93e2f81253b664a8613894835612aebd99beaf817913b62165edd353b7eb6dd7",
		In = "wearepixelmatters",
		Mn = {
			page: 1,
			per_page: Modernizr.touch ? 9 : 12
		},
		Pn = document.getElementById("dribbble__items"),
		On = !1;
	Pn && (e.jribbble.setToken(Cn), G(), window.addEventListener("resize", function () {
		window.innerWidth >= 768 && On ? (e(Pn).slick("unslick"), On = !1) : window.innerWidth <= 768 && !On && (e(Pn).slick({
			slidesToShow: 1,
			infinite: !1,
			arrows: !1
		}), On = !0)
	}, !1));
	var En = e(".caseStudyImagesSliderBlock");
	En.length > 0 && En.each(function () {
		var t, i = e("#" + e(this).attr("id")),
			n = i.find("li").length;
		i.slick({
			slidesToShow: 3,
			infinite: !0,
			arrows: !1,
			centerMode: !0,
			draggable: !1,
			touchMove: !1
		}), t = i.find(".slick-current").index(), i.find(".slick-slide:nth(" + (t - 1) + ")").addClass("slick-before-first"), i.find(".slick-slide:nth(" + (t + 1) + ")").addClass("slick-after-first"), n > 4 && (i.find(".slick-slide:nth(" + (t - 2) + ")").addClass("slick-before-second"), i.find(".slick-slide:nth(" + (t + 2) + ")").addClass("slick-after-second")), i.on("beforeChange", function (e, t, n, s) {
			var o = i.find(".caseStudyImagesSliderBlock__item").removeClass("slick-current-clone slick-before-first slick-before-second slick-after-first slick-after-second").length,
				a = t.slideCount,
				r = t.options.slidesToShow;
			i.find(".slick-slide:nth(" + (s + r) + ")").addClass("slick-before-first"), i.find(".slick-slide:nth(" + (s + r + 2) + ")").addClass("slick-after-first"), a > 4 && (i.find(".slick-slide:nth(" + (s + r - 1) + ")").addClass("slick-before-second"), i.find(".slick-slide:nth(" + (s + r + 3) + ")").addClass("slick-after-second")), 0 === n && s === t.slideCount - 1 && (i.find(".caseStudyImagesSliderBlock__item:nth(" + (r - 1) + ")").addClass("slick-before-clone-first"), i.find(".caseStudyImagesSliderBlock__item:nth(" + r + ")").addClass("slick-current-clone"), i.find(".caseStudyImagesSliderBlock__item:nth(" + (r + 1) + ")").addClass("slick-after-clone-first"), a > 4 && (i.find(".caseStudyImagesSliderBlock__item:nth(" + (r - 2) + ")").addClass("slick-before-clone-second"), i.find(".caseStudyImagesSliderBlock__item:nth(" + (r + 2) + ")").addClass("slick-after-clone-second"))), n === t.slideCount - 1 && 0 === s && (i.find(".caseStudyImagesSliderBlock__item:nth(" + (o - r - 2) + ")").addClass("slick-before-clone-first"), i.find(".caseStudyImagesSliderBlock__item:nth(" + (o - r - 1) + ")").addClass("slick-current-clone"), i.find(".caseStudyImagesSliderBlock__item:nth(" + (o - r) + ")").addClass("slick-after-clone-first"), a > 4 && (i.find(".caseStudyImagesSliderBlock__item:nth(" + (o - r - 3) + ")").addClass("slick-before-clone-second"), i.find(".caseStudyImagesSliderBlock__item:nth(" + (o - r + 1) + ")").addClass("slick-after-clone-second")))
		}), i.on("afterChange", function () {
			i.find(".caseStudyImagesSliderBlock__item").removeClass("slick-current-clone slick-before-clone-first slick-before-clone-second slick-after-clone-first slick-after-clone-second")
		}), i.find(".caseStudyImagesSliderBlock__item").on("click", function () {
			var t = i.find(".caseStudyImagesSliderBlock__item.slick-current").index() - 4,
				n = e(this).index() - 4;
			e(this).hasClass(".slick-current") || n !== t - 1 && n !== t + 1 || (i.slick("slickGoTo", n), Gn = !0)
		})
	});
	var Dn = e(".caseStudyComparisonBlock__button");
	Dn.on("click", function () {
		var t = e(this),
			i = e(this).html(),
			n = e(this).parent(),
			s = n.parent();
		n.find(".caseStudyComparisonBlock__button").removeClass("caseStudyComparisonBlock__button--isActive"), t.addClass("caseStudyComparisonBlock__button--isActive"), "Desktop" === i ? s.find(".caseStudyComparisonBlock__browser").removeClass("caseStudyComparisonBlock__browser--mobile") : s.find(".caseStudyComparisonBlock__browser").addClass("caseStudyComparisonBlock__browser--mobile")
	});
	var Wn = e(".caseStudyDetailSliderBlock__imageContainer");
	Wn.length > 0 && Wn.each(function () {
		var t = e("#" + e(this).attr("id")),
			i = t.closest(".caseStudyDetailSliderBlock").find(".caseStudyDetailsSliderBlock__navigation");
		e(this).find("img").length > 1 ? t.slick({
			slidesToShow: 1,
			infinite: !0,
			arrows: !0,
			appendArrows: i,
			prevArrow: '<button type="button" class="slick-prev caseStudyDetailSliderBlock__navButton caseStudyDetailSliderBlock__navButton--prev"><svg class="pixel--long-left-arrow caseStudyDetailSliderBlock__navButtonIcon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons.svg#pixel--long-left-arrow"></use></svg></button>',
			nextArrow: '<button type="button" class="slick-next caseStudyDetailSliderBlock__navButton caseStudyDetailSliderBlock__navButton--next"><svg class="pixel--long-right-arrow caseStudyDetailSliderBlock__navButtonIcon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons.svg#pixel--long-right-arrow"></use></svg></button>',
			dots: !1,
			fade: !0,
			responsive: [{
				breakpoint: 768,
				settings: {
					arrows: !1,
					dots: !0
				}
			}]
		}) : e(this).find("img").addClass("caseStudyDetailSliderBlock__image--single")
	});
	var zn, Fn, qn, Hn, jn, Nn, Vn = e(".caseStudyBeforeAndAfterSliderBlock__itemWrapper"),
		Gn = !1,
		Rn = 12;
	Vn.hasClass("caseStudyBeforeAndAfterSliderBlock__itemWrapper--macbook") && e(window).width() < 768 ? Rn = 4 : Vn.hasClass("caseStudyBeforeAndAfterSliderBlock__itemWrapper--iphone") && e(window).width() < 768 && (Rn = 8), e(window).resize(function () {
		Rn = Vn.hasClass("caseStudyBeforeAndAfterSliderBlock__itemWrapper--macbook") && e(window).width() < 768 ? 4 : Vn.hasClass("caseStudyBeforeAndAfterSliderBlock__itemWrapper--iphone") && e(window).width() < 768 ? 8 : 12
	}), Vn.length > 0 && Vn.each(function () {
		var t, i, n, s, o = e("#" + e(this).attr("id")),
			a = o.closest(".caseStudyBeforeAndAfterSliderBlock");
		if (o.on("init", function () {
			setTimeout(function () {
				o.find(".slick-current").addClass("caseStudyBeforeAndAfterSliderBlock__item--beforeAndAfter"), t = o.find(".slick-current .caseStudyBeforeAndAfterSliderBlock__itemAfter"), i = o.find(".slick-current .caseStudyBeforeAndAfterSliderBlock__itemAfter__itemHandler"), i.width(o.find(".slick-current .caseStudyBeforeAndAfterSliderBlock__itemAfter").width() + Rn), t.find("img").load(function () {
					s = o.find(".slick-current .caseStudyBeforeAndAfterSliderBlock__itemAfter").width() / 2, n = o.find(".slick-current .caseStudyBeforeAndAfterSliderBlock__itemAfter").width() / 2 + Rn, TweenLite.killTweensOf(t), TweenLite.set(t, {
						width: s
					}), TweenLite.killTweensOf(i), TweenLite.set(i, {
						width: n
					})
				})
			}, 0)
		}), o.slick(o.closest(".caseStudyBeforeAndAfterSliderBlock").hasClass("caseStudyBeforeAndAfterSliderBlock--iphone") ? {
			slidesToShow: 1,
			infinite: !1,
			arrows: !1,
			fade: !1,
			draggable: !1,
			touchMove: !1,
			responsive: [{
				breakpoint: 768,
				settings: {
					arrows: !0,
					appendArrows: a,
					prevArrow: '<button type="button" class="slick-prev caseStudyBeforeAndAfterSliderBlock__navButton caseStudyBeforeAndAfterSliderBlock__navButton--prev"><svg class="pixel--left-arrow caseStudyBeforeAndAfterSliderBlock__navButtonIcon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons.svg#pixel--left-arrow"></use></svg></button>',
					nextArrow: '<button type="button" class="slick-next caseStudyBeforeAndAfterSliderBlock__navButton caseStudyBeforeAndAfterSliderBlock__navButton--next"><svg class="pixel--right-arrow caseStudyBeforeAndAfterSliderBlock__navButtonIcon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons.svg#pixel--right-arrow"></use></svg></button>',
					fade: !0,
					swipe: !1
				}
			}]
		} : {
				slidesToShow: 1,
				infinite: !1,
				arrows: !1,
				fade: !1,
				draggable: !1,
				touchMove: !1,
				responsive: [{
					breakpoint: 1025,
					settings: {
						swipe: !1
					}
				}, {
					breakpoint: 850,
					settings: {
						arrows: !0,
						appendArrows: a,
						prevArrow: '<button type="button" class="slick-prev caseStudyBeforeAndAfterSliderBlock__navButton caseStudyBeforeAndAfterSliderBlock__navButton--prev"><svg class="pixel--left-arrow caseStudyBeforeAndAfterSliderBlock__navButtonIcon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons.svg#pixel--left-arrow"></use></svg></button>',
						nextArrow: '<button type="button" class="slick-next caseStudyBeforeAndAfterSliderBlock__navButton caseStudyBeforeAndAfterSliderBlock__navButton--next"><svg class="pixel--right-arrow caseStudyBeforeAndAfterSliderBlock__navButtonIcon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons.svg#pixel--right-arrow"></use></svg></button>',
						fade: !0,
						swipe: !1
					}
				}]
			}), o.on("beforeChange", function () {
				o.find(".caseStudyBeforeAndAfterSliderBlock__item").removeClass("caseStudyBeforeAndAfterSliderBlock__item--beforeAndAfter"), o.find(".caseStudyBeforeAndAfterSliderBlock__item div").removeAttr("style"), zn && (zn.removeAttr("style"), TweenLite.killTweensOf(zn), zn = ""), Fn && (Fn.removeAttr("style"), TweenLite.killTweensOf(Fn), Fn = "")
			}), o.on("afterChange", function () {
				o.find(".slick-current").addClass("caseStudyBeforeAndAfterSliderBlock__item--beforeAndAfter"), zn = o.find(".slick-current").find(".caseStudyBeforeAndAfterSliderBlock__itemAfter"), Hn = o.find(".slick-current").find(".caseStudyBeforeAndAfterSliderBlock__itemBefore").width() / 2, Fn = o.find(".slick-current").find(".caseStudyBeforeAndAfterSliderBlock__itemAfter__itemHandler"), Fn.width(o.find(".slick-current").find(".caseStudyBeforeAndAfterSliderBlock__itemBefore").width() + Rn), jn = o.find(".slick-current").find(".caseStudyBeforeAndAfterSliderBlock__itemBefore").width() / 2 + Rn, qn = o.find(".slick-current").find(".caseStudyBeforeAndAfterSliderBlock__itemHandler"), qn.css("left", o.find(".slick-current").find(".caseStudyBeforeAndAfterSliderBlock__itemBefore").width()), Nn = o.find(".slick-current").find(".caseStudyBeforeAndAfterSliderBlock__itemBefore").width() / 2, TweenLite.to(zn, 1, {
					width: Hn
				}), TweenLite.to(Fn, 1, {
					width: jn
				}), TweenLite.to(qn, 1, {
					left: Nn
				}), setTimeout(function () {
					Gn = !1
				}, 1050)
			}), o.find(".caseStudyBeforeAndAfterSliderBlock__item").on("click", function () {
				var t = e(this).index();
				e(this).hasClass("slick-current") || (o.slick("slickGoTo", t), Gn = !0)
			}), Modernizr.touch) {
			o.find(".caseStudyBeforeAndAfterSliderBlock__itemAfter__itemHandler").addClass("invisible");
			var r, l = 100,
				d = o.find(".caseStudyBeforeAndAfterSliderBlock__item").width() + l,
				c = d / 2,
				h = o.find(".caseStudyBeforeAndAfterSliderBlock__itemHandler");
			Draggable.create(h, {
				type: "x",
				bounds: {
					left: -l / 2,
					width: d
				},
				onDrag: function () {
					r = e(this.target).parent().find(".caseStudyBeforeAndAfterSliderBlock__itemAfter");
					var t = this.x + c;
					r && (TweenLite.killTweensOf(zn), TweenLite.set(r, {
						width: t
					}))
				}
			})
		}
	}), Modernizr.touch || (e(document).on("mouseenter", ".caseStudyBeforeAndAfterSliderBlock__item--beforeAndAfter", function () {
		zn = e(this).find(".caseStudyBeforeAndAfterSliderBlock__itemAfter"), Hn = e(this).find(".caseStudyBeforeAndAfterSliderBlock__itemBefore").width() / 2, Fn = e(this).find("div.caseStudyBeforeAndAfterSliderBlock__itemAfter__itemHandler"), jn = Hn + Rn
	}), e(document).on("mousemove", ".caseStudyBeforeAndAfterSliderBlock__item--beforeAndAfter", function (e) {
		var t = e.offsetX || e.clientX - zn.offset().left;
		zn && (TweenLite.killTweensOf(zn), TweenLite.set(zn, {
			width: t
		})), Fn && (TweenLite.killTweensOf(Fn), TweenLite.set(Fn, {
			width: t + Rn
		}))
	}), e(document).on("mouseleave", ".caseStudyBeforeAndAfterSliderBlock__item--beforeAndAfter", function () {
		var t = event.movementX < 0 ? "left" : "right",
			i = event.movementX < 0 ? event.x - 150 : event.x + 150,
			n = e(this).offset().top,
			s = n + e(this).find("img").height();
		Gn || (event.pageY - 1 <= n || event.pageY >= s ? (zn && (TweenLite.killTweensOf(zn), TweenLite.to(zn, 1, {
			width: Hn
		})), Fn && (TweenLite.killTweensOf(Fn), TweenLite.to(Fn, 1, {
			width: jn
		}))) : ("left" === t && (TweenLite.set(zn, {
			width: 0
		}), TweenLite.set(Fn, {
			width: Rn
		})), "right" === t && (TweenLite.set(zn, {
			width: 2 * Hn
		}), TweenLite.set(Fn, {
			width: 2 * Hn + Rn
		})), e(this).parent().on("mousemove", function () {
			("left" === t && event.x < i || "right" === t && event.x > i) && (zn && (TweenLite.killTweensOf(zn), TweenLite.to(zn, 1, {
				width: Hn
			})), Fn && (TweenLite.killTweensOf(Fn), TweenLite.to(Fn, 1, {
				width: Hn + Rn
			})))
		})))
	}));
	var Yn = e(".caseStudyBeforeAndAfterSliderBlock__button");
	Yn.on("click", function () {
		var t = e(this),
			i = e(this).html(),
			n = e(this).parent(),
			s = n.parent();
		n.find(".caseStudyBeforeAndAfterSliderBlock__button").removeClass("caseStudyBeforeAndAfterSliderBlock__button--isActive"), t.addClass("caseStudyBeforeAndAfterSliderBlock__button--isActive"), "iOS" === i ? (s.find(".caseStudyBeforeAndAfterSliderBlock__itemWrapper").removeClass("caseStudyBeforeAndAfterSliderBlock__itemWrapper--nexus").addClass("caseStudyBeforeAndAfterSliderBlock__itemWrapper--iphone"), s.find(".caseStudyBeforeAndAfterSliderBlock__itemWrapper").slick("setPosition")) : (s.find(".caseStudyBeforeAndAfterSliderBlock__itemWrapper").removeClass("caseStudyBeforeAndAfterSliderBlock__itemWrapper--iphone").addClass("caseStudyBeforeAndAfterSliderBlock__itemWrapper--nexus"), s.find(".caseStudyBeforeAndAfterSliderBlock__itemWrapper").slick("setPosition"))
	});
	var Un = e(".caseStudyDetailsListBlock__list"),
		Xn = e(".caseStudyDetailsListBlock__slider");
	Un.length > 0 && (Un.each(function () {
		var t, i, n = e(this),
			s = n.find("li"),
			o = n.closest(".caseStudyDetailsListBlock").find("img");
		s.on("click", function () {
			var a = e(this).index();
			s.removeClass("caseStudyDetailsListBlock__listItem--active"), e(this).addClass("caseStudyDetailsListBlock__listItem--active"), o.removeClass("caseStudyDetailsListBlock__image--active"), o.eq(a).addClass("caseStudyDetailsListBlock__image--active"), clearInterval(t), clearTimeout(i), i = setTimeout(function () {
				t = setInterval(function () {
					R(n, s, o)
				}, 3e3)
			}, 5e3)
		}), t = setInterval(function () {
			R(n, s, o)
		}, 3e3)
	}), Xn.each(function () {
		var t = e("#" + e(this).attr("id"));
		t.slick({
			slidesToShow: 1,
			dots: !0,
			infinite: !0,
			speed: 500,
			fade: !0,
			cssEase: "linear",
			arrows: !1
		})
	}));
	var Zn = e(".caseStudyTweetBlock");
	Zn.length > 0 && Zn.each(function () {
		var t = e(this),
			i = t.data("id"),
			n = t.data("fallback-image");
		e.ajax({
			type: "GET",
			dataType: "json",
			url: "http://pixelmatters.com/proxy.php?url=https://api.twitter.com/1/statuses/oembed.json?id=" + i,
			data: {
				format: "json"
			},
			success: function (e) {
				Y(t, i, e.contents)
			},
			error: function () {
				U(t, n)
			}
		})
	})
}(jQuery);
