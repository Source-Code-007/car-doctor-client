import { useParams } from "react-router-dom";
import CompoBanner from "../../Shared/CompoBanner";
import { useEffect, useState } from "react";

const ServicesDetails = () => {
    const {id} = useParams()
    const [service, setService] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:8000/services/${id}`)
        .then(res=> res.json())
        .then(data=> setService(data))
        .catch(e=> console.log(e.message))
    }, [id])
    return (
        <div>
            <CompoBanner>Services Details</CompoBanner>
            
        </div>
    );
};

export default ServicesDetails;