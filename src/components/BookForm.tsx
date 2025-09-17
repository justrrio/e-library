import { useContext } from "react";
import { BookContext } from "@/services/book/bookContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Plus } from "lucide-react";

export default function BookForm() {
  const { popup, setPopup } = useContext(BookContext);
  return (
    <>
      <div className="w-full p-6 flex justify-center">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Add a Book</CardTitle>
            <CardDescription>Enter the book metadata here.</CardDescription>
            <CardAction
              className="cursor-pointer"
              onClick={() => setPopup(!popup)}
            >
              <X />
            </CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Atomic Habits"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="author">Author</Label>
                  </div>
                  <Input
                    id="author"
                    type="text"
                    placeholder="James Clear"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="pages">Pages</Label>
                  </div>
                  <Input id="pages" type="number" placeholder="320" required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              <Plus />
              Add Book
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
