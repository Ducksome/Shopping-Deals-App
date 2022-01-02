import React from 'react'
import { auth } from '../firebase/firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return React.useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = React.useState(false);

    function signup(email, password) {
        return auth.createUserWithEmailandPassword(email, password)
    }

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup
    }

    return ( 
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
     );
}
 
export default AuthContext;