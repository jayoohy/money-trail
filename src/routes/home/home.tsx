"use client";

import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, HandCoins } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div
      className="z-50 relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to bottom right, #e8f5e9, #f9fff9), url("/images/subtle-zebra-3d.png")',
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Dark mode overlay */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-[#0c120c] dark:to-[#162716] dark:opacity-90" />

      {/* Animated green motion glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-green-300 dark:bg-green-900 rounded-full blur-3xl opacity-25 animate-pulse" />
      </div>

      {/* Logo & Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-200 bg-clip-text text-transparent drop-shadow-sm">
          Money Trail
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm md:text-base max-w-md mx-auto leading-relaxed">
          Take control of your finances. Track your income, manage your
          expenses, and visualize your financial journey — all in one place.
        </p>
      </motion.div>

      {/* Icon Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="mt-10"
      >
        <HandCoins
          size={60}
          className="text-green-600 dark:text-green-400 drop-shadow-md"
        />
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-12 relative z-10"
      >
        <Link to="/dashboard">
          <Button className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-8 py-6 text-lg rounded-2xl shadow-md flex items-center gap-2 transition-transform hover:scale-105">
            Go to Dashboard <ArrowRight size={20} />
          </Button>
        </Link>
      </motion.div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-xs text-gray-500 dark:text-gray-600 tracking-wide z-10">
        © {new Date().getFullYear()} Money Trail. All rights reserved.
      </footer>
    </div>
  );
}
