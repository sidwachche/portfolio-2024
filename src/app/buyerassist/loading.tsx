import CircularLoader from "../../components/lib/circular-loader";

export default function Loading() {
  return (
    <div className="fixed inset-0 w-screen h-dvh grid place-items-center">
      <CircularLoader size={40} />
    </div>
  );
}
