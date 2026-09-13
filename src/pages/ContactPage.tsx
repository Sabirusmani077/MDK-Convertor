import React, { useState } from 'react';
import { SeoHead } from '../components/layout/SeoHead';
import {
  Mail,
  Send,
  CheckCircle2,
  Phone,
  ExternalLink,
  Linkedin,
  Github,
  Instagram,
  Youtube,
  Facebook,
  MessageCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { CREATOR_LINKS } from '../config/creatorLinks';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dispatch via FormSubmit or open WhatsApp directly
    try {
      fetch('https://formsubmit.co/ajax/careerconnect.aaassa@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New Contact Message from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          source: 'MDK Convertor Contact Form'
        })
      }).catch(() => {});
    } catch (_) {}

    setSubmitted(true);
  };

  const handleOpenWhatsAppWithMessage = () => {
    const text = encodeURIComponent(
      `Hi Sabir, my name is ${formData.name || 'User'}${formData.email ? ` (${formData.email})` : ''}.\n\nMessage: ${formData.message || 'I have an inquiry regarding MDK Convertor.'}`
    );
    window.open(`https://wa.me/919458204216?text=${text}`, '_blank');
  };

  const officialChannels = [
    {
      name: 'WhatsApp (Direct)',
      value: '+91 9458204216',
      href: CREATOR_LINKS.whatsapp,
      icon: MessageCircle,
      color: 'text-emerald-600 bg-emerald-50 hover:bg-emerald-100 border-emerald-200',
      badge: 'Instant Response'
    },
    {
      name: 'Official Email',
      value: 'sabirusmani159@gmail.com',
      href: CREATOR_LINKS.mailto,
      icon: Mail,
      color: 'text-amber-600 bg-amber-50 hover:bg-amber-100 border-amber-200',
      badge: 'Direct Mail'
    },
    {
      name: 'LinkedIn',
      value: 'Sabir Usmani',
      href: CREATOR_LINKS.linkedin,
      icon: Linkedin,
      color: 'text-sky-600 bg-sky-50 hover:bg-sky-100 border-sky-200',
      badge: 'Professional Profile'
    },
    {
      name: 'GitHub',
      value: 'Sabirusmani077',
      href: CREATOR_LINKS.github,
      icon: Github,
      color: 'text-slate-900 bg-slate-100 hover:bg-slate-200 border-slate-300',
      badge: 'Open Source Repos'
    },
    {
      name: 'Instagram',
      value: '@sabir_usmani_077',
      href: CREATOR_LINKS.instagram,
      icon: Instagram,
      color: 'text-pink-600 bg-pink-50 hover:bg-pink-100 border-pink-200',
      badge: 'Social Updates'
    },
    {
      name: 'YouTube',
      value: '@Sabirusmani07',
      href: CREATOR_LINKS.youtube,
      icon: Youtube,
      color: 'text-red-600 bg-red-50 hover:bg-red-100 border-red-200',
      badge: 'Official Channel'
    },
    {
      name: 'X (Twitter)',
      value: '@Mrsabirusmani07',
      href: CREATOR_LINKS.x,
      icon: () => <span className="font-black text-sm">𝕏</span>,
      color: 'text-slate-800 bg-slate-100 hover:bg-slate-200 border-slate-300',
      badge: 'Follow on X'
    },
    {
      name: 'Facebook',
      value: 'Sabir Usmani',
      href: CREATOR_LINKS.facebook,
      icon: Facebook,
      color: 'text-blue-600 bg-blue-50 hover:bg-blue-100 border-blue-200',
      badge: 'Social Profile'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <SeoHead
        title="Contact Official – Sabir Usmani & MDK Convertor Support"
        description="Official contact channels for Sabir Usmani (Mr Sabir) and MDK Convertor. Reach out via WhatsApp +91 9458204216, Email, LinkedIn, GitHub, or social media."
        canonicalUrl="https://mdkconvertor.com/contact"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Creator &amp; Support Channels</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get in Touch with Sabir Usmani
          </h1>
          <p className="text-base text-slate-600 mt-3">
            Have questions, feedback, business inquiries, or feature suggestions? Connect directly through any of our official channels below.
          </p>
        </div>

        {/* 8 Official Links Grid */}
        <div className="mb-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-slate-400 font-bold mb-4 text-center">
            Official Communication &amp; Social Channels
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {officialChannels.map((channel) => {
              const IconComponent = channel.icon;
              return (
                <a
                  key={channel.name}
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex flex-col p-4 rounded-2xl border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${channel.color}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-9 h-9 rounded-xl bg-white shadow-xs flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/80 shadow-xs">
                      {channel.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900">{channel.name}</h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs font-medium text-slate-600 truncate">{channel.value}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 flex-shrink-0" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact Form & Direct WhatsApp Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct WhatsApp Support Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-8 border border-slate-700/80 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Sabir Usmani"
                className="w-12 h-12 rounded-xl object-contain bg-white/10 p-1 border border-emerald-400/40"
              />
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">Sabir Usmani</h3>
                <p className="text-xs text-emerald-400 font-mono">Creator &amp; Lead Developer</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              MDK Convertor is built and maintained by Sabir Usmani. For immediate support, bug reports, or partnership opportunities, you can message directly on WhatsApp or drop an email.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>WhatsApp: <strong>+91 9458204216</strong></span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Email: <strong>sabirusmani159@gmail.com</strong></span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Response Time: Usually within 1–2 hours</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700/60 flex flex-col gap-2">
              <a
                href={CREATOR_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>

              <a
                href={CREATOR_LINKS.mailto}
                className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-soft">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Send a Message</h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill out the form below and we'll reply to your email or message you on WhatsApp.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Thank You for Reaching Out!</h4>
                  <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                    Your note has been received and forwarded to Sabir Usmani. Want an even faster answer?
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleOpenWhatsAppWithMessage}
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open This in WhatsApp Directly</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Sabir Usmani"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Your Message / Request
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you need help with, or suggest a new tool..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenWhatsAppWithMessage}
                    className="py-3 px-5 bg-slate-900 hover:bg-slate-800 text-emerald-400 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 border border-slate-700"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

