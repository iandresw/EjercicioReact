import { useState } from "react";
import Swal from "sweetalert2";

const UseCuadratica = () => {
  const [numA, setnumA] = useState("");
  const [numB, setnumB] = useState("");
  const [numC, setnumC] = useState("");
  const [resultado, setResultado] = useState("");

  const Alerta = (mensaje) => {
    Swal.fire({
      title: "Advertencia",
      text: mensaje,
      icon: "warning",
    });
  };

  const Cuadratica = () => {
    if (numA === "") {
      Alerta("Ingrese el valor de a");
    } else if (numB === "") {
      Alerta("Ingrese el valor de b");
    } else if (numC === "") {
      Alerta("Ingrese el valor de c");
    }else {
      const a = parseFloat(numA);
      const b = parseFloat(numB);
      const c = parseFloat(numC);

      const discriminante = b * b - 4 * a * c;

      if (a === 0) {
        Alerta("El valor de 'a' no puede ser cero");
      } else if (discriminante < 0) {
        setResultado("No tiene soluciones reales");
      } else {
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        setResultado(`x₁ = ${x1}, x₂ = ${x2}`);
      }
    }
  };

  const Limpia = () => {
    setnumA("");
    setnumB("");
    setnumC("");
    setResultado("");
  };

  return {
    numA,
    setnumA,
    numB,
    setnumB,
    numC,
    setnumC,
    resultado,
    Cuadratica,
    Limpia,
  };
};

export default UseCuadratica;