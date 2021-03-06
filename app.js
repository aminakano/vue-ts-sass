const manifest = {
  name: "RandomQuiz",
  display: "standalone",
  orientation: "portrait-primary",
  background_color: "#fff",
  theme_color: "#6493aa",
  description: "Random quiz app",
  dir: "ltr",
  lang: "en-US",
  icons: [
    {
      src: "/android-icon-36x36.png",
      sizes: "36x36",
      type: "image/png",
      density: "0.75"
    },
    {
      src: "/android-icon-48x48.png",
      sizes: "48x48",
      type: "image/png",
      density: "1.0"
    },
    {
      src: "/android-icon-72x72.png",
      sizes: "72x72",
      type: "image/png",
      density: "1.5"
    },
    {
      src: "/android-icon-96x96.png",
      sizes: "96x96",
      type: "image/png",
      density: "2.0"
    },
    {
      src: "/android-icon-144x144.png",
      sizes: "144x144",
      type: "image/png",
      density: "3.0"
    },
    {
      src: "/android-icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
      density: "4.0"
    }
  ]
}

window.addEventListener("load", () => {
  const base = document.querySelector("base");
  let baseUrl = (base && base.href) || "";

  if (!baseUrl.endsWith("/")) {
    baseUrl = `${baseUrl}/`;
  }

  manifest["start_url"] = `${baseUrl}index.html`;

  manifest.icons.forEach(icon => {
    icon.src = `${baseUrl}${icon.src}`;
  });

  const stringManifest = JSON.stringify(manifest);
  const blob = new Blob([stringManifest], { type: "application/json" });
  const manifestURL = URL.createObjectURL(blob);
  document
    .querySelector("#manifestPlaceholder")
    .setAttribute("href", manifestURL);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(`${baseUrl}sw.js`).then(registration => {
      console.log(
        "ServiceWorker registration successful with scope: ",
        registration.scope
      );
    });
  }
});