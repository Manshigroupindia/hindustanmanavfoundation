import React, { useState } from 'react';
import { useDonation } from '../context/DonationContext';
import { NGO_DETAILS } from '../data/siteData';
import { X, Copy, Check, Heart, Building2, Phone, Mail, ShieldAlert } from 'lucide-react';

export const DonationModal: React.FC = () => {
  const { isDonationOpen, closeDonation, selectedCause, showToast } = useDonation();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pan: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isDonationOpen) return null;

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    showToast(`${fieldName} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in your name, email, and phone number.');
      return;
    }
    setIsSubmitted(true);
  };

  const currentAmount = selectedAmount === 'custom' ? customAmount || '0' : selectedAmount.toString();

  return (
    <div className="modal-overlay" onClick={closeDonation}>
      <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={closeDonation} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ padding: '30px' }}>
          <div style={{ textAlign: 'center', marginBottom: '25px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#fff3e0',
                color: '#d97706',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: 600,
                marginBottom: '10px',
              }}
            >
              <Heart size={14} fill="#d97706" /> Make a Difference
            </span>
            <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#282828', margin: '0 0 8px 0' }}>
              Support Hindustan Manav Foundation
            </h2>
            <p style={{ color: '#666', fontSize: '15px', margin: 0 }}>
              {selectedCause ? `Contributing to: "${selectedCause}"` : 'Your contribution directly empowers our social welfare and public relief initiatives.'}
            </p>
          </div>

          {/* Official Bank Account Details Card */}
          <div className="bank-details-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Building2 size={20} color="#f8b864" />
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600, color: '#282828' }}>
                Official Bank Transfer Details
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
                  title="Copy Account Number"
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
                  title="Copy IFSC Code"
                >
                  {copiedField === 'IFSC Code' ? <Check size={14} /> : <Copy size={14} />}
                  {copiedField === 'IFSC Code' ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="bank-row">
              <span className="bank-label">Bank & Branch</span>
              <span className="bank-value" style={{ fontWeight: 500, fontSize: '15px' }}>
                {NGO_DETAILS.bank.bankName} ({NGO_DETAILS.bank.branch})
              </span>
            </div>

            <div className="bank-row">
              <span className="bank-label">Account Type</span>
              <span className="bank-value" style={{ fontWeight: 500, fontSize: '15px' }}>
                {NGO_DETAILS.bank.accountType}
              </span>
            </div>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleFormSubmit}>
              {/* Preset Amounts */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#333', marginBottom: '8px' }}>
                  Select Contribution Amount (₹)
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '10px' }}>
                  {[500, 1000, 2500, 5000].map((amt) => (
                    <button
                      type="button"
                      key={amt}
                      onClick={() => {
                        setSelectedAmount(amt);
                        setCustomAmount('');
                      }}
                      style={{
                        padding: '10px 0',
                        border: selectedAmount === amt ? '2px solid #f8b864' : '1px solid #ddd',
                        background: selectedAmount === amt ? '#fff8ed' : '#fff',
                        color: selectedAmount === amt ? '#d97706' : '#444',
                        fontWeight: 600,
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      ₹{amt.toLocaleString()}
                    </button>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    type="button"
                    onClick={() => setSelectedAmount('custom')}
                    style={{
                      padding: '8px 16px',
                      border: selectedAmount === 'custom' ? '2px solid #f8b864' : '1px solid #ddd',
                      background: selectedAmount === 'custom' ? '#fff8ed' : '#fff',
                      color: selectedAmount === 'custom' ? '#d97706' : '#444',
                      fontWeight: 600,
                      borderRadius: '6px',
                      cursor: 'pointer',
                    }}
                  >
                    Custom Amount
                  </button>
                  {selectedAmount === 'custom' && (
                    <input
                      type="number"
                      placeholder="Enter amount in ₹"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      style={{
                        flex: 1,
                        padding: '8px 14px',
                        border: '1px solid #ccc',
                        borderRadius: '6px',
                        fontSize: '15px',
                      }}
                      required
                    />
                  )}
                </div>
              </div>

              {/* Donor Details */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#444', marginBottom: '4px' }}>
                    Donor Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #ccc',
                      borderRadius: '6px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#444', marginBottom: '4px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #ccc',
                      borderRadius: '6px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#444', marginBottom: '4px' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #ccc',
                      borderRadius: '6px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#444', marginBottom: '4px' }}>
                    PAN Number (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="ABCDE1234F"
                    value={formData.pan}
                    onChange={(e) => setFormData({ ...formData, pan: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #ccc',
                      borderRadius: '6px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="default-btn"
                style={{
                  width: '100%',
                  padding: '14px 20px',
                  background: '#f8b864',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                Proceed with Bank Transfer (₹{currentAmount})
              </button>
            </form>
          ) : (
            <div
              style={{
                background: '#f0fdf4',
                border: '1px solid #86efac',
                padding: '20px',
                borderRadius: '8px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px auto',
                }}
              >
                <Check size={28} />
              </div>
              <h4 style={{ color: '#15803d', fontSize: '20px', margin: '0 0 8px 0' }}>
                Thank you, {formData.name}!
              </h4>
              <p style={{ color: '#374151', fontSize: '14px', lineHeight: '22px', marginBottom: '16px' }}>
                Please transfer your intended donation of <strong>₹{currentAmount}</strong> to our official bank account shown above. Once completed, kindly share your transaction screenshot or UTR number with us for verification and official receipt.
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '15px',
                  flexWrap: 'wrap',
                  fontSize: '14px',
                }}
              >
                <a
                  href={`mailto:${NGO_DETAILS.email}?subject=Donation Receipt Submission - ${formData.name}&body=Hello Hindustan Manav Foundation,%0D%0A%0D%0AI have initiated a donation of ₹${currentAmount}.%0D%0ADonor Name: ${formData.name}%0D%0APhone: ${formData.phone}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#d97706',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  <Mail size={16} /> Email Receipt ({NGO_DETAILS.email})
                </a>
                <a
                  href={`tel:${NGO_DETAILS.phone}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#d97706',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  <Phone size={16} /> Call {NGO_DETAILS.phone}
                </a>
              </div>
            </div>
          )}

          {/* Donation Helpline Footer */}
          <div
            style={{
              marginTop: '20px',
              paddingTop: '15px',
              borderTop: '1px solid #eee',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px',
              fontSize: '13px',
              color: '#777',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldAlert size={16} color="#999" />
              <span>Direct Bank Transfers Only • No Third-Party Intermediaries</span>
            </div>
            <div>
              Queries?{' '}
              <a href={`tel:${NGO_DETAILS.phone}`} style={{ color: '#d97706', fontWeight: 600 }}>
                {NGO_DETAILS.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

