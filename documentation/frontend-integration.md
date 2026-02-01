1. **Run the frontend locally** and confirm it builds cleanly.
2. **Decide the minimum MVP routes/screens** you want (even if you keep state-based screens initially): Start/Test, Result summary, Full HTML report (or “Open report”).
3. **Add environment config**: create `.env` / `.env.local` with `VITE_API_BASE_URL=http://localhost:xxxx`.
4. **Add a config helper** (e.g. `src/config.ts`) that exports `API_BASE_URL`.
5. **Create a typed API client layer**

   * Create `src/api/http.ts` with `fetchJSON()` and `fetchText()` + consistent error handling.
   * Create `src/api/types.ts` for DTOs (active content payload, session create response `{ sessionId, contentVersionId }`, answer DTO `{ questionId, answerValue }`, etc.).
   * Create `src/api/endpoints.ts` implementing:

     * `getActiveContent()` → `GET /content/active`
     * `createSession()` → `POST /sessions`
     * `patchAnswers(sessionId, answers[])` → `PATCH /sessions/:id/answers`
     * `submitSession(sessionId, email?)` → `POST /sessions/:id/submit`
     * `getReportHtml(sessionId)` → `GET /sessions/:id/report` (`text/html`)
6. **Introduce app state for session + content + answers**

   * Choose/store implementation (React Context + `useReducer` or Zustand).
   * Store: `contentVersionId`, `sessionId`, `questions` (from active content), `answers` map, and a `status` state (`idle/loading/answering/submitting/submitted/error`).
7. **Replace hardcoded questions with backend-driven content**

   * On app start or “Begin Assessment”, call `GET /content/active`.
   * Render questions/options from backend data.
   * Map backend question types to UI components (Likert integer range, MCQ option values).
8. **Implement real session creation**

   * When user clicks “Begin Assessment” / “Start test”, call `POST /sessions`.
   * Store `sessionId` + `contentVersionId`.
   * Ensure the questionnaire UI only allows answering after a session exists.
9. **Persist answers to backend**

   * On each answer change: update local state immediately, then call `PATCH /sessions/:id/answers`.
   * Optional but recommended: add debounce/batching (e.g., 300–800ms) and send in chunks.
   * Handle backend validation errors (range errors, wrong option value, “session not draft”, etc.).
10. **Implement submit/scoring call**

    * On “Submit”: (optional) collect email, then call `POST /sessions/:id/submit`.
    * Store the returned **result snapshot** payload for the result/summary screen.
11. **Enforce “all questions answered” validation for API mode (currently missing)**

    * Before submit: highlight missing/unanswered questions and/or show a list.
    * Keep UX friendly even though backend enforces completeness.
12. **Stop using hardcoded archetypes / frontend scoring as source of truth**

    * Remove/retire frontend-only archetype mapping (`../data/archetypes`, `calculateResult()`, placeholder result).
    * Display whatever archetype/result the backend returns (from submit snapshot, or later a dedicated endpoint if you add one).
13. **Implement report rendering (currently missing)**

    * Add “View full report” action that calls `GET /sessions/:id/report` (`text/html`).
    * Render via `<iframe srcDoc={html}>` or open a new tab and write the HTML.
    * Add guardrails: report only available after submit; show a clear message otherwise.
14. **Add routing (optional for MVP, but recommended)**

    * Add `react-router-dom` routes: `/`, `/test/:sessionId?`, `/result/:sessionId`, `/report/:sessionId`.
    * Ensure refresh/deep links still work.
15. **Add persistence across refresh (optional)**

    * Persist `sessionId` + local answers to `localStorage` so progress isn’t lost.
16. **Improve resilience and UX**

    * Loading states, disable buttons while saving/submitting.
    * “Saved” indicator (e.g., last saved timestamp).
    * Retry/clear error messaging on network failures.
