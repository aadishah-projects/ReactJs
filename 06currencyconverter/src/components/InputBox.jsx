import React, {useId} from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "npr",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
    const amountInputId = useId()
  return (
    <div className={` bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <input
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
              <label htmlFor={amountInputId} className="text-black mb-2 inline-block">{label}</label>
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black mb-2 wfull">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisable}
        >
                  {currencyOptions.map((currencyelement) => {
                      return(
            <option key = {currencyelement} value={currencyelement}>{currencyelement}</option>
                      )
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
