import styled from "styled-components";

const PresalePhasesWrapper = styled.section`
  padding: 120px 0; /* Increased from 100px to 120px to provide more vertical space */
  position: relative;
  z-index: 1;
  background: linear-gradient(#3b81a4 2%, #d22626 30%) !important;
  overflow: hidden;
  
  /* Background image support */
  background-image: ${({ bgImage }) => bgImage ? `url(${bgImage})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: -1;
  }

  .presale-title {
    margin-bottom: 30px;
    font-family: ${({ theme }) => theme.fonts.title2};
    font-size: 60px;
    font-weight: 400;
    line-height: 70px;
    color: #FFFFFF;
    text-align: center;
  }

  .presale-subtitle {
    margin-bottom: 50px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }

  .presale-phases-container {
    position: relative;
    padding: 20px 0;
    max-width: 1200px;
    margin: 0 auto;
  }

  .progress-bar-container {
    position: relative;
    height: 16px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    margin: 0 0 40px 0;
    z-index: 1;
    width: 100%;
    overflow: hidden;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(90deg, #F3BA2F 0%, #F3BA2F 100%);
    border-radius: 8px;
    transition: width 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow: 0 0 20px rgba(243, 186, 47, 0.8), 0 0 5px rgba(243, 186, 47, 1);
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      box-shadow: 0 0 15px rgba(243, 186, 47, 0.7);
    }
    50% {
      box-shadow: 0 0 25px rgba(243, 186, 47, 0.9);
    }
    100% {
      box-shadow: 0 0 15px rgba(243, 186, 47, 0.7);
    }
  }

  .phases-wrapper {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 120px; /* Increased from 80px to 120px (+40px) */
    flex-wrap: nowrap;
    width: 100%;
    overflow-x: visible;
  }

  .phase-item {
    position: relative;
    width: 11.11%; /* 100% / 9 phases = 11.11% */
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      
      .phase-box {
        border-color: #F3BA2F;
        box-shadow: 0 0 15px rgba(243, 186, 47, 0.5);
      }
    }
    
    &.info-visible {
      .phase-info {
        opacity: 1;
        visibility: visible;
        /* Ensure the info box stays directly under its parent phase item */
        left: 50%;
        transform: translateX(-50%);
      }
    }
    
    &.active {
      .phase-box {
        background: #F3BA2F;
        border-color: #F3BA2F;
        
        &::before {
          background: #F3BA2F;
        }
      }
      
      .phase-number {
        color: #072332;
        font-weight: 700;
      }
    }
    
    &.completed {
      .phase-box {
        background: #F3BA2F;
        border-color: #F3BA2F;
        
        &::before {
          background: #F3BA2F;
        }
      }
      
      .phase-number {
        color: #072332;
      }
    }
  }

  .phase-box {
    width: 60px;
    height: 60px;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    position: relative;
    transition: all 0.3s ease;
    z-index: 2;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    
    /* Vertical connector to progress bar */
    &::before {
      content: '';
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 30px;
      background: rgba(255, 255, 255, 0.2);
      transition: background 0.3s ease;
    }
  }
  
  /* Add connecting lines between phase boxes */
  .phase-item:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 30px;
    left: calc(50% + 30px);
    width: calc(100% - 30px);
    height: 2px;
    background: rgba(255, 255, 255, 0.2);
    z-index: 1;
    transition: background 0.3s ease;
  }
  
  /* Style for completed phase connectors */
  .phase-item.completed:not(:last-child)::after,
  .phase-item.completed .phase-box::before,
  .phase-item.active .phase-box::before {
    background: rgba(243, 186, 47, 0.7);
  }
  
  /* Add markers on the progress bar for each phase */
  .phase-item .phase-box::after {
    content: '';
    position: absolute;
    top: -48px; /* Position at the progress bar */
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    z-index: 3;
    transition: all 0.3s ease;
    border: 2px solid rgba(7, 35, 50, 0.75);
  }
  
  .phase-item.completed .phase-box::after,
  .phase-item.active .phase-box::after {
    background: #F3BA2F;
    box-shadow: 0 0 10px rgba(243, 186, 47, 0.7);
  }

  .phase-number {
    font-family: ${({ theme }) => theme.fonts.title2};
    font-size: 20px;
    font-weight: 500;
    color: #FFFFFF;
  }

  .phase-info {
    position: absolute;
    top: 90px; /* Increased from 80px to 90px to provide more space */
    left: 50%; /* Center horizontally within the parent phase item */
    transform: translateX(-50%); /* Ensure perfect centering */
    width: 220px;
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid rgba(243, 186, 47, 0.5);
    border-radius: 12px;
    padding: 18px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 100; /* Increased z-index to ensure visibility */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3), 0 0 10px rgba(243, 186, 47, 0.2);
    /* Ensure the info box stays within its parent phase item */
    margin-left: 0; /* Reset any margin that might affect positioning */
    
    /* Add a pointer/arrow at the top that aligns with the phase number */
    &::before {
      content: '';
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid rgba(243, 186, 47, 0.5);
    }
    
    &::after {
      content: '';
      position: absolute;
      top: -7px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid rgba(0, 0, 0, 0.8);
    }
    
    .close-btn {
      position: absolute;
      top: 5px;
      right: 10px;
      font-size: 24px;
      line-height: 20px;
      color: rgba(255, 255, 255, 0.7);
      cursor: pointer;
      transition: color 0.2s ease;
      
      &:hover {
        color: #F3BA2F;
      }
    }
    
    h4 {
      font-family: ${({ theme }) => theme.fonts.title2};
      font-size: 18px;
      font-weight: 500;
      color: #F3BA2F;
      margin-bottom: 12px;
      text-align: center;
    }
    
    .info-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      
      span {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 14px;
        
        &:first-child {
          color: rgba(255, 255, 255, 0.7);
        }
        
        &:last-child {
          color: #FFFFFF;
          font-weight: 500;
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    .presale-phases-container {
      padding: 0 10px;
      display: flex;
      flex-direction: column;
    }
    
    .progress-bar-container {
      margin: 0 0 30px 0;
      order: 1; /* Show progress bar first on mobile */
    }
    
    .phases-wrapper {
      overflow-x: auto;
      padding: 30px 10px 20px;
      margin-bottom: 40px;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: thin;
      flex-wrap: nowrap;
      order: 2;
      position: relative;
      
      /* Custom scrollbar styling */
      &::-webkit-scrollbar {
        height: 8px;
      }
      
      &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
        margin: 0 20px;
      }
      
      &::-webkit-scrollbar-thumb {
        background: rgba(243, 186, 47, 0.5);
        border-radius: 4px;
        border: 2px solid rgba(7, 35, 50, 0.75);
      }
      
      /* Add scroll indicator */
      &::after {
        content: '← Scroll →';
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 12px;
        color: rgba(243, 186, 47, 0.7);
        white-space: nowrap;
        animation: fadeInOut 2s infinite;
      }
      
      @keyframes fadeInOut {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
      }
    }
    
    .phase-item {
      min-width: 100px;
      width: auto;
      margin: 0 15px;
      flex-shrink: 0;
      
      &:not(:last-child)::after {
        width: calc(100% - 30px);
      }
      
      .phase-box::before {
        top: -30px;
        height: 20px;
      }
      
      .phase-box::after {
        top: -38px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .presale-title {
      font-size: 48px;
      line-height: 58px;
    }
    
    .phase-box {
      width: 50px;
      height: 50px;
    }
    
    .phase-number {
      font-size: 18px;
    }
    
    .progress-bar-container {
      height: 14px;
      border-radius: 7px;
    }
    
    .progress-bar {
      border-radius: 7px;
    }
    
    .phase-item .phase-box::after {
      width: 10px;
      height: 10px;
      top: -36px;
    }
  }

  @media screen and (max-width: 575px) {
    .presale-title {
      font-size: 36px;
      line-height: 46px;
    }
    
    .phase-box {
      width: 45px;
      height: 45px;
    }
    
    .phase-number {
      font-size: 16px;
    }
    
    .phase-info {
      width: 180px;
      padding: 12px;
      max-width: 90vw; /* Prevent overflow on very small screens */
      top: 70px; /* Adjust for smaller phase box on mobile */
      
      h4 {
        font-size: 16px;
        margin-bottom: 8px;
      }
      
      .info-row {
        margin-bottom: 6px;
      }
      
      /* Ensure the arrow aligns with the phase number */
      &::before, &::after {
        left: 50%;
      }
      
      /* Force the info box to stay within its parent phase item */
      left: 50% !important;
      transform: translateX(-50%) !important;
      margin-left: 0 !important;
    }
    
    .phase-item {
      min-width: 80px;
      margin: 0 12px;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 60px 0;

    .presale-title {
      font-size: 30px;
      line-height: 40px;
    }

    .presale-subtitle {
      font-size: 16px;
      line-height: 26px;
      margin-bottom: 30px;
    }
    
    .progress-bar-container {
      height: 12px;
      border-radius: 6px;
      margin-bottom: 25px;
    }
    
    .progress-bar {
      border-radius: 6px;
    }
    
    .phase-box {
      width: 40px;
      height: 40px;
      border-radius: 12px;
    }
    
    .phase-info {
      top: 65px; /* Adjust for even smaller phase box on very small screens */
      
      /* Ensure the arrow aligns with the phase number on smallest screens */
      &::before {
        top: -10px;
      }
      
      &::after {
        top: -7px;
      }
      
      /* Force the info box to stay within its parent phase item on smallest screens */
      left: 50% !important;
      transform: translateX(-50%) !important;
      margin-left: 0 !important;
      width: 160px; /* Slightly smaller for very small screens */
    }
    
    .phase-item .phase-box::after {
      width: 8px;
      height: 8px;
      top: -34px;
    }
    
    .phase-item .phase-box::before {
      height: 18px;
      top: -28px;
    }
  }
`;

export default PresalePhasesWrapper;