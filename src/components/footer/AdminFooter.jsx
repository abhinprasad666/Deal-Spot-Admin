import React from "react";
import { ShieldCheck, LifeBuoy, Code2 } from "lucide-react";

const AdminFooter = () => {
    return (
        <footer className="w-full py-10 px-6 text-sm border-t dark:border-slate-800 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-slate-800 dark:to-slate-900 shadow-inner">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-white dark:text-gray-300">
                {/* Branding */}
                <div className="flex items-center gap-2 font-medium">
                    <ShieldCheck size={16} className="text-pink-600 dark:text-yellow-400" />
                    <span>© {new Date().getFullYear()} DealSpot Admin Panel</span>
                </div>

                {/* Extra Info */}
                <div className="flex items-center gap-4 text-xs md:text-sm opacity-80">
                    <div className="flex items-center gap-1">
                        <Code2 size={14} />
                        <span>Version 1.0.0</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <LifeBuoy size={14} />
                        <a
                            href="mailto:support@dealspot.com"
                            className="underline hover:text-pink-600 dark:hover:text-yellow-400 transition"
                        >
                            Support
                        </a>
                    </div>
                </div>

                {/* Developer Note */}
                <div className="text-xs opacity-70">Made with ❤️ by the DealSpot Team</div>
            </div>
        </footer>
    );
};

export default AdminFooter;
