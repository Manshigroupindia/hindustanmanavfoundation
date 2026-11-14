import React from 'react';
import { DollarSign, Smile, Users, MessageSquareQuote } from 'lucide-react';

export const CounterSection: React.FC = () => {
  const stats = [
    {
      id: 1,
      icon: <DollarSign size={32} color="#f8b864" />,
      number: '85389',
      label: 'Money Donated',
    },
    {
      id: 2,
      icon: <Smile size={32} color="#f8b864" />,
      number: '10693',
      label: 'Volunteer Around The World',
    },
    {
      id: 3,
      icon: <Users size={32} color="#f8b864" />,
      number: '50177',
      label: 'People Impacted',
    },
    {
      id: 4,
      icon: <MessageSquareQuote size={32} color="#f8b864" />,
      number: '669',
      label: 'Positive Feedbacks',
    },
  ];

  return (
    <section
      id="counter"
      className="counter-section"
      style={{
        position: 'relative',
        backgroundImage: 'url(/assets/img/mission.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '90px 0',
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(20, 20, 20, 0.78)',
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <ul className="row counters" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap' }}>
          {stats.map((stat) => (
            <li className="col-md-3 col-sm-6 sm-padding" key={stat.id} style={{ textAlign: 'center', padding: '20px 15px' }}>
              <div className="counter-content">
                <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                <h3
                  className="counter"
                  style={{
                    color: '#ffffff',
                    fontSize: '44px',
                    fontWeight: 700,
                    marginBottom: '8px',
                    letterSpacing: '1px',
                  }}
                >
                  {stat.number}
                </h3>
                <h4 style={{ color: '#dddddd', fontSize: '15px', fontWeight: 500, margin: 0, textTransform: 'capitalize' }}>
                  {stat.label}
                </h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

