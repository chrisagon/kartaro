import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User, createUserWithEmailAndPassword, updateProfile, UserCredential } from 'firebase/auth';
import app from '../firebaseConfig';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signup: (email: string, password: string, username: string) => Promise<UserCredential>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

  const signup = (email: string, password: string, username: string) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
      if (userCredential.user) {
        await updateProfile(userCredential.user, { displayName: username });
        // Manually update the user in state to reflect the new display name immediately
        setCurrentUser({ ...userCredential.user, displayName: username });
      }
      return userCredential;
    });
  };

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

    const value = {
    currentUser,
    loading,
    signup,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
