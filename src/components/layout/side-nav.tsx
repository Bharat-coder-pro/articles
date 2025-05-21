
import { cn } from "@/lib/utils";
import {
  BarChart2,
  FileText,
  Home,
  Settings,
  Link as LinkIcon,
  Rocket,
  LifeBuoy,
  Bell,
  MessageSquare,
  User
} from "lucide-react";
import { useLocation } from "react-router-dom";

interface SideNavProps {
  collapsed: boolean;
}

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
  section?: string;
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    title: "Articles",
    href: "/articles",
    icon: FileText,
    section: "Content"
  },
  {
    title: "Create Article",
    href: "/articles/create",
    icon: FileText,
    section: "Content"
  },
  {
    title: "Keyword Projects",
    href: "/keywords",
    icon: BarChart2,
    section: "Content"
  },
  {
    title: "Article Settings",
    href: "/article-settings",
    icon: Settings,
    section: "Content"
  },
  {
    title: "Internal Links",
    href: "/internal-links",
    icon: LinkIcon
  },
  {
    title: "Integrations",
    href: "/integrations",
    icon: Rocket
  },
  {
    title: "Help Center",
    href: "/help",
    icon: LifeBuoy
  },
  {
    title: "Updates",
    href: "/updates",
    icon: Bell
  },
  {
    title: "Live Chat Support",
    href: "/chat",
    icon: MessageSquare
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User
  }
];

export function SideNav({ collapsed }: SideNavProps) {
  let currentSection = "";
  const location = useLocation();
  
  return (
    <div className="h-full py-4 flex flex-col bg-sidebar">
      {/* Logo */}
      <div className={cn(
        "px-4 mb-6",
        collapsed ? "flex justify-center" : ""
      )}>
        <div className="text-2xl font-bold">
          {collapsed ? "A" : "abun"}
        </div>
      </div>

      {/* Nav Items */}
      <div className="flex-1 px-2 overflow-y-auto">
        <nav className="space-y-1">
          {navItems.map((item, index) => {
            const showDivider = item.section && item.section !== currentSection;
            if (item.section) {
              currentSection = item.section;
            }
            
            const isActive = location.pathname === item.href;
            
            return (
              <div key={item.href}>
                {showDivider && (
                  <div className={cn(
                    "mt-4 mb-2 px-2", 
                    collapsed ? "hidden" : "block"
                  )}>
                    <div className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                      {item.section}
                    </div>
                  </div>
                )}
                <a
                  href={item.href}
                  className={cn(
                    "flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground"
                  )}
                >
                  <item.icon className={cn("h-5 w-5", !collapsed && "mr-3")} />
                  {!collapsed && <span>{item.title}</span>}
                </a>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
