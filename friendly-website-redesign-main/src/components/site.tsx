import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import {
  ChevronDown,
  Phone,
  ArrowRight,
  Menu,
  X,
  Play,
  Check,
  ShieldCheck,
  ScanFace,
  Brain,
  Layers,
  FileText,
  Boxes,
  Code,
  ArrowUpRight,
  ArrowLeft,
  User,
  MessageSquare,
  ChevronUp,
  Send,
  Lock,
  Award,
  CheckCircle2,
  Cpu,
  Smartphone,
  Sparkles,
  Zap,
  BarChart3,
  Building2,
  FileCheck,
  ShieldAlert,
  Smile,
  MoreVertical,
  CheckCheck
} from 'lucide-react';
import { toast } from 'sonner';

// Custom Scroll Reveal Hook for Scroll Animations
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px 50px 0px' }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-stagger, .reveal-section');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100) {
          el.classList.add('is-visible');
        }
        observer.observe(el);
      });
    };

    // Initial check
    observeElements();

    // Listen for dynamic DOM mutations from TanStack Router navigation
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Fallback timer to ensure content is always visible
    const fallbackTimer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-stagger, .reveal-section');
      elements.forEach((el) => el.classList.add('is-visible'));
    }, 250);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);
}

import coppersLogo from '@/assets/coppers-logo.png';
import team1 from '@/assets/team-1.jpg';
import team2 from '@/assets/team-2.jpg';
import team3 from '@/assets/team-3.jpg';
import team4 from '@/assets/team-4.jpg';
import companyMain from '@/assets/coppers-team.jpg';
import companySecondary from '@/assets/company-secondary.jpg';
import heroPhoto from '@/assets/hero-tablet-user.jpg';

// Brand Logo Component with official Coppers logo asset
export function BrandLogo() {
  return (
    <Link to="/" className="brand-logo" aria-label="Coppers Home - Return to main page" title="Return to Home page">
      <img src={coppersLogo} alt="Coppers Digital Verification Logo" className="brand-logo-img" />
    </Link>
  );
}

// Request Demo Modal
export function DemoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '10-50',
    solution: 'Credit Verification (CPV & RCU)',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Demo Request Submitted! Our risk specialist will contact you within 2 hours.');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="demo-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div className="eyebrow-pill eyebrow-pill-light" style={{ marginInline: 'auto' }}>
            DEMO REQUEST
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', color: '#070B19' }}>
            Experience Coppers Verification Platform
          </h2>
          <p style={{ fontSize: '14px', color: '#60687A', marginTop: '6px' }}>
            See how our CPV field engine and eKYC OCR can transform your onboarding turnaround times.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="demo-form-grid">
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              placeholder="e.g. Rajesh Sharma"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Work Email *</label>
            <input
              type="email"
              placeholder="r.sharma@bank.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Bank / Financial Institution *</label>
            <input
              type="text"
              placeholder="e.g. Apex Commercial Bank"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Field / Onboarding Team Size</label>
            <select
              value={formData.teamSize}
              onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
            >
              <option value="1-10">1 - 10 Agents</option>
              <option value="10-50">10 - 50 Agents</option>
              <option value="50-200">50 - 200 Agents</option>
              <option value="200+">200+ Enterprise</option>
            </select>
          </div>

          <div className="form-group full">
            <label>Primary Solution Needed</label>
            <select
              value={formData.solution}
              onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
            >
              <option value="Credit Verification (CPV & RCU)">Credit Verification (CPV & RCU)</option>
              <option value="Digital eKYC & Video Verification">Digital eKYC & Video Verification</option>
              <option value="Biometric Identity APIs">Biometric & Identity APIs</option>
              <option value="Website & Mobile Application Development">Website & Mobile Development</option>
            </select>
          </div>

          <div className="form-group full">
            <label>Requirements / Notes (Optional)</label>
            <textarea
              rows={3}
              placeholder="Tell us about your current verification process or timeline..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <div className="form-group full" style={{ marginTop: '10px' }}>
            <button type="submit" className="btn-explore" style={{ width: '100%', justifyContent: 'center' }}>
              SCHEDULE MY LIVE DEMO <ArrowRight size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Floating Logo Chat Widget Component (AI Support & Chatbot)
