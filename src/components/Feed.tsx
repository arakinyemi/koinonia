"use client";

import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  ImageIcon,
  BookOpen,
  Send,
} from "lucide-react";
import Post from "./Post";


export default function Feed() {
  const posts = [
    {
      id: 1,
      author: {
        name: "Sarah Johnson",
        image: "https://picsum.photos/20/20",
        handle: "sarahj",
      },
      content:
        '"For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future." - Jeremiah 29:11',
      timestamp: "2 hours ago",
      likes: 24,
      comments: 5,
      shares: 3,
      type: "verse",
    },
    {
      id: 2,
      author: {
        name: "David Lee",
        image: "https://picsum.photos/20/20",
        handle: "davidlee",
      },
      content:
        "Just finished this painting inspired by Psalm 23. Art is such a powerful way to express our faith!",
      image: "https://picsum.photos/40/40",
      timestamp: "3 hours ago",
      likes: 56,
      comments: 12,
      shares: 8,
      type: "art",
    },
    {
      id: 3,
      author: {
        name: "Grace Community",
        image: "https://picsum.photos/20/20",
        handle: "gracechurch",
      },
      content:
        "Our youth group had an amazing retreat this weekend! 30 young people dedicated their lives to Christ. God is moving in this generation!",
      image: "https://picsum.photos/40/40",
      timestamp: "1 day ago",
      likes: 87,
      comments: 15,
      shares: 23,
      type: "event",
    },
    {
      id: 4,
      author: {
        name: "Michael Torres",
        image: "https://picsum.photos/20/20",
        handle: "michaelt",
      },
      content:
        'Just watched "The Chosen" season finale. What an incredible way to bring the Gospels to life! Anyone else following this series?',
      timestamp: "4 hours ago",
      likes: 42,
      comments: 31,
      shares: 5,
      type: "entertainment",
    },
    {
      id: 5,
      author: {
        name: "Emily Watson",
        image: "https://picsum.photos/20/20",
        handle: "emilyw",
      },
      content:
        "Visited Israel last month and walked where Jesus walked. It was a life-changing experience! Here's a photo from the Sea of Galilee.",
      image: "/placeholder.svg?height=400&width=600",
      timestamp: "2 days ago",
      likes: 103,
      comments: 28,
      shares: 15,
      type: "travel",
    },
    {
      id: 6,
      author: {
        name: "Pastor Mike",
        image: "https://picsum.photos/20/20",
        handle: "pastormike",
      },
      content:
        "In today's busy world, remember to take time for self-care. It's not selfish, it's stewardship of the body God gave you. What are your favorite ways to recharge?",
      timestamp: "5 hours ago",
      likes: 76,
      comments: 42,
      shares: 10,
      type: "lifestyle",
    },
    {
      id: 7,
      author: {
        name: "Rachel Kim",
        image: "https://picsum.photos/20/20",
        handle: "rachelk",
      },
      content:
        "Started a new Bible study on financial stewardship. It's amazing how much the Bible has to say about managing money wisely. Any recommended resources?",
      timestamp: "1 day ago",
      likes: 34,
      comments: 22,
      shares: 7,
      type: "discussion",
    },
  ];
//   const [postContent, setPostContent] = useState("");
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Feed</h2>

      <Card className="mb-6">
        <CardHeader className="pb-3">
          <div className="flex items-center">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://picsum.photos/20/20" alt="User" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <p className="text-sm font-medium">Araoluwa Akinyemi</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Share something with the body of Christ..."
            className="resize-none h-48"
            // value={postContent}
            // onChange={(e) => setPostContent(e.target.value)}
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <ImageIcon className="w-4 h-4 mr-2" />
              Photo
            </Button>
            <Button variant="outline" size="sm">
              <BookOpen className="h-4 w-4 mr-2" />
              Verse
            </Button>
          </div>
          <Button size="sm">
            <Send className="w-4 h-4 mr-2" />
            Post
          </Button>
        </CardFooter>
      </Card>

      <div className="space-y-6">
        {posts.map((post) => (
            <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
