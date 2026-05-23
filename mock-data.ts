export const mockUser = {
  id: "u_1",
  name: "Alex Doe",
  email: "alex@example.com",
  role: "admin", // "admin" or "employee"
  avatar: "https://i.pravatar.cc/150?img=68",
};

export const mockStats = {
  totalEmployees: 124,
  activeProjects: 45,
  aiGenerations: 12450,
  tasksCompleted: 892,
  productivityScore: 92,
};

export const mockTasks = [
  {
    id: "t_1",
    title: "Q3 Marketing Campaign Copy",
    assignee: "Sarah J.",
    status: "in-progress",
    priority: "high",
    dueDate: "2026-05-20",
    progress: 65,
  },
  {
    id: "t_2",
    title: "Social Media Graphics for Launch",
    assignee: "Mike R.",
    status: "pending",
    priority: "medium",
    dueDate: "2026-05-22",
    progress: 0,
  },
  {
    id: "t_3",
    title: "Weekly Newsletter Draft",
    assignee: "Alex Doe",
    status: "review",
    priority: "high",
    dueDate: "2026-05-15",
    progress: 90,
  },
  {
    id: "t_4",
    title: "Update Brand Guidelines",
    assignee: "Emily T.",
    status: "completed",
    priority: "low",
    dueDate: "2026-05-10",
    progress: 100,
  },
];

export const mockActivities = [
  {
    id: "a_1",
    user: "Sarah J.",
    action: "generated 5 AI captions",
    time: "10 mins ago",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: "a_2",
    user: "Mike R.",
    action: "completed task 'Q3 Marketing Campaign Copy'",
    time: "2 hours ago",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: "a_3",
    user: "Emily T.",
    action: "commented on 'Weekly Newsletter Draft'",
    time: "4 hours ago",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

export const mockPerformanceData = [
  { name: "Mon", tasks: 12, ai: 45, engagement: 80 },
  { name: "Tue", tasks: 19, ai: 55, engagement: 85 },
  { name: "Wed", tasks: 15, ai: 40, engagement: 78 },
  { name: "Thu", tasks: 22, ai: 70, engagement: 92 },
  { name: "Fri", tasks: 28, ai: 65, engagement: 95 },
  { name: "Sat", tasks: 5, ai: 20, engagement: 60 },
  { name: "Sun", tasks: 8, ai: 25, engagement: 65 },
];

export const mockAiUsageData = [
  { name: "Copywriting", value: 45 },
  { name: "Social Media", value: 30 },
  { name: "Ideation", value: 15 },
  { name: "Code Generation", value: 10 },
];
