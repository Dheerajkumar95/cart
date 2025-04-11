import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";
import { useEffect } from "react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey Dheeraj!", isSent: false },
  { id: 2, content: "I'm a Software Developer", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    document.body.classList.toggle("bg-gray-900", theme === "dark");
    document.body.classList.toggle("bg-gray-100", theme === "light");
  }, [theme]);

  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-bold">Theme</h2>
        </div>

        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-2">
        <button
          className="group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors bg-gray-200 hover:bg-gray-300"
          onClick={() => setTheme("light")}
        >
          <div className="relative h-8 w-8 rounded-md overflow-hidden bg-white flex items-center justify-center">
            ☀️
          </div>
          <span className="text-[11px] font-medium truncate w-full text-center">Light</span>
        </button>
        <button
          className="group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors bg-gray-800 hover:bg-gray-700 text-white"
          onClick={() => setTheme("dark")}
        >
          <div className="relative h-8 w-8 rounded-md overflow-hidden bg-gray-900 flex items-center justify-center">
            🌙
          </div>
          <span className="text-[11px] font-medium truncate w-full text-center">Dark</span>
        </button>
      </div>
        <h3 className="text-lg font-semibold mb-3">Preview</h3>
        <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg">
          <div className="p-4 bg-base-200">
            <div className="max-w-lg mx-auto">
              <div className="bg-base-100 rounded-xl shadow-sm overflow-hidden">
                <div className="px-4 py-3 border-b border-base-300 bg-base-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-content font-medium">
                      D
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">Dheeraj</h3>
                      <p className="text-xs text-green-500">Online</p>
                    </div>
                  </div>
                </div>

                
                <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100">
                  {PREVIEW_MESSAGES.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`
                          max-w-[80%] rounded-xl p-3 shadow-sm
                          ${message.isSent ? "bg-accent text-accent-content" : "bg-base-200"}
                        `}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p
                          className={`
                            text-[10px] mt-1.5
                            ${message.isSent ? "text-accent-content/70" : "text-base-content/70"}
                          `}
                        >
                          08:00 AM
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                
                <div className="p-4 border-t border-base-300 bg-base-100">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="input input-bordered flex-1 text-sm h-10"
                      placeholder="Type a message..."
                      value="This is a preview"
                      readOnly
                    />
                    <button className="btn btn-accent h-10 min-h-0">
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingsPage;
