import {useEffect, useState, useRef} from 'react';

const User = props => {
    const [user, setUser] = useState("")
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=> {response.json()})
        .then((response) => {
            setUser(response)
        })
    }, [])

    return(

    )

}

export default User;