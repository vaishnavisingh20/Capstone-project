"use client";

import {
  LayoutDashboard,
  FolderKanban,
  Users,
  Bell,
  Menu,
} from "lucide-react";

import { useState } from "react";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Mobile Bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-black/30 p-4 backdrop-blur-xl lg:hidden">
        
        <h1 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent">
          TaskMatrix
        </h1>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 bg-white/5 p-2"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-b border-white/10 bg-slate-950/95 p-4 backdrop-blur-2xl lg:hidden">
          
          <div className="space-y-2">
            
            <MobileItem
              icon={<LayoutDashboard size={18} />}
              title="Dashboard"
            />

            <MobileItem
              icon={<FolderKanban size={18} />}
              title="Projects"
            />

            <MobileItem
              icon={<Users size={18} />}
              title="Team"
            />

            <MobileItem
              icon={<Bell size={18} />}
              title="Notifications"
            />
          </div>
        </div>
      )}
    </>
  );
}

function MobileItem({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-white/10">
      
      {icon}

      <span>{title}</span>
    </div>
  );
}