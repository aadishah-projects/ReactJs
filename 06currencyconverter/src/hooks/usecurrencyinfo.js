import { useEffect, useState } from "react"

function useCurrencyInfo(currency)
{
    const [data,setData] = useState({})
    //Calling an api
    useEffect(
        () => 
        {
            //Call back function
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
                .then(
                (responce) => responce.json() 
            )
                .then(
                    (res) => setData(res[currency])
                )
        },
        [currency] // Dependencies 
    )
    return data
}

export default useCurrencyInfo;