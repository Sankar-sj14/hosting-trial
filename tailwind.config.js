/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			accordionTriggerBg: '#0A1228', // Dark Blue
			accordionTriggerHoverBg: '#192E65', // Lighter Blue
			accordionContentBg: '#374C82', // Light Gray
			accordionText: '#ffffff', // White text
			accordionContentText: '#D2DEFF',// Dark Gray text
		}, 
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
			'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
			'border-spin': 'border-spin 7s linear infinite',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
