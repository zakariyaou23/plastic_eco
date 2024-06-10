import PostCard from "@/components/guest/post";

export default function Post() {
    const listItems = [];
    for (let i = 0; i < 15; i++) {
      listItems.push(<PostCard key={i} />);
    }
    return (
      <section className="pt-20 sm:pt-[5.5rem] flex flex-col items-center relative">
        {listItems}
      </section>
    );
  }
