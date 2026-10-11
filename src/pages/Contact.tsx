import PageShell from "@/components/fest/PageShell";
import SectionHeading from "@/components/fest/SectionHeading";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const contacts = [
  {
    title: "Address",
    icon: MapPin,
    tone: "bg-sunshine/70",
    content: (
      <p>
        KLE Society&apos;s College of Computer Application
        <br />
        Dharwad, Karnataka
        <br />
        India
      </p>
    ),
  },
  {
    title: "Email",
    icon: Mail,
    tone: "bg-blush",
    content: (
      <a href="mailto:klebcadwd@gmail.com" className="break-all hover:text-rose">
        klebcadwd@gmail.com
      </a>
    ),
  },
  {
    title: "Phone",
    icon: Phone,
    tone: "bg-butter",
    content: (
      <a href="tel:+919591909429" className="hover:text-rose">
        +91 9591909429
      </a>
    ),
  },
  {
    title: "Instagram",
    icon: Instagram,
    tone: "bg-coral/30",
    content: (
      <a
        href="https://www.instagram.com/dwdklebca?igsh=d2NpeTZrOW02aGZh"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-rose"
      >
        @dwdklebca
      </a>
    ),
  },
];

export default function Contact() {
  return (
    <PageShell>
      <div className="fest-container pb-16 pt-8 sm:pt-12">
        <SectionHeading
          eyebrow="Reach us"
          title="Contact Us"
          subtitle="Get in touch with us for any queries"
        />

        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-3">
            {contacts.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex gap-4 rounded-[1.5rem] border border-ink/10 bg-white p-4 sm:p-5"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.tone}`}
                  >
                    <Icon className="h-5 w-5 text-ink" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
                    <div className="mt-1 text-sm text-muted-foreground sm:text-base">
                      {item.content}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-[0_16px_40px_rgba(61,36,56,0.08)]"
          >
            {/* Google Maps Embed - Location from: https://maps.app.goo.gl/EhhCSR8uzLr9j8XX7 */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.4310837656803!2d75.0080378!3d15.4612275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8cd936847f337%3A0xd16aadaba6233824!2sKLE%20Society&#39;s%20College%20of%20Computer%20Application%20-%20BCA%20Dharwad!5e0!3m2!1sen!2sin!4v1761932945943!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="min-h-[360px] w-full border-0 sm:min-h-[480px] lg:min-h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KLE College Location"
            />
          </motion.div>
        </div>
      </div>
    </PageShell>
  );
}
