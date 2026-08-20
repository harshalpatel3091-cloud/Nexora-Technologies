import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | Nexora Technologies',
  description: 'Refund and cancellation policy for Nexora Technologies services.',
};

export default function RefundPolicyPage() {
  return (
    <div className="pt-24 pb-16 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-blue/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-8">
          Refund <span className="text-brand-blue">Policy</span>
        </h1>
        
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p className="text-lg">Last updated: August 20, 2026</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Scope</h2>
            <p>
              This Refund Policy applies to all web development, software engineering, UI/UX design, and consulting services provided by Nexora Technologies. We strive to deliver high-quality digital solutions and ensure client satisfaction throughout the project lifecycle.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Project Initiation and Deposits</h2>
            <p>
              Custom software and web development projects require significant time and resource allocation from the moment a contract is signed. Therefore, the initial deposit (typically 30% to 50% of the total project cost, as specified in the project agreement) is non-refundable once work has commenced or resource planning has been finalized.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. Cancellation Before Work Begins</h2>
            <p>
              If you request a cancellation after signing a contract but before any actual design, development, or strategic work has started, a full refund of the deposit may be issued, minus any transaction fees or administrative costs incurred by Nexora Technologies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Cancellation After Work Begins</h2>
            <p>
              If you choose to terminate a project after work has commenced, you will be billed for the hours worked and resources utilized up to the point of written cancellation notice. 
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>If the total cost of work completed is less than your initial deposit, the remaining balance will be refunded.</li>
              <li>If the total cost of work completed exceeds your initial deposit, you will be invoiced for the remaining balance.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Completed Milestones</h2>
            <p>
              Our projects are typically divided into milestones (e.g., Design Approval, Alpha Release, Final Delivery). Once a milestone is completed, approved by the client, and paid for, payments for that specific milestone are strictly non-refundable. 
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Third-Party Costs and Non-Refundable Items</h2>
            <p>
              Certain costs associated with a project are entirely non-refundable under any circumstances. These include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Domain name registrations.</li>
              <li>Web hosting services or cloud infrastructure costs.</li>
              <li>Third-party software licenses, API costs, or themes purchased on your behalf.</li>
              <li>SSL certificates.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. Refund Request Process</h2>
            <p>
              All cancellation and refund requests must be submitted in writing via email to hello@nexoratechnologies.com. We will review your request within 5-7 business days and provide a breakdown of hours worked and any eligible refund amount based on this policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
