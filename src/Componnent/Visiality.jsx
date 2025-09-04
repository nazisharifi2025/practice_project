import { useEffect, useState } from "react";

export default function Visibility() {
  const [visibility, setVisibility] = useState(null);
  const [lastHidden, setLastHidden] = useState(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        setLastHidden(Date.now());
      } else if (document.visibilityState === "visible" && lastHidden) {
        const now = Date.now();
        const secondsAway = Math.floor((now - lastHidden) / 1000);
        setVisibility(secondsAway);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [lastHidden]);

  return (
    <div className="p-4 absolute bottom-1 left-1 shadow-md shadow-black font-bold text-xl">
      {visibility !== null ? (
        <p>شما {visibility} ثانیه از این صفحه دور بودید</p>
      ) : (
        <p>در حال حاضر شما در صفحه هستید</p>
      )}
    </div>
  );
}
