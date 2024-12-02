import { useState } from 'react'
import InputBox from './Component/InputBox'
import useCorrencyInfo from './hoocks/useCurrencyInfo'


function App() {
  const [count, setCount] = useState(0)
  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedAmount,setConvertedAmount] = useState(0)

  const currencyInfo = useCorrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
    
  }

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    
    <div
      className="w-full h-screen flex flex-wrap
      justify-end items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full max-w-md mx-auto
       border border-grey-60 rounded-lg p-5
       backdrop-blur-sm bg-white/30">
        <form onSubmit={(e)=>{
          e.preventDefault();
          convert();
        }}>
          <div className='w-full mb-1'>
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => (setAmount(amount),setFrom(currency))}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}>
            </InputBox>
          </div>
          <div className="relative w-full h-0.5">
            <button
            type='button'
            className="absolute left-1/2
            -translate-x-1/2
            -translate-y-1/2 border-1
            border-white rounded-md
            bg-blue-600 text-white px-2
            py-0.5"
            onClick={swap}>
              swap
            </button>

          </div>
          <div className="w-full mt-1 mb-4">
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable></InputBox>

          </div>
          <button className='w-full bg-blue-600
          text-white px-4 py-3 rounded-lg'>Convert {from.toUpperCase()} To {to.toUpperCase()}</button>
        </form>

      </div>
      
    </div>
  )
}

export default App
