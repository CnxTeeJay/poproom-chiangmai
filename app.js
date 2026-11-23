(function () {
  "use strict";

  var cfg = window.POPROOM_CONFIG || {};

  function getNested(obj, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj);
  }

  function applyConfig() {
    document.querySelectorAll("[data-config-text]").forEach(function (el) {
      var val = getNested(cfg, el.getAttribute("data-config-text"));
      if (val !== undefined && val !== "") {
        el.textContent = val;
      }
    });

    document.querySelectorAll("[data-config-href]").forEach(function (el) {
      var key = el.getAttribute("data-config-href");
      var val = getNested(cfg, key);
      if (val !== undefined && val !== "") {
        el.setAttribute("href", val);
      }
    });

    if (Array.isArray(cfg.gallery)) {
      var figures = document.querySelectorAll("[data-gallery-index]");
      figures.forEach(function (fig) {
        var idx = parseInt(fig.getAttribute("data-gallery-index"), 10);
        var item = cfg.gallery[idx];
        if (!item) return;
        var img = fig.querySelector("img");
        var capEn = fig.querySelector('[data-lang="en"]');
        var capTh = fig.querySelector('[data-lang="th"]');
        if (img && item.src) {
          img.setAttribute("src", item.src);
          img.setAttribute("alt", item.altEn || "POP ROOM Chiang Mai");
        }
        if (capEn && item.captionEn) capEn.textContent = item.captionEn;
        if (capTh && item.captionTh) capTh.textContent = item.captionTh;
      });
    }

    // Update JSON-LD dynamically if websiteUrl is configured after deploy
    var ldEl = document.getElementById("salon-jsonld");
    if (ldEl) {
      try {
        var ld = JSON.parse(ldEl.textContent);
        if (cfg.phoneHref) ld.telephone = "+66629832615";
        if (cfg.websiteUrl && cfg.websiteUrl.indexOf("{") === -1) ld.url = cfg.websiteUrl;
        if (cfg.openingHoursSchema) ld.openingHours = cfg.openingHoursSchema;
        if (cfg.googleMapsUrl) ld.hasMap = cfg.googleMapsUrl;
        var sameAs = [cfg.facebookUrl, cfg.instagramUrl].filter(function (u) {
          return u && u.indexOf("{") === -1;
        });
        if (sameAs.length) ld.sameAs = sameAs;
        ldEl.textContent = JSON.stringify(ld, null, 2);
      } catch (err) {
        // Keep static JSON-LD intact if parsing fails
      }
    }
  }

  function detectInitialLang() {
    var params = new URLSearchParams(window.location.search);
    var urlLang = params.get("lang");
    if (urlLang === "th" || urlLang === "en") return urlLang;
    try {
      var saved = localStorage.getItem("poproom_lang");
      if (saved === "th" || saved === "en") return saved;
    } catch (e) {}
    var navLang = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    return navLang.indexOf("th") === 0 ? "th" : "en";
  }

  function setLang(lang) {
    var safeLang = lang === "th" ? "th" : "en";
    document.documentElement.setAttribute("lang", safeLang);
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-set-lang") === safeLang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
    try {
      localStorage.setItem("poproom_lang", safeLang);
    } catch (e) {}
  }

  function initLangToggle() {
    setLang(detectInitialLang());
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-set-lang"));
      });
    });
  }

  function initMenuTabs() {
    var tabs = document.querySelectorAll(".menu-tab");
    var cats = document.querySelectorAll(".menu-category");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var target = tab.getAttribute("data-category");
        tabs.forEach(function (t) {
          var isActive = t === tab;
          t.classList.toggle("active", isActive);
          t.setAttribute("aria-selected", isActive ? "true" : "false");
        });
        cats.forEach(function (cat) {
          var match = target === "all" || cat.getAttribute("data-category") === target;
          cat.classList.toggle("is-hidden", !match);
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyConfig();
    initLangToggle();
    initMenuTabs();
  });
})();
