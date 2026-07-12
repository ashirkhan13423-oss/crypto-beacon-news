// Inline Tailwind Play CDN config for the CryptoBeacon design system.
export const twConfig = `tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-bright": "#f9f9ff","secondary": "#006d3a","on-primary-container": "#858383","on-surface-variant": "#444748","secondary-fixed": "#82faab","inverse-on-surface": "#ebf1ff","on-primary": "#ffffff","primary-fixed": "#e5e2e1","surface-container-highest": "#dce2f3","surface": "#f9f9ff","surface-variant": "#dce2f3","on-primary-fixed": "#1c1b1b","background": "#f9f9ff","tertiary-fixed-dim": "#b4c5ff","error": "#ba1a1a","on-tertiary": "#ffffff","on-secondary": "#ffffff","inverse-primary": "#c9c6c5","tertiary-fixed": "#dbe1ff","on-background": "#151c27","outline-variant": "#c4c7c7","secondary-container": "#7ff8a8","primary": "#000000","on-tertiary-fixed-variant": "#003ea8","on-secondary-fixed": "#00210e","outline": "#747878","surface-dim": "#d3daea","on-secondary-container": "#00723d","error-container": "#ffdad6","on-error-container": "#93000a","surface-container-high": "#e2e8f8","on-secondary-fixed-variant": "#00522b","primary-container": "#1c1b1b","on-tertiary-fixed": "#00174b","surface-container-lowest": "#ffffff","inverse-surface": "#2a313d","surface-container": "#e7eefe","tertiary": "#000000","on-surface": "#151c27","on-primary-fixed-variant": "#474646","surface-tint": "#5f5e5e","surface-container-low": "#f0f3ff","on-error": "#ffffff","secondary-fixed-dim": "#64dd91","primary-fixed-dim": "#c9c6c5","tertiary-container": "#00174b","on-tertiary-container": "#497cff","security-blue": "#2563EB"
      },
      borderRadius: { DEFAULT: "0.125rem", lg: "0.25rem", xl: "0.5rem", full: "0.75rem" },
      spacing: { xl: "48px", lg: "24px", sm: "8px", gutter: "24px", margin: "32px", xxl: "80px", xs: "4px", md: "16px", unit: "4px", max_width: "1280px" },
      fontFamily: {
        "headline-md": ["Space Grotesk"],"body-lg": ["Inter"],"headline-lg": ["Space Grotesk"],"display-lg": ["Space Grotesk"],"headline-sm": ["Space Grotesk"],"body-md": ["Inter"],"headline-lg-mobile": ["Space Grotesk"],"label-caps": ["Inter"]
      },
      fontSize: {
        "headline-md": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "30px", fontWeight: "400" }],
        "headline-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "display-lg": ["64px", { lineHeight: "72px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-sm": ["24px", { lineHeight: "32px", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "26px", fontWeight: "400" }],
        "headline-lg-mobile": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "600" }]
      }
    }
  }
};`;

export const globalCss = `
body { font-family: 'Inter', sans-serif; background-color: #f9f9ff; color: #151c27; }
h1, h2, h3, h4, h5, h6, .font-headline-md, .font-headline-lg, .font-display-lg, .font-headline-sm { font-family: 'Space Grotesk', sans-serif; }
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`;