export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [verifications, setVerifications] = useState(10000);
  const [agents, setAgents] = useState(25);
  const [messages, setMessages] = useState<
    Array<{ sender: 'bot' | 'user'; text?: string; isRoiWidget?: boolean; time: string }>
  >([
    {
      sender: 'bot',
      text: 'Hello! 👋 Thank you for visiting Coppers Digital Verification. How can I assist you regarding our website, credit verification platforms (CPV/RCU), eKYC solutions, or ROI savings calculations today?',
      time: 'Just now',
    },
  ]);
  const [input, setInput] = useState('');

  const annualSavings = Math.round(verifications * 120 * 12);
  const hoursSaved = Math.round(verifications * 0.45);

  const sendQuery = (userText: string) => {
    if (!userText.trim()) return;

    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages((prev) => [...prev, { sender: 'user', text: userText, time: timeStr }]);

    const lower = userText.toLowerCase();

    setTimeout(() => {
      if (lower.includes('roi') || lower.includes('calculator') || lower.includes('savings') || lower.includes('cost') || lower.includes('calculate')) {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: 'Here is your interactive ROI & Cost Savings Calculator. Adjust your monthly verification volume and team size below to calculate your savings live:',
            time: timeStr,
          },
          {
            sender: 'bot',
            isRoiWidget: true,
            time: timeStr,
          },
        ]);
      } else if (lower.includes('dpdp') || lower.includes('rbi') || lower.includes('security') || lower.includes('compliance') || lower.includes('iso')) {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: '🔒 Security & Compliance Guarantee:\nCoppers is ISO 27001 Certified, SOC 2 Type II Compliant, 256-Bit AES Encrypted, and strictly compliant with DPDP Act 2023 & RBI guidelines for financial data privacy.',
            time: timeStr,
          },
        ]);
      } else if (lower.includes('offline') || lower.includes('remote') || lower.includes('sync') || lower.includes('agent')) {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: '📱 Offline Sync Capabilities:\nOur CPV Field App stores geo-tagged check-ins, site photos, and verification records locally when connectivity drops in remote locations, and auto-syncs securely once reconnected.',
            time: timeStr,
          },
        ]);
      } else if (lower.includes('api') || lower.includes('sdk') || lower.includes('integrate') || lower.includes('fast')) {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: '⚡ RESTful API & SDK Integration:\nOur eKYC & Identity APIs respond in under < 2 seconds with 99.8% uptime SLA. Engineering teams typically complete sandbox integration within 48 hours.',
            time: timeStr,
          },
        ]);
      } else if (lower.includes('solution') || lower.includes('what') || lower.includes('offer')) {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: 'We offer 3 core platform solutions:\n1. Credit Verification Platform (CPV & RCU field team sync)\n2. eKYC Verification (Passport, National ID, Visa OCR & 3D Face Match)\n3. Biometric & Identity Verification APIs for financial onboarding.',
            time: timeStr,
          },
        ]);
      } else if (lower.includes('cpv') || lower.includes('rcu') || lower.includes('credit')) {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: 'CPV (Credit Point Verification) connects field agents with real-time GPS check-ins, photo uploads, and offline sync. RCU (Risk Containment Unit) automates fraud anomaly flagging for banking credit decisions.',
            time: timeStr,
          },
        ]);
      } else if (lower.includes('ekyc') || lower.includes('ocr') || lower.includes('document')) {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: 'Our eKYC OCR engine supports Passport, National ID, Visa OCR, and live 3D face matching with <2s response time and 99.4% accuracy.',
            time: timeStr,
          },
        ]);
      } else if (lower.includes('demo') || lower.includes('schedule') || lower.includes('contact') || lower.includes('sales')) {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: 'You can request a personalized live platform demo by clicking the "REQUEST DEMO" button in the navigation header, or call us at +91 9044454100.',
            time: timeStr,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: 'Thank you for your inquiry! Coppers connects field verification teams, credit analysts, and eKYC onboarding into a single secure platform. For urgent inquiries, call our direct line at +91 9044454100.',
            time: timeStr,
          },
        ]);
      }
    }, 600);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    sendQuery(input);
    setInput('');
  };

  return (
    <>
      {/* Floating Logo Launcher Button on Bottom Right */}
      <button
        className="floating-chat-logo-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Coppers Chat Support"
      >
        <span className="floating-chat-online-badge" />
        <img src={coppersLogo} alt="Coppers Chat Logo" />
      </button>

      {/* Chat Window Card */}
      {isOpen && (
        <div className="chat-window-card">
          {/* Header Banner */}
          <div className="chat-header-banner">
            <button className="chat-header-close-btn" onClick={() => setIsOpen(false)} aria-label="Close chat">
              <X size={16} />
            </button>

            <div className="chat-header-logo-icon">
              <img src={coppersLogo} alt="Coppers Icon" />
            </div>

            <h3>How can we help?</h3>
            <p>We typically reply within a few seconds • AI Assistant</p>
          </div>

          {/* Messages Stream */}
          <div className="chat-messages-container">
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg-row ${m.sender}`}>
                {m.isRoiWidget ? (
                  <div className="chat-roi-widget">
                    <div className="chat-roi-title">
                      <Sparkles size={14} style={{ color: '#FF4D00' }} /> Interactive ROI Calculator
                    </div>

                    <div className="chat-roi-slider-group">
                      <div className="chat-roi-slider-label">
                        <span>Monthly Cases:</span>
                        <strong>{verifications.toLocaleString()}</strong>
                      </div>
                      <input
                        type="range"
                        min={1000}
                        max={50000}
                        step={1000}
                        value={verifications}
                        onChange={(e) => setVerifications(Number(e.target.value))}
                        className="chat-roi-slider"
                      />
                    </div>

                    <div className="chat-roi-slider-group">
                      <div className="chat-roi-slider-label">
                        <span>Field Agents:</span>
                        <strong>{agents}</strong>
                      </div>
                      <input
                        type="range"
                        min={5}
                        max={200}
                        step={5}
                        value={agents}
                        onChange={(e) => setAgents(Number(e.target.value))}
                        className="chat-roi-slider"
                      />
                    </div>

                    <div className="chat-roi-summary-box">
                      <div className="chat-roi-savings">₹{annualSavings.toLocaleString()}</div>
                      <div className="chat-roi-savings-sub">Estimated Annual Operational Savings</div>
                      <div className="chat-roi-stats-row">
                        <span>⚡ {hoursSaved.toLocaleString()} hrs saved/mo</span>
                        <span>🚀 85% SLA Speedup</span>
                      </div>
                      <button
                        className="btn-explore"
                        onClick={() => setIsDemoOpen(true)}
                        style={{ width: '100%', marginTop: '10px', fontSize: '11px', padding: '8px' }}
                      >
                        REQUEST CUSTOM REPORT <Sparkles size={12} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className={m.sender === 'bot' ? 'chat-bubble-bot' : 'chat-bubble-user'}>
                    {m.text}
                  </div>
                )}

                <div className="chat-msg-time" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {m.time} {m.sender === 'user' && <CheckCheck size={12} style={{ color: '#10B981' }} />}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="chat-quick-chips">
                <button className="chip-btn" onClick={() => sendQuery('🧮 Calculate ROI & Cost Savings')}>
                  🧮 Calculate ROI & Cost Savings
                </button>
                <button className="chip-btn" onClick={() => sendQuery('🔒 Is Coppers DPDP Act 2023 & RBI Compliant?')}>
                  🔒 DPDP Act & RBI Compliance
                </button>
                <button className="chip-btn" onClick={() => sendQuery('📱 How does offline sync work for field agents?')}>
                  📱 Field Agent Offline Sync
                </button>
                <button className="chip-btn" onClick={() => sendQuery('⚡ How fast can we integrate REST APIs?')}>
                  ⚡ REST API Integration Speed
                </button>
                <button className="chip-btn" onClick={() => sendQuery('What solutions do you provide?')}>
                  🚀 Core Platform Solutions
                </button>
                <button className="chip-btn" onClick={() => sendQuery('How can I schedule a live demo?')}>
                  📅 Schedule a live demo
                </button>
              </div>
            )}
          </div>

          {/* Footer Input Box */}
          <div className="chat-footer-input-box">
            <form onSubmit={handleSend} className="chat-input-form">
              <button type="button" style={{ color: '#8890A4', padding: '4px' }} aria-label="Emoji">
                <Smile size={18} />
              </button>

              <input
                type="text"
                className="chat-text-field"
                placeholder="Message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <button type="submit" className="chat-send-btn" aria-label="Send Message">
                <Send size={15} />
              </button>
            </form>

            <div className="chat-branding-footer">
              <img src={coppersLogo} alt="Coppers" style={{ height: '12px', width: 'auto' }} />
              <span>Powered by Coppers AI Support</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Header Navigation Component with Mega Dropdowns
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container-site header-inner">
          <BrandLogo />

          <nav className="desktop-nav" aria-label="Main Navigation">
            {/* Home Navigation Link */}
            <Link to="/" className="nav-item" activeProps={{ 'data-status': 'active' }} activeOptions={{ exact: true }}>
              Home
            </Link>

            {/* Solutions Dropdown */}
            <div className="nav-item-wrapper">
              <Link to="/solutions" className="nav-item" activeProps={{ 'data-status': 'active' }}>
                Solutions <ChevronDown size={14} />
              </Link>

              <div className="mega-dropdown">
                <Link to="/solutions" hash="credit-verification" className="dropdown-card">
                  <div className="dropdown-icon">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <div className="dropdown-title">Credit Verification (CPV)</div>
                    <div className="dropdown-desc">Connect field teams & credit analysts in real-time</div>
                  </div>
                </Link>

                <Link to="/solutions" hash="ekyc" className="dropdown-card">
                  <div className="dropdown-icon">
                    <ScanFace size={18} />
                  </div>
                  <div>
                    <div className="dropdown-title">eKYC & Video Verification</div>
                    <div className="dropdown-desc">OCR document extraction & liveness face match</div>
                  </div>
                </Link>

                <Link to="/solutions" hash="identity-verification" className="dropdown-card">
                  <div className="dropdown-icon">
                    <Brain size={18} />
                  </div>
                  <div>
                    <div className="dropdown-title">Identity Verification APIs</div>
                    <div className="dropdown-desc">AI-powered onboarding checks & fraud risk score</div>
                  </div>
                </Link>

                <Link to="/solutions" className="dropdown-card">
                  <div className="dropdown-icon">
                    <ShieldAlert size={18} />
                  </div>
                  <div>
                    <div className="dropdown-title">Risk Containment Unit (RCU)</div>
                    <div className="dropdown-desc">Fraud investigation tools for banking operations</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Platform Dropdown */}
            <div className="nav-item-wrapper">
              <Link to="/solutions" hash="platform" className="nav-item" activeProps={{ 'data-status': 'active' }}>
                Platform <ChevronDown size={14} />
              </Link>

              <div className="mega-dropdown">
                <Link to="/solutions" className="dropdown-card">
                  <div className="dropdown-icon">
                    <Smartphone size={18} />
                  </div>
                  <div>
                    <div className="dropdown-title">Field Agent Mobile App</div>
                    <div className="dropdown-desc">Geo-tagged check-ins & instant offline sync</div>
                  </div>
                </Link>

                <Link to="/solutions" className="dropdown-card">
                  <div className="dropdown-icon">
                    <Cpu size={18} />
                  </div>
                  <div>
                    <div className="dropdown-title">OCR & Biometric Engine</div>
                    <div className="dropdown-desc">Passport, National ID & Visa auto-parsing</div>
                  </div>
                </Link>

                <Link to="/solutions" className="dropdown-card">
                  <div className="dropdown-icon">
                    <BarChart3 size={18} />
                  </div>
                  <div>
                    <div className="dropdown-title">Risk Analytics Dashboard</div>
                    <div className="dropdown-desc">Centralized audit trail & decision engine</div>
                  </div>
                </Link>

                <Link to="/solutions" className="dropdown-card">
                  <div className="dropdown-icon">
                    <Code size={18} />
                  </div>
                  <div>
                    <div className="dropdown-title">Developer SDKs & Webhooks</div>
                    <div className="dropdown-desc">RESTful APIs for seamless core banking integration</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="nav-item-wrapper">
              <Link to="/company" hash="industries" className="nav-item" activeProps={{ 'data-status': 'active' }}>
                Industries <ChevronDown size={14} />
              </Link>

              <div className="mega-dropdown">
                <Link to="/company" className="dropdown-card">
                  <div className="dropdown-icon">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <div className="dropdown-title">Commercial & Retail Banks</div>
                    <div className="dropdown-desc">High-volume credit check automation</div>
                  </div>
                </Link>

                <Link to="/company" className="dropdown-card">
                  <div className="dropdown-icon">
                    <Zap size={18} />
                  </div>
                  <div>
                    <div className="dropdown-title">Microfinance & NBFCs</div>
                    <div className="dropdown-desc">Rapid field team verification for micro-loans</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="nav-item-wrapper right-aligned">
              <Link to="/insights" className="nav-item" activeProps={{ 'data-status': 'active' }}>
                Resources <ChevronDown size={14} />
              </Link>

              <div className="mega-dropdown">
                <Link to="/insights" className="dropdown-card">
                  <div className="dropdown-icon">
                    <FileCheck size={18} />
                  </div>
                  <div>
                    <div className="dropdown-title">Case Studies & ROI</div>
                    <div className="dropdown-desc">How partner banks cut turnaround times by 85%</div>
                  </div>
                </Link>

                <Link to="/insights" className="dropdown-card">
                  <div className="dropdown-icon">
                    <Lock size={18} />
                  </div>
                  <div>
                    <div className="dropdown-title">Security & Compliance</div>
                    <div className="dropdown-desc">ISO 27001, SOC2 & RBI guidelines overview</div>
                  </div>
                </Link>
              </div>
            </div>

            <Link to="/company" className="nav-item" activeProps={{ 'data-status': 'active' }}>
              Company
            </Link>

            <Link to="/contact" className="nav-item" activeProps={{ 'data-status': 'active' }}>
              Contact
            </Link>
          </nav>

          <div className="header-btn-row">
            <button className="btn-request-demo" onClick={() => setIsDemoOpen(true)}>
              REQUEST DEMO <Sparkles size={14} />
            </button>

            <button
              className="mobile-nav-toggle"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-dropdown">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/solutions" onClick={() => setMobileMenuOpen(false)}>
              Solutions & Platform
            </Link>
            <Link to="/company" onClick={() => setMobileMenuOpen(false)}>
              Company & Industries
            </Link>
            <Link to="/insights" onClick={() => setMobileMenuOpen(false)}>
              Resources & Case Studies
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
            <button
              className="btn-request-demo"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsDemoOpen(true);
              }}
              style={{ marginTop: '10px' }}
            >
              REQUEST DEMO <Sparkles size={14} />
            </button>
          </div>
        )}
      </header>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
}

// Verification Statistics Counter Bar Component (Trust & Credibility)
export function TrustStatsBar() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 1600;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 2;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="stats-counter-bar reveal-section">
      <div className="container-site stats-grid reveal-stagger">
        <div>
          <div className="stat-number">{Math.floor((count / 100) * 10)}M+</div>
          <div className="stat-label">Verifications Processed</div>
        </div>
        <div>
          <div className="stat-number">{(90 + (count / 100) * 9.8).toFixed(1)}%</div>
          <div className="stat-label">Fraud Detection Accuracy</div>
        </div>
        <div>
          <div className="stat-number">{Math.floor((count / 100) * 50)}+</div>
          <div className="stat-label">Partner Financial Institutions</div>
        </div>
        <div>
          <div className="stat-number">&lt; {(3 - (count / 100) * 1).toFixed(1)}s</div>
          <div className="stat-label">Average API Response Time</div>
        </div>
      </div>
    </div>
  );
}

// Security & Compliance Certifications Strip
export function SecurityBadgesBar() {
  return (
    <div className="security-badges-bar reveal-section">
      <div className="container-site security-badges-inner reveal-stagger">
        <div className="security-badge-item">
          <Lock size={16} /> ISO 27001 Certified
        </div>
        <div className="security-badge-item">
          <Award size={16} /> SOC 2 Type II Compliant
        </div>
        <div className="security-badge-item">
          <CheckCircle2 size={16} /> RBI Guidelines Ready
        </div>
        <div className="security-badge-item">
          <ShieldCheck size={16} /> 256-Bit AES Encryption
        </div>
        <div className="security-badge-item">
          <Building2 size={16} /> DPDP Act 2023 Compliant
        </div>
      </div>
    </div>
  );
}

// Interactive Platform UI Showcase Component (Product Visualization)
export function PlatformShowcase() {
  const [activeTab, setActiveTab] = useState<'field' | 'ocr' | 'admin'>('field');
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <section className="platform-showcase-section reveal-section" id="platform">
      <div className="container-site">
        <div className="section-header-centered reveal-on-scroll">
          <div className="eyebrow-pill">PLATFORM VISUALIZATION</div>
          <h2 style={{ color: '#FFFFFF' }}>Built for Field Agents, Analysts & Operations</h2>
        </div>

        <div className="platform-tabs-header reveal-on-scroll">
          <button
            className={`platform-tab-btn ${activeTab === 'field' ? 'active' : ''}`}
            onClick={() => setActiveTab('field')}
          >
            <Smartphone size={16} /> CPV Field Mobile Portal
          </button>

          <button
            className={`platform-tab-btn ${activeTab === 'ocr' ? 'active' : ''}`}
            onClick={() => setActiveTab('ocr')}
          >
            <ScanFace size={16} /> eKYC & Document OCR Engine
          </button>

          <button
            className={`platform-tab-btn ${activeTab === 'admin' ? 'active' : ''}`}
            onClick={() => setActiveTab('admin')}
          >
            <BarChart3 size={16} /> Risk Containment Dashboard
          </button>
        </div>

        <div className="platform-viewport">
          {activeTab === 'field' && (
            <div className="mockup-mobile-frame">
              <div className="mockup-status-badge">
                <CheckCircle2 size={14} /> LIVE FIELD CASE #48291
              </div>

              <div style={{ background: '#0F1629', borderRadius: '16px', padding: '16px', marginBottom: '14px' }}>
                <div style={{ fontSize: '11px', color: '#8890A4' }}>APPLICANT PROFILE</div>
                <div style={{ fontSize: '15px', fontWeight: '800', color: '#FFFFFF', marginTop: '2px' }}>
                  Anil Kumar Verma
                </div>
                <div style={{ fontSize: '12px', color: '#FF4D00', fontWeight: '700' }}>Commercial Credit CPV</div>
              </div>

              <div style={{ background: '#0F1629', borderRadius: '16px', padding: '16px', marginBottom: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '8px' }}>
                  <span style={{ color: '#8890A4' }}>GPS Geo-tag Check-in</span>
                  <span style={{ color: '#10B981', fontWeight: '700' }}>✓ 100% Match</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '8px' }}>
                  <span style={{ color: '#8890A4' }}>Residence Physical Check</span>
                  <span style={{ color: '#10B981', fontWeight: '700' }}>✓ Verified</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                  <span style={{ color: '#8890A4' }}>Neighbor Verification</span>
                  <span style={{ color: '#10B981', fontWeight: '700' }}>✓ Confirmed</span>
                </div>
              </div>

              <button
                className="btn-explore"
                style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '12px' }}
                onClick={() => setIsDemoOpen(true)}
              >
                APPROVE & SYNC TO RCU
              </button>
            </div>
          )}

          {activeTab === 'ocr' && (
            <div style={{ maxWidth: '640px', marginInline: 'auto' }}>
              <div className="mockup-scanner-window">
                <div className="scanner-laser-beam" />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div>
                    <span style={{ fontSize: '11px', color: '#FF4D00', fontWeight: '800' }}>REAL-TIME DOCUMENT OCR</span>
                    <h4 style={{ fontSize: '18px', color: '#FFFFFF' }}>Passport / National ID Parsing</h4>
                  </div>
                  <span style={{ background: 'rgba(16,185,129,0.2)', color: '#10B981', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: '800' }}>
                    99.4% CONFIDENCE
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', background: '#0F1629', padding: '18px', borderRadius: '12px' }}>
                  <div>
                    <span style={{ fontSize: '10px', color: '#8890A4' }}>DOCUMENT NO.</span>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#FFFFFF' }}>Z9482019-IN</div>
                  </div>
                  <div>
                    <span style={{ fontSize: '10px', color: '#8890A4' }}>ISSUE AUTHORITY</span>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#FFFFFF' }}>GOVT PASSPORT OFFICE</div>
                  </div>
                  <div>
                    <span style={{ fontSize: '10px', color: '#8890A4' }}>FACE MATCH SCORE</span>
                    <div style={{ fontSize: '13px', fontWeight: '800', color: '#10B981' }}>98.6% MATCH (PASS)</div>
                  </div>
                  <div>
                    <span style={{ fontSize: '10px', color: '#8890A4' }}>LIVENESS DETECTION</span>
                    <div style={{ fontSize: '13px', fontWeight: '800', color: '#10B981' }}>LIVE HUMAN CONFIRMED</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'admin' && (
            <div className="dashboard-grid-mockup">
              <div className="dash-sidebar">
                <div style={{ fontSize: '12px', fontWeight: '800', color: '#FF4D00', marginBottom: '16px' }}>
                  COPPERS RCU CONSOLE
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12px', color: '#8890A4' }}>
                  <div style={{ color: '#FFFFFF', fontWeight: '700' }}>📊 Active Audit Queue (42)</div>
                  <div>🔍 High-Risk Alerts (3)</div>
                  <div>🛡️ Verified Portfolios</div>
                  <div>⚙️ API Configuration</div>
                </div>
              </div>

              <div className="dash-main-area">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                  <div style={{ background: '#0F1629', padding: '14px', borderRadius: '10px' }}>
                    <div style={{ fontSize: '10px', color: '#8890A4' }}>TODAY'S VERIFICATIONS</div>
                    <div style={{ fontSize: '20px', fontWeight: '800', color: '#FFFFFF' }}>14,290</div>
                  </div>
                  <div style={{ background: '#0F1629', padding: '14px', borderRadius: '10px' }}>
                    <div style={{ fontSize: '10px', color: '#8890A4' }}>FRAUD BLOCKED</div>
                    <div style={{ fontSize: '20px', fontWeight: '800', color: '#10B981' }}>₹4.2 Cr</div>
                  </div>
                  <div style={{ background: '#0F1629', padding: '14px', borderRadius: '10px' }}>
                    <div style={{ fontSize: '10px', color: '#8890A4' }}>FIELD SLA AVG</div>
                    <div style={{ fontSize: '20px', fontWeight: '800', color: '#FF4D00' }}>1.8 Hours</div>
                  </div>
                </div>

                <div style={{ background: '#0F1629', padding: '16px', borderRadius: '12px', fontSize: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontWeight: '700' }}>
                    <span>REAL-TIME AUDIT STREAM</span>
                    <span style={{ color: '#10B981' }}>● System Healthy</span>
                  </div>
                  <div style={{ color: '#8890A4', lineHeight: '1.8' }}>
                    • Case #9420: CPV Field check completed in Delhi NCR (Outcome: Positive)
                    <br />• Case #9421: eKYC OCR face match score 99.1% (Auto-Approved)
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </section>
  );
}

// Case Studies & Credibility Proof Section
export function CaseStudiesSection() {
  const cases = [
    {
      bank: 'Apex Commercial Bank',
      stat: '85% Faster',
      desc: 'Reduced credit verification turnaround time from 3 days to under 2 hours.',
    },
    {
      bank: 'CrediSphere NBFC',
      stat: '99.8% Accuracy',
      desc: 'Identified fraudulent identity documents before loan disbursement.',
    },
    {
      bank: 'Horizon Microfinance',
      stat: '3x Volume',
      desc: 'Scaled field agent capacity without increasing operational headcount.',
    },
  ];

  return (
    <section className="case-studies-section reveal-section">
      <div className="container-site">
        <div className="section-header-centered reveal-on-scroll">
          <div className="eyebrow-pill eyebrow-pill-light">PROVEN RESULTS</div>
          <h2>Proven Impact Across Banking & Lending</h2>
        </div>

        <div className="case-studies-grid reveal-stagger">
          {cases.map((c, i) => (
            <div key={i} className="case-study-card">
              <div className="case-stat-badge">{c.stat}</div>
              <div className="case-stat-desc">{c.bank}</div>
              <p style={{ fontSize: '13px', color: '#555D70', lineHeight: '1.7' }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Video Modal Component
export function VideoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Coppers Digital Verification Platform Overview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

// Orange Ticker Bar Component
export function TickerBar() {
  return (
    <div className="ticker-bar reveal-section">
      <div className="ticker-track">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="ticker-item">
            <span>Experience Seamless IT & Verification Solutions</span>
            <span className="ticker-star">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Services Section with Enhanced Benefits & Badges
export function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const servicesList = [
    {
      id: 'credit-verification',
      title: 'Verification Platform',
      badge: '99.8% ACCURACY',
      description:
        'Connect your field teams and credit analysts. Keep verification information organized from the first visit to the final review.',
      icon: ShieldCheck,
      featured: false,
    },
    {
      id: 'ekyc',
      title: 'eKYC Verification Solutions',
      badge: 'INSTANT OCR & FACE MATCH',
      description:
        'Transform Onboarding with Advanced Passport, National ID, Visa OCR, Face Match, and Video KYC Solutions.',
      icon: ScanFace,
      featured: true,
    },
    {
      id: 'identity-verification',
      title: 'Identity Verification',
      badge: 'REAL-TIME APIS',
      description:
        'Build confidence in who you are doing business with. Bring AI-powered identity checks directly into your onboarding experience.',
      icon: Brain,
      featured: false,
    },
  ];

  return (
    <section className="services-section reveal-section" id="solutions">
      <div className="container-site">
        <div className="section-header-centered reveal-on-scroll">
          <div className="eyebrow-pill eyebrow-pill-light">SERVICES</div>
          <h2>We Provide Exclusive Service For Financial Institutions</h2>
        </div>

        <div className="services-grid reveal-stagger">
          {servicesList.map((service, index) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className={`service-card-v2 ${service.featured ? 'featured' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <span className="service-benefit-badge">{service.badge}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-action-row">
                  <Link to="/solutions" hash={service.id} className="service-learn-link">
                    LEARN MORE <ArrowRight size={14} />
                  </Link>

                  <Link to="/solutions" hash={service.id} className="service-icon-btn" aria-label={`Explore ${service.title}`}>
                    <IconComp size={24} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="services-pagination-dots">
          {servicesList.map((_, i) => (
            <div
              key={i}
              className={`page-dot ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Company / About Section
export function CompanySection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <section className="company-section reveal-section" id="company">
        <div className="company-bg-rings" />
        <div className="container-site company-grid">
          <div className="company-media-layout">
            <img src={companyMain} alt="Financial Professionals Collaborating" className="company-main-img" />
            <div className="company-accent-square-top" />
            <div className="company-secondary-img-wrapper">
              <img src={companySecondary} alt="Businesswoman at computer" />
            </div>
          </div>

          <div className="company-content">
            <div className="eyebrow-pill eyebrow-pill-light">COMPANY</div>
            <h2>Essential IT Solutions for Financial Institutions and associates' partners of Financial Institutions.</h2>

            <p>
              Coppers is a company specializing in fraud investigations within the banking sector. Our dedicated team of
              professionals utilizes advanced data analysis techniques and industry expertise to uncover fraudulent activities
              and help our clients mitigate risks with a focus on accuracy and efficiency.
            </p>

            <div className="company-checklist">
              <div className="checklist-item">
                <div className="check-icon-circle">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span>WEBSITE & MOBILE APPLICATION DESIGN & DEVELOPMENT</span>
              </div>

              <div className="checklist-item">
                <div className="check-icon-circle">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span>CREDIT VERIFICATION PLATFORM & FIELD TEAM INTEGRATION</span>
              </div>
            </div>

            <div className="company-cta-row">
              <button className="btn-explore" onClick={() => setIsDemoOpen(true)}>
                REQUEST DEMO <ArrowRight size={18} />
              </button>

              <a href="tel:+919044454100" className="phone-contact-link">
                <div className="phone-icon-btn">
                  <Phone size={20} />
                </div>
                <div className="phone-info-text">
                  <span>CONTACT US</span>
                  <span>+91 9044454100</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
}

// Dedicated Team Section
export function TeamSection() {
  const teamMembers = [
    {
      name: 'Alex Morgan',
      role: 'Lead CPV & Fraud Specialist',
      img: team1,
    },
    {
      name: 'Sarah Jenkins',
      role: 'Head of eKYC & Compliance',
      img: team2,
    },
    {
      name: 'Elena Rostova',
      role: 'Chief Product Architect',
      img: team3,
    },
    {
      name: 'David Chen',
      role: 'Chief Technology Officer',
      img: team4,
    },
  ];

  return (
    <section className="team-section reveal-section">
      <div className="container-site">
        <div className="section-header-centered reveal-on-scroll">
          <div className="eyebrow-pill eyebrow-pill-light">OUR TEAM MEMBER</div>
          <h2>Dedicated Team Members</h2>
        </div>

        <div className="team-grid reveal-stagger">
          {teamMembers.map((m, i) => (
            <div key={i} className="team-card">
              <div className="team-img-wrapper">
                <img src={m.img} alt={m.name} />
              </div>
              <div className="team-info">
                <h4>{m.name}</h4>
                <p>{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects / Portfolio Section
export function ProjectsSection() {
  const [activeCard, setActiveCard] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'CPV Field Mobile Portal',
      category: 'Credit Verification',
      img: companyMain,
    },
    {
      id: 2,
      title: 'eKYC & Document OCR Engine',
      category: 'Onboarding Tech',
      img: heroPhoto,
    },
    {
      id: 3,
      title: 'Bank Fraud Containment Dashboard',
      category: 'RCU Analytics',
      img: companySecondary,
    },
    {
      id: 4,
      title: 'Digital Onboarding Mobile SDK',
      category: 'Identity APIs',
      img: team1,
    },
  ];

  return (
    <section className="projects-section reveal-section">
      <div className="container-site">
        <div className="eyebrow-pill reveal-on-scroll">OUR PROJECT NOW</div>

        <div className="projects-header-row reveal-on-scroll">
          <h2>Technology's Evolution Towards Brilliance</h2>

          <div className="projects-nav-btns">
            <button
              className="nav-arrow-btn"
              onClick={() => setActiveCard((prev) => (prev > 0 ? prev - 1 : projects.length - 1))}
              aria-label="Previous project"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              className="nav-arrow-btn active"
              onClick={() => setActiveCard((prev) => (prev < projects.length - 1 ? prev + 1 : 0))}
              aria-label="Next project"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="projects-grid reveal-stagger">
          {projects.map((p, idx) => (
            <div key={p.id} className="project-card">
              <img src={p.img} alt={p.title} />
              <div className="project-card-overlay">
                <span style={{ fontSize: '11px', color: '#FF4D00', fontWeight: '800', textTransform: 'uppercase' }}>
                  {p.category}
                </span>
                <h3 style={{ fontSize: '18px', color: '#FFFFFF', marginTop: '4px' }}>{p.title}</h3>
                <div className="project-card-arrow">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Orange Partner Brands Strip */}
      <div className="client-logos-bar">
        <div className="container-site client-logos-inner reveal-stagger">
          <div className="client-logo-item">
            <span>🌿</span> GRAMEEN
          </div>
          <div className="client-logo-item">Walmart ✳</div>
          <div className="client-logo-item">
            <span>🌐</span> DELUXON
          </div>
          <div className="client-logo-item">
            <span>⚡</span> AROUNDS
          </div>
        </div>
      </div>
    </section>
  );
}

// Authentic Client Testimonials Section
export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rajesh Verma',
      role: 'CHIEF RISK OFFICER • APEX BANK',
      avatar: team1,
      quote:
        'Coppers transformed our credit verification workflow. Our field teams inspect 3x more cases per day with zero paper delay.',
    },
    {
      name: 'Ananya Sharma',
      role: 'HEAD OF DIGITAL ONBOARDING • CREDISPHERE',
      avatar: team2,
      quote:
        'The eKYC OCR engine accuracy is unmatched. We reduced customer onboarding drop-offs by 42% in the first quarter alone.',
    },
    {
      name: 'Vikramaditya Rao',
      role: 'DIRECTOR OF RCU • HORIZON NBFC',
      avatar: team4,
      quote:
        'The RCU fraud detection APIs caught invalid land registry documents that manual review missed. Indispensable for banking security.',
    },
  ];

  return (
    <section className="testimonials-section reveal-section">
      <div className="container-site">
        <div className="section-header-centered reveal-on-scroll">
          <div className="eyebrow-pill eyebrow-pill-light">CLIENTS FEEDBACK</div>
          <h2>Perspectives and Experiences</h2>
        </div>

        <div className="testimonials-grid reveal-stagger">
          {testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="quote-icon">”</div>
              <p className="testimonial-text">{item.quote}</p>
              <div className="testimonial-stars">★★★★★</div>

              <div className="testimonial-author-name">{item.name}</div>
              <div className="testimonial-author-role">{item.role}</div>

              <div className="testimonial-avatar">
                <img src={item.avatar} alt={item.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Working Process Section
export function ProcessSection() {
  const steps = [
    {
      id: 1,
      title: 'Requirement',
      desc: 'Paradigms open source in working process.',
      icon: FileText,
    },
    {
      id: 2,
      title: 'UI/UX Design',
      desc: 'Paradigms open source in working process.',
      icon: Layers,
    },
    {
      id: 3,
      title: 'Prototype',
      desc: 'Paradigms open source in working process.',
      icon: Boxes,
    },
    {
      id: 4,
      title: 'Development',
      desc: 'Paradigms open source in working process.',
      icon: Code,
    },
  ];

  return (
    <section className="process-section reveal-section">
      <div className="container-site">
        <div className="process-card-container">
          <div className="process-header-grid reveal-on-scroll">
            <div>
              <div className="eyebrow-pill eyebrow-pill-light">OUR PROCESS</div>
              <h2>The Essence of Our Easy Working Process</h2>
            </div>
            <div>
              <p>
                Paradigms monotonectally extend open-source creative design via competitive methods of empowerment to IT
                solutions for revolutionize stand-business client.
              </p>
            </div>
          </div>

          <div className="process-steps-grid reveal-stagger">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={step.id} className="process-step-item">
                  <div className="process-step-icon">
                    <IconComp size={24} />
                  </div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>

                  {idx < steps.length - 1 && <div className="step-connector-arrow">▶</div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Latest News & Blog Section with Live Search & Category Filtering
export function BlogSection() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');

  const blogs = [
    {
      id: 1,
      category: 'CREDIT VERIFICATION',
      slug: 'streamlining-cpv-field-verification-workflows',
      title: 'Streamlining CPV Field Verification Workflows',
      author: 'HOSSAIN ASIF',
      comments: 'COMMENTS (3)',
      img: heroPhoto,
    },
    {
      id: 2,
      category: 'EKYC & OCR',
      slug: 'ai-optical-recognition-ekyc-compliance',
      title: 'AI & Optical Recognition in eKYC Compliance',
      author: 'HOSSAIN ASIF',
      comments: 'COMMENTS (5)',
      img: companyMain,
    },
    {
      id: 3,
      category: 'FRAUD PREVENTION',
      slug: 'how-risk-containment-units-prevent-bank-fraud',
      title: 'How Risk Containment Units Prevent Bank Fraud',
      author: 'HOSSAIN ASIF',
      comments: 'COMMENTS (2)',
      img: companySecondary,
    },
  ];

  const categories = ['ALL', 'CREDIT VERIFICATION', 'EKYC & OCR', 'FRAUD PREVENTION'];

  const filteredBlogs = blogs.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'ALL' || b.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="blog-section reveal-section" id="insights">
      <div className="container-site">
        <div className="section-header-centered reveal-on-scroll">
          <div className="eyebrow-pill eyebrow-pill-light">LATEST NEWS & BLOG</div>
          <h2>Your Source for Every Update</h2>
        </div>

        {/* Live Search & Category Filter Pills */}
        <div className="insights-filter-container reveal-on-scroll">
          <input
            type="text"
            className="insights-search-input"
            placeholder="Search verification guides, eKYC, RCU..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="category-pills-row">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-pill-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="blog-grid reveal-stagger">
          {filteredBlogs.map((b) => (
            <div key={b.id} className="blog-card">
              <div className="blog-card-media">
                <img src={b.img} alt={b.title} />
                <span className="blog-category-tag">{b.category}</span>
              </div>

              <div className="blog-card-content">
                <div className="blog-meta-row">
                  <span>
                    <User size={14} /> {b.author}
                  </span>
                  <span>
                    <MessageSquare size={14} /> {b.comments}
                  </span>
                </div>

                <h3>{b.title}</h3>

                <Link to="/insights/$slug" params={{ slug: b.slug }} className="read-post-btn">
                  READ POST <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 1. Interactive ROI & Cost Savings Calculator Component
export function RoiCalculator() {
  const [verifications, setVerifications] = useState(10000);
  const [agents, setAgents] = useState(25);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const hoursSaved = Math.round(verifications * 0.45);
  const annualSavings = Math.round(verifications * 120 * 12);

  return (
    <section className="roi-calculator-section">
      <div className="container-site">
        <div className="section-header-centered reveal-on-scroll">
          <div className="eyebrow-pill eyebrow-pill-light">ROI & COST SAVINGS CALCULATOR</div>
          <h2>Calculate Your Institution's Efficiency Gains</h2>
        </div>

        <div className="roi-calculator-card reveal-on-scroll">
          <div className="roi-inputs-col">
            <div className="roi-slider-group">
              <div className="roi-slider-header">
                <label>Monthly Verification Volume</label>
                <span className="roi-slider-val">{verifications.toLocaleString()} Cases/mo</span>
              </div>
              <input
                type="range"
                min={1000}
                max={50000}
                step={1000}
                value={verifications}
                onChange={(e) => setVerifications(Number(e.target.value))}
                className="roi-range-input"
              />
            </div>

            <div className="roi-slider-group">
              <div className="roi-slider-header">
                <label>Active Field Verification Team</label>
                <span className="roi-slider-val">{agents} Field Agents</span>
              </div>
              <input
                type="range"
                min={5}
                max={200}
                step={5}
                value={agents}
                onChange={(e) => setAgents(Number(e.target.value))}
                className="roi-range-input"
              />
            </div>
          </div>

          <div className="roi-results-col">
            <div className="roi-result-metric">
              <span className="roi-metric-num">₹{annualSavings.toLocaleString()}</span>
              <span className="roi-metric-label">Estimated Annual Operational Savings</span>
            </div>

            <div className="roi-metrics-grid">
              <div>
                <span className="roi-sub-num">{hoursSaved.toLocaleString()} hrs</span>
                <span className="roi-sub-label">Field Agent Hours Saved / mo</span>
              </div>

              <div>
                <span className="roi-sub-num">85% Faster</span>
                <span className="roi-sub-label">Verification Turnaround</span>
              </div>
            </div>

            <button className="btn-explore" onClick={() => setIsDemoOpen(true)} style={{ width: '100%', marginTop: '16px' }}>
              GET CUSTOM ROI REPORT <Sparkles size={16} />
            </button>
          </div>
        </div>
      </div>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </section>
  );
}

// 2. Interactive Developer API Code Sandbox Component
export function ApiCodeSandbox() {
  const [activeLang, setActiveLang] = useState<'curl' | 'node' | 'python' | 'java'>('curl');

  const snippets = {
    curl: `curl -X POST "https://api.coppers.in/v1/verification/verify-identity" \\
  -H "Authorization: Bearer cpr_live_9824f2a1b" \\
  -H "Content-Type: application/json" \\
  -d '{
    "document_type": "NATIONAL_ID",
    "document_number": "ABCDE1234F",
    "face_match_enabled": true,
    "liveness_check": true
  }'`,
    node: `import { CoppersVerification } from '@coppers/sdk';

const client = new CoppersVerification({ apiKey: process.env.COPPERS_KEY });

const result = await client.identity.verify({
  documentType: 'NATIONAL_ID',
  documentNumber: 'ABCDE1234F',
  faceMatchEnabled: true,
});

console.log('Status:', result.status); // VERIFIED`,
    python: `from coppers import CoppersClient

client = CoppersClient(api_key="cpr_live_9824f2a1b")

response = client.verification.verify(
    document_type="NATIONAL_ID",
    document_number="ABCDE1234F",
    liveness_check=True
)

print(response.status) # VERIFIED`,
    java: `CoppersClient client = new CoppersClient("cpr_live_9824f2a1b");

VerificationRequest request = VerificationRequest.builder()
    .setDocumentType(DocumentType.NATIONAL_ID)
    .setDocumentNumber("ABCDE1234F")
    .setLivenessCheck(true)
    .build();

VerificationResult result = client.verify(request);`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeLang]);
    toast.success('API code snippet copied to clipboard!');
  };

  return (
    <section className="api-sandbox-section">
      <div className="container-site">
        <div className="section-header-centered reveal-on-scroll">
          <div className="eyebrow-pill">DEVELOPER READY</div>
          <h2 style={{ color: '#FFFFFF' }}>Integrate Verification APIs in Minutes</h2>
        </div>

        <div className="api-sandbox-card reveal-on-scroll">
          <div className="api-sandbox-header">
            <div className="api-lang-tabs">
              {(['curl', 'node', 'python', 'java'] as const).map((lang) => (
                <button
                  key={lang}
                  className={`api-lang-btn ${activeLang === lang ? 'active' : ''}`}
                  onClick={() => setActiveLang(lang)}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <button className="copy-code-btn" onClick={handleCopy} aria-label="Copy Code">
              Copy Snippet
            </button>
          </div>

          <pre className="api-code-block">
            <code>{snippets[activeLang]}</code>
          </pre>

          <div className="api-sandbox-footer">
            <div className="api-status-tag">
              <span className="live-status-dot" /> 200 OK • Response Time: 480ms
            </div>
            <Link to="/contact" style={{ color: '#FF4D00', fontSize: '13px', fontWeight: '700' }}>
              Explore Developer API Documentation →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// 3. Infinite Scrolling Partner Bank Logos Marquee Component
export function PartnerLogosMarquee() {
  const partners = [
    'APEX COMMERCIAL BANK',
    'CREDISPHERE NBFC',
    'HORIZON MICROFINANCE',
    'GRAMEEN FINANCIAL',
    'AXIS CAPITAL',
    'FEDERAL CREDIT UNION',
    'FINTECH LENDING CORP',
  ];

  return (
    <div className="partner-marquee-bar">
      <div className="partner-marquee-track">
        {[...partners, ...partners].map((name, i) => (
          <div key={i} className="partner-logo-chip">
            <Building2 size={16} style={{ color: '#FF4D00' }} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 4. Whitepaper PDF Download Lead Modal
export function WhitepaperModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! Downloading 2026 Digital CPV & Banking Fraud Tech Brief PDF.');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="demo-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div className="eyebrow-pill eyebrow-pill-light" style={{ marginInline: 'auto' }}>
            WHITEPAPER DOWNLOAD
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#070B19' }}>
            Download 2026 Digital CPV & Banking Fraud Tech Brief
          </h2>
          <p style={{ fontSize: '14px', color: '#60687A', marginTop: '6px' }}>
            Learn how partner banks cut credit verification turnaround times by 85% with geo-tagged field engines.
          </p>
        </div>

        <form onSubmit={handleDownload} className="demo-form-grid" style={{ gridTemplateColumns: '1fr' }}>
          <div className="form-group">
            <label>Work Email Address *</label>
            <input
              type="email"
              placeholder="name@institution.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button className="btn-explore" type="submit" style={{ width: '100%', marginTop: '10px' }}>
            DOWNLOAD WHITEPAPER (PDF) <FileCheck size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}

// CTA Banner
export function ContactBanner() {
  return (
    <div className="cta-banner">
      <div className="container-site cta-banner-inner">
        <div className="cta-left">
          <div className="cta-phone-icon">
            <Phone size={22} />
          </div>
          <h3>Elevating Customer Experience.</h3>
        </div>

        <a href="tel:+919044454100" className="cta-phone-btn">
          <Phone size={16} /> +91 9044454100
        </a>
      </div>
    </div>
  );
}

// Structured 5-Column Main Site Footer
export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success('Thank you for subscribing to Coppers Risk & Verification Insights!');
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer-v2">
      <div className="footer-circuit-pattern" />

      <ContactBanner />

      <div className="container-site" style={{ paddingTop: '60px' }}>
        <div className="footer-grid-v2">
          {/* Col 1 */}
          <div className="footer-col-about">
            <BrandLogo />
            <p>
              With a commitment to excellence and customer satisfaction, we strive to deliver premium quality and
              innovative solutions tailored for financial institutions.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '12px', fontSize: '11px', color: '#10B981', fontWeight: '700' }}>
              <span>✓ ISO 27001</span>
              <span>✓ SOC 2 TYPE II</span>
            </div>
          </div>

          {/* Col 2: Platform */}
          <div className="footer-col">
            <h4>Platform</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/solutions">CPV Field Engine</Link>
              </li>
              <li>
                <Link to="/solutions">eKYC & OCR Scanner</Link>
              </li>
              <li>
                <Link to="/solutions">Biometric Face Match</Link>
              </li>
              <li>
                <Link to="/solutions">RCU Fraud Console</Link>
              </li>
              <li>
                <Link to="/solutions">Developer SDKs</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div className="footer-col">
            <h4>Solutions</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/solutions">Credit Verification</Link>
              </li>
              <li>
                <Link to="/solutions">Commercial Banking</Link>
              </li>
              <li>
                <Link to="/solutions">Microfinance & NBFCs</Link>
              </li>
              <li>
                <Link to="/solutions">Fintech Lending</Link>
              </li>
              <li>
                <Link to="/solutions">Risk Management</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div className="footer-col">
            <h4>Resources</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/insights">Case Studies</Link>
              </li>
              <li>
                <Link to="/insights">RBI Guidelines</Link>
              </li>
              <li>
                <Link to="/insights">Security Standards</Link>
              </li>
              <li>
                <Link to="/company">About Company</Link>
              </li>
              <li>
                <Link to="/contact">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter & Contact */}
          <div className="footer-col">
            <h4>Newsletter</h4>
            <p style={{ fontSize: '12px', color: '#8890A4', lineHeight: '1.6', marginBottom: '14px' }}>
              Subscribe to receiving banking fraud trends and eKYC technology updates.
            </p>

            <form onSubmit={handleSubscribe} className="newsletter-form-box">
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe to newsletter">
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom-v2">
          <div>© Copyright 2026. Coppers Digital Verification Services. All Rights Reserved.</div>

          <div className="footer-bottom-links">
            <Link to="/company">Privacy Policy</Link>
            <span>|</span>
            <Link to="/contact">Terms of Service</Link>
            <span>|</span>
            <Link to="/contact">Security</Link>
          </div>
        </div>
      </div>

      {/* Floating Chat Widget */}
      <ChatWidget />
    </footer>
  );
}

export function ContactBand() {
  return <ContactBanner />;
}

export function Intro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-intro">
      <div className="container-site">
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#8890A4' }}>
          <Link to="/" style={{ color: '#FF4D00', fontWeight: '700', textDecoration: 'none' }} title="Return to Home page">
            Home
          </Link>
          <span>/</span>
          <span style={{ color: '#FFFFFF', textTransform: 'capitalize' }}>{eyebrow}</span>
        </div>

        <div className="eyebrow-pill" style={{ marginInline: 'auto' }}>
          {eyebrow}
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
