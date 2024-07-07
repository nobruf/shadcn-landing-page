import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon, DollarSign } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <DollarSign className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />

              <h3 className="text-2xl">TewoTewo</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link href={"contact@ayinke.ventures"} className="opacity-60 hover:opacity-100">
                contact@ayinke.ventures
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                FAQs
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Provide Feedback
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            <div>
              <Link href="https://x.com/ayinkeventures" className="opacity-60 hover:opacity-100" target="_blank">
                Twitter/X
              </Link>
            </div>

            <div>
              <Link href="https://ayinke.ventures" className="opacity-60 hover:opacity-100" target="_blank">
                Ayinke Ventures
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2024
            <Link
              target="_blank"
              href="https://ayinke.ventures"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Ayinke Ventures
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
