import React from 'react';

/**
 * Shyoran Systems Brand Logo Icon
 * A precision brutalist geometric S-Bolt mark designed for high-velocity systems engineering.
 */
export const BrandLogoIcon = ({ size = 16, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <path
      d="M13.8 1.5L3.5 13H11.5L9 22.5L20.5 11H12.5L13.8 1.5Z"
      stroke="#0A0D14"
      strokeWidth="1.6"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * React 19 Atom Logo
 */
export const ReactLogo = ({ size = 18, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="-11.5 -10.232 23 20.463"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <circle cx="0" cy="0" r="2.1" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1.1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

/**
 * Node.js / Express Hexagon Logo
 */
export const NodeLogo = ({ size = 18, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <path
      d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z"
      fill="#339933"
      stroke="#227722"
      strokeWidth="1.2"
    />
    <path
      d="M12 2V12M12 12L21 7.2M12 12L3 7.2"
      stroke="#FFFFFF"
      strokeWidth="1.2"
      strokeOpacity="0.4"
    />
    <path
      d="M9 10L12 12L15 10M12 12V16"
      stroke="#FFFFFF"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * MongoDB Atlas Leaf Logo
 */
export const MongoLogo = ({ size = 18, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <path
      d="M12 1.5C11.5 3 7 9 7 13.5C7 17.8 9.5 20.8 11.6 22.3C11.9 22.5 12.1 22.5 12.4 22.3C14.5 20.8 17 17.8 17 13.5C17 9 12.5 3 12 1.5Z"
      fill="#00ED64"
    />
    <path
      d="M12 22.3C12.1 22.3 12.3 22.2 12.4 22.3C14.5 20.8 17 17.8 17 13.5C17 9 12.5 3 12 1.5V22.3Z"
      fill="#00684A"
    />
    <path d="M12 2.5V21.5" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.4" />
  </svg>
);

/**
 * Claude / OpenAI Spark AI Logo
 */
export const AILogo = ({ size = 18, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <path
      d="M12 2L14.2 8.3C14.5 9.2 15.2 9.9 16.1 10.2L22.4 12.4L16.1 14.6C15.2 14.9 14.5 15.6 14.2 16.5L12 22.8L9.8 16.5C9.5 15.6 8.8 14.9 7.9 14.6L1.6 12.4L7.9 10.2C8.8 9.9 9.5 9.2 9.8 8.3L12 2Z"
      fill="#D97706"
      stroke="#0A0D14"
      strokeWidth="1.2"
    />
    <circle cx="12" cy="12.4" r="2.5" fill="#FFE600" />
  </svg>
);

/**
 * Socket.io / Real-Time WebSocket Logo
 */
export const SocketLogo = ({ size = 18, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <circle cx="12" cy="12" r="10.5" fill="#010101" stroke="#0A0D14" strokeWidth="1.2" />
    <path d="M13.5 4.5L7 13.5H12L10.5 19.5L17 10.5H12L13.5 4.5Z" fill="#FFE600" />
  </svg>
);

/**
 * Stripe & Payments Card Logo
 */
export const StripeLogo = ({ size = 18, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <rect x="2" y="4" width="20" height="16" rx="3.5" fill="#635BFF" stroke="#0A0D14" strokeWidth="1.2" />
    <path d="M2 9.5H22" stroke="#FFFFFF" strokeWidth="1.8" />
    <rect x="5.5" y="14" width="4" height="2.5" rx="0.8" fill="#FFFFFF" fillOpacity="0.8" />
    <circle cx="17.5" cy="15" r="1.5" fill="#FFE600" />
  </svg>
);

/**
 * Docker Containerization Whale Logo
 */
export const DockerLogo = ({ size = 18, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 8H15V9.5H13.5V8ZM11.5 8H13V9.5H11.5V8ZM9.5 8H11V9.5H9.5V8ZM13.5 6H15V7.5H13.5V6ZM11.5 6H13V7.5H11.5V6ZM9.5 6H11V7.5H9.5V6ZM7.5 8H9V9.5H7.5V8ZM5.5 8H7V9.5H5.5V8ZM7.5 10H9V11.5H7.5V10ZM9.5 10H11V11.5H9.5V10ZM11.5 10H13V11.5H11.5V10ZM13.5 10H15V11.5H13.5V10ZM15.5 10H17V11.5H15.5V10ZM22 12C21.8 11.7 21.3 11.6 20.8 11.7C20.5 11.8 20.2 12 19.9 12.2C19.5 10.9 18.4 10 17.1 9.8C16.8 9.7 16.5 9.8 16.3 9.9L16.2 10.1C16 10.3 16 10.5 16.1 10.7C16.6 11.4 16.9 12.2 16.9 13.1C16.9 13.4 16.8 13.7 16.7 14C15.6 13.8 11.9 13.7 9.8 15.5C8.5 14.6 7.1 14.4 5.6 14.8C5.3 14.9 5.1 15.1 5 15.3C4.9 15.5 5 15.8 5.2 16C5.9 16.6 6.8 16.9 7.7 16.9H16.2C19.2 16.9 22 14.5 22 12Z"
      fill="#2496ED"
      stroke="#0A0D14"
      strokeWidth="0.8"
    />
  </svg>
);

/**
 * AWS Cloud Logo
 */
export const AwsLogo = ({ size = 18, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <path
      d="M19.4 15C20.9 14.5 22 13.1 22 11.4C22 9.2 20.3 7.5 18.2 7.4C17.6 4.3 14.9 2 11.6 2C8 2 5.1 4.7 4.7 8.2C2.6 8.8 1 10.7 1 13C1 15.8 3.2 18 6 18H18.5C20.4 18 22 16.4 22 14.5"
      stroke="#FF9900"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 14.5C9.5 16.5 14.5 16.5 17 14.5"
      stroke="#FF9900"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M15.5 13.5L17 14.5L15.5 15.5"
      stroke="#FF9900"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Sharp Geometric Lightning Bolt Icon
 */
export const BoltIcon = ({ size = 14, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
  </svg>
);

/**
 * Clock / Turnaround Stopwatch Icon
 */
export const ClockIcon = ({ size = 14, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

/**
 * Target Stage / Bullseye Icon
 */
export const TargetIcon = ({ size = 14, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

/**
 * IP Rights / Security Lock Icon
 */
export const LockIcon = ({ size = 14, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

/**
 * 100% IP Transfer / Package Box Icon
 */
export const PackageIcon = ({ size = 14, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

/**
 * Shield / Security Validation Icon
 */
export const ShieldIcon = ({ size = 14, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

/**
 * Rocket / Fast Deploy Icon
 */
export const RocketIcon = ({ size = 14, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2.5 5-2.5" />
    <path d="M12 15v5s3.03-.55 4.5-2c1.63-1.62 2.5-5 2.5-5" />
  </svg>
);

/**
 * Star / Founder Icon
 */
export const StarIcon = ({ size = 14, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <path d="M12 2L14.85 8.65L22 9.24L16.5 13.97L18.18 21L12 17.27L5.82 21L7.5 13.97L2 9.24L9.15 8.65L12 2Z" />
  </svg>
);

/**
 * Tool / Wrench Tech Icon
 */
export const ToolIcon = ({ size = 14, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

/**
 * Map Pin Location Icon
 */
export const PinIcon = ({ size = 14, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

/**
 * Pen / Architect Signature Icon
 */
export const PenIcon = ({ size = 14, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

/**
 * Checkmark SVG
 */
export const CheckIcon = ({ size = 14, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/**
 * Cross (X) SVG
 */
export const CrossIcon = ({ size = 14, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/**
 * Pillar 1: High Velocity & Speed SVG Badge
 */
export const SpeedPillarIcon = ({ size = 32, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <rect width="32" height="32" rx="8" fill="#FFE600" stroke="#0A0D14" strokeWidth="2" />
    <path
      d="M17.5 5L8.5 17.5H16L14 27L23.5 14.5H16L17.5 5Z"
      fill="#0A0D14"
      stroke="#0A0D14"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Pillar 2: Specialized MERN Mastery SVG Badge
 */
export const MernPillarIcon = ({ size = 32, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <rect width="32" height="32" rx="8" fill="#FAF9F5" stroke="#0A0D14" strokeWidth="2" />
    <polygon
      points="16 7 7 11.5 16 16 25 11.5 16 7"
      fill="#00ED64"
      stroke="#0A0D14"
      strokeWidth="1.5"
    />
    <polyline points="7 16.5 16 21 25 16.5" stroke="#0A0D14" strokeWidth="1.5" />
    <polyline points="7 21.5 16 26 25 21.5" stroke="#0A0D14" strokeWidth="1.5" />
  </svg>
);

/**
 * Pillar 3: AI-Augmented Velocity SVG Badge
 */
export const AiPillarIcon = ({ size = 32, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <rect width="32" height="32" rx="8" fill="#0038FF" stroke="#0A0D14" strokeWidth="2" />
    <circle cx="16" cy="16" r="5" fill="#FFE600" stroke="#FFFFFF" strokeWidth="1.5" />
    <line x1="16" y1="6" x2="16" y2="10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="22" x2="16" y2="26" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    <line x1="6" y1="16" x2="10" y2="16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    <line x1="22" y1="16" x2="26" y2="16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    <circle cx="16" cy="16" r="2" fill="#0A0D14" />
  </svg>
);

/**
 * Mail / Contact Inbox Icon
 */
export const MailIcon = ({ size = 14, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    {...props}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
