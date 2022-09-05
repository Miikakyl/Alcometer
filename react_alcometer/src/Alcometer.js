import React, {useState} from "react"

const Alcometer = () => {

    const [weight,setWeight] = useState()   
    const [bottles,setBottles] = useState(1)
    const [time,setTime] = useState(1)
    const [gender,setGender] = useState()
    const [result,setResult] = useState()

    const optionValues = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

    const handleForm = (e) => {

        e.preventDefault()

        const litres = bottles * 0.33
        const grams = litres * 8 * 4.5
        const burning = weight / 10
        const grams_left = grams - (burning * time)

        switch(gender) {
            case "male":
                setResult(grams_left / (weight * 0.7))
                break;
            case "female":
                setResult(grams_left / (weight * 0.6))
                break;
        }

    }

    return (
        <div>
            <h2>Calculating alcohol blood level</h2>
            <form onSubmit={handleForm}>
                <div>
                    <label>Weight </label>
                    <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
                </div>
                <div>
                    <label>Bottles </label>
                    <select value={bottles} onChange={e => setBottles(e.target.value)}>
                        {optionValues.map(optionValue => {
                            return (
                                <option value={optionValue} key={optionValue}>{optionValue}</option>
                            )
                        })}  
                    </select>
                </div>
                <div>
                    <label>Time </label>
                    <select value={time} onChange={e => setTime(e.target.value)}>
                        {optionValues.map(optionValue => {
                                return (
                                    <option value={optionValue} key={optionValue}>{optionValue}</option>
                                )
                            })}  
                    </select>
                </div>
                <div>
                    <label>Gender</label>
                    <input type="radio" name="genderInput" value="male"  onChange={e => setGender(e.target.value)}></input>
                    <label>Male</label>
                    <input type="radio" name="genderInput" value="female" onChange={e => setGender(e.target.value)}></input>
                    <label>Female</label>
                </div>
                <output>{result > 0 && result.toFixed(2)}</output>
                <output>{result < 0 && 0}</output>
                <button>Calculate</button>
            </form>
        </div>
    )
}

export default Alcometer