import PostCreateForm from "@/components/posts/post-create-form";

interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

export default function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = params;
  return (
    <section className="container grid grid-cols-4 gap-4 px-6 pt-8 md:pt-12">
      <div className="col-span-3">
        <h1 className="text-3xl font-bold mb-8">{slug}</h1>
      </div>

      <div>
        <PostCreateForm slug={slug} />
      </div>
    </section>
  );
}
