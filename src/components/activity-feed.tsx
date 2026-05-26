"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockActivities } from "@/lib/mock-data";

export function ActivityFeed() {
  return (
    <Card className="col-span-1 glass-card border-white/10">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Activity Feed</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {mockActivities.map((activity, index) => (
            <div key={activity.id} className="flex items-start gap-4">
              <div className="relative">
                <Avatar className="w-9 h-9 border border-white/10">
                  <AvatarImage src={activity.avatar} />
                  <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
                </Avatar>
                {index !== mockActivities.length - 1 && (
                  <div className="absolute top-9 left-1/2 -translate-x-1/2 w-px h-6 bg-white/10" />
                )}
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  <span className="text-white">{activity.user}</span>{" "}
                  <span className="text-muted-foreground">{activity.action}</span>
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
