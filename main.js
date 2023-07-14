const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exit = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const lanjutTombol = document.querySelector(".continue-btn");
const kuisSection = document.querySelector(".kuis-section");
const kuisBox = document.querySelector(".kuis-box");

startBtn.onclick = () => {
  popupInfo.classList.add("active");
  main.classList.add("active");
};
exit.onclick = () => {
  popupInfo.classList.remove("active");
  main.classList.remove("active");
};

lanjutTombol.onclick = () => {
  kuisSection.classList.add("active");
  popupInfo.classList.remove("active");
  main.classList.remove("active");
  kuisBox.classList.add("active");

  tampilkanKuis();
};

let kuisNilai = 0;

const lanjutKuis = document.querySelector(".tombol-lanjut");
const opsiList = document.querySelector(".option-list");

lanjutKuis.onclick = () => {
  if (kuisNilai < pertanyaans.length - 1) {
    kuisNilai++;
    tampilkanKuis(kuisNilai);
  } else {
    console.log("selesai");
  }
};

function tampilkanKuis(index) {
  const kuisText = document.querySelector(".kuis-text");
  kuisText.textContent = `${pertanyaans[index].numb}. ${pertanyaans[index].pertanyaan}`;

  let optionTag = `
      <div class="option"><span>${pertanyaans[index].opsi[0]}</span></div>
      <div class="option"><span>${pertanyaans[index].opsi[1]}</span></div>
      <div class="option"><span>${pertanyaans[index].opsi[2]}</span></div>`;

  opsiList.innerHTML = optionTag;
}
