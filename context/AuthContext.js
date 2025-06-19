import { 
    createContext, 
    useState, 
    useEffect, 
    useContext } from 'react'
import { 
    saveToken, 
    getToken, 
    clearToken } from '../utils/storage';
import { login as apiLogin} from '../api/auth';

const AuthContext = createContext();

export const AuthProvider= ({ children, userToken: initialToken, setUserToken: externalSetUserToken }) => {
    const [userToken, setUserToken] = useState(initialToken);
    const [user, setUser] = useState(null);
    const login = async (email, password) => {
        const data = await apiLogin(email, password);
        if (data && data.success && data.token && data.user) {
            await saveToken(data.token);
            setUserToken(data.token);
            setUser(data.user);
            return true;
        } else {
            return false;
        }
    };

    const logout = async () => {
        await clearToken();
        setUserToken(null)
        setUser(null)
    }

    const bootstrap = async () => {
        const token = await getToken();
        if (token) {
            setUser({ token });
        } else {
            throw new Error("Validação falha");
        }
         
    }

    useEffect(()=> {bootstrap()},[]);

    return (
        <AuthContext.Provider value={{ user, login, logout, setUser, userToken, setUserToken}}>
            {children}
        </AuthContext.Provider>
    );
}   

export const useAuth = () => useContext(AuthContext)