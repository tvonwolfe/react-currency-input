import React from 'react'
import styled from 'styled-components'
import { getFormatter, handleFocus, handleBlur, handleInput } from './helpers'

const Input = styled.input`
  text-align: right;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #aaa;
  padding: 0.5em;
  -webkit-appearance: none;
  outline: none;
  transition: box-shadow 0.1s, color 0.1s;
  &:focus {
    box-shadow: 0 0 0 3px ${(props) => props.outlineColor || '#45aeff'};
  }
`

const CurrencyInput = ({
  outlineColor,
  onInput,
  placeholder,
  allowFractionalValue,
  currencyCode = 'usd',
  locale = 'en'
}) => {
  const formatter = getFormatter(locale, currencyCode, allowFractionalValue)
  const zero = formatter.format(0)

  return (
    <Input
      outlineColor={outlineColor}
      onInput={handleInput(allowFractionalValue, formatter, onInput)}
      onBlur={handleBlur(zero)}
      onFocus={handleFocus(zero)}
      placeholder={placeholder ?? formatter.format(123)}
      inputMode='numeric'
    ></Input>
  )
}

export default CurrencyInput
