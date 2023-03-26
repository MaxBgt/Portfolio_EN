import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  const isActive = (route) => router.pathname === route;

  return (
    <AnimatePresence>
      <motion.div
        className="navbar"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ delay: 0.35 }}
      >
        <ul className="nav-elements">
          <li className={isActive("/") ? "active" : ""}>
            <Link href="/">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </li>
          <li className={isActive("/portfolio") ? "active" : ""}>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className={isActive("/about") ? "active" : ""}>
            <Link href="/about">À propos</Link>
          </li>
          <li className={isActive("/contact") ? "active" : ""}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
