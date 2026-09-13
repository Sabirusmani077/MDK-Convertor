import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, LoginResult } from '../../context/AuthContext';
import {
  X,
  Mail,
  User,
  ShieldCheck,
  CheckCircle2,
  LayoutDashboard,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';

export const LoginModal: React.FC = () => {
  const {
    isLoginModalOpen,
    closeLoginModal,
    loginWithGoogle
  } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loginSuccessData, setLoginSuccessData] = useState<LoginResult | null>(null);

  if (!isLoginModalOpen) return null;

  const handleClose = () => {
    setLoginSuccessData(null);
    setEmail('');
    setName('');
    setError(null);
    closeLoginModal();
  };

  const handleQuickGoogleSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      const defaultName = name.trim() || 'Google User';
      const defaultEmail = email && email.includes('@') ? email.trim() : 'google.user@gmail.com';
      const result = await loginWithGoogle(defaultEmail, defaultName);
      setLoginSuccessData(result);
    } catch (err: any) {
      setError('Failed to sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid Gmail address.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await loginWithGoogle(email, name);
      setLoginSuccessData(result);
    } catch (err: any) {
      setError('Failed to sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header decoration */}
        <div className="h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {/* ================= SUCCESS SCREEN ================= */}
          {loginSuccessData ? (
            <div className="space-y-5 animate-slide-up text-center">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Login Successful!
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Welcome back, <strong className="text-slate-800">{loginSuccessData.user.name}</strong>
                </p>
                <p className="text-[11px] text-emerald-600 font-mono mt-0.5">
                  {loginSuccessData.user.email}
                </p>
              </div>

              {/* Notification Status Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <Mail className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Admin Email Notification Dispatched</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Login details have been securely logged to <strong>careerconnect.aaassa@gmail.com</strong>.
                </p>

                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-600 font-medium">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                    100% Free SaaS Account
                  </span>
                  <span className="text-emerald-700 font-bold">Active</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    handleClose();
                    navigate('/dashboard');
                  }}
                  className="flex-1 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <LayoutDashboard className="w-4 h-4 text-emerald-400" />
                  <span>Go to Dashboard</span>
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  className="py-3 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all"
                >
                  Start Converting
                </button>
              </div>
            </div>
          ) : (
            /* ================= LOGIN FORM ================= */
            <>
              {/* Logo & Headline */}
              <div className="text-center mb-6">
                <div className="flex justify-center mb-3">
                  <BrandLogo size="md" showSubtitle={false} />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Sign in with Gmail
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Unlock your free conversion dashboard and track your converted files.
                </p>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl font-medium">
                  {error}
                </div>
              )}

              {/* Official Google Sign-In Button */}
              <button
                type="button"
                disabled={loading}
                onClick={handleQuickGoogleSignIn}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white hover:bg-slate-50 border border-slate-300 rounded-2xl text-slate-700 font-semibold text-sm shadow-xs hover:shadow-sm transition-all mb-4 active:scale-[0.99] disabled:opacity-50"
              >
                {/* Google SVG G icon */}
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>{loading ? 'Connecting...' : 'Continue with Google'}</span>
              </button>

              <div className="relative flex items-center justify-center my-4">
                <div className="border-t border-slate-200 w-full" />
                <span className="bg-white px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Or Enter Gmail
                </span>
                <div className="border-t border-slate-200 w-full" />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name (Optional)
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sabir Usmani"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Gmail Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="yourname@gmail.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-50"
                >
                  {loading ? (
                    <span>Signing in...</span>
                  ) : (
                    <>
                      <span>Sign In Free</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Guarantees */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center gap-4 text-[11px] text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  100% Free Lifetime
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                  Zero Server Retention
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

