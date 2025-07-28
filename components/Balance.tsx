import getUSerBalance from "@/app/actions/getUserBalance";
import { addCommas } from "@/lib/utils";

const Balance = async () => {
    const {balance} = await getUSerBalance();

    return (
        <>
          <h4>Your Balance</h4>
          <h1>₹{addCommas(Number(balance?.toFixed(2) ?? 0))}</h1>  
        </>
    )
}

export default Balance;
