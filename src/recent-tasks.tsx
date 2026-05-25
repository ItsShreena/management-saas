"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockTasks } from "@/lib/mock-data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

export function RecentTasks() {
  return (
    <Card className="col-span-1 md:col-span-2 glass-card border-white/10 overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Recent Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-white/10 hover:bg-transparent">
              <TableHead className="text-muted-foreground">Task</TableHead>
              <TableHead className="text-muted-foreground">Assignee</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-muted-foreground text-right">Progress</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTasks.slice(0, 4).map((task) => (
              <TableRow key={task.id} className="border-white/10 hover:bg-white/5 transition-colors">
                <TableCell className="font-medium text-white">{task.title}</TableCell>
                <TableCell className="text-muted-foreground">{task.assignee}</TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={cn(
                      "bg-white/5 border-white/10",
                      task.status === "completed" && "text-emerald-400 border-emerald-400/20 bg-emerald-400/10",
                      task.status === "in-progress" && "text-blue-400 border-blue-400/20 bg-blue-400/10",
                      task.status === "review" && "text-purple-400 border-purple-400/20 bg-purple-400/10",
                      task.status === "pending" && "text-amber-400 border-amber-400/20 bg-amber-400/10"
                    )}
                  >
                    {task.status.replace("-", " ")}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-xs text-muted-foreground">{task.progress}%</span>
                    <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={cn(
                          "h-full rounded-full bg-primary",
                          task.status === "completed" && "bg-emerald-400"
                        )} 
                        style={{ width: `${task.progress}%` }}
                      />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
