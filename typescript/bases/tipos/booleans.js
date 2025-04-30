"use strict";
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    isSuperman = true && true;
    console.log({ isSuperman });
})();
