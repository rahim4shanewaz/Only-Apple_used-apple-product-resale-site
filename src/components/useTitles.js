import { useEffect } from "react"




// hooks for dynamic title

const useHooks = title => {
    useEffect(() => {
        document.title = `${title} - Apple Only`;
    },[title])
};

export default useHooks;