import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export default function App() {
  return (
    <div className="flex-row gap-12 max-sm:flex-col inline-flex">
      <Card isFooterBlurred radius="lg" className="border-none w-fit">
        <Image
          alt="Woman listing to music"
          className="object-cover "
          src="https://cliffsy.carrd.co/assets/images/gallery07/18f83b7a.jpg?v=d0e8af44"
          height={500}
          width={500}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">Available soon.</p>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Notify me
          </Button>
        </CardFooter>
      </Card>
      <Card isFooterBlurred radius="lg" className="border-none w-fit">
        <Image
          alt="Woman listing to music"
          className="object-cover "
          src="https://cliffsy.carrd.co/assets/images/gallery07/c753c1fa.jpg?v=d0e8af44"
          height={500}
          width={500}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">Available soon.</p>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Notify me
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
