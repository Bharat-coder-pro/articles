
import { useState } from "react";
import { SideNav } from "./side-nav";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setMobileOpen(false)}
        />
      )}
      
      {/* Mobile sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 transition-transform duration-300 md:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-full w-64">
          <SideNav collapsed={false} />
        </div>
      </div>

      {/* Desktop sidebar */}
      <div
        className={cn(
          "sticky top-0 h-screen border-r transition-all duration-300 hidden md:block",
          collapsed ? "w-16" : "w-64"
        )}
      >
        <SideNav collapsed={collapsed} />

        <div className="absolute bottom-4 right-0 translate-x-1/2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full shadow-md border"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Mobile header with menu button */}
        <div className="sticky top-0 z-10 flex items-center p-4 border-b bg-background md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileOpen(true)}
            className="mr-4"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="text-lg font-semibold">abun</div>
        </div>

        <div className="container py-6 md:py-8 lg:py-10">{children}</div>
      </div>
    </div>
  );
}
