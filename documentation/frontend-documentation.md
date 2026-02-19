# MIRRA Wealth Archetype Test — Frontend Project Documentation

## 1. Project Overview

**MIRRA Wealth Archetype Test** is a single-page React application that guides users through a personality-style questionnaire to determine their "Wealth Archetype" — one of eight archetypes represented by animals (Elephant, Otter, Tiger, Falcon, Turtle, Snake, Wolf, Dolphin). The project was originally scaffolded from a Figma design (see the [Figma source](https://www.figma.com/design/thkfPaeQ4HPgntGyuQtSHL/MIRRA-wealth-archetype-test)).

The app supports two operating modes:
- **API Mode**: Questions are fetched from a backend, answers are persisted per-session, and the final archetype result is calculated server-side.
- **Local/Demo Mode**: A hardcoded set of 19 questions with client-side scoring logic is used when the backend is unavailable or returns no content.

---

## 2. Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Language | TypeScript (strict mode) | ES2020 target |
| UI Framework | React | ^18.3.1 |
| Build Tool | Vite (with SWC plugin) | 6.3.5 |
| Styling | Tailwind CSS v4 | v4.1.3 (inlined in `index.css`) |
| Animation | Motion (Framer Motion) | `motion` package (latest) |
| UI Primitives | Radix UI | Multiple `@radix-ui/react-*` packages |
| Component Library | shadcn/ui-style components | In `src/components/ui/` |
| Icons | Lucide React | ^0.487.0 |
| Charts | Recharts | ^2.15.2 (available, not actively used in main flow) |
| Forms | React Hook Form | ^7.55.0 (available, not actively used in main flow) |

### Key Dev Dependencies
- `@vitejs/plugin-react-swc` — SWC-based React fast refresh
- `@types/node`, `@types/react-dom` — TypeScript type definitions

---

## 3. Project Structure

```
wealth-test-frontend/
├── index.html                   # SPA entry HTML shell
├── package.json                 # Dependencies, scripts
├── tsconfig.json                # TypeScript config (strict, ES2020, react-jsx)
├── tsconfig.node.json           # TS config for Vite config file
├── vite.config.ts               # Vite bundler config with path aliases
├── README.md                    # Basic setup instructions
├── documentation/
│   └── frontend-integration.md  # Integration roadmap/checklist for backend hookup
├── src/
│   ├── main.tsx                 # React root render entry point
│   ├── App.tsx                  # Root component — page state machine + data fetching
│   ├── config.ts                # API base URL config (env-driven)
│   ├── index.css                # Tailwind CSS v4 compiled output + Google Fonts import
│   ├── vite-env.d.ts            # Vite env type declarations (VITE_API_BASE_URL)
│   ├── api/                     # Backend API integration layer
│   │   ├── types.ts             # TypeScript interfaces/DTOs for all API payloads
│   │   ├── http.ts              # Generic fetch wrappers (fetchJSON, fetchText) + error class
│   │   └── endpoints.ts         # Typed endpoint functions (getActiveContent, createSession, etc.)
│   ├── components/
│   │   ├── Home.tsx             # Main page: hero + questionnaire UI (1078 lines, core logic)
│   │   ├── Result.tsx           # Archetype result display page
│   │   ├── Registry.tsx         # Browse all 8 archetypes gallery page
│   │   ├── Navigation.tsx       # Fixed top navbar with logo + "View Archetypes" link
│   │   ├── Logo.tsx             # "MIRRA" brand logo component
│   │   ├── AnimatedBackground.tsx  # Full-screen ambient particle/orb animations
│   │   ├── AnimalIllustrations.tsx # Individual animal illustration components (8 animals)
│   │   ├── DecorativePattern.tsx   # Floating archetype-colored orbs + light streaks
│   │   ├── AuraOrb.tsx             # Diamond-shaped aura animation (decorative)
│   │   ├── MirrorAnimation.tsx     # Mirror opening/flipping animation (decorative)
│   │   ├── Hero.tsx                # Alternate hero component (not used in current flow)
│   │   ├── CloudBackground.tsx     # Alternate background (not used in current flow)
│   │   ├── FourMirrors.tsx         # Alternate decorative component (not used in current flow)
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx  # Image component with error fallback (from Figma export)
│   │   └── ui/                     # shadcn/ui component library (~50 components)
│   │       ├── button.tsx, card.tsx, dialog.tsx, input.tsx, ...
│   │       ├── utils.ts            # `cn()` utility (clsx + tailwind-merge)
│   │       └── use-mobile.ts       # Mobile detection hook
│   ├── data/
│   │   └── archetypes.ts       # Static archetype definitions (8 archetypes with metadata)
│   ├── assets/                  # Animal illustration PNG images
│   │   ├── elephant.png, otter.png, tiger.png, falcon.png
│   │   ├── turtle.png, snake.png, wolf.png, dolphin.png
│   ├── styles/
│   │   └── globals.css          # CSS custom properties / design tokens (light + dark themes)
│   └── guidelines/
│       └── Guidelines.md        # Placeholder for AI design system guidelines
```

---

## 4. Running the Project

```bash
# Install dependencies
npm install

# Start development server (default: http://localhost:5173)
npm run dev

# Production build
npm run build
```

### Environment Variables

| Variable | Purpose | Default |
|---|---|---|
| `VITE_API_BASE_URL` | Base URL for backend API | `/api` (relative to origin) |

Create a `.env.local` file to override:
```
VITE_API_BASE_URL=http://localhost:8080/api
```

The `apiUrl()` helper in `src/config.ts` joins this base with endpoint paths (e.g., `apiUrl("/sessions")` → `http://localhost:8080/api/sessions`).

---

## 5. Application Architecture

### 5.1 Page/State Management

The app uses **no router**. Navigation is managed via a `currentPage` state in `App.tsx` with three possible values:

| Page | Component | Description |
|---|---|---|
| `"home"` | `<Home />` | Landing hero + questionnaire flow |
| `"result"` | `<Result />` | Displays the user's archetype result |
| `"registry"` | `<Registry />` | Gallery of all 8 archetypes |

Page transitions are triggered by `onNavigate(page)` callbacks passed as props. There is **no URL-based routing** — refreshing the page always returns to the home screen.

### 5.2 Data Flow

```
App.tsx
  ├── On mount: GET /content/active → activeContent state
  │
  ├── <Home>
  │     ├── Receives: activeContent, contentLoading, contentError
  │     ├── On "Begin Assessment":
  │     │     └── If API mode: POST /sessions → sessionId
  │     ├── On each answer:
  │     │     └── If API mode: PATCH /sessions/:id/answers
  │     ├── On last answer:
  │     │     └── If API mode: POST /sessions/:id/submit → ResultSnapshot
  │     │     └── If local mode: client-side calculateResult()
  │     └── Calls onAssessmentComplete(archetypeResult)
  │
  ├── <Result>
  │     └── Displays ArchetypeResult (name, animal, description, traits, theme, backgroundColor)
  │
  └── <Registry>
        └── Displays all 8 archetypes from static data (src/data/archetypes.ts)
```

### 5.3 Dual Mode: API vs Local

The `Home` component determines the mode based on:
```typescript
const isApiMode = !!activeContent?.questions?.length && !contentError;
```

- **API Mode** (`isApiMode === true`): Questions come from `activeContent.questions`, answers are sent to the backend, and the result comes from the submit response's `resultSnapshot`.
- **Local Mode** (`isApiMode === false`): Uses 19 hardcoded questions defined in `Home.tsx` with client-side dimensional scoring logic.

---

## 6. Backend API Integration

### 6.1 API Client Architecture

The API layer lives in `src/api/` with three files:

- **`config.ts`** — Exports `API_BASE_URL` from env and `apiUrl(path)` helper
- **`http.ts`** — Generic `fetchJSON<T>()` and `fetchText()` wrappers with:
  - Automatic JSON content-type headers
  - Query parameter support
  - Custom `ApiError` class with `status`, `url`, and `details`
  - Absolute URL resolution (works with both absolute and relative base URLs)
- **`endpoints.ts`** — Typed functions for each endpoint
- **`types.ts`** — All TypeScript interfaces for API request/response payloads

### 6.2 API Endpoints

| Function | HTTP Method | Path | Request Body | Response Type |
|---|---|---|---|---|
| `getActiveContent()` | `GET` | `/content/active` | — | `ActiveContentResponse` |
| `createSession()` | `POST` | `/sessions` | — | `CreateSessionResponse` |
| `patchSessionAnswers(sessionId, body)` | `PATCH` | `/sessions/:id/answers` | `PatchAnswersRequest` | `{ ok: true }` |
| `submitSession(sessionId, body)` | `POST` | `/sessions/:id/submit` | `Record<string, unknown>` | `SubmitSessionResponse` |
| `getSessionReportHtml(sessionId)` | `GET` | `/sessions/:id/report` | — | `string` (HTML) |

### 6.3 Key TypeScript Types (API DTOs)

```typescript
// GET /content/active response
interface ActiveContentResponse {
  contentVersionId: string;
  versionName?: string;
  questions: ApiQuestion[];
}

interface ApiQuestion {
  id: string;
  text: string;           // Question prompt text
  type: QuestionType;     // "likert" | "mcq"
  order?: number;
  metadata?: Record<string, unknown>;  // For likert: { minValue, maxValue, minLabel, maxLabel }
  options: ApiOption[];   // Empty array for likert questions
}

interface ApiOption {
  id: string;
  value: string;
  label: string;
  order?: number;
}

// POST /sessions response
interface CreateSessionResponse {
  sessionId: string;
  contentVersionId: string;
}

// PATCH /sessions/:id/answers body
interface PatchAnswersRequest {
  answers: AnswerDTO[];
}
interface AnswerDTO {
  questionId: string;
  answerValue: AnswerValue;  // number | string
}

// POST /sessions/:id/submit response
interface SubmitSessionResponse {
  sessionId: string;
  contentVersionId: string;
  resultSnapshot: ResultSnapshot;
  submittedAt: string;   // ISO datetime
}

interface ResultSnapshot {
  traitScores: Record<string, number>;  // e.g. { preserver: 4, expander: 1, ... }
  archetypeKey: ArchetypeKey;           // e.g. "builder"
  archetypeName: string;               // e.g. "The Builder"
  confidence: number;
  breakdown: ResultBreakdown;
}
```

### 6.4 Question Type Handling

The frontend normalizes both API and local questions into a unified `NormalizedQuestion` type:

- **MCQ questions** (`type: "mcq"` or has non-empty `options` array): Renders option buttons with `value` sent as `answerValue`.
- **Likert questions** (`type: "likert"` or fallback): Generates a numeric scale from `metadata.minValue` (default 1) to `metadata.maxValue` (default 5). Optionally displays `metadata.minLabel` and `metadata.maxLabel`.

### 6.5 Answer Persistence

Answers are sent to the backend **immediately** after each option click (no batching/debounce), one answer at a time via `PATCH /sessions/:id/answers`. If the save fails, the user is not advanced to the next question. An error message is displayed.

### 6.6 Session Flow

1. Page load → `GET /content/active` (fetches questions)
2. User clicks "Begin Assessment" → `POST /sessions` (creates session)
3. User answers each question → `PATCH /sessions/:id/answers` (persists answer)
4. User answers the last question → `POST /sessions/:id/submit` (scores and returns result)
5. Result is mapped to an `ArchetypeResult` and displayed on the Result page

---

## 7. Domain Model: The 8 Wealth Archetypes

The questionnaire evaluates users across 4 dimensions, each with two poles:

| Dimension | Pole A | Pole B | Question IDs (local) |
|---|---|---|---|
| 1: Value Orientation | Preserver | Expander | 1–4 |
| 2: Money Relationship | Flow | Anchor | 5–7 |
| 3: Financial Modality | Builder | Flow-Seeker | 8–13 |
| 4: Psycho-Spiritual Energy | Integration | Separation | 14–19 |

### Archetype Mapping (local scoring)

| Archetype | Animal | D1 | D2 | D3 | D4 | Background Color |
|---|---|---|---|---|---|---|
| Preserver + Anchor | Elephant | Preserver | Anchor | Builder | Separation | `#e8f0f2` |
| Preserver + Flow | Otter | Preserver | Flow | FlowSeeker | Integration | `#f8f3e8` |
| Expander + Anchor | Tiger | Expander | Anchor | Builder | Separation | `#ede9f5` |
| Expander + Flow | Falcon | Expander | Flow | Builder | Separation | `#f0ecf7` |
| Builder + Integration | Turtle | Preserver | Anchor | Builder | Integration | `#e6f1f3` |
| Flow-Seeker + Separation | Snake | Preserver | Flow | FlowSeeker | Separation | `#f7f1e5` |
| Anchor + Integration | Wolf | Preserver | Anchor | FlowSeeker | Integration | `#e8f3ed` |
| Flow + Integration | Dolphin | Expander | Flow | FlowSeeker | Integration | `#e7f4ef` |

Each archetype has: `name`, `animal`, `theme`, `description`, `traits[]`, `backgroundColor` — defined in `src/data/archetypes.ts`.

When in **API mode**, the backend's `resultSnapshot.archetypeKey` is matched against the local archetypes' `animal` field for enrichment. If no local match is found, a minimal result is created from the backend response.

---

## 8. Styling & Design System

### 8.1 CSS / Tailwind

- **Tailwind CSS v4** is used (compiled output is in `src/index.css`; source theme is in `src/styles/globals.css`)
- Custom CSS properties are defined in `:root` for both light and dark themes in `globals.css`
- The `cn()` utility from `src/components/ui/utils.ts` combines `clsx` and `tailwind-merge` for conditional class merging

### 8.2 Fonts (Google Fonts, loaded via CSS)

| Font | Usage |
|---|---|
| **Cinzel Decorative** | Headings, titles, archetype names |
| **Cormorant Garamond** | Italic subtitle text, decorative copy |
| **Montserrat** | Body text, labels, buttons, tracking text |

### 8.3 Color Palette

The design uses a warm, gold/amber-centric palette:

| Token | Value | Usage |
|---|---|---|
| Primary gold | `#C4A574` | CTA buttons, accents, progress bars |
| Dark text | `#3D3D3D` | Main headings |
| Body text | `#6B5D52` | Paragraph text |
| Accent gold | `#C4A574` | Borders, lines, hover states |

Each archetype also has a unique pastel color (used for backgrounds and illustrations):
- Blue: `#89a8b3` (Elephant), Green: `#93b8a3` (Wolf), Yellow: `#d4b896` (Otter), Purple: `#a99fb8` (Tiger), etc.

### 8.4 Animations

All animations use the `motion` package (Framer Motion). Key animated elements:
- `AnimatedBackground` — golden clouds, light streaks, glowing orbs, shimmer particles
- `DecorativePattern` — floating colored orbs, mirror reflection light streaks
- Question transitions — fade in/out with `AnimatePresence`
- Result page — scale/fade entrance, staggered trait cards
- Registry cards — hover lift, modal scale entrance

---

## 9. Component Reference

### Core Page Components

| Component | File | Props | Description |
|---|---|---|---|
| `Home` | `src/components/Home.tsx` | `onAssessmentComplete`, `onNavigate`, `activeContent`, `contentLoading`, `contentError` | Main page with hero section and full questionnaire flow. Contains all session management, answer persistence, and scoring logic. |
| `Result` | `src/components/Result.tsx` | `result: ArchetypeResult`, `onNavigate` | Displays the determined archetype with animal illustration, description, and traits. |
| `Registry` | `src/components/Registry.tsx` | `onNavigate` | Grid gallery of all 8 archetypes with click-to-expand modal detail view. |

### Shared/Layout Components

| Component | File | Description |
|---|---|---|
| `Navigation` | `src/components/Navigation.tsx` | Fixed top nav bar with MIRRA logo and "View Archetypes" link |
| `Logo` | `src/components/Logo.tsx` | MIRRA brand text rendered in Cinzel Decorative font |
| `AnimatedBackground` | `src/components/AnimatedBackground.tsx` | Full-screen ambient particle animation layer |
| `AnimalIllustrations` | `src/components/AnimalIllustrations.tsx` | 8 exported components (e.g., `ElephantIllustration`) rendering animal PNGs with glow effects |
| `DecorativePattern` | `src/components/DecorativePattern.tsx` | Floating colored orbs and light streak animations |
| `ImageWithFallback` | `src/components/figma/ImageWithFallback.tsx` | Image component that shows a placeholder SVG on load error |

### Unused/Alternate Components

These components exist in the codebase but are **not referenced** in the current active flow:
- `Hero.tsx` — simpler alternate hero section
- `CloudBackground.tsx` — alternate background animation
- `FourMirrors.tsx` — alternate decorative component
- `MirrorAnimation.tsx` — mirror opening/flipping animation
- `AuraOrb.tsx` — diamond-shaped aura animation

### UI Component Library (`src/components/ui/`)

A full set of ~50 shadcn/ui-style components built on Radix UI primitives. These are available for use but most are **not actively used** in the current 3-page flow. Key utilities:

- `cn()` in `utils.ts` — class name merging utility
- `use-mobile.ts` — `useIsMobile()` hook (breakpoint: 768px)

---

## 10. Key Types & Interfaces

### `ArchetypeResult` (defined in `App.tsx`)

The core domain type passed between pages:
```typescript
type ArchetypeResult = {
  name: string;          // e.g. "Preserver + Anchor"
  animal: string;        // e.g. "Elephant" — used as the primary key
  description: string;   // Full archetype description paragraph
  traits: string[];      // e.g. ["Stable", "Guardian", "Family-Oriented", "Long-term Vision"]
  theme: string;         // e.g. "Stability & Protection"
  backgroundColor: string; // e.g. "#e8f0f2" — used for page/card background
};
```

### `NormalizedQuestion` (internal to `Home.tsx`)

Unified question format used for rendering:
```typescript
type NormalizedQuestion = {
  id: string;
  source: "api" | "local";
  dimension?: string;           // Only for local questions
  title?: string;               // Only for local questions
  prompt: string;               // The question text displayed
  options: NormalizedOption[];
  likertMinLabel?: string;      // Only for API likert questions
  likertMaxLabel?: string;      // Only for API likert questions
};
```

---

## 11. Known Limitations & Integration Gaps

Based on `documentation/frontend-integration.md` and code analysis:

1. **No client-side routing** — No `react-router-dom`; deep linking and refresh persistence are not supported.
2. **No session persistence** — `sessionId` is lost on page refresh; no `localStorage` backup.
3. **No "all questions answered" validation** — The UI allows submission even if some questions are skipped (backend may reject).
4. **Report rendering not integrated** — `getSessionReportHtml()` endpoint function exists but is not called anywhere in the UI.
5. **Local archetype data as fallback** — When the backend returns an `archetypeKey` not matching any local animal name, a minimal result with empty description/traits is shown.
6. **No email capture** — The `SubmitSessionRequest.email` field exists in types but the UI does not collect it.
7. **Background audio** — Auto-plays ambient music from an external CDN URL with mute toggle. No user consent prompt.
8. **No error retry mechanisms** — Failed API calls show error text but don't offer automatic retry.
9. **No loading skeleton** — Content loading shows plain text "Loading content..." rather than skeleton UI.

---

## 12. Vite Configuration Notes

The `vite.config.ts` contains:
- **React SWC plugin** for fast JSX/TSX compilation
- **Versioned package aliases** — Maps `packageName@version` to `packageName` (artifact of Figma code export)
- **Figma asset aliases** — Maps `figma:asset/hash.png` to local `src/assets/` paths (artifact of Figma code export)
- Standard file extension resolution (`.js`, `.jsx`, `.ts`, `.tsx`, `.json`)

---

## 13. Development Guidelines

- **TypeScript strict mode** is enabled — all code must pass strict type checking
- **`noUnusedLocals` and `noUnusedParameters`** are enabled — remove unused variables
- **No test framework** is currently configured
- **No linter/formatter** (ESLint/Prettier) is currently configured
- The `src/components/ui/` directory follows shadcn/ui conventions — components are standalone, copy-paste-friendly, and use `cn()` for class merging
- Animation-heavy components use `motion/react` (the v11+ import path for Framer Motion)
- All API calls include proper TypeScript generics for type-safe responses

---

## 14. File Quick Reference for Common Tasks

| Task | Relevant Files |
|---|---|
| Add/modify API endpoints | `src/api/endpoints.ts`, `src/api/types.ts` |
| Change API base URL | `src/config.ts`, `.env.local` (`VITE_API_BASE_URL`) |
| Modify questionnaire flow | `src/components/Home.tsx` |
| Change archetype definitions | `src/data/archetypes.ts` |
| Add a new page/screen | `src/App.tsx` (add to page state union + render conditions) |
| Modify result display | `src/components/Result.tsx` |
| Change navigation | `src/components/Navigation.tsx` |
| Add new animal illustration | `src/components/AnimalIllustrations.tsx`, `src/assets/` |
| Modify design tokens/theme | `src/styles/globals.css` |
| Add a new UI component | `src/components/ui/` (follow shadcn/ui patterns) |
| Modify Tailwind config | `src/index.css` (Tailwind v4 uses CSS-based config) |
