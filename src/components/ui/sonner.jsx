import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4 text-signal" />,
        info: <InfoIcon className="size-4 text-signal" />,
        warning: <TriangleAlertIcon className="size-4 text-signal" />,
        error: <OctagonXIcon className="size-4 text-signal" />,
        loading: <Loader2Icon className="size-4 animate-spin text-signal" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            "!rounded-none !border !border-zinc-800 !bg-black !text-white !font-mono !text-sm",
          description: "!text-zinc-400 !font-mono",
          actionButton:
            "!rounded-none !bg-signal !text-black !font-mono !text-xs !uppercase !tracking-wide",
          cancelButton:
            "!rounded-none !bg-transparent !border !border-zinc-700 !text-zinc-300 !font-mono",
        },
      }}
      style={{
        "--normal-bg": "#000000",
        "--normal-text": "oklch(0.985 0 0)",
        "--normal-border": "oklch(0.3 0 0)",
        "--border-radius": "0px",
      }}
      {...props} />
  );
}

export { Toaster }
