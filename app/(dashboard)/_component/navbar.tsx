"use client";
import Link from "next/link";
import { useState } from "react";
import { UserButton, useClerk } from "@clerk/nextjs";

const Navbar = () => {
  const [showBackgroundMenu, setShowBackgroundMenu] = useState(false);
  const { signOut } = useClerk();

  const toggleBackgroundMenu = () => {
    setShowBackgroundMenu(!showBackgroundMenu);
  };

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="sidebar-header">
            <div className="sidebar-logo">
              <span className="logo-icon">◉</span>
              <span className="logo-text">aHRi</span>
            </div>
          </div>

          <div className="navbar-right">
            <div className="navbar-actions flex items-center gap-4">
              {/* 👤 User Profile Button from Clerk */}
              <UserButton afterSignOutUrl="/sign-in" />

              {/* 🔓 Logout Button */}
              <button
                className="logout-button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
