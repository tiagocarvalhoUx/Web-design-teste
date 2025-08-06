// 📁 App.jsx - Aplicação Principal
// ============================================

import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import '../../src/App.css'

const App = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const profiles = [
    {
      name: "Ana Silva Santos",
      role: "AI Research Director",
      company: "NeuroTech Labs",
      rating: 4.9,
      totalRatings: 3.2,
      specialty: "Neural Networks",
      profileImageNumber: 2 // Profile1
    },
    {
      name: "Marcus Chen",
      role: "Quantum Computing Lead",
      company: "Quantum Dynamics",
      rating: 3.5,
      totalRatings: 2.8,
      specialty: "Quantum Algorithms",
      profileImageNumber: 3 // Profile2
    },
    {
      name: "Sofia Rodriguez",
      role: "Blockchain Architect",
      company: "CryptoFuture Inc",
      rating: 4.9,
      totalRatings: 4.1,
      specialty: "DeFi Protocols",
      profileImageNumber: 5 // Profile3
    }, 
    {
      name: "Isabella Thompson",
      role: "VR Experience Designer",
      company: "MetaVerse Studios",
      rating: 4.7,
      totalRatings: 2.9,
      specialty: "Immersive Design",
      profileImageNumber: 4 // Profile4
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#000,#fff,#000)] opacity-5" />
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header futurístico */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Future Profiles
            </h1>
            <p className="text-white/70 text-xl">
              Next-generation professional cards with holographic UI
            </p>
          </div>
          
          {/* Grid responsivo */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mb-16">
            {profiles.map((profile, index) => (
              <ProfileCard
                key={index}
                {...profile}
                onChatClick={(name) => setSelectedProfile(name)}
              />
            ))}
          </div>

          {/* Status message */}
          {selectedProfile && (
            <div className="fixed bottom-8 right-8 z-50 p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl animate-bounce">
              🚀 Conectando com {selectedProfile}...
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default App;