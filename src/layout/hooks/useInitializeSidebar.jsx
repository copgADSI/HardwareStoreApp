import { useState } from "react"

export const useInitializeSidebar = () => {
    const [toggle, setToggle] = useState({})
    const toggleSidebar = () => {
        if (toggle?.close) {
            return setToggle({});
        }
        return setToggle({ close: 'close' })
    }
    return { toggleSidebar, toggle,  }
}

export default useInitializeSidebar