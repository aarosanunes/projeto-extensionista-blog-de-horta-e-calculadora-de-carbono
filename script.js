function mostrarSecao() {
  const categoria = document.getElementById("categoria").value;
  const secoes = document.querySelectorAll(".form-section");

  secoes.forEach((secao) => {
    secao.style.display = "none";
  });

  if (categoria) {
    document.getElementById(categoria).style.display = "block";
  }
}
function calcularTransporte() {
  const kmCarro = parseFloat(document.getElementById("kmCarro").value) || 0;
  const kmOnibus = parseFloat(document.getElementById("kmOnibus").value) || 0;

  const co2Carro = kmCarro * 0.21;
  const co2Onibus = kmOnibus * 0.12;
  const total = co2Carro + co2Onibus;

  document.getElementById("resultadoTransporte").innerHTML = `
      Emissões diárias estimadas:<br>
      🚗 Carro: <strong>${co2Carro.toFixed(2)}</strong> kg CO₂<br>
      🚌 Ônibus: <strong>${co2Onibus.toFixed(2)}</strong> kg CO₂<br>
      🌍 Total: <strong>${total.toFixed(2)}</strong> kg CO₂
    `;
}

function calcularEnergia() {
  const kwh = parseFloat(document.getElementById("kwh").value) || 0;
  const resultado = kwh * 0.5;

  document.getElementById("resultadoEnergia").innerHTML = `
      💡 Sua pegada mensal de energia é de <strong>${resultado.toFixed(
        2
      )}</strong> kg CO₂.
    `;
}

function calcularAlimentacao() {
  const refeicoes = parseInt(document.getElementById("refeicoes").value) || 0;
  const resultado = refeicoes * 1.5;

  document.getElementById("resultadoAlimentacao").innerHTML = `
      🍖 Suas refeições geram aproximadamente <strong>${resultado.toFixed(
        2
      )}</strong> kg CO₂ por semana.
    `;
}

function calcularAgua() {
  const litros = parseFloat(document.getElementById("litrosAgua").value) || 0;
  const resultado = litros * 0.01;

  document.getElementById("resultadoAgua").innerHTML = `
      💧 Seu consumo diário de água representa cerca de <strong>${resultado.toFixed(
        2
      )}</strong> kg CO₂.
    `;
}

const carrossel = document.getElementById("catalogo");
let isDown = false;
let startX;
let scrollLeft;

// Arraste manual com mouse
carrossel.addEventListener("mousedown", (e) => {
  isDown = true;
  carrossel.classList.add("active");
  startX = e.pageX - carrossel.offsetLeft;
  scrollLeft = carrossel.scrollLeft;
});

carrossel.addEventListener("mouseleave", () => {
  isDown = false;
  carrossel.classList.remove("active");
});

carrossel.addEventListener("mouseup", () => {
  isDown = false;
  carrossel.classList.remove("active");
});

carrossel.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carrossel.offsetLeft;
  const walk = (x - startX) * 1.5;
  carrossel.scrollLeft = scrollLeft - walk;
});

// Autoplay automático
setInterval(() => {
  carrossel.scrollBy({
    left: 300,
    behavior: "smooth",
  });

  // Voltar ao início se chegou ao fim
  if (
    carrossel.scrollLeft + carrossel.clientWidth >=
    carrossel.scrollWidth - 10
  ) {
    carrossel.scrollTo({ left: 0, behavior: "smooth" });
  }
}, 3000); // a cada 3 segundos
