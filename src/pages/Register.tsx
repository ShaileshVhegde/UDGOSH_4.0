import { FestButton } from "@/components/fest/FestButton";
import PageShell from "@/components/fest/PageShell";
import SectionHeading from "@/components/fest/SectionHeading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { api } from "@/convex/_generated/api";
import { events as festivalEvents } from "@/data/events";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useMutation } from "convex/react";
import { toast } from "sonner";

const events = festivalEvents.map((event) => event.name);

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");
  const createRegistration = useMutation(api.registrations.create);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        fullName: formData.get("fullName") as string,
        college: formData.get("college") as string,
        contactNumber: formData.get("contactNumber") as string,
        email: formData.get("email") as string,
        eventName: selectedEvent,
        numberOfParticipants: parseInt(formData.get("numberOfParticipants") as string) || 1,
      };

      await createRegistration(data);

      toast.success("Registration Successful!", {
        description: "You have been registered for " + selectedEvent,
      });

      (e.target as HTMLFormElement).reset();
      setSelectedEvent("");
    } catch (error) {
      toast.error("Registration Failed", {
        description: "Please try again or contact support.",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageShell>
      <div className="fest-container pb-16 pt-8 sm:pt-12">
        <SectionHeading
          eyebrow="Optional form"
          title="Event Registration"
          subtitle="Fill in your details to register for the fest"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl rounded-[2rem] border border-ink/10 bg-white p-6 sm:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="fullName" className="text-ink">
                Full Name *
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="mt-2 border-ink/15 bg-ivory"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <Label htmlFor="college" className="text-ink">
                College/Department *
              </Label>
              <Input
                id="college"
                name="college"
                type="text"
                required
                className="mt-2 border-ink/15 bg-ivory"
                placeholder="Enter your college or department"
              />
            </div>

            <div>
              <Label htmlFor="contactNumber" className="text-ink">
                Contact Number *
              </Label>
              <Input
                id="contactNumber"
                name="contactNumber"
                type="tel"
                required
                className="mt-2 border-ink/15 bg-ivory"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-ink">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 border-ink/15 bg-ivory"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <Label htmlFor="eventName" className="text-ink">
                Select Event *
              </Label>
              <Select value={selectedEvent} onValueChange={setSelectedEvent} required>
                <SelectTrigger className="mt-2 border-ink/15 bg-ivory text-ink">
                  <SelectValue placeholder="Choose an event" />
                </SelectTrigger>
                <SelectContent className="border-border bg-white">
                  {events.map((event) => (
                    <SelectItem key={event} value={event} className="text-ink">
                      {event}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="numberOfParticipants" className="text-ink">
                Number of Participants
              </Label>
              <Input
                id="numberOfParticipants"
                name="numberOfParticipants"
                type="number"
                min="1"
                max="20"
                defaultValue="1"
                className="mt-2 border-ink/15 bg-ivory"
                placeholder="1"
              />
              <p className="mt-1 text-sm text-muted-foreground">
                For group events, specify the number of team members
              </p>
            </div>

            <FestButton
              type="submit"
              variant="pink"
              className="w-full !py-3.5"
              disabled={isSubmitting || !selectedEvent}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Registration"
              )}
            </FestButton>
          </form>
        </motion.div>
      </div>
    </PageShell>
  );
}
