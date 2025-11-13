# Pratham Sharma's Portfolio Website

Welcome to the source code repository for my personal portfolio website, a creative showcase of my skills, projects, and experiences tailored for developers. Designed with a Visual Studio Code theme, this website offers a familiar platform that visually resembles an IDE, making it intuitive for developers to navigate.

## Overview

This portfolio is not just a website but an interactive experience designed in the theme of Visual Studio Code. It features customizable color themes accessible through a settings option, enhancing user experience by allowing visitors to choose their preferred visual style.

## Pages

- **Home Page:** The main landing page that introduces visitors to the site.
- **Projects Page:** Displays detailed descriptions of my projects, the technologies used, and links to live sites and source code.
- **Experience Page:** Showcases a vertical timeline of my professional experience.
- **Education Page:** Details my academic background and qualifications.
- **Resume Page:** Provides a downloadable link to my resume for a comprehensive view of my capabilities.
- **About Page:** Offers insights into my personal and professional background.
- **Contact Page:** Allows visitors to contact me directly through the website and links to my social media profiles.

## Tech Stack

- **Frontend:** React, Next.js
- **Styling:** CSS Modules
- **Deployment:** Netlify
- **APIs:** Integration with Notion for storing form data from the contact page.

## Local Development

### Prerequisites

Before you begin, make sure you have the following installed:
- Node.js
- npm (bundled with Node.js)
- Git

### Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Vveanta/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Setup Environment Variables:**
   - Rename `env.local.example` to `env.local`.
   - Populate the required API keys and URLs in `env.local`.

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Visit the site at `http://localhost:3000`.

## Deployment

Deployment is managed through Netlify with a CI/CD pipeline automatically triggered by commits to the main branch.

### Environment Variables on Netlify

Configure the production environment variables in the Netlify dashboard under **Settings > Build & deploy > Environment**. This includes setting the `NEXT_PUBLIC_API_URL` to the correct production API endpoint.


