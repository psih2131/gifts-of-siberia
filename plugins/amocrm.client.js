export default defineNuxtPlugin(() => {
    // if (process.client) {

    //     try {
    //         (function (a, b, o, c, r, mName) {
    //             a[mName] = {
    //                 id: "404540",
    //                 hash: "7141db85f75613b11909d0e1115e5f20646fbb566da71f8d95c564eae34b4c7b",
    //                 locale: "ru",
    //                 inline: false, // 👉 меняй на true, если нужна раскрытая форма
    //                 setMeta: function (p) {
    //                     this.params = (this.params || []).concat([p]);
    //                 },
    //             };
    //             a[o] =
    //                 a[o] ||
    //                 function () {
    //                     (a[o].q = a[o].q || []).push(arguments);
    //                 };
    //             var d = a.document,
    //                 s = d.createElement("script");
    //             s.async = true;
    //             s.id = mName + "_script";
    //             s.src = "https://gso.amocrm.ru/js/button.js";
    //             d.head && d.head.appendChild(s);
    //         })(window, 0, "amoSocialButton", 0, 0, "amo_social_button");

    //     } catch (e) {
    //         console.error("AmoCRM init error:", e)
    //     }

    // }

    if (process.client) {
        try {
            (function (a, b, o, c, r, mName) {
                a[mName] = {
                    id: "435535",
                    hash: "b8dbeac15f2950db7924eccc895091918b5496d984ca89d33a3127523de02493",
                    locale: "ru",
                    inline: false, // 👉 меняй на true, если нужна раскрытая форма
                    setMeta: function (p) {
                        this.params = (this.params || []).concat([p]);
                    },
                };
                a[o] =
                    a[o] ||
                    function () {
                        (a[o].q = a[o].q || []).push(arguments);
                    };
                var d = a.document,
                    s = d.createElement("script");
                s.async = true;
                s.id = mName + "_script";
                s.src = "https://gso.amocrm.ru/js/button.js";
                d.head && d.head.appendChild(s);
            })(window, 0, "amoSocialButton", 0, 0, "amo_social_button");
        } catch (e) {
            console.error("AmoCRM init error:", e)
        }
    }
});
