import { useState } from "react"


export default function Search(){

    const [ search , setSearch ] = useState('')
    function handleChange(event){
        
        setSearch(event.target.value)

    }

    return(
        <div>
            <form>
                <button></button>
                <input type='text' value={search} onChange={handleChange} />
            </form>
        </div>
    )
}