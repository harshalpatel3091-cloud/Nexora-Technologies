import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Nexora Technologies',
  description: 'Terms and Conditions for Nexora Technologies. Read the rules and guidelines for using our services.',
};

export default function TermsConditionsPage() {
  return (
    <div className="pt-24 pb-16 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-brand-cyan/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-8">
          Terms & <span className="text-brand-blue">Conditions</span>
        </h1>
        
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p className="text-lg">Last updated: August 20, 2026</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
            <p>
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) and Nexora Technologies (&quot;we,&quot; &quot;us&quot; or &quot;our&quot;), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Services and Project Engagement</h2>
            <p>
              Nexora Technologies provides web development, software engineering, AI solutions, and related digital services. When you engage us for a project, specific deliverables, timelines, and payment structures will be outlined in a separate Statement of Work (SOW) or project agreement. These Terms and Conditions apply to all engagements unless explicitly overridden by a specific contract.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. User Responsibilities</h2>
            <p>
              By using our Site or Services, you represent and warrant that: 
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All registration and project information you submit will be true, accurate, current, and complete.</li>
              <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
              <li>You will not use the Site for any illegal or unauthorized purpose.</li>
              <li>Your use of the Site will not violate any applicable law or regulation.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated or agreed upon in a specific project contract, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
            </p>
            <p>
              Upon full payment for a custom project, intellectual property rights for the final deliverables are typically transferred to the client, as detailed in the specific project agreement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Payments and Fees</h2>
            <p>
              For custom development services, we generally require an upfront deposit before work begins, with subsequent payments tied to project milestones. All payments shall be in the currency specified in the invoice. Late payments may result in the suspension of work or hosting services until the account is brought current.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Limitation of Liability</h2>
            <p>
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our services, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. Third-Party Services</h2>
            <p>
              Our projects may integrate third-party tools, APIs, or services (e.g., payment gateways, CMS platforms). We are not responsible for the availability, performance, or security of these third-party services. Any costs associated with third-party subscriptions or usage are the responsibility of the client unless otherwise stated.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">8. Changes to Terms</h2>
            <p>
              We reserve the right, in our sole discretion, to make changes or modifications to these Terms and Conditions at any time and for any reason. We will alert you about any changes by updating the &quot;Last updated&quot; date of these Terms and Conditions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">9. Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
            </p>
            <p className="font-semibold text-foreground">
              hello@nexoratechnologies.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
