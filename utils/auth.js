export const isAuthenticated = () => {
    if (typeof window != 'undefined') {
        const token = localStorage.getItem('refreshToken')
        return token !== null && token !== undefined && token !== '';
    }
    return false;
};

export const base_url = "http://10.81.11.62:8001";