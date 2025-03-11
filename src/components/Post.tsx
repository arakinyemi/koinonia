import Image from "next/image";
import Window from "../../public/window.svg";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  MoreHorizontal,
  Bookmark,
  EyeOff,
  Flag,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";

interface PostProps {
  post: {
    id: number;
    author: {
      name: string;
      image: string;
      handle: string;
    };
    content: string;
    image?: string;
    timestamp: string;
    likes: number;
    comments: number;
    shares: number;
    type: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <Card key={post.id}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Avatar className="h-10 w-10">
              <AvatarImage src={post.author.image} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <p className="text-sm font-medium">{post.author.name}</p>
              <p className="text-xs text-muted-foreground">
                @{post.author.handle} · {post.timestamp}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge
              variant="outline"
              className="capitalize bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
            >
              {post.type}
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Bookmark className="w-4 h-4 mr-2" />
                  Save Post
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <EyeOff className="w-4 h-4 mr-2" />
                  Hide Post
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                  <Flag className="w-4 h-4 mr-2 text-red-600" />
                  Report
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{post.content}</p>
        {post.image && (
          <div className="mt-3 rounded-md overflow-hidden">
            <Image src={Window} alt="God's own" width={500} height={500} />
          </div>
        )}
      </CardContent>
      <CardFooter>
        <div className="flex space-x-4 text-muted-foreground">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center space-x-1"
          >
            <Heart className="h-4 w-4" />
            <span>{post.likes}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center space-x-1"
          >
            <MessageCircle className="h-4 w-4" />
            <span>{post.comments}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center space-x-1"
          >
            <Share2 className="h-4 w-4" />
            <span>{post.shares}</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
