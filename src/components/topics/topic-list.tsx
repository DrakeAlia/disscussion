import { Badge } from "../ui/badge";
import { db } from "@/db";
import Link from "next/link";
import paths from "@/paths";

export default async function TopicList() {
  const topics = await db.topic.findMany();

  const renderTopics = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={paths.topicShow(topic.slug)}>
          <Badge variant="secondary">{topic.slug}</Badge>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-row flex-wrap gap-2">{renderTopics}</div>;
}
