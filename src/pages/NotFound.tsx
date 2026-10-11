import { FestButton } from "@/components/fest/FestButton";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-screen flex-col items-center justify-center bg-ivory px-4"
    >
      <div className="text-center">
        <p className="font-display text-7xl font-extrabold text-rose sm:text-8xl">404</p>
        <h1 className="mt-3 font-display text-2xl font-bold text-ink">Page Not Found</h1>
        <p className="mt-2 text-muted-foreground">This path wandered off the festival map.</p>
        <FestButton to="/" variant="pink" className="mt-6">
          Back to Home
        </FestButton>
      </div>
    </motion.div>
  );
}
