"use client";

import Link from "next/link";
import { Zap, X, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWebSeriesOpen, setIsWebSeriesOpen] = useState(false);
  const [isWebSeriesMobileOpen, setIsWebSeriesMobileOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#212121]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Zap
              className="h-10 w-10"
              fill="#FFBE18"
              stroke="black"
              strokeWidth={1.4}
            />
            <span className="text-lg font-semibold text-white">
              Movies nation
            </span>
          </Link>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {/* Web Series Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsWebSeriesOpen(true)}
            onMouseLeave={() => setIsWebSeriesOpen(false)}
          >
            <button className="text-base text-white/90 transition hover:text-white flex items-center gap-1">
              Web Series
              <ChevronDown className="h-4 w-4" />
            </button>

            {/* Dropdown Menu */}
            {isWebSeriesOpen && (
              <div className="absolute top-full left-0 w-48 bg-[#2C2C2C] rounded-lg shadow-lg py-2 mt-1">
                <Link
                  href="/netflix"
                  className="block px-4 py-2 text-sm text-white/90 hover:bg-[#3C3C3C]"
                >
                  Netflix
                </Link>
                <Link
                  href="/prime"
                  className="block px-4 py-2 text-sm text-white/90 hover:bg-[#3C3C3C]"
                >
                  Amazon Prime
                </Link>
                <Link
                  href="/disney"
                  className="block px-4 py-2 text-sm text-white/90 hover:bg-[#3C3C3C]"
                >
                  Disney+
                </Link>
                <Link
                  href="/hbo"
                  className="block px-4 py-2 text-sm text-white/90 hover:bg-[#3C3C3C]"
                >
                  HBO Max
                </Link>
              </div>
            )}
          </div>
          <div
            className="relative group"
            onMouseEnter={() => setIsWebSeriesOpen(true)}
            onMouseLeave={() => setIsWebSeriesOpen(false)}
          >
            <button className="text-base text-white/90 transition hover:text-white flex items-center gap-1">
              Web Series
              <ChevronDown className="h-4 w-4" />
            </button>

            {/* Dropdown Menu */}
            {isWebSeriesOpen && (
              <div className="absolute top-full left-0 w-48 bg-[#2C2C2C] rounded-lg shadow-lg py-2 mt-1">
                <Link
                  href="/netflix"
                  className="block px-4 py-2 text-sm text-white/90 hover:bg-[#3C3C3C]"
                >
                  Netflix
                </Link>
                <Link
                  href="/prime"
                  className="block px-4 py-2 text-sm text-white/90 hover:bg-[#3C3C3C]"
                >
                  Amazon Prime
                </Link>
                <Link
                  href="/disney"
                  className="block px-4 py-2 text-sm text-white/90 hover:bg-[#3C3C3C]"
                >
                  Disney+
                </Link>
                <Link
                  href="/hbo"
                  className="block px-4 py-2 text-sm text-white/90 hover:bg-[#3C3C3C]"
                >
                  HBO Max
                </Link>
              </div>
            )}
          </div>

          <div
            className="relative group"
            onMouseEnter={() => setIsWebSeriesOpen(true)}
            onMouseLeave={() => setIsWebSeriesOpen(false)}
          >
            <button className="text-base text-white/90 transition hover:text-white flex items-center gap-1">
              Web Series
              <ChevronDown className="h-4 w-4" />
            </button>

            {/* Dropdown Menu */}
            {isWebSeriesOpen && (
              <div className="absolute top-full left-0 w-48 bg-[#2C2C2C] rounded-lg shadow-lg py-2 mt-1">
                <Link
                  href="/netflix"
                  className="block px-4 py-2 text-sm text-white/90 hover:bg-[#3C3C3C]"
                >
                  Netflix
                </Link>
                <Link
                  href="/prime"
                  className="block px-4 py-2 text-sm text-white/90 hover:bg-[#3C3C3C]"
                >
                  Amazon Prime
                </Link>
                <Link
                  href="/disney"
                  className="block px-4 py-2 text-sm text-white/90 hover:bg-[#3C3C3C]"
                >
                  Disney+
                </Link>
                <Link
                  href="/hbo"
                  className="block px-4 py-2 text-sm text-white/90 hover:bg-[#3C3C3C]"
                >
                  HBO Max
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/new-releases"
            className="text-base text-white/90 transition hover:text-white"
          >
            New Releases
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <div className="flex flex-col">
              <button
                onClick={() => setIsWebSeriesMobileOpen(!isWebSeriesMobileOpen)}
                className="flex justify-between items-center px-3 py-2 text-base font-medium text-white/90"
              >
                Web Series
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isWebSeriesMobileOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isWebSeriesMobileOpen && (
                <div className="ml-4 space-y-2">
                  <Link
                    href="/netflix"
                    className="block px-3 py-2 text-sm text-white/90 hover:bg-[#3C3C3C]"
                    onClick={toggleMenu}
                  >
                    Netflix
                  </Link>
                  <Link
                    href="/prime"
                    className="block px-3 py-2 text-sm text-white/90 hover:bg-[#3C3C3C]"
                    onClick={toggleMenu}
                  >
                    Amazon Prime
                  </Link>
                  <Link
                    href="/disney"
                    className="block px-3 py-2 text-sm text-white/90 hover:bg-[#3C3C3C]"
                    onClick={toggleMenu}
                  >
                    Disney+
                  </Link>
                  <Link
                    href="/hbo"
                    className="block px-3 py-2 text-sm text-white/90 hover:bg-[#3C3C3C]"
                    onClick={toggleMenu}
                  >
                    HBO Max
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/new-releases"
              className="block rounded-md px-3 py-2 text-base font-medium text-white/90 hover:bg-[#3C3C3C]"
              onClick={toggleMenu}
            >
              New Releases
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
