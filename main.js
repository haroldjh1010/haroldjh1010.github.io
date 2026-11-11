(function () {
  "use strict";

  var SPY_LINE = 0.3;
  var LOGO_BOX = 40;
  var NEW_TAB_TEXT = " (opens in a new tab)";
  var SCHEME_RE = /^([a-z][a-z0-9+.-]*):/i;
  var CONTROL_RE = /[\u0000-\u001F\u007F]/;
  var ALLOWED = { http: true, https: true, mailto: true };
  var SVGNS = "http://www.w3.org/2000/svg";

  function textOf(v) {
    if (typeof v === "string") return v;
    if (typeof v === "number" || typeof v === "boolean") return String(v);
    return "";
  }
  function nonEmpty(v) { return textOf(v).trim() !== ""; }

  // Converts *marked* text into italic <em> nodes. Use \* for a literal asterisk.
  // Returns an array of strings and <em> elements suitable for passing to el().
  function richText(doc, v) {
    var s = textOf(v);
    if (s === "") return [];
    var out = [];
    var buf = "";
    var open = false;
    for (var i = 0; i < s.length; i++) {
      var ch = s.charAt(i);
      if (ch === "\\" && i + 1 < s.length && s.charAt(i + 1) === "*") {
        buf += "*"; i++; continue;
      }
      if (ch === "*") {
        if (!open) {
          if (buf !== "") { out.push(doc.createTextNode(buf)); buf = ""; }
          open = true;
        } else {
          out.push(el(doc, "em", null, buf));
          buf = ""; open = false;
        }
        continue;
      }
      buf += ch;
    }
    if (open) buf = "*" + buf; // unmatched opener: keep the asterisk literal
    if (buf !== "") out.push(doc.createTextNode(buf));
    return out;
  }
  function toList(v) { return Array.isArray(v) ? v.filter(function (x) { return x !== null && x !== undefined; }) : []; }
  function isObject(v) { return v !== null && typeof v === "object" && !Array.isArray(v); }

  function el(doc, tag, attrs) {
    var node = doc.createElement(tag);
    if (attrs) {
      for (var name in attrs) {
        if (!Object.prototype.hasOwnProperty.call(attrs, name)) continue;
        var value = attrs[name];
        if (value === undefined || value === null || value === false) continue;
        node.setAttribute(name, value === true ? "" : String(value));
      }
    }
    for (var i = 3; i < arguments.length; i++) {
      var child = arguments[i];
      if (child === null || child === undefined || child === false || child === "") continue;
      if (Array.isArray(child)) {
        for (var j = 0; j < child.length; j++) {
          var c = child[j];
          if (c === null || c === undefined || c === false || c === "") continue;
          node.appendChild(typeof c === "string" ? doc.createTextNode(c) : c);
        }
      } else {
        node.appendChild(typeof child === "string" ? doc.createTextNode(child) : child);
      }
    }
    return node;
  }

  function svgIcon(doc, paths, extra) {
    var svg = doc.createElementNS(SVGNS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    if (extra) svg.setAttribute("class", extra);
    for (var i = 0; i < paths.length; i++) {
      var p = doc.createElementNS(SVGNS, "path");
      p.setAttribute("d", paths[i]);
      p.setAttribute("fill", "currentColor");
      svg.appendChild(p);
    }
    return svg;
  }
  function icon(doc, kind) {
    if (kind === "mail") return svgIcon(doc, ["M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1.4 2L12 12.3 19.6 7H4.4zM20 8.9l-8 5.6-8-5.6V17h16V8.9z"], "chip-icon");
    if (kind === "pin") return svgIcon(doc, ["M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"], "loc-icon");
    if (kind === "download") return svgIcon(doc, ["M12 3v10.6l3.3-3.3 1.4 1.4L12 17 7.3 11.7l1.4-1.4L12 13.6V3zM5 19h14v2H5z"], "chip-icon");
    if (kind === "external") return svgIcon(doc, ["M14 3h7v7h-2V6.4l-8.3 8.3-1.4-1.4L17.6 5H14V3zM5 5h5v2H6v11h11v-4h2v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"], "ext-icon");
    return svgIcon(doc, [""]);
  }

  function safeHref(value) {
    var url = textOf(value).trim();
    if (url === "" || CONTROL_RE.test(url)) return "";
    var m = SCHEME_RE.exec(url);
    if (m) return ALLOWED[m[1].toLowerCase()] ? url : "";
    if (url.indexOf("//") === 0 || url.charAt(0) === "\\") return "";
    return url;
  }
  function safeAssetPath(value) {
    var p = textOf(value).trim();
    if (p === "" || CONTROL_RE.test(p)) return "";
    if (SCHEME_RE.test(p) || p.charAt(0) === "/" || p.charAt(0) === "\\") return "";
    return p;
  }
  function isExternal(href) { return /^https?:/i.test(href); }

  function createLink(doc, href, child, className) {
    var a = el(doc, "a", { href: href, "class": className }, child);
    if (isExternal(href)) {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
      a.appendChild(el(doc, "span", { "class": "visually-hidden" }, NEW_TAB_TEXT));
      a.appendChild(icon(doc, "external"));
    }
    return a;
  }

  var SECTION_DEFS = [
    { key: "about", id: "about", heading: "About", nav: "About",
      hasContent: function (b) { return toList(b.summary).length > 0 || nonEmpty(b.summary) || toList(b.interests).length > 0; } },
    { key: "education", id: "education", heading: "Education", nav: "Education", list: "entries" },
    { key: "research", id: "research", heading: "Research Experience", nav: "Research", list: "entries" },
    { key: "projects", id: "projects", heading: "Selected Projects", nav: "Projects", list: "entries" },
    { key: "skills", id: "skills", heading: "Qualifications & Skills", nav: "Skills", list: "groups" },
    { key: "activities", id: "activities", heading: "Extracurricular Activities", nav: "Activities", list: "entries" },
    { key: "awards", id: "awards", heading: "Honors & Awards", nav: "Awards", list: "entries" }
  ];
  function hasContent(def, block) {
    if (def.hasContent) return def.hasContent(block);
    return toList(block[def.list]).some(isObject);
  }

  function clear(node) { while (node && node.firstChild) node.removeChild(node.firstChild); }
  function clearExceptNoscript(main) {
    var keep = main.querySelector("noscript");
    clear(main);
    if (keep) main.appendChild(keep);
  }

  function renderAvatar(doc, profile) {
    var name = textOf(profile.name);
    var avatar = el(doc, "div", { "class": "avatar", role: "img", "aria-label": name + " initials avatar" },
      el(doc, "span", { "class": "avatar-initials", "aria-hidden": "true" }, textOf(profile.initials)));
    var src = safeAssetPath(profile.photo);
    if (src) loadAvatarPhoto(doc, avatar, src, name);
    return avatar;
  }
  function loadAvatarPhoto(doc, avatar, src, name) {
    var img = doc.createElement("img");
    img.className = "avatar-photo";
    img.alt = "Photo of " + name;
    img.decoding = "async";
    img.addEventListener("load", function () {
      if (!img.naturalWidth) return;
      avatar.removeAttribute("role");
      avatar.removeAttribute("aria-label");
      avatar.classList.add("has-photo");
      avatar.appendChild(img);
    }, { once: true });
    img.src = src;
  }

  function logoAltFor(entry) {
    var cands = [entry.institution, entry.organization, entry.role];
    var name = "Institution";
    for (var i = 0; i < cands.length; i++) {
      var t = textOf(cands[i]).trim();
      if (t !== "") { name = t; break; }
    }
    return name + " logo";
  }
  function loadEntryLogo(doc, head, titleRow, src, alt) {
    var img = doc.createElement("img");
    img.className = "entry-logo";
    img.alt = alt;
    img.width = LOGO_BOX;
    img.height = LOGO_BOX;
    img.decoding = "async";
    img.addEventListener("load", function () {
      titleRow.insertBefore(img, titleRow.firstChild);
      head.classList.add("has-logo");
    }, { once: true });
    img.src = src;
  }

  function renderHeader(doc, profile) {
    var avatar = renderAvatar(doc, profile);
    var chips = el(doc, "ul", { "class": "contact-chips", role: "list" });
    toList(profile.emails).forEach(function (addr) {
      var a = safeHref("mailto:" + textOf(addr).trim());
      if (!a) return;
      chips.appendChild(el(doc, "li", null, el(doc, "a", { "class": "chip", href: a }, icon(doc, "mail"), textOf(addr))));
    });
    var cv = safeHref(profile.cvPdf);
    if (cv) {
      chips.appendChild(el(doc, "li", null, el(doc, "a", { "class": "chip chip--solid", href: cv }, icon(doc, "download"), textOf(profile.cvLabel) || "Download CV")));
    }
    var text = el(doc, "div", { "class": "header-text" },
      el(doc, "h1", { "class": "name" }, textOf(profile.name)),
      nonEmpty(profile.headline) ? el(doc, "p", { "class": "headline" }, textOf(profile.headline)) : null,
      nonEmpty(profile.affiliation) ? el(doc, "p", { "class": "affiliation" }, textOf(profile.affiliation)) : null,
      nonEmpty(profile.location) ? el(doc, "p", { "class": "location" }, icon(doc, "pin"), textOf(profile.location)) : null,
      chips);
    return { node: el(doc, "div", { "class": "header-inner" }, avatar, text), avatar: avatar };
  }

  function entryHead(doc, titleNode, dates) {
    var titleRow = el(doc, "div", { "class": "entry-title-row" }, titleNode);
    var head = el(doc, "div", { "class": "entry-head" }, titleRow,
      nonEmpty(dates) ? el(doc, "p", { "class": "entry-dates" }, textOf(dates)) : null);
    return { head: head, titleRow: titleRow };
  }
  function maybeLogo(doc, h, entry) {
    var src = safeAssetPath(entry.logo);
    if (src) loadEntryLogo(doc, h.head, h.titleRow, src, logoAltFor(entry));
  }
  function bulletList(doc, bullets) {
    var items = toList(bullets).filter(nonEmpty);
    if (!items.length) return null;
    var ul = el(doc, "ul", { "class": "entry-bullets" });
    items.forEach(function (b) { ul.appendChild(el(doc, "li", null, richText(doc, b))); });
    return ul;
  }
  function joinMeta(parts) {
    return parts.map(function (p) { return textOf(p).trim(); }).filter(function (s) { return s !== ""; }).join(", ");
  }

  function renderEducationEntry(doc, e) {
    var h = entryHead(doc, el(doc, "h3", { "class": "entry-title" }, textOf(e.institution)), e.dates);
    maybeLogo(doc, h, e);
    var li = el(doc, "li", { "class": "entry" }, h.head,
      nonEmpty(e.location) ? el(doc, "p", { "class": "entry-meta" }, textOf(e.location)) : null,
      nonEmpty(e.program) ? el(doc, "p", { "class": "entry-program" }, richText(doc, e.program)) : null,
      bulletList(doc, e.details));
    return li;
  }
  function renderExperienceEntry(doc, e) {
    var h = entryHead(doc, el(doc, "h3", { "class": "entry-title" }, richText(doc, e.role)), e.dates);
    maybeLogo(doc, h, e);
    var meta = joinMeta([e.organization, e.institution, e.location]);
    var li = el(doc, "li", { "class": "entry" }, h.head,
      meta ? el(doc, "p", { "class": "entry-meta" }, richText(doc, meta)) : null,
      bulletList(doc, e.bullets));
    return li;
  }
  function renderProjectEntry(doc, e) {
    var href = safeHref(e.url);
    var titleChild = href ? createLink(doc, href, richText(doc, e.title), "title-link") : richText(doc, e.title);
    var h = entryHead(doc, el(doc, "h3", { "class": "entry-title" }, titleChild), e.date);
    var typeStr = textOf(e.type).trim();
    var metaKids = [];
    if (typeStr) {
      var badge = el(doc, "span", { "class": "badge" }, typeStr);
      var dt = typeStr.toLowerCase().replace(/[^a-z-]/g, "");
      if (dt) badge.setAttribute("data-type", dt);
      metaKids.push(badge);
    }
    if (nonEmpty(e.venue)) metaKids.push(el(doc, "span", { "class": "entry-venue" }, textOf(e.venue)));
    var li = el(doc, "li", { "class": "entry entry--project" }, h.head,
      metaKids.length ? el(doc, "p", { "class": "entry-meta" }, metaKids) : null);
    return li;
  }

  function renderSection(doc, def, block) {
    var headingId = def.id + "-heading";
    var section = el(doc, "section", { id: def.id, "class": "section", "aria-labelledby": headingId });
    section.appendChild(el(doc, "h2", { id: headingId, "class": "section-title" }, nonEmpty(block.heading) ? textOf(block.heading) : def.heading));
    if (def.key === "about") {
      toList(block.summary).concat(typeof block.summary === "string" ? [] : []).length;
      var summaries = Array.isArray(block.summary) ? block.summary : [block.summary];
      summaries.filter(nonEmpty).forEach(function (p) { section.appendChild(el(doc, "p", { "class": "summary" }, richText(doc, p))); });
      var interests = toList(block.interests).filter(nonEmpty);
      if (interests.length) {
        section.appendChild(el(doc, "p", { "class": "label" }, nonEmpty(block.interestsLabel) ? textOf(block.interestsLabel) : "Research Interests"));
        var ul = el(doc, "ul", { "class": "chips", role: "list" });
        interests.forEach(function (it) { ul.appendChild(el(doc, "li", { "class": "chip chip--static" }, textOf(it))); });
        section.appendChild(ul);
      }
      return section;
    }
    if (def.key === "skills") {
      var wrap = el(doc, "div", { "class": "skill-groups" });
      toList(block.groups).filter(isObject).forEach(function (g) {
        var items = toList(g.items).filter(nonEmpty);
        if (!items.length && !nonEmpty(g.label)) return;
        var group = el(doc, "div", { "class": "skill-group" });
        if (nonEmpty(g.label)) group.appendChild(el(doc, "h3", { "class": "skill-label" }, textOf(g.label)));
        var ul = el(doc, "ul", { "class": "chips", role: "list" });
        items.forEach(function (it) { ul.appendChild(el(doc, "li", { "class": "chip chip--static" }, textOf(it))); });
        group.appendChild(ul);
        wrap.appendChild(group);
      });
      section.appendChild(wrap);
      return section;
    }
    var listClass = def.key === "projects" ? "entries entries--projects" : "entries";
    var ul2 = el(doc, "ul", { "class": listClass, role: "list" });
    toList(block.entries).filter(isObject).forEach(function (e) {
      if (def.key === "education") ul2.appendChild(renderEducationEntry(doc, e));
      else if (def.key === "projects") ul2.appendChild(renderProjectEntry(doc, e));
      else ul2.appendChild(renderExperienceEntry(doc, e));
    });
    section.appendChild(ul2);
    if (def.key === "projects") {
      var mdHref = safeHref(block.moreDetailsUrl);
      if (mdHref) {
        section.appendChild(el(doc, "p", { "class": "more-details" },
          createLink(doc, mdHref, textOf(block.moreDetailsLabel) || "More Details", "more-link")));
      }
    }
    return section;
  }

  function renderNav(doc, profile, sections) {
    var inner = el(doc, "div", { "class": "nav-inner" });
    inner.appendChild(el(doc, "a", { "class": "nav-brand", href: "#top" }, textOf(profile.name)));
    var links = {};
    var toggle = null, menu = null;
    if (sections.length) {
      toggle = el(doc, "button", { "class": "nav-toggle", type: "button", "aria-expanded": "false", "aria-controls": "nav-menu", "aria-label": "Section menu" },
        el(doc, "span", { "class": "nav-toggle-bar", "aria-hidden": "true" }),
        el(doc, "span", { "class": "nav-toggle-bar", "aria-hidden": "true" }),
        el(doc, "span", { "class": "nav-toggle-bar", "aria-hidden": "true" }));
      inner.appendChild(toggle);
      menu = el(doc, "ul", { id: "nav-menu", "class": "nav-links", role: "list" });
      sections.forEach(function (s) {
        var a = el(doc, "a", { href: "#" + s.id }, s.navLabel);
        links[s.id] = a;
        menu.appendChild(el(doc, "li", null, a));
      });
      inner.appendChild(menu);
    }
    return { node: inner, links: links, toggle: toggle, menu: menu };
  }

  function renderFooter(doc, footer) {
    if (!isObject(footer)) return null;
    var inner = el(doc, "div", { "class": "footer-inner" },
      nonEmpty(footer.copyright) ? el(doc, "p", { "class": "copyright" }, textOf(footer.copyright)) : null,
      nonEmpty(footer.lastUpdated) ? el(doc, "p", { "class": "updated" }, textOf(footer.lastUpdated)) : null);
    return inner;
  }

  function render(data, targets) {
    var doc = targets.main.ownerDocument;
    clear(targets.nav); clear(targets.header); clear(targets.footer);
    clearExceptNoscript(targets.main);

    var profile = isObject(data.profile) ? data.profile : {};
    var header = renderHeader(doc, profile);
    targets.header.appendChild(header.node);

    var sections = [];
    SECTION_DEFS.forEach(function (def) {
      var block = isObject(data[def.key]) ? data[def.key] : null;
      if (!block || !hasContent(def, block)) return;
      var element = renderSection(doc, def, block);
      targets.main.appendChild(element);
      sections.push({ id: def.id, navLabel: nonEmpty(block.navLabel) ? textOf(block.navLabel) : def.nav, element: element });
    });

    var nav = renderNav(doc, profile, sections);
    targets.nav.appendChild(nav.node);
    var footer = renderFooter(doc, data.footer);
    if (footer) targets.footer.appendChild(footer);
    return { sections: sections, navLinks: nav.links, toggle: nav.toggle, menu: nav.menu, avatar: header.avatar };
  }

  function createMenuController(doc, toggle, menu) {
    function isOpen() { return toggle.getAttribute("aria-expanded") === "true"; }
    function setOpen(open) { toggle.setAttribute("aria-expanded", open ? "true" : "false"); }
    toggle.addEventListener("click", function () { setOpen(!isOpen()); });
    menu.addEventListener("click", function (e) {
      if (e.target && e.target.closest && e.target.closest("a")) setOpen(false);
    });
    doc.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isOpen()) { setOpen(false); toggle.focus(); }
    });
    return { isOpen: isOpen, close: function () { setOpen(false); } };
  }

  function currentSectionId(rects, viewportHeight) {
    var line = viewportHeight * SPY_LINE;
    for (var i = 0; i < rects.length; i++) {
      if (rects[i].top <= line && line < rects[i].bottom) return rects[i].id;
    }
    return null;
  }
  function initScrollSpy(win, sections, navLinks) {
    if (!("IntersectionObserver" in win) || !sections.length) return null;
    function update() {
      var rects = sections.map(function (s) {
        var b = s.element.getBoundingClientRect();
        return { id: s.id, top: b.top, bottom: b.bottom };
      });
      var cur = currentSectionId(rects, win.innerHeight);
      for (var id in navLinks) {
        if (!Object.prototype.hasOwnProperty.call(navLinks, id)) continue;
        if (id === cur) navLinks[id].setAttribute("aria-current", "true");
        else navLinks[id].removeAttribute("aria-current");
      }
    }
    var io = new win.IntersectionObserver(update, { rootMargin: "-30% 0px -69% 0px", threshold: 0 });
    sections.forEach(function (s) { io.observe(s.element); });
    update();
    return { update: update };
  }

  function showLoadError(targets) {
    var doc = targets.main.ownerDocument;
    clear(targets.nav); clear(targets.header); clear(targets.footer);
    clearExceptNoscript(targets.main);
    var box = el(doc, "div", { "class": "load-error", role: "alert" },
      el(doc, "p", null, el(doc, "strong", null, "Could not read data.js."),
        " Please check the most recent edit to data.js (for example, a missing comma or quotation mark), then reload the page."),
      el(doc, "p", { lang: "ko" }, "data.js 파일을 읽을 수 없습니다. 가장 최근에 수정한 부분(쉼표, 따옴표 등)을 확인한 뒤 새로고침해 주세요."));
    targets.main.appendChild(box);
  }

  function boot() {
    var targets = {
      nav: document.getElementById("site-nav"),
      header: document.getElementById("top"),
      main: document.getElementById("main"),
      footer: document.getElementById("site-footer")
    };
    if (!targets.main) return;
    var data = window.SITE_DATA;
    if (!isObject(data)) { showLoadError(targets); return; }
    try {
      var result = render(data, targets);
      if (result.toggle && result.menu) {
        var menu = createMenuController(document, result.toggle, result.menu);
        if (window.matchMedia) {
          var mq = window.matchMedia("(min-width: 768px)");
          var onChange = function (e) { if (e.matches) menu.close(); };
          if (mq.addEventListener) mq.addEventListener("change", onChange);
          else if (mq.addListener) mq.addListener(onChange);
        }
      }
      initScrollSpy(window, result.sections, result.navLinks);
    } catch (err) {
      if (window.console && console.error) console.error("[main.js] render failed:", err);
      showLoadError(targets);
    }
  }

  boot();
})();
