"use client";
import { Button } from "@repo/ui/components/ui/button";

export default function Home() {
  return (
    <div className="text-3xl ">
      <Button
        variant={"destructive"}
        size={"lg"}
        className="text-3xl"
        onClick={() => alert("heelo")}
      >
        heelo
      </Button>{" "}
      Hello world
    </div>
  );
}
