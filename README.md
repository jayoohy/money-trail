# Finance Tracker

A modern web application for tracking personal finances, built with React, TypeScript, and Vite. Features a responsive design with dark/light mode support and PWA capabilities.

## 🚀 Features

- 📊 **Interactive Dashboard**

  - Financial overview with multiple chart types
  - Recent transactions list
  - Current balance display
  - Spending breakdown by category

- 💰 **Transaction Management**

  - Add/Edit/Delete transactions
  - Categorize expenses and income
  - Date tracking
  - Notes and descriptions

- 🎨 **User Experience**

  - Responsive design (mobile & desktop layouts)
  - Dark/Light theme toggle
  - PWA support for offline access
  - Toast notifications
  - Loading states with spinners

- 📈 **Analytics**
  - Pie charts for spending breakdown
  - Bar charts for category comparison
  - Area charts for balance trends
  - Detailed reports view

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **State Management**: Redux Toolkit + Redux Persist
- **Styling**:
  - Tailwind CSS
  - ShadCN Components
  - CSS-in-JS with styled-components
- **Data Visualization**: Recharts
- **Routing**: React Router v6
- **PWA**: Custom service worker + manifest

## 📁 Project Structure

```
src/
├── assets/                 # Static assets and images
├── components/
│   ├── charts/            # Data visualization components
│   ├── dashboard/         # Dashboard-specific components
│   ├── transaction/       # Transaction-related components
│   ├── themes/            # Theme providers and toggles
│   └── ui/               # Reusable UI components
├── hooks/                 # Custom React hooks
├── layout/                # Layout components
├── lib/                   # Utility functions
├── routes/                # Route components and pages
└── store/                 # Redux store configuration
    ├── categories/        # Category state management
    ├── settings/          # App settings state
    └── transactions/      # Transaction state management
```

## 🚦 Getting Started

1. **Clone and Install:**

```bash
git clone https://github.com/yourusername/finance-tracker.git
cd finance-tracker
npm install
```

2. **Development:**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

3. **Production Build:**

```bash
npm run build
npm run preview
```

## 📱 PWA Setup

1. Ensure the manifest is properly configured in `public/manifest.webmanifest`
2. Install app when prompted or use browser's install option
3. App works offline after first load

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch:

```bash
git checkout -b feature/AmazingFeature
```

3. Commit your changes:

```bash
git commit -m 'Add some AmazingFeature'
```

4. Push to the branch:

```bash
git push origin feature/AmazingFeature
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

- [ShadCN](https://ui.shadcn.com/) for accessible components
- [Recharts](https://recharts.org/) for chart components
- [Tailwind CSS](https://tailwindcss.com/) for styling utilities
