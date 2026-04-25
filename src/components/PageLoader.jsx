import Logo from "./Logo";

export default function PageLoader() {
    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: '#FEFAE8',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            fontFamily: 'inherit',
        }}>

            {/* Logo + brand name
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '36px',
                animation: 'fadeIn 0.4s ease forwards',
            }}>
            
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path
                        d="M6 28 C10 20, 18 14, 30 8 C26 16, 20 22, 12 26 L18 24 C16 27, 12 29, 6 28Z"
                        fill="#1a1a2e"
                    />
                    <circle cx="27" cy="10" r="2" fill="#F5C518" />
                </svg>
                <span style={{
                    fontSize: '1.6rem',
                    fontWeight: '700',
                    color: '#1a1a2e',
                    letterSpacing: '-0.02em',
                }}>
                    Adymire
                </span>
            </div> */}
            <Logo className="flex flex-col" imgClass="block" textClass="my-2 text-2xl" />

            {/* Animated bar loader */}
            <div style={{
                display: 'flex',
                gap: '6px',
                alignItems: 'flex-end',
                height: '32px',
            }}>
                {[0, 1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        style={{
                            width: '5px',
                            borderRadius: '999px',
                            background: i % 2 === 0 ? '#1a1a2e' : '#F5C518',
                            animation: `barBounce 0.9s ease-in-out infinite`,
                            animationDelay: `${i * 0.12}s`,
                            height: '14px',
                        }}
                    />
                ))}
            </div>

            {/* Subtle tagline */}
            <p className="text-center" style={{
                marginTop: '24px',
                fontSize: '0.70rem',
                color: '#888',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                animation: 'fadeIn 0.6s ease 0.2s both',
            }}>
                AI-Powered App Development & Digital IT Solutions
            </p>

            <style>{`
        @keyframes barBounce {
          0%, 100% { height: 14px; opacity: 0.5; }
          50%       { height: 30px; opacity: 1;   }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
      `}</style>
        </div>
    )
}