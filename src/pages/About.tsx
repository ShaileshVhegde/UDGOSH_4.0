import PageShell from "@/components/fest/PageShell";
import SectionHeading from "@/components/fest/SectionHeading";
import { motion } from "framer-motion";
import { Award, GraduationCap, Heart, Users } from "lucide-react";

const purposeItems = [
  {
    title: "Preserve Culture",
    body: "Keep traditional art forms alive while embracing modern expressions",
  },
  {
    title: "Build Community",
    body: "Foster connections between students from different colleges and backgrounds",
  },
  {
    title: "Develop Skills",
    body: "Enhance creativity, confidence, and teamwork through healthy competition",
  },
  {
    title: "Celebrate Diversity",
    body: "Showcase the rich tapestry of talents and cultural expressions",
  },
];

export default function About() {
  return (
    <PageShell>
      <div className="fest-container pb-16 pt-8 sm:pt-12">
        <SectionHeading
          eyebrow="Our story"
          title="About UDGOSH 4.0"
          subtitle="Celebrating the Spectrum of Talent"
        />

        <div className="grid gap-5 lg:grid-cols-12">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-ink/10 bg-white p-6 sm:p-8 lg:col-span-7"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blush px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-rose">
              <Heart className="h-3.5 w-3.5" />
              About Event
            </div>
            <p className="text-base leading-relaxed text-ink/80 sm:text-lg">
              KLE’s BCA College, Dharwad proudly presents the 4th edition of Udgosh — UDGOSH 4.0! This event
              serves as a vibrant platform for students to showcase their hidden talents through a
              variety of enthralling competitions, fostering confidence and shaping their overall
              personality.
            </p>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between overflow-hidden rounded-[2rem] border border-ink/10 bg-sunshine p-6 sm:p-8 lg:col-span-5"
          >
            <p className="font-display text-4xl font-extrabold leading-none text-ink sm:text-5xl">
              Spectrum
              <br />
              of Talent
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-ink/70">
              Department of BCA · Dharwad
            </p>
          </motion.aside>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-ink/10 bg-cream p-6 sm:p-8 lg:col-span-6"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-ink">
              <Users className="h-3.5 w-3.5 text-rose" />
              About College
            </div>
            <p className="text-sm leading-relaxed text-ink/80 sm:text-base">
              The Bachelor of Computer Application (BCA) program at KLE Society commenced in 2013
              under the leadership of Prof. G.S. Sheeri. In August 2015, the BCA program
              transitioned to the RLS College campus, Dharwad, offering students access to modern,
              fully equipped classrooms, a comprehensive library, and advanced computer labs. The
              department prides itself on having a team of highly qualified faculty members and
              robust hardware and software resources.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-ink/10 bg-white p-6 sm:p-8 lg:col-span-6"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blush/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-rose">
              <GraduationCap className="h-3.5 w-3.5" />
              About KLE
            </div>
            <p className="text-sm leading-relaxed text-ink/80 sm:text-base">
              KLE Society, the milestone in the field of education, research, and health care. Its
              vision is to empower students through quality education and shape them into
              responsible citizens for a better society.
            </p>
          </motion.article>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 rounded-[2rem] border border-ink/10 bg-plum p-6 text-white sm:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <Award className="h-6 w-6 text-sunshine" />
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              Purpose & Cultural Importance
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {purposeItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5"
              >
                <h3 className="font-display text-lg font-bold text-sunshine">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </PageShell>
  );
}
