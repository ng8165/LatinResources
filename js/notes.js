const id = new Map();
id.set("videos-verbs-active", "videoseries?list=PL4mThxUTsSA0BiNR0wVgM8CcghAPi-g11");
id.set("videos-verbs-imperative", "2FLimwTryE4");
id.set("videos-verbs-participles", "videoseries?list=PL4mThxUTsSA0M-xM2DLSlTLWPuCa9xR0j");
id.set("videos-verbs-subcons", "videoseries?list=PL4mThxUTsSA2z4UXGbngqWuQ-8lvOO3RE");
id.set("videos-verbs-subuses", "h.meizisswfzid");
id.set("videos-verbs-passive", "videoseries?list=PL4mThxUTsSA2szMRy1gXQUkQBb02zOVZx");
id.set("videos-verbs-infinitives", "videoseries?list=PL4mThxUTsSA36i9g0oxni57MubjbNSBAC");
id.set("videos-verbs-impersonal", "ARpiz_gL9do");
id.set("videos-verbs-deponent", "videoseries?list=PL4mThxUTsSA1sFKbGXONVvCXwgxp6yaKm");
id.set("videos-verbs-irregular", "h.ltjaw4lu1b5l");
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
id.set("videos-misc-conditionals", "96pIN5edS8c");
id.set("videos-misc-correlatives", "h.545gtc6u1o06");
id.set("videos-misc-numbers", "8sY8ykRXAZs");
id.set("videos-misc-pronunciation", "videoseries?list=PL4mThxUTsSA3_q4H6jMEgmhuz9iVQbpOT");
id.set("videos-misc-wordorder", "J_BYm26BdxA");
// id.set("test", "https://google.com");

function loadVideo(key) {
    const video = document.getElementById(key);
    video.classList.remove("notes");
    video.innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/' + id.get(key) + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function loadDoc(key) {
    "https://docs.google.com/document/d/1VD8fCp-liahu5qZOOoTB2GqudjWb2kiw2c9Rkz5dYaM/edit#heading="
    window.open("https://docs.google.com/document/d/1VD8fCp-liahu5qZOOoTB2GqudjWb2kiw2c9Rkz5dYaM/edit#heading=" + id.get(key), "_blank");
}

/*
function playVideosVerbsActive() {
    document.getElementById("videos-verbs-active").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/videoseries?list=PL4mThxUTsSA0BiNR0wVgM8CcghAPi-g11" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVideosVerbsImperative() {
    document.getElementById("videos-verbs-imperative").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/2FLimwTryE4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVideosVerbsParticiples() {
    document.getElementById("videos-verbs-participles").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/videoseries?list=PL4mThxUTsSA0M-xM2DLSlTLWPuCa9xR0j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVideosVerbsSubjunctive() {
    document.getElementById("videos-verbs-subjunctive").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/videoseries?list=PL4mThxUTsSA2z4UXGbngqWuQ-8lvOO3RE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVideosVerbsPassive() {
    document.getElementById("videos-verbs-passive").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/videoseries?list=PL4mThxUTsSA2szMRy1gXQUkQBb02zOVZx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVidoesVerbsInfinitives() {
    document.getElementById("vidoes-verbs-infinitives").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/_EDPovhgp38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVideosVerbsImpersonal() {
    document.getElementById("videos-verbs-impersonal").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/ARpiz_gL9do" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}


function playVideosNounsDeclensions() {
    document.getElementById("videos-nouns-declensions").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/videoseries?list=PL4mThxUTsSA0SoPR5ixhlm3yxPEIs6SfQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVideosNounsCases() {
    document.getElementById("videos-nouns-cases").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/2fhP_fk2wNQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVideosNounsNominative() {
    document.getElementById("videos-nouns-nominative").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/-JpCdQ3mp8M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVideosNounsGenitive() {
    document.getElementById("videos-nouns-genitive").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/videoseries?list=PL4mThxUTsSA0XpuruElqV_rPcoclx-p5L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVideosNounsDative() {
    document.getElementById("videos-nouns-dative").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/videoseries?list=PL4mThxUTsSA0G48ptTyVcRFmffWT24Wgx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVideosNounsAccusative() {
    document.getElementById("videos-nouns-accusative").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/videoseries?list=PL4mThxUTsSA1Z081DVxdy3BZEa1p-RTD5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVideosNounsAblative() {
    document.getElementById("videos-nouns-ablative").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/videoseries?list=PL4mThxUTsSA0Le4xTNK0TjV0rQlDhJ3ta" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVideosNounsVocative() {
    document.getElementById("videos-nouns-vocative").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/EtN_62_pKYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVideosNounsLocative() {
    document.getElementById("videos-nouns-locative").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/VwLS-fh3pVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}


function playVideosAdjectivesBasics() {
    document.getElementById("videos-adjectives-basics").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/videoseries?list=PL4mThxUTsSA01-GWrooNs-QDKT2ghS6LD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVideosAdjectivesComparisons() {
    document.getElementById("videos-adjectives-comparisons").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/videoseries?list=PL4mThxUTsSA0RivfVRwjrHEfaVRh8DSWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}


function playVideosAdverbsBasics() {
    document.getElementById("videos-adverbs-basics").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/HjdPyAvo7Ec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVideosAdverbsComparisons() {
    document.getElementById("videos-adverbs-comparisons").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube.com/embed/lKk8lpGh198?&start=251" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVideosPronounsRelative() {
    document.getElementById("videos-pronouns-relative").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/L0_k1J-qg0g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVideosPronounsPersonal() {
    document.getElementById("videos-pronouns-personal").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/AU3X-jdXwA4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVideosPronounsDemonstrative() {
    document.getElementById("videos-pronouns-demonstrative").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/videoseries?list=PL4mThxUTsSA0iHRZksm49yvU5dlSxaFMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVideosMiscIndirectStatement() {
    document.getElementById("videos-misc-indirectstatement").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/q67_3SwXHWQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVideosMiscNumbers() {
    document.getElementById("videos-misc-numbers").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/8sY8ykRXAZs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVideosMiscPronunciation() {
    document.getElementById("videos-misc-pronunciation").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/videoseries?list=PL4mThxUTsSA3_q4H6jMEgmhuz9iVQbpOT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function playVideosMiscWordOrder() {
    document.getElementById("videos-misc-wordorder").innerHTML = '<iframe width=50% style="aspect-ratio: 16/9; padding: 2px;" src="https://www.youtube-nocookie.com/embed/J_BYm26BdxA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}
*/