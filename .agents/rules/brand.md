# BRAND RULES — Espresso Bolognese (Strict, Project-Wide)

## TYPOGRAPHY
- **Headings**: `"Barlow Semi Condensed"`, weights 600/700. Slightly tight letter spacing (`-0.01em`). This matches the logo's condensed geometric sans.
- **Body**: `"Barlow"`, weights 400/500. Line height `1.6`.
- Load both from Google Fonts (`next/font/google`). No other fonts anywhere.
- Logo wordmark is never recreated in HTML text, always use the logo asset.

## COLOR SYSTEM (CSS variables, use these tokens only, never hardcode hex in components)
- `--brand-brown`: `#8C7355` (primary, hero backgrounds, brand surfaces)
- `--brand-cream`: `#FAF7F2` (page background, light sections)
- `--brand-white`: `#FFFFFF` (text on brown, cards)
- `--brand-dark`: `#3E3226` (footer, dark sections, body text on light bg)
- `--accent-green`: `#2E7D46` (accents only)
- `--accent-red`: `#C93A35` (accents only)

## USAGE RULES
- 60% brown/cream surfaces, 30% white space, max 10% accent colors.
- Green and red are NEVER used together in the same section. One accent per zone.
- Red is reserved for primary CTAs only. Green for hover states, small dividers, thin frame details.
- Accents appear as thin lines, corner frames, or small UI details, mirroring the logo's corner brackets. Never as full section backgrounds.
- Default text: `--brand-dark` on light, `--brand-white` on brown.
- No gradients on brand colors. Flat, premium, espresso-bar-meets-modern aesthetic.
- Generous whitespace. Rounded corners max 8px to match the logo's letterforms.
- If any design decision conflicts with these rules, the rules win.
