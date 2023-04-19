const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './.contentlayer/generated/**/*.{js,ts,jsx,tsx,json}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#E25822',
          50: '#fdf5ef',
          100: '#fbe8d9',
          200: '#f6cdb2',
          300: '#f0ac81',
          400: '#e9804e',
          500: '#e25822',
          600: '#d54821',
          700: '#b1351d',
          800: '#8d2d1f',
          900: '#72271c',
          950: '#3d110d',
        },
        primary: {
          DEFAULT: '#656775',
          50: '#f5f5f6',
          100: '#e5e6e8',
          200: '#cdced4',
          300: '#aaabb6',
          400: '#808290',
          500: '#656775',
          600: '#575863',
          700: '#4a4a54',
          800: '#3f3f46',
          900: '#3a3a3f',
          950: '#242428',
        },
      },
      maxWidth: {
        '8xl': '90rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.primary.600'),
            hr: {
              borderColor: theme('colors.primary.300'),
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            ul: {
              listStyleType: 'none',
              paddingLeft: '2rem',
              '> li': {
                position: 'relative',
                paddingLeft: '1.5rem',
                marginLeft: '-1.5rem',
              },
              '> li::before': {
                content: '""',
                width: '0.75em',
                height: '0.125em',
                position: 'absolute',
                top: 'calc(0.875em - 0.0625em)',
                left: 0,
                borderRadius: '999px',
                backgroundColor: theme('colors.primary.300'),
              },
            },
            ol: {
              '> li::marker': {
                color: theme('colors.primary.300'),
              },
            },
            a: {
              fontWeight: theme('fontWeight.semibold'),
              textDecoration: 'none',
              borderBottom: 'none',
              scrollMarginTop: '7rem',
              '&:hover': {
                color: theme('colors.brand.500'),
              },
              code: {
                color: 'inherit',
                fontWeight: 'inherit',
              },
              strong: {
                color: 'inherit',
                fontWeight: 'inherit',
              },
            },
            strong: {
              color: theme('colors.primary.700'),
              fontWeight: theme('fontWeight.semibold'),
            },
            blockQuote: {
              borderColor: theme('colors.primary.300'),
              color: theme('colors.primary.400'),
            },
            table: {
              fontSize: theme('fontSize.sm')[0],
              lineHeight: theme('fontSize.sm')[1].lineHeight,
              thead: {
                borderBottomColor: theme('colors.primary.300'),
                borderBottomWidth: '2px',
                th: {
                  paddingTop: 0,
                  fontWeight: theme('fontWeight.semibold'),
                  color: theme('colors.primary.700'),
                },
              },
              tbody: {
                tr: {
                  borderBottomColor: theme('colors.primary.300'),
                },
                'tr:last-child': {
                  borderBottomWidth: '2px',
                },
                code: {
                  fontSize: theme('fontSize.xs')[0],
                },
              },
            },
            figure: {
              figcaption: {
                textAlign: 'center',
                fontStyle: 'italic',
              },
              '> figcaption': {
                marginTop: `${12 / 14}em`,
              },
            },
            '.prose-toc': {
              color: theme('colors.primary.500'),
              a: {
                color: theme('colors.primary.500'),
                '&:hover': {
                  color: theme('colors.primary.900'),
                },
              },
              ol: {
                listStyleType: 'none',
                padding: 0,
                marginTop: '1rem',
              },
              '> ol': {
                '> li': {
                  padding: 0,
                  marginTop: '1rem',
                  '> a': {
                    fontWeight: theme('fontWeight.semibold'),
                  },
                },
                ol: {
                  marginTop: 0,
                  '> li': {
                    position: 'relative',
                    marginLeft: '1rem',
                    padding: 0,

                    '&::before': {
                      content: '""',
                      display: 'inline-block',
                      width: '0.4rem',
                      height: '0.4rem',
                      borderRight: '0.15rem solid',
                      borderTop: '0.15rem solid',
                      transform: 'rotate(45deg)',
                      marginRight: '0.75rem',
                    },

                    '> a': {
                      fontWeight: theme('fontWeight.normal'),
                    },
                  },
                  ol: {
                    display: 'none',
                  },
                },
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.primary.400'),
            hr: {
              borderColor: theme('colors.primary.600'),
            },
            a: {
              color: theme('colors.primary.200'),
              '&:hover': {
                color: theme('colors.brand.500'),
              },
            },
            strong: {
              color: theme('colors.primary.200'),
            },
            table: {
              thead: {
                borderBottomColor: theme('colors.primary.600'),
                th: {
                  color: theme('colors.primary.200'),
                },
              },
              tbody: {
                tr: {
                  borderBottomColor: theme('colors.primary.600'),
                },
              },
            },
            blockQuote: {
              borderColor: theme('colors.primary.600'),
              color: theme('colors.primary.500'),
            },
            ul: {
              '> li::before': {
                backgroundColor: theme('colors.primary.600'),
              },
            },
            ol: {
              '> li::marker': {
                color: theme('colors.primary.600'),
              },
            },
            '.prose-toc': {
              color: theme('colors.primary.400'),
              a: {
                color: theme('colors.primary.400'),
                '&:hover': {
                  color: theme('colors.primary.200'),
                },
              },
            },
          },
        },
      }),
    },
    fontFamily: {
      serif: ['Montserrat', ...defaultTheme.fontFamily.serif],
      sans: ['Lato', ...defaultTheme.fontFamily.sans],
      mono: ['"Fira Mono"', ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addVariant }) {
      addVariant('supports-backdrop-blur', '@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))')
    },
  ],
}
