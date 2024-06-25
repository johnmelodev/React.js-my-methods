import { useState } from "react"

const withToggle = (Component: any) => {

    const withToggle = (props: any) => {
        const [status, setStatus] = useState(false)

        const handleToggle = () => setStatus(!status)

        return <Component {...props} status={status} onToggle={handleToggle} />
    }
    return withToggle
}

export default withToggle;