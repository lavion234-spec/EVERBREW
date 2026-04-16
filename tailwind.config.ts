import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void:     '#070707',
        carbon:   '#0E0E0E',
        iron:     '#161616',
        smoke:    '#282828',
        steel:    '#3A3A3A',
        ash:      '#707070',
        mist:     '#A0A0A0',
        bone:     '#E8DDD0',
        cream:    '#F5EDD8',
        fire:     '#FF4500',
        ember:    '#FF6B2B',
        amber:    '#FF8C00',
        gold: {
          DEFAULT: '#C49A28',
          light:   '#E8C547',
        },
        hop:      '#7CB518',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body:    ['var(--font-space)', 'sans-serif'],
        mono:    ['var(--font-ibm)', 'monospace'],
      },
      fontSize: {
        '9xl': ['9rem',   { lineHeight: '0.88', letterSpacing: '0.01em' }],
        '8xl': ['7rem',   { lineHeight: '0.90' }],
        '7xl': ['5.5rem', { lineHeight: '0.92' }],
        '6xl': ['4rem',   { lineHeight: '0.95' }],
        '5xl': ['3rem',   { lineHeight: '1.0'  }],
        '4xl': ['2.5rem', { lineHeight: '1.1'  }],
      },
      backgroundImage: {
        'gradient-fire': 'linear-gradient(135deg, #FF4500 0%, #FF8C00 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C49A28 0%, #E8C547 100%)',
        'gradient-dark': 'linear-gradient(180deg, var(--void) 0%, #0A0A0A 100%)',
      },
      borderRadius: {
        DEFAULT: '2px',
        none:    '0px',
        sm:      '2px',
        md:      '4px',
        lg:      '8px',
        full:    '9999px',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'float':     'float 4s ease-in-out infinite',
        'ticker':    'ticker 25s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'shimmer':   'shimmer 2s linear infinite',
        'fade-in':   'fadeIn 600ms ease forwards',
        'slide-up':  'slideUp 600ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-16px)' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':       { opacity: '0.5', transform: 'scale(0.8)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '120': '30rem',
        '136': '34rem',
        '160': '40rem',
      },
      maxWidth: {
        container: '1280px',
        'container-sm': '960px',
      },
      backdropBlur: {
        nav: '20px',
      },
    },
  },
  plugins: [],
}

export default config
