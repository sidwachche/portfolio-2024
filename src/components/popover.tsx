"use client";
import * as Popover from "@radix-ui/react-popover";
import { MDXProps } from "mdx/types";
import { FiXCircle } from "react-icons/fi";

function ExperiencePopover({
  children,
  MdxComponent,
  name,
}: {
  children: React.ReactNode;
  MdxComponent: (props: MDXProps) => JSX.Element;
  name: string;
}) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>{children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="bottom"
          className="PopoverContent"
          sideOffset={10}
          asChild
        >
          <section className="bg-white shadow-xl w-80 md:w-full rounded-lg p-6 border">
            <div className="flex justify-between w-full mb-6">
              <h5 className="text-xl font-semibold text-primary-gradient">
                {name}
              </h5>
              <Popover.Close className="PopoverClose" aria-label="Close">
                <FiXCircle />
              </Popover.Close>
            </div>
            <section className="work-exp-prose h-[500px] overflow-auto">
              <MdxComponent />
            </section>
          </section>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default ExperiencePopover;
