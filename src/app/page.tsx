import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextra 4",
  description: "Nextra 4 is here.",
};
export default function Home() {
  return (
    <div className="container flex items-center justify-center">
      <h1
        style={{
          textAlign: "center",
          fontSize: 64,
          margin: "25vh 0",
          fontWeight: "bold",
        }}
      >
        Home page
      </h1>
    </div>
  );
}
