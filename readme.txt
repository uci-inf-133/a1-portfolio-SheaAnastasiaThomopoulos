--Readme document for *Shea Thomopoulos*, *sthomopo@uci.edu*--

A reminder on academic integrity, as described in the syllabus.

In general, the course staff expects that you will look at code and examples from many online resources as part of the assignments, particularly to resolve syntax and understand frameworks. We expect that you'll use other libraries you find, and will even require it in some assignments. These practices are often critical to the work of developers today. The best developers are adept at interpreting the examples they see, customizing them to their specific situation, and citing their sources so they can find them later. We expect you to do the same.

While learning from examples is encouraged, attempting to pass an existing project or example from the web as your own is not allowed. If you ever have a question about what is or is not appropriate, feel free to ask the course staff!

Talking to classmates about class material, assignment requirements, etc. is a great way to verify ideas and get feedback. But this distinctly does *not* permit attempting to pass off someone else’s code as your own. Talking over ideas and approaches is allowed, but the work that you produce and submit must be your own.

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

10/10
- 1/1 Readme
- 2/2 Basic HTML content
- 1/1 Basic CSS styling
- 1/1 Advanced feature
- 2/2 Responsive layout
- 1/1 Passes validation checks
- 2/2 Embraces spirit of the assignment

2. What (a) basic features, (b) CSS features, and (c) advanced features did you include in your portfolio?

(a) Basic features
- Appropriate use of semantic HTML elements (like nav, main, section, footer)
- Clear heading hierarchy using h1 and h2 elements 
- Paragraph text describing background, experience, and projects
- External links (LinkedIn, email, resume)
- Structured navigation linking to different sections of the page

(b) CSS features
- Custom spacing using margines and padding to imporve readability and layout 
- Define color palette using CSS variable
- Custom typoghraphy using a Google Font with appropriate fallbacks 
- Hover and focus styles for interactive elements 
- Responsive layout adjustments using media queries

(c) Advanced features
- Custom interactive navigation bar with expandable menu 
- Modal dialog for project details with dynamic content populated via JavaScript 
- State based styling using adcanced CSS selectors (:checked...)

3. Did you ignore any of the warnings or errors presented by the accessibility checker? If so, why does this not seem like an accessibility concern? If it's useful, you can consolidate your thoughts on multiple warnings/errors if the rationale is similar.
Text direction / language (Checks 270, 271, 110): These warnings were ignored because the page content is entirely English and left-to-right, with no language or direction changes that require additional markup.
Visual lists not marked (Check 248): This warning was ignored because navigation items are already marked using semantic list elements and contact links are individual actionable links rather than a visual list.
Checkbox label proximity and description (Checks 123, 189, 219, 55): This warning was ignored because the checkbox is programmatically labeled using aria-label and associated with a visible label, making its purpose clear to assistive technologies.
Sensory characteristics references (Check 250): This warning was ignored because the page content does not rely on shape, color, or position alone to convey information or instructions.
Script color / keyboard / flicker warnings (Checks 86, 89, 87): These warnings were ignored because the checker cannot analyze external JavaScript, and the scripts only control predictable UI interactions without color-only cues or flashing content.
Skip link missing (Check 28): This warning was ignored because a visible “Skip to main content” link is present to allow keyboard and screen-reader users to bypass repeated navigation.
Grouped links not marked (Check 262): This warning was ignored because related navigation links are already grouped within a semantic <nav> element with an accessible label.
Page title description (Check 54): This warning was ignored because the page title clearly identifies the page as a personal portfolio and accurately describes its content.
Link purpose clarity (Check 19): This warning was ignored because link text is meaningful within context and supplemented with ARIA labels where necessary (e.g., the home link)
Multiple ways / sitemap (Check 184): This warning was ignored because the site is a single-page layout where navigation, scrolling, and landmarks already provide multiple ways to access content.
Headings used for formatting (Checks 42, 43): This warning was ignored because headings are used semantically to reflect the content hierarchy and support screen-reader navigation.

4. How long, in hours, did it take you to complete this assignment?
I worked on and off the project for a period of 4 days, I averaged about 3 hours a day coming to a total of about 12 hours of design, implementation, debugging, validation and accessibility review. 

5. What online resources did you consult when completing this assignment? (list specific URLs, describe queries to Generative AI, or use of AI-based code completion)
MDN Web Docs (HTML, CSS, and accessibility references): https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements
W3C Validator: https://validator.w3.org
Google Fonts documentation: https://fonts.google.com/
Generative AI (ChatGPT) was used to:
    Clarify HTML/CSS validation errors as some of them I didn't understand
    Margin issues, something was off with the spacing of my footer in relation to my body, asked for some guidance on what it could be


6. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
I did not consult classmates or other individuals directly for code.

7. Is there anything special we need to know in order to run your code?
No. The project consists of standard HTML, CSS, and JavaScript files and can be run by opening index.html in a modern web browser.