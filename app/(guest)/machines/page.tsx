import MachineCard from "@/components/guest/machine";

export default function Machines() {
    const listItems = [];
    for (let i = 0; i < 2; i++) {
      listItems.push(<MachineCard key={i} />);
    }
    return (
      <section className="pt-20 sm:pt-[5.5rem] flex flex-col space-y-2 items-center relative">
        {listItems}
      </section>
    );
  }
