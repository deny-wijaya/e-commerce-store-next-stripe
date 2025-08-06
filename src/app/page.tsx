import HomePage from "@/pages/home/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perfect Cloud",
};

export default function Home() {
  return <HomePage />;
}
