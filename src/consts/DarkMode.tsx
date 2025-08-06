import { useEffect, useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => {
    const next = !darkMode;
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
    document.body.style.background = next ? "#000" : "#fff";
    setDarkMode(next);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    setDarkMode(isDark);
  }, [darkMode]);

  return (
    <div>
      <button
        onClick={toggleDark}
        className=" rounded-full size-8 hover:bg-[#fff]"
      >
        {darkMode ? "🌞" : "🌚"}
      </button>
    </div>
  );
};

export default DarkMode;
