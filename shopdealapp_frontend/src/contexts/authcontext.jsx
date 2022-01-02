import React from 'react'
import { auth } from '../firebase/firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return React.useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = React.useState(false);

    function signup(email, password) {
        auth.createUserWithEmailandPassword(email, password)
    }

    React.useEffect(() => {
        const unsubscribe
    }, [])

    const value = {
        currentUser: currentUser
    }

    return ( 
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
     );
}
 
export default AuthContext;