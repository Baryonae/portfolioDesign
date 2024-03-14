"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

function Projects() {
  return (
    <div className="items-center w-fit flex justify-center flex-row gap-12 max-sm:flex-col">
      <Card
        isFooterBlurred
        className="w-[500px] h-fit col-span-12 sm:col-span-7 max-sm:w-[300px] hover:animate-pulse"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            something something
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            Project 1 Sample
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-fit h-fit object-cover"
          src="https://cliffsy.carrd.co/assets/images/gallery07/b8af6a31.jpg?v=d0e8af44"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-10 bg-black"
              src="https://pbs.twimg.com/profile_images/1272878358150275078/iBJehkOi_400x400.png"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">another something</p>
              <p className="text-tiny text-white/60">idk how to say lol</p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Open Project
          </Button>
        </CardFooter>
      </Card>

      <Card
        isFooterBlurred
        className="w-[500px] h-fit col-span-12 sm:col-span-7 max-sm:w-[300px] hover:animate-pulse"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            something something
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            Project 1 Sample
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-fit h-fit object-cover"
          src="https://cliffsy.carrd.co/assets/images/gallery07/e4260c6f.jpg?v=d0e8af44"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-10 bg-black"
              src="https://pbs.twimg.com/profile_images/1272878358150275078/iBJehkOi_400x400.png"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">another something</p>
              <p className="text-tiny text-white/60">idk how to say lol</p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Open Project
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Projects;
