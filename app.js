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

    // Update JSON-LD NailSalon node if websiteUrl / social links are configured
    var ldEl = document.getElementById("salon-jsonld");
    if (ldEl) {
      try {
        var parsed = JSON.parse(ldEl.textContent);
        var target = parsed;
        if (Array.isArray(parsed["@graph"])) {
          target = parsed["@graph"].find(function (node) {
            return node && node["@type"] === "NailSalon";
          }) || parsed["@graph"][0];
        }
        if (target) {
          if (cfg.phoneHref) target.telephone = "+66629832615";
          if (cfg.openingHoursSchema) target.openingHours = cfg.openingHoursSchema;
          if (cfg.googleMapsUrl) target.hasMap = cfg.googleMapsUrl;
          var sameAs = [cfg.facebookUrl, cfg.instagramUrl, cfg.lemon8Url, cfg.googleMapsUrl].filter(function (u) {
            return u && u.indexOf("{") === -1;
          });
          if (sameAs.length) target.sameAs = sameAs;
        }
        ldEl.textContent = JSON.stringify(parsed, null, 2);
      } catch (err) {
        // Keep static JSON-LD intact if parsing fails
      }
    }
  }

  function detectInitialLang() {
    var fixed = document.documentElement.getAttribute("data-fixed-lang");
    if (fixed === "th" || fixed === "en") return fixed;
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
    document.querySelectorAll(".lang-btn[data-set-lang]").forEach(function (btn) {
      var active = btn.getAttribute("data-set-lang") === safeLang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    if (!document.documentElement.hasAttribute("data-fixed-lang")) {
      if (safeLang === "th") {
        document.title = "POP ROOM Studio — ร้านทำเล็บเจล สปามือเท้า สันทราย เชียงใหม่ | ใกล้เซ็นทรัลเฟสติวัล รวมโชค ม.พายัพ";
      } else {
        document.title = "POP ROOM Studio — ร้านทำเล็บเจล สปา สันทราย เชียงใหม่ | Nail Salon Near Central Festival & Payap";
      }
    }

    try {
      localStorage.setItem("poproom_lang", safeLang);
    } catch (e) {}
  }

  function initLangToggle() {
    if (document.documentElement.hasAttribute("data-fixed-lang")) {
      return;
    }
    setLang(detectInitialLang());
    document.querySelectorAll("button.lang-btn[data-set-lang]").forEach(function (btn) {
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
