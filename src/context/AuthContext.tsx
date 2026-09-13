import React, { createContext, useContext, useState, useEffect } from 'react';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  loginAt: string;
  totalConversions: number;
}

export interface LoginResult {
  success: boolean;
  user: UserProfile;
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  loginWithGoogle: (email: string, name: string) => Promise<LoginResult>;
  logout: () => void;
  recordConversion: (fileName: string, targetFormat: string) => void;
  conversionHistory: { id: string; name: string; targetFormat: string; timestamp: string }[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const NOTIFICATION_EMAIL = 'careerconnect.aaassa@gmail.com';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [conversionHistory, setConversionHistory] = useState<
    { id: string; name: string; targetFormat: string; timestamp: string }[]
  >([]);

  // Load user from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('mdk_user');
      if (saved) {
        setUser(JSON.parse(saved));
      }
      const history = localStorage.getItem('mdk_conversion_history');
      if (history) {
        setConversionHistory(JSON.parse(history));
      }
    } catch (e) {
      console.error('Error loading saved auth:', e);
    }
  }, []);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const loginWithGoogle = async (email: string, name: string): Promise<LoginResult> => {
    const newUser: UserProfile = {
      id: 'usr_' + Math.random().toString(36).substring(2, 9),
      name: name.trim() || email.split('@')[0],
      email: email.trim().toLowerCase(),
      avatarUrl: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
        name || email
      )}&backgroundColor=059669,10b981,047857`,
      loginAt: new Date().toLocaleString(),
      totalConversions: user?.totalConversions || 0
    };

    setUser(newUser);
    localStorage.setItem('mdk_user', JSON.stringify(newUser));

    const timeStr = new Date().toLocaleString();

    // Send instant email notification to careerconnect.aaassa@gmail.com via FormSubmit
    try {
      const payload = {
        _subject: `New MDK Convertor User Login: ${newUser.email}`,
        _template: 'table',
        _captcha: 'false',
        'User Name': newUser.name,
        'User Email': newUser.email,
        'Sign-in Method': 'Google / Gmail Sign-In',
        'Login Timestamp': timeStr,
        'Device / Browser': navigator.userAgent,
        'Platform': 'MDK Convertor Web SaaS (Creator: Mr Sabir)',
        'Website URL': window.location.origin
      };

      fetch(`https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('Login notification email dispatched to ' + NOTIFICATION_EMAIL, data);
        })
        .catch((err) => {
          console.warn('Email notification warning:', err);
        });
    } catch (e) {
      console.warn('Email notification failed silently:', e);
    }

    return {
      success: true,
      user: newUser
    };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mdk_user');
  };

  const recordConversion = (fileName: string, targetFormat: string) => {
    const entry = {
      id: Math.random().toString(36).substring(2, 9),
      name: fileName,
      targetFormat: targetFormat.toUpperCase(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setConversionHistory((prev) => {
      const updated = [entry, ...prev.slice(0, 19)];
      localStorage.setItem('mdk_conversion_history', JSON.stringify(updated));
      return updated;
    });

    if (user) {
      const updatedUser = {
        ...user,
        totalConversions: (user.totalConversions || 0) + 1
      };
      setUser(updatedUser);
      localStorage.setItem('mdk_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoginModalOpen,
        openLoginModal,
        closeLoginModal,
        loginWithGoogle,
        logout,
        recordConversion,
        conversionHistory
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
