function tagihan() {
    var pokok = parseFloat(document.hitung.tgihan.value);
    var hangus = parseFloat(document.hitung.hangus.value);
    let denda = 0;
    for(let i = 0; i < hangus; i++) {
        denda = denda + pokok*0.02;
        pokok = pokok + denda;
    }

    document.hitung.hasil.value = "Rp." + Math.round(denda);
}