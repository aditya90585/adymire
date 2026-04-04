import { useState } from "react";
import "./WhyChooseAdymire.css";
import { WhyChooseAdymireImage } from "@/assets"
const faqData = [
  {
    "category": "SECTION 1: GENERAL & SERVICE-RELATED FAQs",
    "faqs": [
      {
        "id": "Q1",
        "question": "What is Adymire Agency?",
        "answer": "Adymire is a modern software and technology company that provides UI/UX Design, Mobile App Development, Web Development, Digital Marketing, and AI Automation services. We help businesses and startups bring their digital ideas to life with professional, high-quality solutions."
      },
      {
        "id": "Q2",
        "question": "What services does Adymire offer?",
        "answer": "We offer five core services: • UI/UX Design - Beautiful and user-friendly interface designs • Mobile App Development - iOS and Android apps • Web Development - Websites and web applications • Digital Marketing - SEO, Ads, Social Media, Content Marketing • AI Automation - Smart automation tools and AI-powered solutions"
      },
      {
        "id": "Q3",
        "question": "Can I choose only one service or do I need a complete package?",
        "answer": "A: You can absolutely choose just one service! We understand every project is different. Whether you need only a website, just marketing, or a full app with design and marketing - we customize based on your needs."
      },
      {
        "id": "Q4",
        "question": "Do you provide custom solutions or only templates?",
        "answer": "We provide 100% custom solutions tailored to your specific business needs. We don't use generic templates. Every project is designed and developed specifically for you, keeping your brand, audience, and goals in mind."
      },
      {
        "id": "Q5",
        "question": "How long does a typical project take?",
        "answer": "Project timelines vary based on complexity: • Simple Website: 2-4 weeks • Custom Web App: 4-8 weeks • Mobile App: 6-12 weeks • UI/UX Design: 1-3 weeks • Marketing Campaign: Ongoing (monthly plans available) Exact timelines are discussed and agreed upon during project planning."
      },
      {
        "id": "Q6",
        "question": "Can you handle small projects or only large ones?",
        "answer": "We work with projects of all sizes! Whether you're a startup needing a landing page or an enterprise requiring a complex platform, we're here to help. Your project size doesn't matter - quality and dedication remain the same."
      },
      {
        "id": "Q7",
        "question": "What industries do you work with?",
        "answer": "We work across all industries including e-commerce, healthcare, education, fintech, real estate, food & beverage, SaaS, and more. Our team adapts to your industry's specific requirements and standards."
      },
      {
        "id": "Q8",
        "question": "Do you work with startups or only established businesses?",
        "answer": "We love working with startups! In fact, we specialize in helping new businesses launch their digital presence. We understand startup budgets and timelines, and we're here to grow with you."
      },
      {
        "id": "Q9",
        "question": "Can you improve or redesign my existing website/app?",
        "answer": "Absolutely! We offer redesign and improvement services. We'll analyze your current platform, identify issues, and create a better version that enhances user experience and achieves your business goals."
      },
      {
        "id": "Q10",
        "question": "What makes Adymire different from other agencies?",
        "answer": "Three things set us apart: 1. Full Transparency - Track your project in real-time via our app and dashboard 2. Modern Technology - We use the latest tools including AI automation 3. Customer-First Approach - You're not just a project number; you're a partner Plus, we provide ongoing support even after project completion."
      }
    ]
  },
  {
    "category": "SECTION 2: PRICING & BUDGET FAQs",
    "faqs": [
      {
        "id": "Q11",
        "question": "How much do your services cost?",
        "answer": "Pricing depends on project scope, complexity, and timeline. We provide custom quotes based on your specific requirements. Contact us with your project details, and we'll send you a transparent, detailed proposal within 24-48 hours."
      },
      {
        "id": "Q12",
        "question": "Is your pricing flexible?",
        "answer": "Yes! We understand different businesses have different budgets. We work with you to find solutions that fit your budget while maintaining quality. We can also break projects into phases if needed."
      },
      {
        "id": "Q13",
        "question": "How is the project cost calculated?",
        "answer": "We calculate costs based on: • Project scope and features required • Design and development complexity • Technology and tools needed • Timeline and urgency • Ongoing support requirements Everything is clearly explained in our proposal - no surprises!"
      },
      {
        "id": "Q14",
        "question": "Are there any hidden charges?",
        "answer": "No hidden charges, ever! Our quotes include all costs upfront. If any additional expenses are needed during the project (like third-party tools you choose), we inform you in advance and get your approval before proceeding."
      },
      {
        "id": "Q15",
        "question": "Can I start with a small budget and scale later?",
        "answer": "Absolutely! We can build a Minimum Viable Product (MVP) or Phase 1 version within your current budget, then add more features as your business grows. This is actually a smart approach many startups use."
      },
      {
        "id": "Q16",
        "question": "Do you offer custom pricing for long-term projects?",
        "answer": "Yes, we offer special pricing for long-term partnerships and retainer agreements. If you need ongoing services (like monthly marketing or maintenance), we can create a customized package with better rates."
      },
      {
        "id": "Q17",
        "question": "What payment methods do you accept?",
        "answer": "We accept multiple payment methods: • Bank Transfer / Wire Transfer • UPI (Google Pay, PhonePe, Paytm) - for Indian clients • Credit/Debit Cards • PayPal - for international clients • International Wire Transfer Choose whatever is most convenient for you!"
      },
      {
        "id": "Q18",
        "question": "Can I pay in installments?",
        "answer": "Yes! Most projects follow a milestone-based payment structure: • Typically 50% advance to start the project • 50% upon completion and delivery For larger projects, we can split into 3-4 milestones. Payment terms are clearly defined in the agreement."
      },
      {
        "id": "Q19",
        "question": "Do you accept international payments?",
        "answer": "Yes, we work with clients globally and accept international payments via PayPal, Wire Transfer, and other international payment gateways. Currency can be USD, EUR, or as per your preference."
      },
      {
        "id": "Q20",
        "question": "Do you provide invoices and receipts?",
        "answer": "Yes, absolutely! You'll receive professional invoices for all payments with complete details including GST (for Indian clients) or as per international tax requirements. All invoices are sent via email and also available in your client dashboard."
      }
    ]
  },
  {
    "category": "SECTION 3: REFUND, CANCELLATION & TRUST FAQs",
    "faqs": [
      {
        "id": "Q21",
        "question": "Do you offer refunds?",
        "answer": "Refunds are evaluated case-by-case based on our Refund Policy. Generally, advance payments and completed work are non-refundable, but if we fail to deliver as per agreement or there are genuine issues, we review refund requests fairly. Please check our detailed Refund Policy on the website."
      },
      {
        "id": "Q22",
        "question": "What is your cancellation policy?",
        "answer": "Project cancellation rights rest with Adymire based on project evaluation. If you need to request cancellation, we review it considering work completed, resources invested, and circumstances. You'll be charged for completed work, and terms are discussed transparently. See our Cancellation Policy for details."
      },
      {
        "id": "Q23",
        "question": "Is my money safe with Adymire?",
        "answer": "Absolutely! We are a registered business with proper tax registrations (GST, PAN). All transactions are documented with official invoices. We've successfully completed numerous projects and have satisfied clients. Your investment is secure with us."
      },
      {
        "id": "Q24",
        "question": "What happens if I'm not satisfied with the work?",
        "answer": "Your satisfaction is our priority! Every project includes revision rounds based on the agreement. If you're not happy with something, we work with you to fix it. We don't consider a project complete until you're satisfied (within the agreed scope and revisions)."
      },
      {
        "id": "Q25",
        "question": "How do you ensure project quality?",
        "answer": "We maintain quality through: • Experienced team of designers and developers • Multiple quality checks and testing before delivery • Regular updates and feedback loops with you • Industry-standard best practices and tools • Thorough testing for bugs and issues Quality is non-negotiable for us!"
      },
      {
        "id": "Q26",
        "question": "Can I see examples of your previous work?",
        "answer": "Yes! We have a portfolio showcasing our previous projects across different industries. You can view case studies on our website, or request specific examples related to your industry during consultation."
      },
      {
        "id": "Q27",
        "question": "Do you sign NDAs or confidentiality agreements?",
        "answer": "Yes, we're happy to sign NDAs and confidentiality agreements if your project requires it. We understand some projects involve sensitive business information, and we respect your privacy completely."
      },
      {
        "id": "Q28",
        "question": "What if the project gets delayed?",
        "answer": "We commit to agreed timelines and work hard to meet them. If delays occur due to unforeseen technical challenges, we communicate immediately with a revised timeline. If delays are from your side (late feedback/content), we adjust the timeline accordingly. Transparency is key!"
      }
    ]
  },
  {
    "category": "SECTION 4: APP & PLATFORM FAQs",
    "faqs": [
      {
        "id": "Q29",
        "question": "Does Adymire have a mobile app?",
        "answer": "Yes! We have an official Adymire mobile app that makes it super easy for you to manage your projects, track progress, communicate with your project manager, and receive updates - all from your phone!"
      },
      {
        "id": "Q30",
        "question": "Where can I download the Adymire app?",
        "answer": "You can download the Adymire app from: • Google Play Store (for Android users) • Apple App Store (for iOS/iPhone users) Just search \"Adymire\" and download it for free!"
      },
      {
        "id": "Q31",
        "question": "Is the Adymire app free to use?",
        "answer": "Yes, the Adymire app is 100% free to download and use! There are no charges for using the app. It's our way of making project management easier and more transparent for you."
      },
      {
        "id": "Q32",
        "question": "Can I manage my project from the app?",
        "answer": "Absolutely! Through the Adymire app, you can: • Track real-time project progress • View timelines and milestones • Communicate with your project manager • Receive instant notifications and updates • Upload files and provide feedback • Review deliverables Everything you need, right in your pocket!"
      },
      {
        "id": "Q33",
        "question": "Is the app available for both Android and iOS?",
        "answer": "Yes! The Adymire app is available for both Android (Google Play Store) and iOS (Apple App Store). Whether you use an Android phone or iPhone, you can enjoy the same great experience."
      },
      {
        "id": "Q34",
        "question": "What features does the Adymire app have?",
        "answer": "Key features include: • Real-time project tracking dashboard • Task and milestone updates • Direct chat with project manager • File uploads and downloads • Payment and invoice management • Push notifications for important updates • Project history and documentation We're continuously adding new features based on user feedback!"
      }
    ]
  },
  {
    "category": "SECTION 5: CLIENT DASHBOARD & PROJECT TRACKING FAQs",
    "faqs": [
      {
        "id": "Q35",
        "question": "Do you provide a client dashboard?",
        "answer": "Yes! We provide a comprehensive Client Dashboard that's accessible both via our website and mobile app. It's currently under continuous development and improvement, with new features being added regularly based on client needs."
      },
      {
        "id": "Q36",
        "question": "Can I track my project progress in real-time?",
        "answer": "Yes! Our Client Dashboard and mobile app allow you to track your project progress in real-time. You can see: • Current project stage • Completed tasks • Upcoming milestones • Timeline and deadlines • Team working on your project Complete transparency, always!"
      },
      {
        "id": "Q37",
        "question": "Will I receive daily updates about my project?",
        "answer": "Yes! Depending on your project type and stage, you'll receive regular updates. Active development phases often have daily progress updates, while planning phases may have updates every 2-3 days. You're always in the loop!"
      },
      {
        "id": "Q38",
        "question": "Can I see timelines and milestones?",
        "answer": "Absolutely! Your dashboard shows: • Overall project timeline • Individual milestone deadlines • Task completion percentages • Expected delivery dates Your project manager's timeline is visible to you, so you know exactly what's happening and when."
      },
      {
        "id": "Q39",
        "question": "Will I get updates on both mobile app and website?",
        "answer": "Yes! Updates are synchronized across both the mobile app and website dashboard. Check your project status from wherever is most convenient - your phone, tablet, or computer. You'll also receive email notifications for major updates."
      },
      {
        "id": "Q40",
        "question": "Can I communicate with my team through the dashboard?",
        "answer": "Yes! The dashboard includes built-in communication features. You can: • Send messages to your project manager • Comment on specific tasks or deliverables • Upload files and documents • Request meetings or calls • Provide feedback and approvals Everything in one place!"
      },
      {
        "id": "Q41",
        "question": "What if I don't understand something on the dashboard?",
        "answer": "No worries! We've designed the dashboard to be user-friendly, but if you need help, our support team is just a message away. We also provide a quick tutorial when you first log in, and there's a help section with guides."
      }
    ]
  },
  {
    "category": "SECTION 6: PAYMENT-RELATED FAQs",
    "faqs": [
      {
        "id": "Q42",
        "question": "Is online payment secure?",
        "answer": "Yes, 100% secure! We use industry-standard encrypted payment gateways. Your card details or bank information are never stored on our servers. All transactions are protected with SSL encryption and comply with international security standards."
      },
      {
        "id": "Q43",
        "question": "Can I get a payment receipt immediately?",
        "answer": "Yes! You'll receive an instant payment confirmation email as soon as your payment is processed. The official invoice with all details (including GST if applicable) will be sent within 24 hours and will also be available in your dashboard."
      },
      {
        "id": "Q44",
        "question": "What happens if my payment fails?",
        "answer": "If a payment fails, you'll be notified immediately. You can: • Try again with the same method • Use an alternative payment method • Contact our support team for assistance We'll help you resolve any payment issues quickly. Your project timeline won't be affected by temporary payment glitches."
      },
      {
        "id": "Q45",
        "question": "Can I pay from outside India?",
        "answer": "Yes! We accept international payments from clients worldwide. You can pay via PayPal, international wire transfer, or international credit/debit cards. Currency conversion is handled automatically, and you'll see the exact amount before confirming payment."
      },
      {
        "id": "Q46",
        "question": "Are there any transaction fees?",
        "answer": "For most payment methods, there are no extra transaction fees charged by us. However, your bank or payment provider (like PayPal) may charge their standard processing fees, which vary by method and location. This is mentioned before you complete payment."
      },
      {
        "id": "Q47",
        "question": "How do I know my payment was received?",
        "answer": "You'll receive multiple confirmations: • Instant payment confirmation on-screen • Email receipt within minutes • SMS notification (if phone number provided) • Payment reflected in your dashboard • Official invoice sent within 24 hours You'll never be in doubt!"
      }
    ]
  },
  {
    "category": "SECTION 7: DATA, PRIVACY & SECURITY FAQs",
    "faqs": [
      {
        "id": "Q48",
        "question": "Is my data safe with Adymire?",
        "answer": "Absolutely! We take data security very seriously. Your information is: • Stored on secure, encrypted servers • Protected with multiple security layers • Accessible only to authorized team members working on your project • Never sold or shared with third parties • Backed up regularly to prevent loss Your privacy and security are our top priorities."
      },
      {
        "id": "Q49",
        "question": "How do you use my information?",
        "answer": "We use your information only for: • Delivering the services you requested • Communicating about your project • Sending invoices and important updates • Improving our services based on feedback We never use your data for spam, unwanted marketing, or any purpose you haven't agreed to. See our Privacy Policy for complete details."
      },
      {
        "id": "Q50",
        "question": "Do you share my data with third parties?",
        "answer": "No, we do not sell or share your personal data with third parties for marketing purposes. We may share limited information only when: • Required by law or legal processes • Using trusted service providers for project delivery (like hosting providers) - and they are bound by confidentiality • You explicitly give us permission Your data stays private."
      },
      {
        "id": "Q51",
        "question": "Is my project information confidential?",
        "answer": "Yes! We treat all project information as confidential. We don't discuss your project with anyone outside our team without your permission. If you need extra protection, we're happy to sign an NDA (Non-Disclosure Agreement)."
      },
      {
        "id": "Q52",
        "question": "Can I request deletion of my data?",
        "answer": "Yes, you have the right to request deletion of your personal data, subject to legal record-keeping requirements (we must keep some records for tax and legal compliance). Contact our support team with your request, and we'll process it within 7-14 business days."
      }
    ]
  },
  {
    "category": "SECTION 8: SUPPORT & COMMUNICATION FAQs",
    "faqs": [
      {
        "id": "Q53",
        "question": "How can I contact Adymire support?",
        "answer": "You can reach us through multiple channels: • Email: [Your Support Email] • Phone/WhatsApp: [Your Phone Number] • Website Contact Form • Live Chat (on website during business hours) • Mobile App Chat • Client Dashboard Messaging Choose whatever is most convenient for you!"
      },
      {
        "id": "Q54",
        "question": "What is your support response time?",
        "answer": "We respond to: • Urgent queries: Within same business day (usually within 2-4 hours) • General questions: Within 24-48 hours • Complex technical queries: Within 2-3 business days During active projects, your dedicated project manager typically responds within a few hours during working hours."
      },
      {
        "id": "Q55",
        "question": "Do I get a dedicated project manager?",
        "answer": "Yes! Every project is assigned a dedicated project manager who will be your main point of contact. They'll: • Understand your requirements • Coordinate with the technical team • Provide regular updates • Address your questions and concerns • Ensure timely delivery You'll have their direct contact for smooth communication!"
      },
      {
        "id": "Q56",
        "question": "What communication channels do you use?",
        "answer": "We use whatever works best for you: • Email (for official communication and documentation) • WhatsApp (for quick updates and queries) • Phone/Video calls (for discussions and meetings) • Dashboard messaging (for project-specific communication) • Scheduled video conferences (for presentations and reviews) We adapt to your preferred communication style."
      },
      {
        "id": "Q57",
        "question": "What are your working hours?",
        "answer": "Our standard working hours are Monday to Saturday, 10 AM to 7 PM IST (Indian Standard Time). However, for urgent issues or international clients, we're flexible and can schedule calls/meetings outside regular hours. Support emails are monitored even on Sundays for emergencies."
      },
      {
        "id": "Q58",
        "question": "What happens after my project is completed?",
        "answer": "After project completion, we provide: • Handover of all files and access • Documentation and guidelines • Training (if needed for using the platform) • Free support period (typically 15-30 days for bug fixes) • Ongoing maintenance options (optional paid plans) • Lifetime support for queries We don't disappear after delivery - we're here for the long term!"
      }
    ]
  },
  {
    "category": "SECTION 9: GETTING STARTED FAQs",
    "faqs": [
      {
        "id": "Q59",
        "question": "How do I get started with Adymire?",
        "answer": "Getting started is simple: 1. Contact us via website form, email, or phone 2. Tell us about your project and requirements 3. We'll schedule a free consultation call 4. We'll send you a detailed proposal and quote 5. Once approved, we'll create the agreement 6. Make the advance payment 7. Project kicks off with your dashboard access! The entire process takes 2-4 days typically."
      },
      {
        "id": "Q60",
        "question": "Do you offer free consultations?",
        "answer": "Yes! We offer a free initial consultation to understand your needs and suggest the best solution. There's no obligation - this is our chance to learn about your project and your chance to know if we're the right fit!"
      },
      {
        "id": "Q61",
        "question": "What information do you need from me to start?",
        "answer": "To provide an accurate quote and plan, we need: • Brief description of your project/idea • Your goals and target audience • Any specific features or requirements you have in mind • Approximate timeline expectations • Budget range (if you have one) • Reference websites/apps you like (if any) The more details you share, the better we can help!"
      }
    ]
  }
]

export default function WhyChooseAdymire() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="adymire-why-section ">
      <h2 className="adymire-why-title">
        Why Choose Adymire
        <span className="adymire-why-underline"></span>
      </h2>

      <div data-lenis-prevent className="adymire-why-content h-screen scrollable">
        <div className="adymire-why-image">
          <img src={WhyChooseAdymireImage} alt="Why Choose Us" />
        </div>

        <div className="adymire-why-faq">
          {faqData?.map((item, index) => (
            
            <div
            key={index}
              className={`
                `}
            >

              <div className="font-semibold text-xl ml-2 my-4">{item?.category}</div>
              {item?.faqs?.map((qa,index) => {
                return <div key={qa?.id} className={` adymire-faq-item   ${
                activeIndex === index ? "active" : ""
              }`}
                 onClick={() => toggleFAQ(index)}>
                  <div className="adymire-faq-question">  
                    <span>{qa?.question}</span>
                    <span className="adymire-faq-arrow">▾</span>
                  </div>

                  <div className="adymire-faq-answer">
                    <p>{qa?.answer}</p>
                  </div>
                </div>
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
