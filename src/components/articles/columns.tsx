
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

export type Article = {
  id: string;
  title: string;
  keyword: string;
  keywordVolume: string;
  wordCount: number;
  createdAt: string | null;
  status: "generated" | "published" | "scheduled" | "archived";
};

export const columns: ColumnDef<Article>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Article Title
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="font-medium">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "keyword",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Keyword [Traffic]
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="break-words max-w-[200px] sm:max-w-none">{row.getValue("keyword")}</div>,
  },
  {
    accessorKey: "wordCount",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Words
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="text-center">{row.getValue("wordCount")}</div>,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Created On
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("createdAt") || "—"}</div>
    ),
  },
  {
    id: "actions",
    header: "Action",
    cell: () => (
      <Button variant="outline" size="sm" className="h-8 px-4">
        View
      </Button>
    ),
  },
  {
    id: "publish",
    header: "Publish",
    cell: () => (
      <div className="flex items-center justify-center">
        <Button variant="ghost" size="sm" className="w-8 h-8 p-0 rounded-full">
          <span className="sr-only">Publish</span>
          <Badge className="h-6 w-6 rounded-full bg-blue-100 border-blue-300">
            <span className="sr-only">Wordpress</span>
            W
          </Badge>
        </Button>
      </div>
    ),
  },
];
