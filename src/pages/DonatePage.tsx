import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { SponsorsSection } from '../components/SponsorsSection';
import { NGO_DETAILS } from '../data/siteData';
import { Building2, Copy, Check, Heart, ShieldCheck, Mail, Phone, Info } from 'lucide-react';
import { useDonation } from '../context/DonationContext';

export const DonatePage: React.FC = () => {
  const { showToast } = useDonation();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(2500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorData, setDonorData] = useState({
    name: '',
    email: '',
    phone: '',
    pan: '',
    purpose: 'General Social Welfare',
  });
  const [isPledged, setIsPledged] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    showToast(`${label} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorData.name || !donorData.email || !donorData.phone) {
      alert('Please fill out all required fields.');
      return;
    }
    setIsPledged(true);
  };

  const effectiveAmount = selectedAmount === 'custom' ? customAmount || '0' : selectedAmount.toString();

  return (
    <div className="donate-page">
      <PageHeader
        title="Make A Donation"
        subtitle="Help today because tomorrow you may be the one who needs more helping!"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Donate' }]}
      />

      <section style={{ padding: '90px 0', backgroundColor: '#fcfcfc' }}>
        <div className="container">
          <div className="row">
            {/* Left Column: Official Bank Transfer Information */}
            <div className="col-lg-6 xs-padding" style={{ marginBottom: '40px' }}>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  padding: '40px',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
                  height: '100%',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <Heart size={24} color="#f8b864" fill="#f8b864" />
                  <span style={{ color: '#f8b864', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Transparent Social Giving
                  </span>
                </div>

                <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#282828', marginBottom: '16px', lineHeight: '42px' }}>
                  Direct Bank Contribution
                </h2>

                <p style={{ color: '#666', fontSize: '15px', lineHeight: '26px', marginBottom: '30px' }}>
                  Hindustan Manav Foundation receives all philanthropic contributions directly into its designated official bank account. We do not use third-party intermediaries, ensuring that 100% of your generous support reaches social welfare initiatives.
                </p>

                {/* Bank Details Box */}
                <div className="bank-details-card" style={{ margin: '0 0 30px 0', padding: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                    <Building2 size={24} color="#f8b864" />
                    <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: '#282828' }}>
                      Official Bank Account Details
                    </h3>
                  </div>

                  <div className="bank-row">
                    <span className="bank-label">Account Name</span>
                    <span className="bank-value" style={{ color: '#b45309' }}>
                      {NGO_DETAILS.bank.accountName}
                    </span>
                  </div>

                  <div className="bank-row">
                    <span className="bank-label">Account Number</span>
                    <div className="bank-value">
                      <span style={{ letterSpacing: '1px' }}>{NGO_DETAILS.bank.accountNumber}</span>
                      <button
                        type="button"
                        className="copy-btn"
                        onClick={() => handleCopy(NGO_DETAILS.bank.accountNumber, 'Account Number')}
                      >
                        {copiedField === 'Account Number' ? <Check size={14} /> : <Copy size={14} />}
                        {copiedField === 'Account Number' ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>

                  <div className="bank-row">
                    <span className="bank-label">IFSC Code</span>
                    <div className="bank-value">
                      <span>{NGO_DETAILS.bank.ifscCode}</span>
                      <button
                        type="button"
                        className="copy-btn"
                        onClick={() => handleCopy(NGO_DETAILS.bank.ifscCode, 'IFSC Code')}
                      >
                        {copiedField === 'IFSC Code' ? <Check size={14} /> : <Copy size={14} />}
                        {copiedField === 'IFSC Code' ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>

                  <div className="bank-row">
                    <span className="bank-label">Bank Name</span>
                    <span className="bank-value" style={{ fontWeight: 600 }}>
                      {NGO_DETAILS.bank.bankName}
                    </span>
                  </div>

                  <div className="bank-row">
                    <span className="bank-label">Branch & Type</span>
                    <span className="bank-value" style={{ fontWeight: 500, fontSize: '15px' }}>
                      {NGO_DETAILS.bank.branch} ({NGO_DETAILS.bank.accountType})
                    </span>
                  </div>
                </div>

                {/* Queries & Help Notice */}
                <div
                  style={{
                    backgroundColor: '#fffaf0',
                    borderLeft: '4px solid #f8b864',
                    padding: '20px',
                    borderRadius: '4px',
                  }}
                >
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#282828', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Info size={18} color="#d97706" /> Queries Regarding Donations?
                  </h4>
                  <p style={{ color: '#666', fontSize: '14px', lineHeight: '22px', margin: '0 0 12px 0' }}>
                    For any questions regarding bank transfers, receipts, or project allocation, please reach our donor desk directly:
                  </p>
                  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '14px' }}>
                    <a href={`tel:${NGO_DETAILS.phone}`} style={{ color: '#d97706', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                      <Phone size={15} /> {NGO_DETAILS.phone}
                    </a>
                    <a href={`mailto:${NGO_DETAILS.email}`} style={{ color: '#d97706', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                      <Mail size={15} /> {NGO_DETAILS.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Donor Pledge & Information Form */}
            <div className="col-lg-6 xs-padding">
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  padding: '40px',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
                }}
              >
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#282828', marginBottom: '10px' }}>
                  Donation Contribution Form
                </h3>
                <p style={{ color: '#666', fontSize: '15px', lineHeight: '24px', marginBottom: '25px' }}>
                  Select your contribution amount and fill your details. You can complete the transfer using the bank details on the left.
                </p>

                {!isPledged ? (
                  <form onSubmit={handlePledgeSubmit}>
                    {/* Amount Selector */}
                    <div style={{ marginBottom: '25px' }}>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#333', marginBottom: '10px' }}>
                        Contribution Amount (INR)
                      </label>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '10px' }}>
                        {[500, 1000, 2500, 5000, 10000].map((amt) => (
                          <button
                            type="button"
                            key={amt}
                            onClick={() => {
                              setSelectedAmount(amt);
                              setCustomAmount('');
                            }}
                            style={{
                              padding: '12px 0',
                              border: selectedAmount === amt ? '2px solid #f8b864' : '1px solid #ddd',
                              background: selectedAmount === amt ? '#fff8ed' : '#fff',
                              color: selectedAmount === amt ? '#d97706' : '#444',
                              fontWeight: 700,
                              fontSize: '15px',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                            }}
                          >
                            ₹{amt.toLocaleString()}
                          </button>
                        ))}
                        <button
                          type="button"
                          onClick={() => setSelectedAmount('custom')}
                          style={{
                            padding: '12px 0',
                            border: selectedAmount === 'custom' ? '2px solid #f8b864' : '1px solid #ddd',
                            background: selectedAmount === 'custom' ? '#fff8ed' : '#fff',
                            color: selectedAmount === 'custom' ? '#d97706' : '#444',
                            fontWeight: 700,
                            fontSize: '14px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                          }}
                        >
                          Custom
                        </button>
                      </div>

                      {selectedAmount === 'custom' && (
                        <input
                          type="number"
                          placeholder="Enter your custom contribution (₹)"
                          required
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            border: '1px solid #ccc',
                            borderRadius: '6px',
                            fontSize: '15px',
                            boxSizing: 'border-box',
                            marginTop: '8px',
                          }}
                        />
                      )}
                    </div>

                    {/* Donor Details */}
                    <div style={{ marginBottom: '15px' }}>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#444', marginBottom: '4px' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={donorData.name}
                        onChange={(e) => setDonorData({ ...donorData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          fontSize: '14px',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#444', marginBottom: '4px' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="rajesh@example.com"
                          value={donorData.email}
                          onChange={(e) => setDonorData({ ...donorData, email: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '14px',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#444', marginBottom: '4px' }}>
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 9876543210"
                          value={donorData.phone}
                          onChange={(e) => setDonorData({ ...donorData, phone: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '14px',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: '25px' }}>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#444', marginBottom: '4px' }}>
                        Cause or Purpose of Donation
                      </label>
                      <select
                        value={donorData.purpose}
                        onChange={(e) => setDonorData({ ...donorData, purpose: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          fontSize: '14px',
                          backgroundColor: '#fff',
                          boxSizing: 'border-box',
                        }}
                      >
                        <option value="General Social Welfare">General Social Welfare</option>
                        <option value="Child Education & Literacy">Child Education & Literacy</option>
                        <option value="Clean Drinking Water Initiative">Clean Drinking Water Initiative</option>
                        <option value="Underprivileged Community Care">Underprivileged Community Care</option>
                        <option value="Healthcare & Medical Camp">Healthcare & Medical Camp</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="default-btn"
                      style={{
                        width: '100%',
                        backgroundColor: '#f8b864',
                        color: '#ffffff',
                        padding: '15px 25px',
                        borderRadius: '4px',
                        fontSize: '16px',
                        fontWeight: 700,
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'center',
                        boxShadow: '0 4px 15px rgba(248, 184, 100, 0.4)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Pledge Contribution (₹{effectiveAmount})
                    </button>
                  </form>
                ) : (
                  <div
                    style={{
                      backgroundColor: '#f0fdf4',
                      border: '1px solid #86efac',
                      borderRadius: '8px',
                      padding: '30px 20px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: '#16a34a',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 15px auto',
                      }}
                    >
                      <ShieldCheck size={32} />
                    </div>
                    <h4 style={{ color: '#15803d', fontSize: '22px', fontWeight: 700, margin: '0 0 10px 0' }}>
                      Donation Pledge Received
                    </h4>
                    <p style={{ color: '#374151', fontSize: '15px', lineHeight: '24px', marginBottom: '20px' }}>
                      Thank you, <strong>{donorData.name}</strong>, for supporting <strong>{donorData.purpose}</strong>. Kindly execute the bank transfer of <strong>₹{effectiveAmount}</strong> using the details provided on this page.
                    </p>
                    <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '22px', marginBottom: '25px' }}>
                      Once done, please forward the transaction confirmation or UTR reference to{' '}
                      <a href={`mailto:${NGO_DETAILS.email}`} style={{ color: '#d97706', fontWeight: 600 }}>
                        {NGO_DETAILS.email}
                      </a>{' '}
                      or message us at{' '}
                      <a href={`tel:${NGO_DETAILS.phone}`} style={{ color: '#d97706', fontWeight: 600 }}>
                        {NGO_DETAILS.phone}
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsPledged(false)}
                      className="default-btn"
                      style={{
                        backgroundColor: '#f8b864',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 24px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 600,
                      }}
                    >
                      Submit Another Contribution
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SponsorsSection />
    </div>
  );
};

