import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Nexora Technologies',
  description: 'Privacy Policy for Nexora Technologies. Learn how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-16 bg-background relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-brand-blue/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-8">
          Privacy <span className="text-brand-blue">Policy</span>
        </h1>
        
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p className="text-lg">Last updated: August 20, 2026</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
            <p>
              Welcome to Nexora Technologies. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website, or otherwise when you contact us.
            </p>
            <p>
              The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use. The personal information we collect may include the following:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Names</li>
              <li>Phone numbers</li>
              <li>Email addresses</li>
              <li>Contact preferences</li>
              <li>Project requirements and budget details (via our contact forms)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. Information Automatically Collected</h2>
            <p>
              We automatically collect certain information when you visit, use, or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website, and other technical information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. How We Use Your Information</h2>
            <p>
              We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to user inquiries and offer support.</li>
              <li>To fulfill and manage your project requests.</li>
              <li>To send administrative information to you.</li>
              <li>To protect our Services and improve user experience.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Service Providers & Third Parties</h2>
            <p>
              We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: data analysis, email delivery, hosting services, customer service, and marketing efforts. We utilize Firebase for data storage and EmailJS for handling email communications.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Data Security and Retention</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>
            <p>
              We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. User Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as the right to request access, correction, or deletion of your data. To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">8. Contact Information</h2>
            <p>
              If you have questions or comments about this notice, you may email us at hello@nexoratechnologies.com or contact us by post to:
            </p>
            <p className="font-semibold text-foreground">
              Nexora Technologies<br/>
              123 Innovation Drive<br/>
              Tech City, TC 90210
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
