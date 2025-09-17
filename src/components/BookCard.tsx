import type { BookData } from "@/services/book/book.type";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRound, BookOpen } from "lucide-react";

export default function BookCard({ title, author, pages }: BookData) {
  return (
    <>
      <div className="w-full flex justify-center ">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{title}</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
            <p>
              <UserRound size={20} className="inline align-bottom mr-2" />
              {author}
            </p>
            <p>
              {pages}
              <BookOpen size={20} className="inline align-bottom ml-2" />
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
