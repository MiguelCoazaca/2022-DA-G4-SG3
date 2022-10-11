import { useParams } from "react-router-dom"

export default function Us() {
    const params = useParams()

    console.log(params)

    return (<p>{params.id}</p>)
}