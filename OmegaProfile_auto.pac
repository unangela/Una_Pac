var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto", {
    "+auto": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)lanhuapp\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)yqxiu\.cn$/.test(host)) return "+Charles";
        if (/(?:^|\.)huaban\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)google\.com\.hk$/.test(host)) return "+vpn";
        if (/(?:^|\.)eqxiu\.com$/.test(host)) return "+Charles";
        if (/(?:^|\.)fontawesome\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)faststone\.org$/.test(host)) return "+vpn";
        if (/(?:^|\.)vimeocdn\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)vimeo\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)atl-paas\.net$/.test(host)) return "+vpn";
        if (/(?:^|\.)atlassian\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)lithium\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)bizible\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)optimizely\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)d36jcksde1wxzq\.cloudfront\.net$/.test(host)) return "+vpn";
        if (/(?:^|\.)docker\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)visitkorea\.or\.kr$/.test(host)) return "+vpn";
        if (/(?:^|\.)keepvid\.cc$/.test(host)) return "+vpn";
        if (/(?:^|\.)google-analytics\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)dropbox\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)media\.io$/.test(host)) return "+vpn";
        if (/(?:^|\.)microsoft\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)onenote\.net$/.test(host)) return "+vpn";
        if (/(?:^|\.)live\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)onenote\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)office\.net$/.test(host)) return "+vpn";
        if (/(?:^|\.)kanahei\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)gstatic\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)hanchao\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)epassmobile\.co\.kr$/.test(host)) return "+vpn";
        if (/(?:^|\.)kobus\.co\.kr$/.test(host)) return "+vpn";
        if (/(?:^|\.)letskorail\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)srail\.co\.kr$/.test(host)) return "+vpn";
        if (/(?:^|\.)tripadvisor\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)kakao\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)badboy\.com\.au$/.test(host)) return "DIRECT";
        if (/(?:^|\.)icloud\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)githubassets\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)github\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)avatars3\.githubusercontent\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)avatars2\.githubusercontent\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)avatars0\.githubusercontent\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)storage\.googleapis\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)www\.googleapis\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)re-ment\.co\.jp$/.test(host)) return "+vpn";
        if (/(?:^|\.)ads-twitter\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)twitter\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)facebook\.net$/.test(host)) return "+vpn";
        if (/(?:^|\.)jwt\.io$/.test(host)) return "+vpn";
        if (/(?:^|\.)auth0\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)unpkg\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)d1h3p5fzmizjvp\.cloudfront\.net$/.test(host)) return "+vpn";
        if (/(?:^|\.)ytimg\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)googlevideo\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)lanfanshu\.cn$/.test(host)) return "+vpn";
        if (/(?:^|\.)gugeapps\.net$/.test(host)) return "+vpn";
        if (/(?:^|\.)jetbrains\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)isparta\.github\.io$/.test(host)) return "+vpn";
        if (/(?:^|\.)line\.me$/.test(host)) return "+vpn";
        if (/(?:^|\.)notifications\.googleapis\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)apple\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)line-apps\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)line-scdn\.net$/.test(host)) return "+vpn";
        if (/(?:^|\.)maps\.googleapis\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)ajax\.googleapis\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)ggpht\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)telerik\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)googleusercontent\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)browserstack\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)google\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)googleusercontent\.co$/.test(host)) return "+vpn";
        if (/^ssl\.gstatic\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)wallpaperscraft\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)android\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)instgram\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)facebook\.com$/.test(host)) return "+vpn";
        return "DIRECT";
    },
    "+Charles": function(url, host, scheme) {
        "use strict";
        return "PROXY 127.0.0.1:8866";
    },
    "+vpn": function(url, host, scheme) {
        "use strict";
        return "PROXY 127.0.0.1:1087";
    }
});