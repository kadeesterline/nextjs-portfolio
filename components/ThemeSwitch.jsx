import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4"
      onClick={() =>
        setTheme(
          theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
        )
      }
    >
      <div className="text-xl font-bold">
        {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
          <FiSun />
        ) : (
          <FiMoon />
        )}
      </div>
    </button>
  );
};

export default ThemeSwitch;
