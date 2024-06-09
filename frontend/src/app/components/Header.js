"use client";
import "@/styleSheets/header.css";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { IconButton } from "@mui/material";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import ClearIcon from "@mui/icons-material/Clear";
export default function Header() {
  const [smallScreen, setSmallScreen] = useState(false);
  const toggleMenu = () => {
    setSmallScreen(!smallScreen);
  };
  return (
    <header className="header-container ">
      <div className={`header ${smallScreen ? "active" : ""}`}>
        <div className="header-title">
          <h1>Subscription Manager</h1>
          <IconButton
            onClick={() => {
              toggleMenu();
            }}
          >
            <ClearIcon />
          </IconButton>
          <div className="header-menu">
            <IconButton
              onClick={() => {
                toggleMenu();
              }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>
        <div className="header-links">
          <div className="header-link-item">
            <Link href="/">
              <IconButton>
                <HomeIcon />
                <p> Home</p>
              </IconButton>
            </Link>
          </div>
          <div className="header-link-item">
            <Link href="/userSubscription">
              <IconButton>
                <PersonSearchIcon />
                <p> My Subscriptions</p>
              </IconButton>
            </Link>
          </div>
          <div className="header-link-item">
            <Link href="/findSubscriptions">
              <IconButton>
                <ManageSearchIcon />
                <p>Find Subscriptions</p>
              </IconButton>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
