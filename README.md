Drone Portal

Welcome to the Drone Portal, a web application for managing your drone fleet's configuration, submitting operational data, and reviewing history.

This project is a Next.js/React application styled with Tailwind CSS.

Features

Based on the main landing page, the portal provides three core functionalities:

Manage Configuration: View and manage your drone's core settings, including ID, name, and operational parameters.

Submit Data: Easily submit new operational data, such as temperature logs, directly from the field.

Review History: Access and review the complete, paginated history of all submitted logs to track performance.

Tech Stack

React (or Next.js given the "use client"; directive)

Tailwind CSS

Getting Started

To get a local copy up and running, follow these simple steps.

Prerequisites

Node.js (v18 or later recommended)

npm, yarn, or pnpm

Installation & Running

Clone the repository:

git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
cd your-repository-name


Install dependencies:

npm install
# or
yarn install
# or
pnpm install


Run the development server:

npm run dev
# or
yarn dev
# or
pnpm dev


Open http://localhost:3000 with your browser to see the result.

Pages

Home: / (The main portal landing page)

Configuration: /config

Submit Log: /submit

View Logs: /logs
