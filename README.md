**Task Management Dashboard**

A modern, responsive task management dashboard built with React, featuring comprehensive user management, task tracking, and analytics visualization.

🚀 **Features**

Dashboard Overview

Real-time Metrics: Track total tasks, completed tasks, in-progress items, and team members

Interactive Charts: Visual representation of task progress and status distribution

Weekly Analytics: Bar charts showing completed vs pending tasks by day

Status Distribution: Doughnut charts for task status breakdown


User Management

User Directory: Complete user listing with search and filtering

Role Management: Admin and User role assignments with color-coded badges

User Actions: View, edit, and delete user functionality

Search & Filter: Real-time search across names, emails, and roles

Avatar Generation: Automatic colored avatars with user initials


Design & UX

Responsive Design: Mobile-first approach that works on all devices

Modern UI: Clean, intuitive interface with smooth animations

Interactive Elements: Hover effects, dropdown menus, and button interactions

Accessibility: Proper contrast ratios and semantic HTML structure


🛠️ **Tech Stack**

Frontend Framework: React 18+ with Hooks

Styling: Tailwind CSS

Charts: Chart.js for data visualization

Icons: Lucide React

State Management: React useState/useReducer


📦** Installation**

Clone the repository

bashgit clone https://github.com/HimaniSrivastav/TaskFlow

cd task-management-dashboard


🏗️ **Project Structure**

src/

├── components/

│   ├── Dashboard/

│   │   ├── TaskDashboard.jsx

│   │   ├── MetricCard.jsx

│   │   ├── ChartCard.jsx

│   │   ├── WeeklyTaskChart.jsx

│   │   └── TaskStatusChart.jsx

│   ├── Users/

│   │   ├── UserManagement.jsx

│   │   ├── UserRow.jsx

│   │   ├── UserAvatar.jsx

│   │   ├── RoleBadge.jsx

│   │   └── ActionDropdown.jsx

│   └── Layout/

│       ├── Header.jsx

│       ├── Sidebar.jsx

│       └── Navigation.jsx

├── hooks/

│   ├── useUsers.js

│   └── useTasks.js

├── utils/

│   ├── chartConfig.js

│   └── helpers.js

└── styles/

    └── globals.css
    




🐛 **Troubleshooting**

Common Issues


Charts not rendering


Ensure Chart.js is properly installed

Check that canvas elements have proper dimensions

Verify chart data structure matches expected format



Tailwind styles not applying


Confirm Tailwind CSS is properly configured

Check that purge/content paths include your component files

Restart development server after config changes



Icons not displaying

Verify Lucide React is installed

Check import statements for icon components

Ensure proper icon names are used


React - Frontend framework

Tailwind CSS - CSS framework

Chart.js - Chart library

Lucide - Icon library

