var userFeed = new Instafeed({
  get: "user",
  resolution: "low_resolution",
  accessToken:
    "IGQWROcWRORWVIbGZAPdkdwc002S0hQNmN0dlJ2QktYbzNMNkhRcGhuTVZArNzVnQlo3N3d0WTBTeTBZAN2VoZAjlGS1hnUHhUalNhVFF3VDJQaE5Bc1V5NnlKTlFOWkVNTDViYlpzMXJ3RnlwZAWtnaVpod1ZAqd0NOd1EZD",
  limit: 9,
});
window.addEventListener("DOMContentLoaded", () => {
  userFeed.run();
});
