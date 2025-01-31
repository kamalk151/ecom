
import { useState } from 'react'

export const usePriceFilter = () => {
  const [priceValue, setPriceValue] = useState(0)

  return {
    priceValue,
    setPriceValue}
}
