import dynamic from "next/dynamic";

const LazyMap = dynamic(() => import("@/components/guest/map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Map() {
    return (
      <>
        <LazyMap />
      </>
    );
}
  