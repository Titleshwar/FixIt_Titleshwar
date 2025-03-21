window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }

// ✅ Default consent mode (denied until user accepts) for EEA only
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'denied',
  'personalization_storage': 'denied',
  'functionality_storage': 'granted',
  'security_storage': 'granted',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'regions': ['EEA'] // ✅ Consent applies only in the EEA
});

// ✅ Function to update consent based on user action
function updateConsent(consentGiven) {
  console.log(`Updating consent: ${consentGiven ? "granted" : "denied"}`);

  gtag('consent', 'update', {
    'ad_storage': consentGiven ? 'granted' : 'denied',
    'analytics_storage': consentGiven ? 'granted' : 'denied',
    'ad_user_data': consentGiven ? 'granted' : 'denied',
    'ad_personalization': consentGiven ? 'granted' : 'denied'
  });

  if (consentGiven) {
    // ✅ Load Google Analytics if consent is granted
    gtag('js', new Date());
    gtag('config', 'G-4PW5BRLTHD', { 'send_page_view': false }); // Replace with your GA4 ID
  }
}

// ✅ Listen for consent actions
document.addEventListener("DOMContentLoaded", function () {
  let userConsent = localStorage.getItem("user_consent");

  if (userConsent === "granted") {
    updateConsent(true);
  }

  document.getElementById("accept-cookies")?.addEventListener("click", function () {
    localStorage.setItem("user_consent", "granted");
    updateConsent(true);
  });

  document.getElementById("reject-cookies")?.addEventListener("click", function () {
    localStorage.setItem("user_consent", "denied");
    updateConsent(false);
  });
});

// ✅ Load GTM only after setting consent mode
(function(w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l !== 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'G-4PW5BRLTHD');
