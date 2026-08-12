---
name: Azure Script & Steam
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#3f4852'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#6f7883'
  outline-variant: '#bec7d4'
  surface-tint: '#00629d'
  primary: '#00629d'
  on-primary: '#ffffff'
  primary-container: '#00a3ff'
  on-primary-container: '#00375a'
  inverse-primary: '#98cbff'
  secondary: '#3d627d'
  on-secondary: '#ffffff'
  secondary-container: '#b9dffe'
  on-secondary-container: '#3e637e'
  tertiary: '#576063'
  on-tertiary: '#ffffff'
  tertiary-container: '#959ea2'
  on-tertiary-container: '#2d3539'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cfe5ff'
  primary-fixed-dim: '#98cbff'
  on-primary-fixed: '#001d33'
  on-primary-fixed-variant: '#004a77'
  secondary-fixed: '#cae6ff'
  secondary-fixed-dim: '#a5cbea'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#244a64'
  tertiary-fixed: '#dbe4e8'
  tertiary-fixed-dim: '#bfc8cc'
  on-tertiary-fixed: '#141d20'
  on-tertiary-fixed-variant: '#3f484b'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0.05em
  nav-link:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
  gutter: 24px
  container-max-width: 1200px
---

## Brand & Style
The brand personality is **Professional-Casual**, bridging the gap between high-end technical expertise and the approachable "neighborhood developer" vibe. It is designed to feel like a high-quality espresso: clean, energizing, and meticulously crafted. 

The aesthetic follows a **Modern Minimalism** approach with **Glassmorphism** accents. By utilizing heavy whitespace, it allows the "refreshing light blue" to breathe, while translucent layers suggest the depth of a code editor. Subtle motifs—like monospaced "comment" snippets for subheaders and steam-inspired gradients—infuse the "coffee culture" and "coding" requirements without cluttering the UI. The emotional response should be one of clarity, reliability, and modern sophistication.

## Colors
This design system uses a **Light Mode** foundation to maintain a "clean and refreshing" atmosphere. 

*   **Primary:** A vibrant Sky Blue (#00A3FF) used for calls-to-action, active states, and key decorative elements like code brackets.
*   **Secondary:** Deep Navy (#003049) provides the necessary professional weight for high-contrast typography and footer backgrounds.
*   **Tertiary/Surface:** A soft "Oxygen" Blue (#F2FBFF) used for section backgrounds and card containers to differentiate from the pure white base.
*   **Neutral:** Slate Grey (#4A5568) for body text to ensure maximum readability without the harshness of pure black.

## Typography
The typographic system focuses on crisp, high-legibility sans-serifs. 

*   **Hanken Grotesk** is used for headlines to provide a sharp, contemporary "tech" feel. Its bold weights are perfect for the hero section's impact.
*   **Plus Jakarta Sans** handles the body copy, offering a friendly and approachable "personable" quality with its slightly rounded terminals.
*   **JetBrains Mono** is utilized for small labels, "code comments," and tool tags. This adds a subtle nod to the developer's craft and coffee-shop menu aesthetics.

Avoid using italics for body text; instead, use weight shifts (SemiBold/Bold) to create emphasis.

## Layout & Spacing
The layout follows a **Fixed Grid** approach for the main content container to ensure readability, while the background elements (gradients and glass layers) are fluid.

*   **Desktop:** A 12-column grid with a 1200px max-width. Sections are separated by generous vertical padding (120px) to evoke a premium, airy feel.
*   **Mobile:** Transitions to a single-column layout with 20px side margins. 
*   **Rhythm:** All spacing—from margins to component padding—follows an 8px base unit (8, 16, 24, 32, 48, 64).

The hero section uses a symmetrical split inspired by the wireframe, centering the profile image but flanking it with high-impact typography to create balance.

## Elevation & Depth
Depth is created through **Glassmorphism** and **Tonal Layers** rather than heavy shadows.

1.  **Level 0 (Base):** Pure white background (#FFFFFF).
2.  **Level 1 (Cards):** Tertiary blue (#F2FBFF) with a 1px solid border in a slightly darker blue shade (10% opacity).
3.  **Level 2 (Overlays/Nav):** Semi-transparent white (80% opacity) with a 12px backdrop blur. This is used for the sticky navigation bar and project detail hover states.
4.  **Shadows:** When used (e.g., on the primary CTA), shadows should be "Long & Soft"—low opacity (10%) using the primary color hex to create a colored glow rather than a grey smudge.

## Shapes
The shape language is **Rounded**, balancing the "personable" nature of the brand with professional structure. 

*   **Standard Components:** Buttons and input fields use a 0.5rem (8px) radius.
*   **Large Components:** Project cards and the "Tools" section containers use a 1rem (16px) radius to feel more approachable.
*   **Profiles:** The profile picture (as seen in the wireframe) should be a perfect circle to stand out against the geometric grid.

## Components

### Buttons
*   **Primary:** Solid Primary Blue background with White text. Use a subtle scale-up transform (1.05x) on hover.
*   **Secondary:** Ghost style. Primary Blue 2px border with Primary Blue text. Background fills with a 5% blue tint on hover.

### Project Cards
Inspired by the wireframe’s three-column layout. Cards feature a top image area and a bottom content area. The header of the card should use `label-mono` to display the project category (e.g., `// WEB_APP`).

### Chips (Tools)
Used for the "Tools" section. Small, pill-shaped containers with the Tertiary Blue background and `label-mono` text in the Primary Blue color.

### Input Fields
Clean, 1px border in Neutral Slate. Upon focus, the border changes to Primary Blue and gains a soft blue outer glow (3px spread).

### Special Motifs
*   **Code Brackets:** Use thin, oversized primary-colored brackets `<span>{</span>` to frame key sections like "My Projects".
*   **Coffee Stain:** A very low opacity (3%), abstract circular SVG "stain" can be used as a background decoration in the "Contact" section to reinforce the coffee culture theme.