import type { DailyLog } from "@/lib/types";
import TimelineItem from "./TimelineItem";

interface TimelineProps {
  logs: DailyLog[];
}

export default function Timeline({ logs }: TimelineProps) {
  if (logs.length === 0) {
    return (
      <p className="text-text-secondary text-center py-12">
        暂无动态，开始记录吧。
      </p>
    );
  }

  return (
    <div className="relative">
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent" />

      <div className="flex flex-col gap-0">
        {logs.map((log, index) => (
          <TimelineItem key={log.slug} log={log} index={index} />
        ))}
      </div>
    </div>
  );
}
