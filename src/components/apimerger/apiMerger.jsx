import useMerger from "../hooks/useMerger"

function apiMerger() {

  const arrayOfApis = [
    { nombre: "Dolar CCL", url: "https://mercados.ambito.com//dolarrava/cl/variacion" },
    { nombre: "Dolar MEP", url: "https://mercados.ambito.com//dolarrava/mep/variacion" },
    { nombre: "Dolar Turista", url: "https://mercados.ambito.com//dolarturista/variacion" },
    { nombre: "Dolar Lujo", url: "https://mercados.ambito.com//dolardelujo/variacion" },
    { nombre: "Dolar Futuro", url: "https://mercados.ambito.com//dolarfuturo/variacion" },
    { nombre: "Dolar Ahorro", url: "https://mercados.ambito.com//dolarahorro/variacion" },
    { nombre: "Dolar Informal", url: "https://mercados.ambito.com//dolar/informal/variacion" },
    { nombre: "Dolar Qatar", url: "https://mercados.ambito.com//dolarqatar/variacion" },
    { nombre: "Dolar Oficial", url: "https://mercados.ambito.com//dolar/oficial/variacion" },
    { nombre: "Dolar Mayorista", url: "https://mercados.ambito.com//dolar/mayorista/variacion" },
  ]

  const results = []

  for (let i = 0; i < arrayOfApis.length; i++) {
    const { data, error } = useMerger(arrayOfApis[i].url)
    results.push({ id: i, nombre: arrayOfApis[i].nombre, data, error })
  }

  console.log(results)

  return { data: results.map(result => result.data), error: results.map(result => result.error) }

}

export default apiMerger