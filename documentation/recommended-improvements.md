# Recommended Improvements for UI/UX of the Frontend System

1. **Prevent duplicate sessions**: The current session is saved in local storage. When the user refreshes the page, the website does not automatically create a new session, and the user can continue where they left off (if they started an assessment and had not finished) or view their result report again (if they had already finished an assessment).

2. **Restart or retake the assessment**: The user has the option to restart the assessment (if an assessment is ongoing) or to retake the assessment (if an assessment has finished). In either case, the user's data (current assessment progress, or result report) will be lost. The user will be warned before proceeding.

3. **Email and PDF**: The user has the option to view or download the result report in PDF form on the website, or to have the result report sent to the user's specified email address.
