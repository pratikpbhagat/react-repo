import {useEffect, useState} from 'react';
import {jwtDecode} from "jwt-decode";

interface DecodedToken {
    email: string;
    exp: number;

    [key: string]: any;
}

const COGNITO_DOMAIN = import.meta.env.VITE_COGNITO_DOMAIN;
const CLIENT_ID = import.meta.env.VITE_COGNITO_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_COGNITO_REDIRECT_URI
const SCOPE = import.meta.env.VITE_COGNITO_SCOPE
const IDP = import.meta.env.VITE_COGNITO_IDENTITY_PROVIDER;

function parseTokenFromHash(): { idToken?: string; accessToken?: string } {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return {
        idToken: params.get('id_token') || undefined,
        accessToken: params.get('access_token') || undefined,
    };
}

export function useAuth() {
    const [user, setUser] = useState<DecodedToken | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('idToken');

        if (!token) {
            const {idToken} = parseTokenFromHash();

            if (idToken) {
                localStorage.setItem('idToken', idToken);
                const decoded: DecodedToken = jwtDecode(idToken);
                setUser(decoded);
                window.location.hash = '';
            } else {
                redirectToLogin();
            }
        } else {
            try {
                const decoded: DecodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000;
                if (decoded.exp < currentTime) {
                    localStorage.removeItem('idToken');
                    redirectToLogin();
                } else {
                    setUser(decoded);
                }
            } catch (e) {
                localStorage.removeItem('idToken');
                redirectToLogin();
            }
        }

        setLoading(false);
    }, []);

    function redirectToLogin() {
        window.location.href = `${COGNITO_DOMAIN}/oauth2/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&identity_provider=${IDP}`;
    }

    return {user, loading};
}
