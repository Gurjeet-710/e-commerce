import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import TabRoutes from './TabRoutes';

export default function Routes({}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true); 
    };

    const handleLogout = () => {
        setIsAuthenticated(false); 
    };
    

    return (
        <NavigationContainer>
            {isAuthenticated ? (
                <TabRoutes  onLogout={handleLogout} />
            ) : (
                <AuthStack onLogin={handleLogin} /> 
            )}
        </NavigationContainer>
    );
}
