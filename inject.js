async function imgURLtoBase64(url) {
    const img = await (await fetch(url)).blob();

    const reader = new FileReader();
    await reader.readAsDataURL(img);    
    await new Promise(resolve => reader.onloadend = resolve);
    
    return reader.result;    
}

return (async function() {        
    const imgSrc = await imgURLtoBase64('https://cdn.jsdelivr.net/gh/ascended12/alterationcity-data/Furina_wink.webp');

    console.log(
        "%c %c\n\n %c good at deobfuscating javascript? message me on discord @comehomefurina ",
        `background-image: url('${imgSrc}'); background-size: 256px 256px; line-height: 256px; font-size: 1px; padding: 0px 128px;`,
        "",
        "font-size: 16px; color: #015dc2; background-color: #e9f0f1; border-radius: 3px"
    );
})();
