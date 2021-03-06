const id = new Map();
id.set("videos-verbs-active", "videoseries?list=PL4mThxUTsSA0BiNR0wVgM8CcghAPi-g11");
id.set("videos-verbs-imperative", "2FLimwTryE4");
id.set("videos-verbs-participles", "videoseries?list=PL4mThxUTsSA0M-xM2DLSlTLWPuCa9xR0j");
id.set("videos-verbs-subcons", "videoseries?list=PL4mThxUTsSA2z4UXGbngqWuQ-8lvOO3RE");
id.set("videos-verbs-subuses", "videoseries?list=PL4mThxUTsSA1KG0b1sywgXwQ9GF0ikwrL");
id.set("videos-verbs-passive", "videoseries?list=PL4mThxUTsSA2szMRy1gXQUkQBb02zOVZx");
id.set("videos-verbs-infinitives", "videoseries?list=PL4mThxUTsSA36i9g0oxni57MubjbNSBAC");
id.set("videos-verbs-impersonal", "ARpiz_gL9do");
id.set("videos-verbs-deponent", "videoseries?list=PL4mThxUTsSA1sFKbGXONVvCXwgxp6yaKm");
id.set("videos-verbs-irregular", "videoseries?list=PL4mThxUTsSA3y2lzZx02_9rb5JgMLSB_r");
id.set("videos-nouns-declensions", "videoseries?list=PL4mThxUTsSA0SoPR5ixhlm3yxPEIs6SfQ");
id.set("videos-nouns-nominative", "-JpCdQ3mp8M");
id.set("videos-nouns-genitive", "videoseries?list=PL4mThxUTsSA0XpuruElqV_rPcoclx-p5L");
id.set("videos-nouns-dative", "videoseries?list=PL4mThxUTsSA0G48ptTyVcRFmffWT24Wgx");
id.set("videos-nouns-accusative", "videoseries?list=PL4mThxUTsSA1Z081DVxdy3BZEa1p-RTD5");
id.set("videos-nouns-ablative", "videoseries?list=PL4mThxUTsSA0Le4xTNK0TjV0rQlDhJ3ta");
id.set("videos-nouns-vocative", "EtN_62_pKYs");
id.set("videos-nouns-locative", "VwLS-fh3pVg");
id.set("videos-adjectives-basics", "videoseries?list=PL4mThxUTsSA01-GWrooNs-QDKT2ghS6LD");
id.set("videos-adjectives-comparisons", "videoseries?list=PL4mThxUTsSA0RivfVRwjrHEfaVRh8DSWs");
id.set("videos-adverbs-basics", "HjdPyAvo7Ec");
id.set("videos-adverbs-comparisons", "lKk8lpGh198?&start=251");
id.set("videos-pronouns-relative", "L0_k1J-qg0g");
id.set("videos-pronouns-personal", "AU3X-jdXwA4");
id.set("videos-pronouns-demonstrative", "videoseries?list=PL4mThxUTsSA0iHRZksm49yvU5dlSxaFMM");
id.set("videos-misc-gerunds", "videoseries?list=PL4mThxUTsSA0w5zhEbRgJrrka8H3UzvHI");
id.set("videos-misc-conditionals", "96pIN5edS8c");
id.set("videos-misc-correlatives", "https://quizlet.com/_amoe6b");
id.set("videos-misc-numbers", "8sY8ykRXAZs");
id.set("videos-misc-pronunciation", "videoseries?list=PL4mThxUTsSA3_q4H6jMEgmhuz9iVQbpOT");
id.set("videos-misc-wordorder", "J_BYm26BdxA");

function loadVideo(key) {
    const video = document.getElementById(key);
    const iframe = document.createElement("iframe");
    iframe.style.width = "50%";
    iframe.style.aspectRatio = "16/9";
    iframe.style.padding = "2px";
    iframe.style.border = "0";
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + id.get(key);
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    video.replaceWith(iframe);
}

function loadDoc(key) {
    window.open("https://docs.google.com/document/d/1VD8fCp-liahu5qZOOoTB2GqudjWb2kiw2c9Rkz5dYaM/edit#heading=" + id.get(key), "_blank");
}

function loadSite(key) {
    window.open(id.get(key), "_blank");
}