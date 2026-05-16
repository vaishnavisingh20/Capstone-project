"use client";

import {
  LayoutDashboard,
  FolderKanban,
  Users,
  Settings,
  Bell,
} from "lucide-react";

import { motion } from "framer-motion";

import KanbanBoard from "@/components/KanbanBoard";
import MobileNavbar from "@/components/MobileNavbar";

export default function Dashboard() {
  const stats = [
    {
      title: "Projects",
      value: "12",
    },
    {
      title: "Active Tasks",
      value: "28",
    },
    {
      title: "Team Members",
      value: "7",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      
      <MobileNavbar />

      <div className="flex">
        
        {/* Sidebar */}
        <aside className="hidden min-h-screen w-72 border-r border-white/10 bg-white/5 backdrop-blur-xl lg:block">
          
          <div className="p-8">
            
            <h1 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
              TaskMatrix
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Enterprise Workspace
            </p>
          </div>

          <nav className="space-y-2 px-4">
            
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              title="Dashboard"
              active
            />

            <SidebarItem
              icon={<FolderKanban size={20} />}
              title="Projects"
            />

            <SidebarItem
              icon={<Users size={20} />}
              title="Team"
            />

            <SidebarItem
              icon={<Bell size={20} />}
              title="Notifications"
            />

            <SidebarItem
              icon={<Settings size={20} />}
              title="Settings"
            />
          </nav>
        </aside>

        {/* Main */}
        <section className="flex-1 p-6 lg:p-10">
          
          {/* Topbar */}
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Dashboard 🚀
              </h2>

              <p className="mt-3 text-slate-400">
                Welcome back to your productivity hub.
              </p>
            </div>

            <div className="flex items-center gap-4">
              
              <button className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-lg transition hover:bg-white/10">
                <Bell size={20} />
              </button>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-lg">
                
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 font-bold">
                  V
                </div>

                <div>
                  <p className="font-medium">
                    Vaishnavi
                  </p>

                  <p className="text-xs text-slate-400">
                    Frontend Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.03,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <p className="text-slate-400">
                  {stat.title}
                </p>

                <h3 className="mt-4 text-3xl font-bold md:text-5xl">
                  {stat.value}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Productivity */}
          <div className="mb-12 grid grid-cols-1 gap-6 xl:grid-cols-3">
            
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl xl:col-span-2">
              
              <div className="mb-6 flex items-center justify-between">
                
                <h3 className="text-2xl font-bold">
                  Productivity Overview
                </h3>

                <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm text-green-400">
                  +12% this week
                </span>
              </div>

              <div className="flex h-64 items-end gap-4">
                
                {[40, 70, 55, 90, 60, 75, 95].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        height: 0,
                      }}
                      animate={{
                        height,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      className="flex-1 rounded-t-2xl bg-gradient-to-t from-blue-600 to-cyan-400"
                    />
                  )
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              
              <h3 className="mb-6 text-2xl font-bold">
                Activity
              </h3>

              <div className="space-y-5">
                
                <ActivityItem
                  title="Task moved"
                  desc="Authentication moved to Completed"
                />

                <ActivityItem
                  title="New member"
                  desc="Aditi joined the workspace"
                />

                <ActivityItem
                  title="Project updated"
                  desc="Dashboard redesign uploaded"
                />
              </div>
            </div>
          </div>

          {/* Kanban */}
          <div>
            
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              
              <h3 className="text-3xl font-bold">
                Project Board
              </h3>

              <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-medium transition hover:scale-105">
                + New Project
              </button>
            </div>

            <KanbanBoard />
          </div>
        </section>
      </div>
    </main>
  );
}

function SidebarItem({
  icon,
  title,
  active,
}: {
  icon: React.ReactNode;
  title: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex cursor-pointer items-center gap-3 rounded-2xl px-4 py-3 transition ${
        active
          ? "bg-gradient-to-r from-blue-600 to-cyan-500"
          : "hover:bg-white/10"
      }`}
    >
      {icon}

      <span>{title}</span>
    </div>
  );
}

function ActivityItem({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{
        x: 5,
      }}
      className="rounded-2xl border border-white/10 bg-black/20 p-4"
    >
      <p className="font-medium">
        {title}
      </p>

      <p className="mt-1 text-sm text-slate-400">
        {desc}
      </p>
    </motion.div>
  );
}