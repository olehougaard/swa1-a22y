const taxRate = .25

type Sale = { readonly total: number }
type TaxReport = { readonly tax: number }
type TaxReceipt = {}

async function readDailySales(date: Date): Promise<Sale[]> {
  const res: Response = await fetch("http://example.com/sales?date=" + date.toString())
  return res.json()
}

async function reportTaxes(taxes: TaxReport[]): Promise<TaxReceipt> {
  const res: Response = await fetch("http://irs.gov/taxes", {method: 'POST', body: JSON.stringify(taxes) })
  return res.json()
}

async function reportDailyTaxes(date: Date): Promise<TaxReceipt> {
  let sales = await readDailySales(date)
  let taxes = sales.map(({total}) => ({tax: taxRate * total}))
  return reportTaxes(taxes)
}

const computeTaxes = (sales: Sale[]) => sales.map(({total}) => ({tax: taxRate * total})) 

async function reportDailyTaxesSandwich(date: Date): Promise<TaxReceipt> {
  let sales = await readDailySales(date)
  let taxes = computeTaxes(sales)
  return reportTaxes(taxes)
  //Alternative
  // return readDailySales(date).then(computeTaxes).then(reportTaxes)
}

type Reader = (date: Date) => Promise<Sale[]>
type Writer = (taxes: TaxReport[]) => Promise<TaxReceipt>

const reportDailyTaxesDI = (read: Reader, write: Writer) =>
  async (date: Date): Promise<TaxReceipt> => {
    let sales = await read(date)
    let taxes = computeTaxes(sales)
    return write(taxes)
  }

const reportDailyTaxesPlugged = reportDailyTaxesDI(readDailySales, reportTaxes)
