
import { DataTable } from "./data-table";
import { Article, columns } from "./columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Sample article data
const articles: Article[] = [
  {
    id: "1",
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends [2240000]",
    keywordVolume: "2240000",
    wordCount: 4575,
    createdAt: "20 hours ago",
    status: "generated"
  },
  {
    id: "2",
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends [2240000]",
    keywordVolume: "2240000",
    wordCount: 3480,
    createdAt: "21 hours ago",
    status: "generated"
  },
  {
    id: "3",
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends [2240000]",
    keywordVolume: "2240000",
    wordCount: 2676,
    createdAt: "a day ago",
    status: "generated"
  },
  {
    id: "4",
    title: "Top Virtual Executive Assistant Services (2024)",
    keyword: "virtual executive assistant [2900]",
    keywordVolume: "2900",
    wordCount: 2408,
    createdAt: "1 Oct, 24",
    status: "generated"
  },
  {
    id: "5",
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services [390]",
    keywordVolume: "390",
    wordCount: 1793,
    createdAt: null,
    status: "published"
  },
  {
    id: "6",
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword: "amazon payment methods [3600]",
    keywordVolume: "3600",
    wordCount: 2647,
    createdAt: null,
    status: "published"
  },
  {
    id: "7",
    title: "Backlinks 101: What are backlinks and why they're important [Free template]",
    keyword: "backlinks [8100]",
    keywordVolume: "8100",
    wordCount: 2261,
    createdAt: null,
    status: "scheduled"
  },
  {
    id: "8",
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
    keyword: "ai seo software [880]",
    keywordVolume: "880",
    wordCount: 1543,
    createdAt: null,
    status: "archived"
  },
  {
    id: "9",
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services [390]",
    keywordVolume: "390",
    wordCount: 1974,
    createdAt: null,
    status: "archived"
  }
];

export function ArticlesPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-auto">
            <DataTable columns={columns} data={articles} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
