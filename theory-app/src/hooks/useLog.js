import { useEffect } from "react";

function useLog(state) {
    useEffect(logger, [state]);


    function logger() {
        console.log('colateral effect', state)
    }
}

export default useLog