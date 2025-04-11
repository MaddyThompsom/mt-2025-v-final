"use client"
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import link from "next/link";
import { useState } from "react";

export default function RecipePage() {
  let facts: string[] = ["They use peanuts to make dynamite", 
  ]
  const [fact, setFact] = useState("");
  return (
    <div>
      <h1 className={title()}>Recipes</h1>
      <p>this is a para on the blog page</p>
      <Button as={link} href="https://issaquah.instructure.com/" target="_blank">canvas</Button>
    </div>
  );
}

