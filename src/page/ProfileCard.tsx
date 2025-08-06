// 📁 ProfileCard.jsx - Componente Principal
// ============================================

import React, { useState, useEffect } from 'react';
import Profile1 from "../assets/image/profile-1.png";
import Profile2 from "../assets/image/profile-2.png";
import Profile3 from "../assets/image/profile-3.png";
import Profile4 from "../assets/image/profile-4.png";
import Profile5 from "../assets/image/profile-5.png";

// Componente de partículas flutuantes
const FloatingParticles = ({ isHovered }) => {
  const particles = Array.from({ length: 8 }, (_, i) => (
    <div
      key={i}
      className={`
        absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full
        transition-all duration-1000 ease-out
        ${isHovered ? 'opacity-100 animate-bounce' : 'opacity-0'}
      `}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${i * 200}ms`,
        animationDuration: `${1000 + i * 300}ms`
      }}
    />
  ));
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles}
    </div>
  );
};

// Componente de ondas animadas
const AnimatedWaves = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -inset-10 opacity-30">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-gradient-to-r from-yellow-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
  </div>
);

// Holographic border effect
const HolographicBorder = ({ isActive }) => (
  <div className={`
    absolute inset-0 rounded-3xl
    bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-red-500
    opacity-0 blur-sm transition-all duration-500
    ${isActive ? 'opacity-50 animate-pulse' : ''}
  `} />
);

// Ícone de estrela 3D com animação
const Star3D = ({ filled = false, delay = 0 }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  return (
    <div 
      className="relative transform transition-all duration-300 hover:scale-125 cursor-pointer"
      onMouseEnter={() => setIsAnimating(true)}
      onAnimationEnd={() => setIsAnimating(false)}
    >
      <svg 
        viewBox="0 0 24 24" 
        className={`
          w-5 h-5 transition-all duration-500
          ${filled ? 'text-yellow-400' : 'text-gray-300'}
          ${isAnimating ? 'animate-spin' : ''}
        `}
        style={{ animationDelay: `${delay}ms` }}
      >
        <path
          fill="currentColor"
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        />
      </svg>
      
      {/* Efeito de brilho */}
      <div className={`
        absolute inset-0 rounded-full
        bg-gradient-to-r from-yellow-200 to-yellow-400
        opacity-0 blur-md transition-opacity duration-300
        ${filled && isAnimating ? 'opacity-60' : ''}
      `} />
    </div>
  );
};

// Botão de chat futurístico
const FuturisticChatButton = ({ onClick, userName }) => {
  const [isCharging, setIsCharging] = useState(false);
  
  const handleClick = () => {
    setIsCharging(true);
    setTimeout(() => {
      setIsCharging(false);
      onClick && onClick();
    }, 1000);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isCharging}
      className={`
        relative group p-3 rounded-2xl
        bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600
        hover:from-blue-500 hover:via-purple-500 hover:to-indigo-500
        transform transition-all duration-300 hover:scale-110
        shadow-lg hover:shadow-2xl
        ${isCharging ? 'animate-pulse' : ''}
      `}
    >
      {/* Efeito de energia */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300" />
      
      {/* Ícone */}
      <div className={`relative z-10 transition-transform duration-300 ${isCharging ? 'rotate-180' : 'group-hover:rotate-12'}`}>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </div>
      
      {/* Loading effect */}
      {isCharging && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 animate-pulse" />
        </div>
      )}
    </button>
  );
};

// Componente principal ultra-moderno
const ProfileCard = ({ 
  name = "Armless Jonhn",
  role = "Software Developer",
  company = "GRI Institute", 
  country = "Brasil",
  rating = 5.0,
  totalRatings = 2.4,
  profileImageNumber = 1, // SIMPLIFICADO: apenas uma prop para selecionar a imagem (1-5)
  
  companyLogo = "https://cdn.griinstitute.org/uploads/crm_company/0033600000DmrRO_Marketing_Edited_Logo_2025-06-14_01-23-10.jpg",
  className = "",
  onChatClick,
  specialty = "AI & Machine Learning"
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Array com todas as imagens de perfil
  const profileImages = {
    1: Profile1,
    2: Profile2,
    3: Profile3,
    4: Profile4,
    5: Profile5
  };

  // Função para obter a imagem baseada na prop profileImageNumber
  const getProfileImage = () => {
    return profileImages[profileImageNumber] || Profile3;
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star3D 
          key={i} 
          filled={i < fullStars}
          delay={i * 100}
        />
      );
    }
    return stars;
  };

  return (
    <div 
      className={`
        relative group max-w-sm w-full mx-auto
        transform transition-all duration-700 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background com efeito glassmorphism */}
      <div className="relative">
        <AnimatedWaves />
        <HolographicBorder isActive={isHovered} />
        <FloatingParticles isHovered={isHovered} />
        
        <div className={`
          relative z-10 p-8
          backdrop-blur-xl bg-white/10 border border-white/20
          rounded-3xl shadow-2xl
          transform transition-all duration-500
          ${isHovered ? 'scale-105 shadow-3xl bg-white/20' : ''}
        `}>
          {/* Header futurístico */}
          <div className="relative mb-6">
            {/* Avatar com efeito holográfico */}
            <div className="relative mx-auto w-24 h-24 mb-4">
              <div className={`
                absolute inset-0 rounded-full
                bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
                opacity-0 blur-md transition-opacity duration-500
                ${isHovered ? 'opacity-60 animate-pulse' : ''}
              `} />
              
              <img 
                src={profileImages[profileImageNumber]}
                alt={name}
                className={`
                  relative z-10 w-full h-full rounded-full object-cover
                  border-2 border-white/30 shadow-2xl
                  transition-all duration-500
                  ${isHovered ? 'border-white/60 scale-110' : ''}
                `}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/96x96/667eea/ffffff?text=👤";
                }}
              />
              
              {/* Status online */}
              <div className={`
                absolute bottom-1 right-1 w-4 h-4 rounded-full
                bg-gradient-to-r from-green-400 to-blue-500
                border-2 border-white shadow-lg
                transition-all duration-300
                ${isHovered ? 'animate-ping' : ''}
              `} />
            </div>

            {/* Nome com efeito neon */}
            <h3 className={`
              font-bold text-center mb-2 text-xl
              bg-gradient-to-r from-white via-blue-100 to-purple-100
              bg-clip-text text-transparent
              transition-all duration-500
              ${isHovered ? 'scale-105 drop-shadow-lg' : ''}
            `}>
              {name}
            </h3>
            
            {/* Cargo */}
            <p className="text-center text-white/80 text-sm mb-1 font-medium">
              {role}
            </p>
            
            {/* Especialidade */}
            <div className={`
              mx-auto w-fit px-3 py-1 rounded-full text-xs
              bg-gradient-to-r from-blue-500/20 to-purple-500/20
              border border-white/20 text-white/90
              transition-all duration-300
              ${isHovered ? 'border-white/40 bg-gradient-to-r from-blue-500/30 to-purple-500/30' : ''}
            `}>
              {specialty}
            </div>
          </div>

          {/* Empresa com efeito hover */}
          <div className={`
            flex items-center justify-center gap-3 mb-6 p-3 rounded-xl
            bg-white/10 border border-white/20
            transition-all duration-300
            ${isHovered ? 'bg-white/20 border-white/30' : ''}
          `}>
            <img 
              src={companyLogo}
              alt={company}
              className="w-8 h-8 rounded-lg object-contain bg-white/90 p-1"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/32x32/667eea/ffffff?text=🏢";
              }}
            />
            <span className="text-white/90 text-sm font-semibold">
              {company}
            </span>
          </div>

          {/* Avaliação interativa */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {renderStars(rating)}
              </div>
              <span className="text-white/80 text-sm font-bold">
                {rating}
              </span>
            </div>
            
            <div className="text-right">
              <div className="text-white/90 text-sm font-bold">
                {totalRatings}k
              </div>
              <div className="text-white/60 text-xs">
                reviews
              </div>
            </div>
          </div>

          {/* Footer com botão futurístico */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="https://www.griinstitute.org/assets/img/country_flags/1x1/br.svg"
                alt={country}
                className="w-5 h-5 rounded"
              />
              <span className="text-white/80 text-sm">
                {country}
              </span>
            </div>
            
            <FuturisticChatButton 
              onClick={() => onChatClick && onChatClick(name)}
              userName={name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;