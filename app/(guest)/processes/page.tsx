import ProcessCard from "@/components/guest/process";

export default function Processes() {
    const listItems = [];
    for (let i = 0; i < 2; i++) {
      listItems.push(<ProcessCard key={i} />);
    }
    return (
      <section className="pt-20 sm:pt-[5.5rem] flex flex-col space-y-2 items-center relative">
        {listItems}
      </section>
    );
  }
