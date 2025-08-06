export function capitalizeFirstLetter(str) {
  if (typeof str !== "string" || str.length === 0) {
    return ""; // Handle non-string or empty input
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
export function LowerCase(str) {
  if (typeof str !== "string" || str.length === 0) {
    return ""; // Handle non-string or empty input
  }
  return str.toLowerCase();
}
export function UpperCase(str) {
  if (typeof str !== "string" || str.length === 0) {
    return ""; // Handle non-string or empty input
  }
  return str.toUpperCase();
}
// Ejemplo de uso
// console.log(formatRelativeDate("2025-05-24T22:18:53.000Z")); // Salida: "Hace X días"
export const formatRelativeDate = (dateString) => {
  const now = new Date();
  const givenDate = new Date(dateString);
  const diffInSeconds = Math.floor((now - givenDate) / 1000);

  if (diffInSeconds < 60) return `Hace ${diffInSeconds} segundos`;
  if (diffInSeconds < 3600)
    return `Hace ${Math.floor(diffInSeconds / 60)} minutos`;
  if (diffInSeconds < 86400)
    return `Hace ${Math.floor(diffInSeconds / 3600)} horas`;
  if (diffInSeconds < 2592000)
    return `Hace ${Math.floor(diffInSeconds / 86400)} días`;
  if (diffInSeconds < 31536000)
    return `Hace ${Math.floor(diffInSeconds / 2592000)} meses`;

  return `Hace ${Math.floor(diffInSeconds / 31536000)} años`;
};

// Formatea un número como moneda
// Ejemplo de uso
// console.log(formatCurrency(110)); // Salida: "₡110,00"
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("es-CR", {
    style: "currency",
    currency: "CRC", // O la moneda de tu preferencia, ej. 'USD'
  }).format(amount);
};

/**
 * USO
 const { search } = useLocation();
    let queryParams = convertQueryParamsStringToQueryParamsObject(search);
    console.log("queryParams", queryParams);
 */
export const convertQueryParamsStringToQueryParamsObject = (string) => {
  let queryParams = {};
  // remove first letter from query string
  string = string.substring(1);
  // console.log("string", string);
  // convert string to array
  const queryParamsArray = string.split("&");
  // console.log("queryParamsArray", queryParamsArray);

  // covert each index query to object
  queryParamsArray.forEach((queryParam) => {
    // console.log("queryParam", queryParam);
    // split param by =
    const queryParamArray = queryParam.split("=");
    // console.log("queryParamArray", queryParamArray);
    queryParams[queryParamArray[0]] = queryParamArray[1];
    // console.log("queryParams", queryParams);
  });
  return queryParams;
};

/**
 * 
  Ejemplo de uso en un componente React
const ProductCard = ({ description }) => {
  return (
    <div>
      <p>{truncateText(description, 80)}</p>
    </div>
  );
};

export default ProductCard;

 */
export const truncateText = (text, maxLength = 100) => {
  if (!text) return "";
  return text.length > maxLength
    ? text.substring(0, maxLength).trim() + "..."
    : text;
};

/**
 * Crear un slug a partir de un nombre
 * EJEMPLO DE USO:

const name = "Cronómetro Seiko S141";
const slug = slugify(name);

console.log(slug); // cronometro-seiko-s141

 */

export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD") // elimina tildes y acentos
    .replace(/[\u0300-\u036f]/g, "") // elimina caracteres diacríticos
    .replace(/[^a-z0-9\s-]/g, "") // elimina caracteres especiales
    .trim()
    .replace(/\s+/g, "-"); // reemplaza espacios por guiones
};

/**
 * 
 *EJEMPLO DE USO
 import { parseJsonString } from "../utils/parseJsonString";

const FooterNav = ({ rawData }) => {
  const items = parseJsonString(rawData);

  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>
          <a href={item.url}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

 */

export const parseJsonString = (str) => {
  try {
    const result = JSON.parse(str);
    if (Array.isArray(result)) {
      return result;
    } else {
      throw new Error("El string no es un arreglo JSON válido");
    }
  } catch (error) {
    console.error("Error al parsear JSON:", error.message);
    return []; // Devuelve un arreglo vacío si hay error
  }
};
