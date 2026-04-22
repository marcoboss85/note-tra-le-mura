/**
 * Dati mostrati nella sezione normativa del sito.
 * Sovrascrivibile con `.env.local` (NEXT_PUBLIC_*).
 *
 * CIN assegnato dalla struttura (pubblicità obbligatoria): valore predefinito nel codice;
 * usare NEXT_PUBLIC_CIN se in futuro cambia.
 *
 * Indirizzo della struttura: predefinito nel codice; sovrascrivere con NEXT_PUBLIC_PROPERTY_ADDRESS se serve.
 *
 * Titolare / gestore: predefinito nel codice; sovrascrivere con NEXT_PUBLIC_OPERATOR_NAME se serve.
 */
const DEFAULT_CIN = "IT046017C24BJQQTVV";
const DEFAULT_PROPERTY_ADDRESS = "Via Pelleria, 14, 55100 Lucca";
const DEFAULT_OPERATOR_NAME = "Jelena Mijailovic Pisciotta";

export type PublicLegalDisplay = {
  cir: string;
  cin: string;
  operatorName: string;
  operatorVatOrCf: string;
  propertyAddress: string;
};

export function getPublicLegalDisplay(): PublicLegalDisplay {
  const cinFromEnv = process.env.NEXT_PUBLIC_CIN?.trim();
  const addressFromEnv = process.env.NEXT_PUBLIC_PROPERTY_ADDRESS?.trim();
  const operatorFromEnv = process.env.NEXT_PUBLIC_OPERATOR_NAME?.trim();
  return {
    cir: process.env.NEXT_PUBLIC_CIR?.trim() ?? "",
    cin: cinFromEnv || DEFAULT_CIN,
    operatorName: operatorFromEnv || DEFAULT_OPERATOR_NAME,
    operatorVatOrCf: process.env.NEXT_PUBLIC_OPERATOR_VAT_OR_CF?.trim() ?? "",
    propertyAddress: addressFromEnv || DEFAULT_PROPERTY_ADDRESS,
  };
}
