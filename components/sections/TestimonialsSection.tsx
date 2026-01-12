import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { StarIcon } from "../ui/Icons";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager at TechCorp",
    avatar: "SC",
    rating: 5,
    quote: "Focus English transformed my communication skills. I went from struggling with emails to confidently leading international meetings in just 2 months.",
  },
  {
    name: "Miguel Rodríguez",
    role: "Sales Director",
    avatar: "MR",
    rating: 5,
    quote: "The personalized approach made all the difference. The 3-week program was intense but incredibly effective. My client calls have never been better.",
  },
  {
    name: "Priya Patel",
    role: "Marketing Lead",
    avatar: "PP",
    rating: 5,
    quote: "Finally, an English course that understands business needs. The practical exercises and real-world scenarios helped me advance faster than traditional classes.",
  },
];

export function TestimonialsSection() {
  return (
    <Section background="gray" id="testimonials">
      <Container>
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-balance">
            Trusted by Professionals Worldwide
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Join thousands of professionals who transformed their careers with Focus English.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} padding="lg">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-500" filled />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center opacity-60">
          <div className="text-sm font-semibold text-slate-600">TRUSTED BY COMPANIES:</div>
          <div className="text-lg font-black text-slate-400">Google</div>
          <div className="text-lg font-black text-slate-400">Microsoft</div>
          <div className="text-lg font-black text-slate-400">Amazon</div>
          <div className="text-lg font-black text-slate-400">Deloitte</div>
        </div>
      </Container>
    </Section>
  );
}
