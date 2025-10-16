import GridPattern from "../components/ui/grid";
import { Github, Linkedin, Mail } from "lucide-react";
import TextAnimate from "../components/ui/text-animate";

const Contact = () => {
  return (
    <div className="h-full bg-black">
      <div className="bg-black text-white grid grid-cols-12 relative min-h-full">
        <GridPattern strokeDasharray="2" width={100} height={200} />

        <div className="col-span-12 fade-style flex flex-col  p-4 sm:p-6 md:p-16 z-10">
          <TextAnimate
            text="CONTACT"
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl"
            type="shiftInUp"
          />
          <div className="font-mono italic mt-4 md:mt-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-4 sm:py-6 md:py-10">
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              <a
                href="https://www.github.com/ryomensukuna2003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg md:text-xl break-all hover:underline"
              >
                @_ryomen_sukuna
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-4 sm:py-6 md:py-10">
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              <a
                href="https://www.linkedin.com/in/shivanshu-/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg md:text-xl break-all hover:underline"
              >
                @shivanshu-
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-4 sm:py-6 md:py-10">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              <a
                href="mailto:mshivanshu1264@gmail.com"
                className="text-base sm:text-lg md:text-xl break-all hover:underline"
              >
                mshivanshu1264@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
