let perfumes = document.querySelector("#perfumes");

let data = [
  {
    img: "https://aromacode.ru/wa-data/public/shop/products/88/18/1888/images/58636/58636.750x0.jpg",
    title: "Chanel",
    price: "50$",
    btn: "Add to cart",
  },
  {
    img: "https://m.media-amazon.com/images/I/71Gb8IlxgxL._SL1500_.jpg",
    title: "Zara",
    price: "50$",
    btn: "Add to cart",
  },
  {
    img: "https://888-plus.com/upload/iblock/dd2/victoria_s_secret_bombshell_for_women_edp_100_ml_1.jpg",
    title: "Victoria's Secret",
    price: "50$",
    btn: "Add to cart",
  },
  {
    img: "https://pompadoo.ru/media/uploads/products/14386.jpg",
    title: "Christian Dior",
    price: "50$",
    btn: "Add to cart",
  },
  {
    img: "https://spirk.ru/files/742/742c504b0262aeaf63429a10bfdf94ff.jpg",
    title: "Chloe",
    price: "50$",
    btn: "Add to cart",
  },
  {
    img: "https://cdn1.ozone.ru/s3/multimedia-0/6896406528.jpg",
    title: "Versace",
    price: "50$",
    btn: "Add to cart",
  },
];

for (const item of data) {
  perfumes.innerHTML += `
    <div
      class="bg-white rounded-md shadow-md overflow-hidden"
    >
      <img
        class="w-full"
        src="${item.img}"
      />
      <div class=" p-2">
        <h2 class="text-2xl font-bold leading-tight text-gray-900">${item.title}</h2>
        <p class="mt-2 text-gray-600 text-xl">${item.price}</p>
        <button class="w-full bg-gray-900 text-white mt-2 rounded-md p-1">${item.btn}</button>
      </div>
    </div>
    `;
}
