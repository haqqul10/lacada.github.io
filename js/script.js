// tambah dan kurang product
const kurang = document.querySelectorAll('.kurang');
const hasil = document.querySelectorAll('.hasil');
const tambah = document.querySelectorAll('.tambah');
const hapus = document.querySelectorAll('.hapus-product');
const hapusItem = document.querySelectorAll('.hapus-items');
let i = 0;

// hapus product
for (let j = 0; j < hapus.length; j++) {
    hapus[j].addEventListener('click', function (e) {
        hapusItem[j].style.display = 'none';
    });

}

// tambah product
for (let h = 0; h < tambah.length; h++) {
    tambah[h].addEventListener('click', function () {
        hasil[h].innerHTML = ++i;
    });

}

// kurang product

for (let k = 0; k < kurang.length; k++) {
    kurang[k].addEventListener('click', function () {
        if (i == 0) {
            i = 1;
        }
        hasil[k].innerHTML = --i;
    });

}

// tambah.forEach(function (e) {
//     e.addEventListener('click', function (event) {
//         event.hasil.innerHTML = ++i;
//     });
// });

// function kelolaProduct(tambah1, kurang1) {
//     tambah.forEach(function (e) {
//         e.addEventListener('click', function () {
//             hasil.innerHTML = ++i;
//         });
//     });

//     kurang.forEach(function (e) {
//         e.addEventListener('click', function () {
//             if (i == 0) {
//                 i = 1;
//                 // console.log(i);
//             }
//             hasil.innerHTML = --i;
//         });
//     });
// }

// thumbnail foto

const product = document.querySelector('.product-single .jumbo');
const figure = document.querySelector('.thumbnail-img');
const thumb = document.querySelectorAll('.thumbnail');

figure.addEventListener('click', function (e) {
    if (e.target.className == 'thumbnail') {
        product.src = e.target.src;
        e.preventDefault();

        product.classList.add('fade');

        setTimeout(function () {
            product.classList.remove('fade');
        }, 500);



        thumb.forEach(function (event) {
            // if (event.classList.contains('active')) {
            //     event.classList.remove('active');
            // }

            event.className = 'thumbnail';
        });

        e.target.classList.add('active-product');
    }


});