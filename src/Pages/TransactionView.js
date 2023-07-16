import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function TransactionView(){
    const obj = useParams()

    const [transaction, setTransaction] = useState({})

    useEffect(() => {
        fetch(process.env.REACT_APP_BASE_URL + '/' + (obj.id ? obj.id : null))
        .then(response => response.json())
        .then(data => {
            setTransaction(data)
        })
        .catch(error => {
            console.log('Something went wrong when fetching the transaction.')
        })
    })

    return (
        <div className="TransactionView">
            <h1>{transaction.item_name} - <span>{transaction.from}</span></h1>
            <h3>${transaction.amount}</h3>
            <h2>{transaction.date}</h2>
        </div>
    )
}