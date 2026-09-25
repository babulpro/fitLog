This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


## 🛠️ Technologies Used

### **Core Framework**
- **Next.js 16 (App Router)** — For Server Components, dynamic routing, and optimized performance
- **React 19** — Modern UI with hooks and concurrent features
- **TypeScript** — Type-safe development with strict mode enabled

### **Styling & UI**
- **Tailwind CSS** — Utility-first styling for a fully responsive design
- **DaisyUI** — Component library for rapid UI development
- **Lucide React** — Beautiful, consistent icon set
- **Custom Neon Dark Theme** — A unique `#d4ff00` neon green accent paired with a `#0A0A0A` deep black background

### **State Management & UX**
- **React Context API** — Global state for the workout plan and saved list
- **React Hot Toast** — Sleek, dark-mode notification toasts for user feedback

### **Tooling**
- **Turbopack** — Next.js's blazing-fast Rust-based bundler
- **ESLint** — Code quality and consistency

---



## ✨ Key Features

### 1. 🏋️ **Comprehensive Workout Library**
Browse a rich collection of workouts complete with high-quality imagery, muscle group tags, equipment details, difficulty level, duration, calories burned, and user ratings. Each exercise card displays all the essential information at a glance.

### 2. 📋 **Dual-List Plan Management (Plan & Saved)**
Add any workout to your **Today's Plan** or **Save for Later** with a single click. The Navbar updates instantly with live counters, and you can switch between the two lists using elegant tabbed navigation — all powered by React Context API for seamless global state.

### 3. 🔍 **Dynamic Sorting & Smart Stats**
Sort your plan by **Duration, Calories, Rating, or Sets** to organize your workout in the way that suits you best. A live stats banner at the top of the Plan page dynamically calculates your total **exercises, minutes, and calories** as you build your session.

### 4. 📱 **Fully Responsive & Optimized Architecture**
Leveraging the Next.js App Router, the app splits **Server Components** (for fast, SEO-friendly rendering) and **Client Components** (for interactivity), resulting in lightning-fast page loads and optimal user experience across mobile, tablet, and desktop.

### 5. 🔔 **Real-Time Toast Notifications & Interactive Feedback**
Get instant visual confirmation every time you add, save, or remove a workout. Custom-styled toast notifications with neon green accents for success and red for removals create a polished, app-like feel. Buttons intelligently disable when an item is already in your plan, preventing duplicates.

---



## Getting Started

 
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/fitlog.git
   cd fitlog

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

