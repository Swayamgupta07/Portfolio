import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import Contact from "../components/Contact";

interface ContactPageProps {
  isDarkMode: boolean;
}

export default function ContactPage({ isDarkMode }: ContactPageProps) {
  return (
    <SectionWrapper
      id="contact"
      isDarkMode={isDarkMode}
      className={isDarkMode ? "bg-slate-900 border-b border-gray-800" : "bg-white border-b border-gray-100"}
    >
      <SectionHeader
        title="Get In Touch"
        subtitle="I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Let's connect and build something amazing together!"
        isDarkMode={isDarkMode}
      />
      <Contact isDarkMode={isDarkMode} />
    </SectionWrapper>
  );
}
