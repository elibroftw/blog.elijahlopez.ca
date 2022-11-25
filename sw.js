// sw = service worker
var cacheName = 'v1';

var isOnline = true;

window.addEventListener('online', () => { isOnline = true });
window.addEventListener('offline', () => { isOnline = false });
navigator.connection.onchange = e => {
  isOnline = navigator.onLine;
};

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(cacheName).then(cache => {
    return cache.addAll([
      '/',
      '/posts/',
      '/tags/',
      'https://blog.elijahlopez.ca/posts/nytimes-subscription-review/',
      'https://blog.elijahlopez.ca/posts/digitalocean-is-not-a-buy/',
      'https://blog.elijahlopez.ca/posts/linux-touchpad-not-working/',
      'https://blog.elijahlopez.ca/posts/people-in-canada-responsible-for-the-housing-crisis/',
      'https://blog.elijahlopez.ca/posts/how-to-withdraw-usd-from-deel-to-wise/',
      'https://blog.elijahlopez.ca/posts/how-to-get-logs-in-swift/',
      'https://blog.elijahlopez.ca/posts/the-three-pillars-of-integrity/',
      'https://blog.elijahlopez.ca/posts/cybersecurity-stocks-etf-proposal/',
      'https://blog.elijahlopez.ca/posts/banking-in-canada/',
      'https://blog.elijahlopez.ca/posts/awesome-monero/',
      'https://blog.elijahlopez.ca/posts/rent-control-reduces-housing-starts/',
      'https://blog.elijahlopez.ca/posts/gigs-are-not-full-time-jobs/',
      'https://blog.elijahlopez.ca/posts/the-history-of-the-lopez-family/',
      'https://blog.elijahlopez.ca/posts/interpretation-of-multiple-choice-tests/',
      'https://blog.elijahlopez.ca/posts/this-world-is-a-joke/',
      'https://blog.elijahlopez.ca/posts/literary-analysis/flash-boys-a-wall-street-revolt-michael-lewis/',
      'https://blog.elijahlopez.ca/posts/literary-analysis/thinking-fast-and-slow-daniel-kahneman/',
      'https://blog.elijahlopez.ca/posts/talks/improving-payments-with-ai-ajit-desai/',
      'https://blog.elijahlopez.ca/posts/split-the-tank-technical-stack/',
      'https://blog.elijahlopez.ca/posts/university/bu-449-fixed-income-analysis/',
      'https://blog.elijahlopez.ca/posts/university/bu-493-behavioural-finance/',
      'https://blog.elijahlopez.ca/posts/what-cant-an-ipad-do-that-a-macbook-can-do/',
      'https://blog.elijahlopez.ca/posts/university/bu-430-financial-markets-and-securities-trading/',
      'https://blog.elijahlopez.ca/posts/university/cs-456-computer-networks/',
      'https://blog.elijahlopez.ca/posts/university/bu-466-taxation-2/',
      'https://blog.elijahlopez.ca/posts/why-did-the-great-depression-occur/',
      'https://blog.elijahlopez.ca/posts/climate-change-as-a-service/',
      'https://blog.elijahlopez.ca/posts/the-ppc-has-a-terrible-housing-platform/',
      'https://blog.elijahlopez.ca/posts/how-to-learn-react-2024/',
      'https://blog.elijahlopez.ca/posts/lithium-americas-valuation/',
      'https://blog.elijahlopez.ca/posts/depreciation-methods/',
      'https://blog.elijahlopez.ca/posts/economic-analysis-of-crypto-currency/',
      'https://blog.elijahlopez.ca/posts/docker-guide/',
      'https://blog.elijahlopez.ca/posts/excel-filter-table-excluding-headers/',
      'https://blog.elijahlopez.ca/posts/which-quantization-to-choose-local-llm/',
      'https://blog.elijahlopez.ca/posts/university/cs-489-software-and-systems-security-review/',
      'https://blog.elijahlopez.ca/posts/csharp-uri-encode-string-and-queries/',
      'https://blog.elijahlopez.ca/posts/windows-vs-macbooks/',
      'https://blog.elijahlopez.ca/posts/rest-apis-do-not-return-404/',
      'https://blog.elijahlopez.ca/posts/critique-of-wlu/',
      'https://blog.elijahlopez.ca/posts/israel-is-against-peace/',
      'https://blog.elijahlopez.ca/posts/aspnet-add-versioning/',
      'https://blog.elijahlopez.ca/posts/retail-investors-are-stupid/',
      'https://blog.elijahlopez.ca/posts/systems-engineering/',
      'https://blog.elijahlopez.ca/posts/canada-parliamentary-reform/',
      'https://blog.elijahlopez.ca/posts/there-is-no-labour-shortage-in-canada/',
      'https://blog.elijahlopez.ca/posts/novel-investment-portfolio-strategies/',
      'https://blog.elijahlopez.ca/posts/linux-desktop-detach-process-from-terminal/',
      'https://blog.elijahlopez.ca/posts/linux-background-process/',
      'https://blog.elijahlopez.ca/posts/canada-is-worse-becuase-of-justin-trudeau/',
      'https://blog.elijahlopez.ca/posts/capm-is-not-a-good-cost-of-equity/',
      'https://blog.elijahlopez.ca/posts/how-often-should-you-update-dependencies/',
      'https://blog.elijahlopez.ca/posts/how-to-install-ruby-on-macos/',
      'https://blog.elijahlopez.ca/posts/python-glob-multiple-filetypes/',
      'https://blog.elijahlopez.ca/posts/chegg-is-garbage-part-1/',
      'https://blog.elijahlopez.ca/posts/university/ec-250-macroeconomic-analysis/',
      'https://blog.elijahlopez.ca/posts/university/bu-423-options-futures-swaps/',
      'https://blog.elijahlopez.ca/posts/university/cs-489-security/',
      'https://blog.elijahlopez.ca/posts/university/bu-397-intermediate-financial-accounting-ii/',
      'https://blog.elijahlopez.ca/posts/university/cs-489-software-delivery/',
      'https://blog.elijahlopez.ca/posts/best-cell-phone-carriers-canada/',
      'https://blog.elijahlopez.ca/posts/how-to-transfer-images-from-iphone-to-android-uncompressed/',
      'https://blog.elijahlopez.ca/posts/stop-using-discord-for-support-forums/',
      'https://blog.elijahlopez.ca/posts/literary-analysis/bible/',
      'https://blog.elijahlopez.ca/posts/ssh-into-virtualbox/',
      'https://blog.elijahlopez.ca/posts/zero-sugar-carbonated-drink-reviews/',
      'https://blog.elijahlopez.ca/posts/a-humble-letter-to-jetbrains/',
      'https://blog.elijahlopez.ca/posts/gitignore-not-working/',
      'https://blog.elijahlopez.ca/posts/energy-drink-reviews/',
      'https://blog.elijahlopez.ca/posts/data-sources-to-watch-out-for/',
      'https://blog.elijahlopez.ca/posts/finance-knowledge-database/',
      'https://blog.elijahlopez.ca/posts/how-to-install-macos-on-virtualbox/',
      'https://blog.elijahlopez.ca/posts/csharp-mongodb-add-item-to-dictionary/',
      'https://blog.elijahlopez.ca/posts/react-native-qr-code-scanner/',
      'https://blog.elijahlopez.ca/posts/best-qr-code-scanner-android/',
      'https://blog.elijahlopez.ca/posts/amazon-audible-is-unethical/',
      'https://blog.elijahlopez.ca/posts/aspnet-global-json-options/',
      'https://blog.elijahlopez.ca/posts/tips-for-distributing-python-apps/',
      'https://blog.elijahlopez.ca/posts/aspnet-add-html-to-web-api/',
      'https://blog.elijahlopez.ca/posts/sim-swapping-why-sms-2fa-is-unsecure/',
      'https://blog.elijahlopez.ca/posts/aspnet-http-error-responses/',
      'https://blog.elijahlopez.ca/posts/windows-programming-start-app-on-login/',
      'https://blog.elijahlopez.ca/posts/linux-tips/',
      'https://blog.elijahlopez.ca/posts/stop-paying-for-1password/',
      'https://blog.elijahlopez.ca/posts/aspnet-serve-embedded-resource/',
      'https://blog.elijahlopez.ca/posts/aspnet-swagger-dark-theme/',
      'https://blog.elijahlopez.ca/posts/mark-zuckerburg-and-the-metaverse-are-moral-failures/',
      'https://blog.elijahlopez.ca/posts/aspnet-name-routes-after-methods/',
      'https://blog.elijahlopez.ca/posts/react-native-geocoder-osm/',
      'https://blog.elijahlopez.ca/posts/yt-dlp-audio-download/',
      'https://blog.elijahlopez.ca/posts/corruption-in-canada/',
      'https://blog.elijahlopez.ca/posts/internet-porn-brain-degeneration/',
      'https://blog.elijahlopez.ca/posts/university/bu-491-business-policy-2-international-strategy/',
      'https://blog.elijahlopez.ca/posts/university/bu-473-investment-mangement/',
      'https://blog.elijahlopez.ca/posts/university/bu-357-taxation-1/',
      'https://blog.elijahlopez.ca/posts/university/cs-490-information-systems-management/',
      'https://blog.elijahlopez.ca/posts/university/cs-492-social-implications-of-computing/',
      'https://blog.elijahlopez.ca/posts/mobile-development-is-painful/',
      'https://blog.elijahlopez.ca/posts/aspnet-jwt-authorization/',
      'https://blog.elijahlopez.ca/posts/steven-crowder-emotional-abuse/',
      'https://blog.elijahlopez.ca/posts/windows-add-to-path-environment-variable/',
      'https://blog.elijahlopez.ca/posts/ios-versus-android/',
      'https://blog.elijahlopez.ca/posts/how-to-install-pixelexperience-rom/',
      'https://blog.elijahlopez.ca/posts/representative-proportional-voting/',
      'https://blog.elijahlopez.ca/posts/usdc-depegging-panic-selling/',
      'https://blog.elijahlopez.ca/posts/disable-real-time-protection-permanently/',
      'https://blog.elijahlopez.ca/posts/uno-platform-logging/',
      'https://blog.elijahlopez.ca/posts/python-xlsx-to-csv/',
      'https://blog.elijahlopez.ca/posts/python-get-ipv4/',
      'https://blog.elijahlopez.ca/posts/memories-of-saudi-arabia/',
      'https://blog.elijahlopez.ca/posts/aspnet-hyphen-separated-routes/',
      'https://blog.elijahlopez.ca/posts/aspnet-serialize-enum-as-string/',
      'https://blog.elijahlopez.ca/posts/aspnet-optional-json-fields/',
      'https://blog.elijahlopez.ca/posts/vscode-aspnet-rest-api-launch-configuration/',
      'https://blog.elijahlopez.ca/posts/starting-systemd-services-without-root/',
      'https://blog.elijahlopez.ca/posts/university/cs-348-intro-to-database-management/',
      'https://blog.elijahlopez.ca/posts/university/cs-350-operating-systems/',
      'https://blog.elijahlopez.ca/posts/tauri-custom-titlebar/',
      'https://blog.elijahlopez.ca/posts/what-is-greed/',
      'https://blog.elijahlopez.ca/posts/ethics-of-taxes/',
      'https://blog.elijahlopez.ca/posts/canada-entertainment-zone/',
      'https://blog.elijahlopez.ca/posts/rust-json-manipulation/',
      'https://blog.elijahlopez.ca/posts/rust-how-to-make-a-request/',
      'https://blog.elijahlopez.ca/posts/rust-getting-started/',
      'https://blog.elijahlopez.ca/posts/monero-devs-windows/',
      'https://blog.elijahlopez.ca/posts/housing-market-rent-seeking-unethical/',
      'https://blog.elijahlopez.ca/posts/unable-to-get-local-issuer-certificate/',
      'https://blog.elijahlopez.ca/posts/top-vscode-extensions/',
      'https://blog.elijahlopez.ca/posts/how-a-universal-basic-income-could-improve-innovation-and-raise-wages/',
      'https://blog.elijahlopez.ca/posts/reactjs-tips/',
      'https://blog.elijahlopez.ca/posts/pierre-poilievre-policies/',
      'https://blog.elijahlopez.ca/posts/javascript-snippets/',
      'https://blog.elijahlopez.ca/posts/good-food/',
      'https://blog.elijahlopez.ca/posts/american-school-shootings-analysis/',
      'https://blog.elijahlopez.ca/posts/oneplus-6t/',
      'https://blog.elijahlopez.ca/posts/linux-usb-formatting-issues/',
      'https://blog.elijahlopez.ca/posts/a-new-hope/',
      'https://blog.elijahlopez.ca/posts/cpu-benchmarks/',
      'https://blog.elijahlopez.ca/posts/razer-blade-stealth-late-2016/',
      'https://blog.elijahlopez.ca/posts/understanding-usa-amendments/',
      'https://blog.elijahlopez.ca/posts/abortion-simplified/',
      'https://blog.elijahlopez.ca/posts/starbucks/',
      'https://blog.elijahlopez.ca/posts/incompetence/',
      'https://blog.elijahlopez.ca/posts/anti-communism/',
      'https://blog.elijahlopez.ca/posts/monero-payment-processing/',
      'https://blog.elijahlopez.ca/posts/university/bu-375-operations/',
      'https://blog.elijahlopez.ca/posts/canada/',
      'https://blog.elijahlopez.ca/posts/how-to-invest-in-the-stock-market/',
      'https://blog.elijahlopez.ca/posts/life/',
      'https://blog.elijahlopez.ca/posts/macos-sucks/',
      'https://blog.elijahlopez.ca/posts/male-grooming-tips/',
      'https://blog.elijahlopez.ca/posts/xmr-btc-atomic-swap-asb/',
      'https://blog.elijahlopez.ca/hugo-guide/',
      'https://blog.elijahlopez.ca/posts/javascript-imports-explained/',
      'https://blog.elijahlopez.ca/posts/open-debate-platform/',
      'https://blog.elijahlopez.ca/posts/converging-opinions/',
      'https://blog.elijahlopez.ca/posts/monero-vs-privacy-coins/',
      'https://blog.elijahlopez.ca/posts/linux-desktop-sucks/',
      'https://blog.elijahlopez.ca/posts/how-to-buy-monero-in-canada/',
      'https://blog.elijahlopez.ca/posts/mobile-responsive-design/',
      'https://blog.elijahlopez.ca/posts/how-to-create-a-monero-stagenet-wallet/',
      'https://blog.elijahlopez.ca/posts/list-of-unethical-people/',
      'https://blog.elijahlopez.ca/posts/bash-helpers/',
      'https://blog.elijahlopez.ca/posts/jenkins-snippets/',
      'https://blog.elijahlopez.ca/posts/bash-quickstart/',
      'https://blog.elijahlopez.ca/posts/how-to-generate-csr/',
      'https://blog.elijahlopez.ca/posts/filling-out-w-8ben-form-canada/',
      'https://blog.elijahlopez.ca/posts/bye-medium-hello-hugo/',
      'https://blog.elijahlopez.ca/posts/unlisted-test/',
      'https://blog.elijahlopez.ca/posts/64bit-is-better-than-32bit/',
      'https://blog.elijahlopez.ca/posts/vcpkg-cmake-tutorial/',
      'https://blog.elijahlopez.ca/posts/sum-of-geometric-seq/',
      'https://blog.elijahlopez.ca/posts/hugo-tutorial/',
      'https://blog.elijahlopez.ca/posts/university/uw-wlu-double-degree/',
      'https://blog.elijahlopez.ca/posts/first/',
      'https://blog.elijahlopez.ca/posts/why-monero-is-the-best-crypto-currency/',
      'https://blog.elijahlopez.ca/posts/move-efi-system-partition/',
      'https://blog.elijahlopez.ca/posts/register-default-file-handler-python/',
      'https://blog.elijahlopez.ca/posts/parallel-concurrent-requests-in-python/',
      'https://blog.elijahlopez.ca/posts/automate-firefox-addon-publishing/',
      'https://blog.elijahlopez.ca/posts/vscode-remote-ssh/',
      'https://blog.elijahlopez.ca/posts/convert-word-files-to-pdf/',
      'https://blog.elijahlopez.ca/posts/windows-10-favorite-cursors/',
      'https://blog.elijahlopez.ca/posts/java-javers-ignore-value/',
      'https://blog.elijahlopez.ca/posts/automate-unity-building/',
      'https://blog.elijahlopez.ca/posts/create-menus-in-pygame/',
      'https://blog.elijahlopez.ca/posts/ec-260-intermediate-microeconomic-analysis/',
      'https://blog.elijahlopez.ca/posts/intermediate-python/',
      'https://blog.elijahlopez.ca/posts/python3-simplehttpserver/',
      'https://blog.elijahlopez.ca/posts/python-windows-task-scheduler/',
      'https://blog.elijahlopez.ca/about/',
      'https://blog.elijahlopez.ca/about/subpage/',
    ]);
  }));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(cacheNames => {
    return Promise.all(cacheNames.map(currentCacheName => {
      if (cacheName.indexOf(currentCacheName) === -1) {
        return caches.delete(currentCacheName)
      };
    }));
  }));
});

async function cacheFirstOverride(request) {
  var hostname = (new URL(request.url)).hostname;
  if (hostname == 'latex.codecogs.com') {
    const responseFromCache = await caches.match(request);
    if (responseFromCache) return responseFromCache;
  }
}

async function networkFirst(request) {
  try {
    const cacheFirstMaybe = cacheFirstOverride(request);
    if (cacheFirstMaybe !== undefined) return cacheFirstMaybe;

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || Response.error();
  }
}

async function cacheFirstWithRefresh(request) {
  const cacheFirstMaybe = cacheFirstOverride(request);
  if (cacheFirstMaybe !== undefined) return cacheFirstMaybe;

  const fetchResponsePromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
      // ensure we are using the latest version
      if (document.visibilityState === 'visible') {
        window.location.reload();
      }
    }
    return networkResponse;
  });
  return (await caches.match(request)) || (await fetchResponsePromise);
}

self.addEventListener('fetch', function (event) {
  const requestUrl = new URL(event.request.url);
  const isLocal = requestUrl.host == 'localhost:1313'
  if (isOnline || isLocal || requestUrl.pathname == '/') {
    event.respondWith(networkFirst(event.request));
  } else {
    event.respondWith(cacheFirstWithRefresh(event.request));
  }
});
