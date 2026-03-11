let angka = 1
let ganjil = true
basic.forever(function () {
    if (ganjil) {
        if (angka <= 9) {
            basic.showNumber(angka)
            basic.pause(300)
            angka += 2
        } else {
            ganjil = false
            angka = 0
        }
    } else {
        if (angka <= 8) {
            basic.showNumber(angka)
            basic.pause(300)
            angka += 2
        } else {
            ganjil = true
            angka = 1
        }
    }
})
