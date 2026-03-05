import { useNavigate, useSearchParams } from "react-router-dom";
import "./Verify.css";
import { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

function Verify(){

    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    // console.log(success,orderId);

    const {url} = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async() => {
         try {
    const response = await axios.post(url+"/api/order/verify",{orderId,success});

    if(response.data.success){
        navigate("/myorders");
    }
    else{
        navigate("/")
    }
     } catch (error) {
    console.log(error);
    navigate("/");
 }

    }

    useEffect(()=>{
        verifyPayment();
    },[orderId,success])
        
    
    return(
        <>

        <div className="verify">
            <div className="spinner"></div>
        </div>

        </>

    )
}

export default Verify;