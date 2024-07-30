alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0");
let seleccionarProductos = Number(
  prompt("1-televisor let $1200000 2-equipo de sonido $80000 3-abriculares $50000 4-computadoras $6000 ")
);
let seleccionarCantidad;
let total = 0;

const cantidad = (cant, precio) => {
  return cant * precio;
};

while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad = Number(
        prompt("el producto seleccionado es televisor let, indique la cantidad")
      );
      total += cantidad(seleccionarCantidad, 30000);
      break;
    case 2:
      seleccionarCantidad = Number(
        prompt("el producto seleccionado es equipo de sonido, indique la cantidad")
      );
      total += cantidad(seleccionarCantidad, 15000);
      break;
    case 3:
      seleccionarCantidad = Number(
        prompt("el producto seleccionado es abriculares, indique la cantidad")
      );
      total += cantidad(seleccionarCantidad, 50000);
      break;
    case 4:
      seleccionarCantidad = Number(
        prompt("el producto seleccionado es computadora, indique la cantidad")
      );
      total += cantidad(seleccionarCantidad, 60000);
      break;

    default:
      break;
  }
  seleccionarProductos = Number(
    prompt("11-televisor let $1200000 2-equipo de sonido $80000 3-abriculares $50000 4-computadoras $6000 ")
  );
}

alert("el total de la compra es de: " + total);

const envio = () => {
  if (total >= 10000) {
    alert("El envio es gratuito");
  } else {
    total += 1000;
    alert("el costo de envio es de 1000, el total es: " + total);
  }
};

// envio()

const metodoDePago = () => {
  let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo");
  if (metodo == "tarjeta") {
    total *= 1.1;
    console.log(total);
  } else if (metodo == "efectivo") {
    total -= 1000;
    alert("tenes un descuento de 1000, el total es:" + total);
  }
};

metodoDePago();
