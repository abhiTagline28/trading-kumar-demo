# Mentorship Routes & Components Documentation

## Overview
This document outlines all mentorship-related routes and components based on the design specifications.

## Routes

### Main Routes

1. **`/mentorship`** - Main mentorship landing page
   - Displays comprehensive mentorship information
   - Includes all key sections: hero, profiles, roadmap, FAQ, etc.

2. **`/mentorship/enroll`** - Enrollment page
   - Secure seat in mentorship program
   - Payment and registration form (placeholder)

3. **`/mentorship-pathfinder`** - Mentorship pathfinder (referenced in header)
   - Guided path selection for mentorship
   - (To be implemented)

## Component Structure

### Main Page Components (`/mentorship`)

#### 1. `MentorshipHero`
- **Location**: `components/mentorship/MentorshipHero.tsx`
- **Purpose**: Hero section with main value proposition
- **Content**: 
  - Headline: "Stop Guessing with Retail Illusions..."
  - Description of institutional data approach
  - CTA: "Secure My Seat in The Mentorship"

#### 2. `MentorshipIntro`
- **Location**: `components/mentorship/MentorshipIntro.tsx`
- **Purpose**: Introduction to mentorship program
- **Content**:
  - "Master the Science of Institutional Orderflow"
  - Program description
  - CTA button

#### 3. `ProfessionalProfiles`
- **Location**: `components/mentorship/ProfessionalProfiles.tsx`
- **Purpose**: Display three professional profile types
- **Profiles**:
  - **The Analytical Professional**: Doctors, Bankers, CAs & Advocates
  - **The Strategic Leader**: CEOs, Founders & Ex-IPS Officers
  - **The Future Architect**: IT Engineers & Data Scientists
- **Features**: Each card has illustration placeholder and CTA button

#### 4. `WhyChooseUs`
- **Location**: `components/mentorship/WhyChooseUs.tsx`
- **Purpose**: Highlight key benefits
- **Benefits**:
  - Zero-Fluff Methodology
  - Time-Efficient Execution
  - Original Research
  - Peer-Level Environment

#### 5. `EliteBadgeRow`
- **Location**: `components/mentorship/EliteBadgeRow.tsx`
- **Purpose**: Display professional badges/icons
- **Badges**: Legal Experts, Medical Specialists, Civil Servants, Tech Leads, Finance Heads
- **Note**: Placeholder for animated icons

#### 6. `MentorshipRoadmap`
- **Location**: `components/mentorship/MentorshipRoadmap.tsx`
- **Purpose**: Display 3-phase mentorship structure
- **Phases**:
  - **Phase 01: The Structural Blueprint**
    - Objective: Master market's "Skeleton"
    - Topics: Institutional Eye, Price Action & Psychology, Advanced Frameworks, Supply & Demand
  - **Phase 02: The Mathematical Edge**
    - Objective: Find 'Gold Zones' with precision
    - Topics: Precision Anchoring, Geometry of Trading, Fair Value Gap, Static & Dynamic Volume
  - **Phase 03: Institutional Intelligence (The "Deep End")**
    - Objective: Decode the 'Tape'
    - Topics: Volume Footprint, CVD, Orderflow Delta & Liquidity Maps, Science of Absorption

#### 7. `SystemOverview`
- **Location**: `components/mentorship/SystemOverview.tsx`
- **Purpose**: Explain system philosophy
- **Content**:
  - "Why this is the only system you will ever need"
  - Logic over Indicators
  - "One System. Every Market. No Exceptions"
  - Framework deployment across exchanges

#### 8. `GlobalExchangesMap`
- **Location**: `components/mentorship/GlobalExchangesMap.tsx`
- **Purpose**: Display global exchanges map
- **Note**: Placeholder for animated map with exchange highlights
- **Exchanges**: NSE, BSE, NASDAQ, LSE, Global Crypto Exchanges

#### 9. `MessageToProfessional`
- **Location**: `components/mentorship/MessageToProfessional.tsx`
- **Purpose**: Personal message from Kumar Singh
- **Content**: 
  - Key concepts overview
  - Message to professional traders
  - Content placeholder section

#### 10. `MentorshipFAQ`
- **Location**: `components/mentorship/MentorshipFAQ.tsx`
- **Purpose**: Frequently Asked Questions
- **Type**: Client component (uses useState for accordion)
- **Questions**:
  1. Time commitment for busy professionals
  2. Suitability for beginners
  3. Original research vs YouTube
  4. International market applicability
  5. Capital requirements

## Data Structures

### Professional Profile
```typescript
interface ProfessionalProfile {
  title: string;
  targetAudience: string;
  description: string;
}
```

### Mentorship Phase
```typescript
interface Phase {
  phaseNumber: string;
  title: string;
  objective: string;
  topics: Topic[];
}

interface Topic {
  title: string;
  description: string;
}
```

### FAQ Item
```typescript
interface FAQItem {
  question: string;
  answer: string;
}
```

## Component Dependencies

- All components use `Button` from `@/components/programs/Button`
- Main page uses `Header` and `Footer` from root components
- TypeScript types are properly defined
- All components are production-ready with error handling

## Styling

- Uses Tailwind CSS
- Responsive design (mobile-first)
- Consistent spacing and typography
- Gray-50/white background alternation for visual separation

## Next Steps

1. Add illustrations/images to placeholder sections
2. Implement enrollment form on `/mentorship/enroll`
3. Create `/mentorship-pathfinder` route
4. Add animations to EliteBadgeRow
5. Implement interactive GlobalExchangesMap
6. Add testimonials section if needed
7. Connect CTAs to actual enrollment flow
