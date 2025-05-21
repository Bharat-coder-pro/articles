
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface ArticleTabsProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabCounts: {
    generated: number;
    published: number;
    scheduled: number;
    archived: number;
  };
}

export function ArticleTabs({
  children,
  activeTab,
  setActiveTab,
  tabCounts,
}: ArticleTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
      <TabsList className="grid grid-cols-4 max-w-lg">
        <TabsTrigger value="generated">
          Generated Articles ({tabCounts.generated})
        </TabsTrigger>
        <TabsTrigger value="published">
          Published Articles ({tabCounts.published})
        </TabsTrigger>
        <TabsTrigger value="scheduled">
          Scheduled Articles ({tabCounts.scheduled})
        </TabsTrigger>
        <TabsTrigger value="archived">
          Archived Articles ({tabCounts.archived})
        </TabsTrigger>
      </TabsList>
      <TabsContent value={activeTab}>{children}</TabsContent>
    </Tabs>
  );
}
