import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { SeoHead } from '../components/layout/SeoHead';
import { UniversalConverter } from '../components/converter/UniversalConverter';
import { BrandLogo } from '../components/common/BrandLogo';
import {
  User,
  ShieldCheck,
  Zap,
  HardDrive,
  FileCheck,
  Sparkles,
  ArrowRight,
  LogOut,
  Clock,
  Lock,
  Mail,
  AlertCircle
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const {
    user,
    isAuthenticated,
    openLoginModal,
    logout,
    conversionHistory
  } = useAuth();

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <SeoHead
        title="User Dashboard – MDK Convertor"
        description="Your personal MDK Convertor dashboard. Track your conversions and convert files quickly."
        canonicalUrl="https://mdkconvertor.com/dashboard"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* User Not Logged In State */}
        {!isAuthenticated || !user ? (
          <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-soft text-center animate-slide-up">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100">
              <User className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Sign In to View Your Dashboard
            </h2>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              Sign in with your Gmail to keep track of your conversion history and access quick settings. It is 100% free with no credit card required.
            </p>
            <button
              onClick={openLoginModal}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold px-6 py-3 rounded-2xl shadow-md transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Login with Gmail</span>
            </button>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            {/* Top Welcome Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-700/60 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-16 h-16 rounded-2xl border-2 border-emerald-400/50 shadow-md flex-shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                      Welcome back, {user.name} 👋
                    </h1>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider">
                      Free Lifetime
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1">
                    {user.email} • Logged in: {user.loginAt}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={logout}
                  className="flex items-center gap-1.5 px-4 py-2 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-rose-300 border border-slate-700 rounded-xl text-xs font-semibold transition-all"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>

            {/* 3 Simple Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Total Conversions
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <FileCheck className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-3xl font-extrabold text-slate-900">
                  {user.totalConversions || conversionHistory.length || 0}
                </p>
                <p className="text-[11px] text-slate-500 mt-1">Unlimited free conversions</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Cloud Storage
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <HardDrive className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-3xl font-extrabold text-slate-900">0 MB</p>
                <p className="text-[11px] text-emerald-600 font-semibold mt-1">
                  ✓ 100% In-Browser Privacy
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Account Status
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-2xl font-extrabold text-slate-900">Free Forever</p>
                <p className="text-[11px] text-slate-500 mt-1">No subscription or watermarks</p>
              </div>
            </div>

            {/* Admin Email Notification Center */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-soft space-y-4">
              <div className="flex items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shadow-xs flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                        Admin Email Notifications
                      </h3>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        Active
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      User sign-ins and system activity are dispatched directly to <strong className="text-slate-800">careerconnect.aaassa@gmail.com</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* FormSubmit One-time Activation Tip */}
              <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200/90 text-xs text-amber-900 flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold text-amber-950">One-Time Activation Tip for Gmail Alerts</p>
                  <p className="text-[11px] text-amber-800 leading-relaxed">
                    FormSubmit sends an initial confirmation email to <strong>careerconnect.aaassa@gmail.com</strong> with the subject <strong>"Action Required: Activate Form"</strong>.
                    Please check your Gmail inbox (or spam folder) and click <strong>"Activate Form"</strong> once to ensure all user sign-in details land directly in your inbox.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Conversion Tool Inside Dashboard */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-soft">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Quick Convert Tool
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Convert JPG to PDF, PNG to JPG, or merge multiple images directly.
                  </p>
                </div>
              </div>

              <UniversalConverter initialSource="jpg" initialTarget="pdf" isCompact />
            </div>

            {/* Conversion History */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-soft">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <h3 className="font-bold text-slate-900 text-base">
                    Recent Conversion Activity
                  </h3>
                </div>
                <span className="text-xs text-slate-400">
                  {conversionHistory.length} recorded this session
                </span>
              </div>

              {conversionHistory.length === 0 ? (
                <div className="text-center py-8 text-slate-400 text-xs">
                  No conversions recorded in this browser session yet. Convert a file above to see it listed here!
                </div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {conversionHistory.map((item) => (
                    <div
                      key={item.id}
                      className="py-3 flex items-center justify-between text-xs hover:bg-slate-50 px-2 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 rounded font-bold uppercase text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {item.targetFormat}
                        </span>
                        <span className="font-medium text-slate-800 truncate max-w-xs">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-slate-400 font-mono">{item.timestamp}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
