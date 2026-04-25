const CATEGORIES = [
  {
    id: 'ai-legal-operators',
    label: 'AI Legal Operators',
    tagline: 'Direct competitors',
    color: '#C53030',
    companies: ['arcline', 'general-legal', 'legalos', 'wayco']
  },
  {
    id: 'ai-legal-tools',
    label: 'AI Legal Tools',
    tagline: 'Enablers',
    color: '#C05621',
    companies: ['harvey', 'legora', 'spellbook']
  },
  {
    id: 'legal-automation-platforms',
    label: 'Legal Automation Platforms',
    tagline: 'Self-serve platforms',
    color: '#B7791F',
    companies: ['ironclad', 'lexion', 'clerky', 'stripe-atlas']
  },
  {
    id: 'legal-infrastructure',
    label: 'Legal Infrastructure',
    tagline: 'Data & tooling layer',
    color: '#553C9A',
    companies: ['legalon', 'doctrine', 'thomson-reuters', 'lexisnexis']
  },
  {
    id: 'traditional-firms',
    label: 'Traditional Firms',
    tagline: 'AI-adopting incumbents',
    color: '#1A202C',
    companies: ['cooley', 'gunderson', 'goodwin']
  }
];

const COMPANIES = {
  arcline: {
    id: 'arcline', name: 'Arcline', website: 'https://www.arcline-ai.com',
    category: 'AI Legal Operators', productType: 'Hybrid', region: 'US · UK · Australia · Norway',
    scope: 'Routine contracts & legal documents', yc: true, ycBatch: 'W26', stage: 'Early',
    dataQuality: 'full',
    description: 'YC W26 AI-native legal services platform. AI generates ~80% of legal work, elite attorneys handle the final 20%. Same-day turnaround, fixed flat-fee pricing. Founded by Pamir Ehsas (former outside counsel to OpenAI) and Stefan Mandaric (MIT Fulbright, AI engineer). 50+ VC-backed startups served. Lawyer network covers US, UK, Australia, and Norway.',
    systemModel: {
      input: 'Email, Slack, or web form',
      ai: 'AI generates initial draft (~80%) using market standards and jurisdictional requirements',
      human: 'Licensed attorney reviews and refines final ~20%; attorney-client privilege maintained',
      output: 'Compliant legal document signed off by licensed counsel'
    },
    aiRole: ['Generate', 'Assist'],
    workflowOwnership: 'Owns full workflow',
    outputResponsibility: 'Company responsible',
    uxModel: { entryType: 'Multi-channel (email, Slack, web)', interaction: 'Async (submit → receive)', speed: 'Same-day SLA', control: 'Low — company drives end-to-end' },
    features: {
      documentGeneration: 'Yes', templateLibrary: 'Unknown', multiDocumentWorkflows: 'Unknown', versioning: 'Unknown',
      draftGeneration: 'Yes', contextAwareGeneration: 'Yes', riskDetection: 'Partial', clauseSuggestions: 'Unknown', summarization: 'Unknown', chatAssistant: 'No',
      structuredIntake: 'Yes', chatInterface: 'No', asyncWorkflow: 'Yes', realTimeEditing: 'No', collaboration: 'Unknown', approvalFlow: 'Yes',
      wordDocs: 'Unknown', slackEmail: 'Yes', api: 'Unknown',
      jurisdictionHandling: 'Yes', complianceWorkflows: 'Yes', auditTrail: 'Yes'
    },
    moat: ['Attorney-client privilege maintained at product level', 'Fixed-price model removes billing friction entirely', 'SOC 2 Type 2 · ISO 27001 · GDPR — enterprise trust stack', 'Same-day SLA as a hard product guarantee', 'Multi-jurisdiction coverage (US, EU, AU) out of the box'],
    risks: ['No user-facing product interface — invisible to end user', 'Scale constrained by licensed lawyer capacity', 'AI transparency limited; user cannot inspect drafts directly', 'No stated proprietary data moat or model flywheel', 'Fixed pricing may not work for high-volume workflows'],
    verdict: { wins: 'Full-stack legal delivery with attorney accountability at startup speed and fixed cost. No retainer, no hourly billing, no legal ops overhead.', vulnerable: 'Pure-software competitors improve with each model generation. No sticky UI means easy to switch. Lawyer dependency caps scale.', competitors: 'Harvey AI (AI capability gap), Ironclad (workflow depth), Spellbook (lawyer-side adoption)' },
    positioning: { x: 0.73, y: 0.30 }
  },

  'general-legal': {
    id: 'general-legal', name: 'General Legal', website: 'https://general.legal',
    category: 'AI Legal Operators', productType: 'Hybrid', region: 'US',
    scope: 'Commercial contracts for growth-stage startups', yc: true, ycBatch: 'W26', stage: 'Early',
    dataQuality: 'partial',
    description: 'YC W26 AI-native law firm for growth-stage companies. Contract review, redlining, negotiation, and drafting at flat-fee pricing ($250–$500/contract, $2k for drafts). Typical 1-hour turnaround with 3-hour guarantee. US-barred attorneys on every deliverable. Slack integration. Covers MSAs, DPAs, NDAs, vendor agreements, TOSs, EULAs. Batch-mates with Arcline in YC W26.',
    systemModel: { input: 'Slack message or web intake', ai: 'AI-assisted attorney review and redlining', human: 'US-barred attorneys handle all client work and sign off', output: 'Reviewed, redlined, or drafted contract' },
    aiRole: ['Generate', 'Assist'], workflowOwnership: 'Owns full workflow', outputResponsibility: 'Company responsible',
    uxModel: { entryType: 'Web app + Slack', interaction: 'Async (submit → receive)', speed: '1-hour typical, 3-hour guarantee', control: 'Low' },
    features: {
      documentGeneration: 'Yes', templateLibrary: 'Unknown', multiDocumentWorkflows: 'Unknown', versioning: 'Unknown',
      draftGeneration: 'Yes', contextAwareGeneration: 'Unknown', riskDetection: 'Unknown', clauseSuggestions: 'Unknown', summarization: 'Unknown', chatAssistant: 'Unknown',
      structuredIntake: 'Unknown', chatInterface: 'Unknown', asyncWorkflow: 'Yes', realTimeEditing: 'No', collaboration: 'Unknown', approvalFlow: 'Unknown',
      wordDocs: 'Unknown', slackEmail: 'Unknown', api: 'Unknown',
      jurisdictionHandling: 'Unknown', complianceWorkflows: 'Unknown', auditTrail: 'Unknown'
    },
    diff: { better: [], worse: [], different: ['Closest model competitor — same AI + attorney hybrid approach; differentiation unclear without more data'] },
    strengthSignal: 'YC-backed; same model as Arcline validates the category thesis',
    riskSignal: 'Direct model competitor competing for identical startup customers',
    positioning: { x: 0.65, y: 0.30 }
  },

  legalos: {
    id: 'legalos', name: 'LegalOS', website: 'https://www.ycombinator.com/companies/legalos',
    category: 'AI Legal Operators', productType: 'Hybrid', region: 'US',
    scope: 'AI-native immigration law firm (work visas)', yc: true, ycBatch: 'W26', stage: 'Early',
    dataQuality: 'partial',
    description: 'YC W26 AI-native immigration law firm. AI agents draft visa petition narratives, compile evidence, and anticipate USCIS objections for O-1, H-1B, L-1A, L-1B, TN, EB-1A, EB-1C, EB-2 NIW petitions. Licensed immigration attorneys with 40+ years experience review every case. 48-hour turnaround, 100% approval rate so far. Different legal vertical from Arcline — immigration law vs. startup commercial contracts.',
    systemModel: { input: 'Client intake form (visa type, background, employer)', ai: 'AI agents draft petition narratives, compile evidence packages, anticipate USCIS objections', human: 'Licensed immigration attorneys review and sign off every petition', output: 'Filed visa petition under attorney authority' },
    aiRole: ['Generate', 'Assist'], workflowOwnership: 'Owns full workflow', outputResponsibility: 'Company responsible',
    uxModel: { entryType: 'Web intake form', interaction: 'Async (intake → 48-hr delivery)', speed: '48-hour turnaround', control: 'Low — company drives end-to-end' },
    features: {
      documentGeneration: 'Yes', templateLibrary: 'Unknown', multiDocumentWorkflows: 'Yes', versioning: 'Unknown',
      draftGeneration: 'Yes', contextAwareGeneration: 'Yes', riskDetection: 'Yes', clauseSuggestions: 'Unknown', summarization: 'Unknown', chatAssistant: 'Unknown',
      structuredIntake: 'Yes', chatInterface: 'No', asyncWorkflow: 'Yes', realTimeEditing: 'No', collaboration: 'Unknown', approvalFlow: 'Yes',
      wordDocs: 'Unknown', slackEmail: 'Unknown', api: 'Unknown',
      jurisdictionHandling: 'Yes', complianceWorkflows: 'Yes', auditTrail: 'Unknown'
    },
    diff: { better: ['100% approval rate claim'], worse: ['Slower turnaround (48 hrs vs. Arcline same-day)', 'Narrow scope (immigration only)', 'Does not serve startup commercial contract needs'], different: ['Immigration law (visas) vs. commercial contracts — entirely different legal vertical and buyer', 'Serves employers needing visa petitions, not startups needing contracts'] },
    strengthSignal: 'YC W26; 100% approval rate; purpose-built for immigration with deep process AI',
    riskSignal: 'Not a direct competitor to Arcline — different vertical; immigration market is narrower',
    positioning: { x: 0.70, y: 0.25 }
  },

  wayco: {
    id: 'wayco', name: 'Wayco', website: 'https://wayco.ai',
    category: 'AI Legal Operators', productType: 'Hybrid', region: 'US',
    scope: 'AI platform for medlegal case management (personal injury, mass tort)', yc: true, ycBatch: 'W26', stage: 'Early',
    dataQuality: 'partial',
    description: 'YC W26 AI platform for medical-legal case management. Voice AI automates case intake, patient-to-provider matching, lead follow-up, and medical record chronology. Serves personal injury and mass tort law firms, insurance companies, and medical coordination platforms. Claims 90% efficiency gains. Different vertical from Arcline — sells to law firms managing PI/mass tort cases, not startups needing commercial contracts.',
    systemModel: {
      input: 'Law firm intake (web form or phone call via voice AI)',
      ai: 'Voice AI handles phone intake and follow-up; AI matches patients to providers; AI analyzes medical records and generates chronologies',
      human: 'Law firm attorneys and case managers review AI-generated case summaries and coordinate decisions',
      output: 'Managed case pipeline: intake → patient-provider match → record analysis → coordination'
    },
    aiRole: ['Generate', 'Assist'],
    workflowOwnership: 'Owns full workflow',
    outputResponsibility: 'Company responsible',
    uxModel: { entryType: 'Web app + voice AI phone automation', interaction: 'Automated intake + full case coordination', speed: 'Automated (replaces days of phone calls)', control: 'Low — Wayco drives end-to-end' },
    features: {
      documentGeneration: 'Partial', templateLibrary: 'Unknown', multiDocumentWorkflows: 'Partial', versioning: 'Unknown',
      draftGeneration: 'No', contextAwareGeneration: 'Partial', riskDetection: 'Partial', clauseSuggestions: 'No', summarization: 'Yes', chatAssistant: 'Unknown',
      structuredIntake: 'Yes', chatInterface: 'Unknown', asyncWorkflow: 'Yes', realTimeEditing: 'No', collaboration: 'Partial', approvalFlow: 'Unknown',
      wordDocs: 'Unknown', slackEmail: 'Unknown', api: 'Unknown',
      jurisdictionHandling: 'Partial', complianceWorkflows: 'Unknown', auditTrail: 'Unknown'
    },
    diff: { better: [], worse: ['No contract creation', 'Does not serve startup commercial contracting needs'], different: ['Medlegal ops platform for PI/mass tort law firms vs. end-to-end legal service for startups', 'Sells to law firms as a tool; Arcline replaces the need for a law firm for routine work'] },
    strengthSignal: 'YC W26; voice AI for case intake; 90% efficiency claim; personal injury + mass tort niche',
    riskSignal: 'Not a direct competitor to Arcline — different vertical, different buyer, different job-to-be-done',
    positioning: { x: 0.45, y: 0.35 }
  },

  harvey: {
    id: 'harvey', name: 'Harvey AI', website: 'https://harvey.ai',
    category: 'AI Legal Tools', productType: 'SaaS', region: 'Global — 60+ countries (offices: US, UK, France, Ireland, Netherlands, India)',
    scope: 'AI assistant for law firms and in-house legal', yc: false, ycBatch: null, stage: 'Series F',
    dataQuality: 'full',
    description: 'Best-in-class legal AI platform. 100,000+ lawyers, 1,300+ organizations, majority of AmLaw 100. Crossed $100M ARR in August 2025. Series F at $8B valuation (Dec 2025), then $200M growth round at $11B (March 2026), $1.22B total raised. User (lawyer) owns all output — no attorney accountability at product level.',
    systemModel: { input: 'Chat prompt or document upload', ai: 'Legal-trained LLM generates drafts, research memos, risk analysis', human: 'Lawyer reviews, edits, and takes ownership of all output', output: 'Draft or analysis — user finalizes and is responsible' },
    aiRole: ['Generate', 'Assist'], workflowOwnership: 'Assists workflow', outputResponsibility: 'User responsible',
    uxModel: { entryType: 'Web app / API', interaction: 'Chat + document editor', speed: 'Real-time generation', control: 'High — lawyer drives' },
    features: {
      documentGeneration: 'Yes', templateLibrary: 'Partial', multiDocumentWorkflows: 'Yes', versioning: 'Unknown',
      draftGeneration: 'Yes', contextAwareGeneration: 'Yes', riskDetection: 'Yes', clauseSuggestions: 'Yes', summarization: 'Yes', chatAssistant: 'Yes',
      structuredIntake: 'No', chatInterface: 'Yes', asyncWorkflow: 'No', realTimeEditing: 'Yes', collaboration: 'Yes', approvalFlow: 'Unknown',
      wordDocs: 'Yes', slackEmail: 'Unknown', api: 'Yes',
      jurisdictionHandling: 'Yes', complianceWorkflows: 'Partial', auditTrail: 'Yes'
    },
    diff: { better: ['Chat interface', 'Real-time generation', 'Legal research', 'Risk detection', 'Clause suggestions', 'API access'], worse: ['No output accountability', 'No attorney-client privilege at product level', 'Requires expert user (lawyer)'], different: ['Tool for lawyers vs. service replacing lawyers', 'User owns output vs. company signs off'] },
    strengthSignal: '$11B valuation, $100M+ ARR, 100k+ lawyers, AmLaw 100 majority — dominant platform position',
    riskSignal: 'Requires lawyers to operate — not startup-accessible; no output accountability at product level',
    positioning: { x: 0.72, y: 0.88 }
  },

  legora: {
    id: 'legora', name: 'Legora', website: 'https://legora.com',
    category: 'AI Legal Tools', productType: 'SaaS', region: 'Global (Sweden origin; offices: US, UK, Canada, Australia)',
    scope: 'AI workspace for law firms — EU-origin, US expanding', yc: true, ycBatch: null, stage: 'Series D',
    dataQuality: 'partial',
    description: 'YC-backed AI workspace for lawyers. Formerly "Leya" (rebranded February 2025). Fastest-growing legal AI in Europe. Series D at $5.55B valuation (March 2026), $816M total raised. Expanding aggressively into US. Covers research, drafting, document review, and collaboration. Agentic research launched early 2025.',
    systemModel: { input: 'Document upload or chat prompt', ai: 'AI assists with research, drafting, and review in European legal contexts', human: 'Lawyer reviews and takes ownership of output', output: 'Draft or analysis under lawyer responsibility' },
    aiRole: ['Generate', 'Assist'], workflowOwnership: 'Assists workflow', outputResponsibility: 'User responsible',
    uxModel: { entryType: 'Web app', interaction: 'Chat + document editor', speed: 'Real-time', control: 'High' },
    features: {
      documentGeneration: 'Yes', templateLibrary: 'Partial', multiDocumentWorkflows: 'Unknown', versioning: 'Unknown',
      draftGeneration: 'Yes', contextAwareGeneration: 'Yes', riskDetection: 'Yes', clauseSuggestions: 'Yes', summarization: 'Yes', chatAssistant: 'Yes',
      structuredIntake: 'No', chatInterface: 'Yes', asyncWorkflow: 'No', realTimeEditing: 'Yes', collaboration: 'Unknown', approvalFlow: 'Unknown',
      wordDocs: 'Yes', slackEmail: 'Unknown', api: 'Unknown',
      jurisdictionHandling: 'Yes', complianceWorkflows: 'Yes', auditTrail: 'Unknown'
    },
    diff: { better: ['EU legal coverage', 'GDPR-native', 'Chat interface', 'Risk detection'], worse: ['No output accountability', 'Requires lawyers to operate'], different: ['EU market vs. Arcline global focus', 'Tool for lawyers vs. service'] },
    strengthSignal: '$5.55B valuation (Series D, March 2026); YC-backed; fastest-growing legal AI in Europe; US expansion underway',
    riskSignal: 'Lawyer-dependent — not accessible to non-legal users; competing directly with Harvey for same enterprise law firm segment',
    positioning: { x: 0.65, y: 0.86 }
  },

  spellbook: {
    id: 'spellbook', name: 'Spellbook', website: 'https://spellbook.legal',
    category: 'AI Legal Tools', productType: 'SaaS', region: 'Global — 80+ countries (Canada HQ)',
    scope: 'AI contract drafting & review in Microsoft Word', yc: false, ycBatch: null, stage: 'Series B',
    dataQuality: 'full',
    description: 'AI contract review and drafting tool embedded in Microsoft Word. Series B: $50M at $350M valuation (Oct 2025), $40M debt financing (Mar 2026). 10M+ contracts reviewed. 4,000+ law firms and in-house teams in 80 countries. Customers include Nestlé, eBay. Powered by GPT-5. Zero workflow disruption — lawyers stay in Word.',
    systemModel: { input: 'Open contract in Microsoft Word', ai: 'AI suggests clauses, flags risks, drafts provisions in context of the open document', human: 'Lawyer reviews inline suggestions and accepts/rejects each one', output: 'Enhanced Word document under lawyer full control' },
    aiRole: ['Generate', 'Assist'], workflowOwnership: 'Assists workflow', outputResponsibility: 'User responsible',
    uxModel: { entryType: 'Microsoft Word plugin', interaction: 'Inline suggestions', speed: 'Real-time', control: 'High' },
    features: {
      documentGeneration: 'Yes', templateLibrary: 'Partial', multiDocumentWorkflows: 'No', versioning: 'No',
      draftGeneration: 'Yes', contextAwareGeneration: 'Yes', riskDetection: 'Yes', clauseSuggestions: 'Yes', summarization: 'Yes', chatAssistant: 'Yes',
      structuredIntake: 'No', chatInterface: 'Yes', asyncWorkflow: 'No', realTimeEditing: 'Yes', collaboration: 'No', approvalFlow: 'No',
      wordDocs: 'Yes', slackEmail: 'No', api: 'Unknown',
      jurisdictionHandling: 'Partial', complianceWorkflows: 'No', auditTrail: 'No'
    },
    diff: { better: ['Inline Word editing', 'Clause suggestions', 'Zero adoption friction for lawyers'], worse: ['No output accountability', 'No jurisdiction guarantee', 'Lawyer-dependent', 'No enterprise workflow'], different: ['Augments lawyers vs. replaces them', 'Tool layer vs. service layer'] },
    strengthSignal: 'Series B ($50M at $350M, Oct 2025); 10M+ contracts reviewed; 4,000+ firms in 80 countries; Word-native = zero friction',
    riskSignal: 'Requires a lawyer — not usable independently; squeezed between Harvey (enterprise) and General Legal/Arcline (service)',
    positioning: { x: 0.57, y: 0.91 }
  },

  ironclad: {
    id: 'ironclad', name: 'Ironclad', website: 'https://ironcladapp.com',
    category: 'Legal Automation Platforms', productType: 'SaaS', region: 'Global — primarily US; used across Americas, EMEA, APAC',
    scope: 'Contract lifecycle management (CLM)', yc: false, ycBatch: null, stage: 'Series E',
    dataQuality: 'full',
    description: 'Enterprise CLM platform managing the full contract process — intake, drafting, negotiation, approval, storage, renewal. AI features overlaid on top of a robust workflow engine. Requires in-house legal team to configure and operate.',
    systemModel: { input: 'Structured intake form or template selection', ai: 'AI fills templates, flags risk clauses, extracts data from uploaded contracts', human: 'Legal team reviews, negotiates, and approves within the platform', output: 'Executed contract with full audit trail and CLM record' },
    aiRole: ['Assist', 'Validate'], workflowOwnership: 'Assists workflow', outputResponsibility: 'Shared',
    uxModel: { entryType: 'Web app + workflow builder', interaction: 'Structured (form → approval flow)', speed: 'Days (approval cycle)', control: 'Medium — platform guides, legal team approves' },
    features: {
      documentGeneration: 'Yes', templateLibrary: 'Yes', multiDocumentWorkflows: 'Yes', versioning: 'Yes',
      draftGeneration: 'Yes', contextAwareGeneration: 'Partial', riskDetection: 'Yes', clauseSuggestions: 'Yes', summarization: 'Yes', chatAssistant: 'Partial',
      structuredIntake: 'Yes', chatInterface: 'Partial', asyncWorkflow: 'Yes', realTimeEditing: 'Yes', collaboration: 'Yes', approvalFlow: 'Yes',
      wordDocs: 'Yes', slackEmail: 'Yes', api: 'Yes',
      jurisdictionHandling: 'Partial', complianceWorkflows: 'Yes', auditTrail: 'Yes'
    },
    diff: { better: ['Template library', 'Multi-doc workflows', 'Collaboration', 'Approval flows', 'Versioning', 'CLM completeness'], worse: ['No attorney responsibility', 'Requires internal legal team', 'Slower turnaround', 'Expensive for startups'], different: ['Manages contract lifecycle vs. produces documents', 'Platform for teams vs. service for companies'] },
    strengthSignal: 'Deepest CLM with enterprise workflow automation and broad integrations',
    riskSignal: 'Needs in-house legal team to configure and operate — not a standalone drafting solution',
    positioning: { x: 0.60, y: 0.83 }
  },

  lexion: {
    id: 'lexion', name: 'Lexion', website: 'https://lexion.ai',
    category: 'Legal Automation Platforms', productType: 'SaaS', region: 'US (now part of Docusign — global distribution)',
    scope: 'Contract management & obligation tracking', yc: false, ycBatch: null, stage: 'Acquired (Docusign, 2024)',
    dataQuality: 'full',
    description: 'AI-powered contract management system acquired by Docusign in May 2024 for $165M. Now part of Docusign\'s Intelligent Agreement Management (IAM) platform. Pre-acquisition: data extraction, obligation tracking, renewal alerts, searchable contract repository for in-house legal teams. Not a standalone drafting solution.',
    systemModel: { input: 'Upload contracts or forward via email', ai: 'AI extracts key terms, dates, obligations, and risk clauses from existing contracts', human: 'Legal team validates extracted data and manages records in dashboard', output: 'Searchable contract database with alerts, reports, and obligation tracking' },
    aiRole: ['Assist', 'Validate'], workflowOwnership: 'Assists workflow', outputResponsibility: 'Shared',
    uxModel: { entryType: 'Web app + email forwarding', interaction: 'Async (upload → review dashboard)', speed: 'Fast extraction', control: 'Medium' },
    features: {
      documentGeneration: 'Partial', templateLibrary: 'Yes', multiDocumentWorkflows: 'Yes', versioning: 'Yes',
      draftGeneration: 'No', contextAwareGeneration: 'Partial', riskDetection: 'Yes', clauseSuggestions: 'Partial', summarization: 'Yes', chatAssistant: 'Yes',
      structuredIntake: 'Yes', chatInterface: 'Yes', asyncWorkflow: 'Yes', realTimeEditing: 'No', collaboration: 'Yes', approvalFlow: 'Yes',
      wordDocs: 'Yes', slackEmail: 'Yes', api: 'Yes',
      jurisdictionHandling: 'No', complianceWorkflows: 'Yes', auditTrail: 'Yes'
    },
    diff: { better: ['Contract repository', 'Obligation tracking', 'Renewal alerts', 'Collaboration', 'Data extraction from existing contracts'], worse: ['No draft generation', 'No attorney review', 'No jurisdiction handling'], different: ['Manages existing contracts vs. creates new ones — different job-to-be-done'] },
    strengthSignal: 'Acquired by Docusign for $165M (May 2024) — integrated into IAM platform; Docusign distribution now powers scale',
    riskSignal: 'No longer independent; absorbed into Docusign — no standalone competitive posture; review-only, not drafting',
    positioning: { x: 0.50, y: 0.85 }
  },

  clerky: {
    id: 'clerky', name: 'Clerky', website: 'https://clerky.com',
    category: 'Legal Automation Platforms', productType: 'SaaS', region: 'US',
    scope: 'Startup legal docs (incorporation, equity)', yc: true, ycBatch: null, stage: 'Bootstrapped',
    dataQuality: 'partial',
    description: 'Online legal services for startups. Automates incorporation, SAFE agreements, employee documents, and equity workflows. Template-driven, attorney-reviewed template sets. YC-affiliated; deep startup ecosystem penetration.',
    systemModel: { input: 'Structured web form', ai: 'Template engine fills documents; minimal AI generation', human: 'Attorneys review template sets (not individual docs); user reviews output', output: 'Generated legal document from template' },
    aiRole: ['None'], workflowOwnership: 'User owns workflow', outputResponsibility: 'User responsible',
    uxModel: { entryType: 'Web app', interaction: 'Structured forms', speed: 'Instant (template-based)', control: 'High (user fills forms)' },
    features: {
      documentGeneration: 'Yes', templateLibrary: 'Yes', multiDocumentWorkflows: 'Yes', versioning: 'Partial',
      draftGeneration: 'No', contextAwareGeneration: 'No', riskDetection: 'No', clauseSuggestions: 'No', summarization: 'No', chatAssistant: 'No',
      structuredIntake: 'Yes', chatInterface: 'No', asyncWorkflow: 'Partial', realTimeEditing: 'No', collaboration: 'Partial', approvalFlow: 'Partial',
      wordDocs: 'No', slackEmail: 'No', api: 'No',
      jurisdictionHandling: 'Partial', complianceWorkflows: 'Partial', auditTrail: 'Partial'
    },
    diff: { better: ['Startup ecosystem trust', 'Instant template generation', 'Lower price point'], worse: ['No AI generation', 'No attorney sign-off on each doc', 'Rigid templates only', 'Narrow scope (startup docs only)'], different: ['Template machine vs. AI-generated custom docs', 'Narrow scope vs. broad contract types'] },
    strengthSignal: 'YC-affiliated brand trust; deep startup ecosystem penetration for incorporation',
    riskSignal: 'No AI generation — losing relevance as AI document generation improves',
    positioning: { x: 0.20, y: 0.75 }
  },

  'stripe-atlas': {
    id: 'stripe-atlas', name: 'Stripe Atlas', website: 'https://stripe.com/atlas',
    category: 'Legal Automation Platforms', productType: 'SaaS', region: 'Global — serves founders from 180+ countries incorporating in the US',
    scope: 'Company formation and incorporation', yc: false, ycBatch: null, stage: 'Mature',
    dataQuality: 'partial',
    description: "Stripe's company formation service. Automates Delaware C-Corp or LLC incorporation, EIN setup, founder agreements, and bank account opening. Fully automated, standardized — not a general legal services product.",
    systemModel: { input: 'Web form (company details, founder info)', ai: 'Automated template filling; no AI generation', human: 'Registered agents handle legal filings', output: 'Formed company with standard documents' },
    aiRole: ['None'], workflowOwnership: 'Owns full workflow', outputResponsibility: 'Shared',
    uxModel: { entryType: 'Web app (single flow)', interaction: 'Linear form → submit', speed: 'Days (state filing)', control: 'Low (Stripe drives)' },
    features: {
      documentGeneration: 'Yes', templateLibrary: 'Partial', multiDocumentWorkflows: 'Partial', versioning: 'No',
      draftGeneration: 'No', contextAwareGeneration: 'No', riskDetection: 'No', clauseSuggestions: 'No', summarization: 'No', chatAssistant: 'No',
      structuredIntake: 'Yes', chatInterface: 'No', asyncWorkflow: 'Yes', realTimeEditing: 'No', collaboration: 'No', approvalFlow: 'No',
      wordDocs: 'No', slackEmail: 'No', api: 'No',
      jurisdictionHandling: 'Partial', complianceWorkflows: 'Partial', auditTrail: 'Partial'
    },
    diff: { better: ['Global reach', 'Stripe ecosystem trust', 'Bank account in same flow', 'Brand recognition'], worse: ['No AI generation', 'Extremely narrow scope (incorporation only)', 'No ongoing legal support'], different: ['One-time formation tool vs. ongoing legal service'] },
    strengthSignal: 'Stripe brand trust; global reach; plug-and-play for non-US founders',
    riskSignal: 'Narrow scope — formation only; not a legal services competitor',
    positioning: { x: 0.15, y: 0.70 }
  },

  legalon: {
    id: 'legalon', name: 'LegalOn', website: 'https://legalon.com',
    category: 'Legal Infrastructure', productType: 'SaaS', region: 'Japan · US · UK (7,000+ customers globally)',
    scope: 'AI contract review and risk detection', yc: false, ycBatch: null, stage: 'Series E',
    dataQuality: 'partial',
    description: 'AI contract review platform. Series E: $50M led by Goldman Sachs (July 2025), $200M total raised. SoftBank-backed. OpenAI partnership for advanced legal AI agents. Acquired Fides (October 2025). Originated in Japan, strong US expansion. Risk scoring and issue flagging for in-house legal teams — review-only, not a drafting tool.',
    systemModel: { input: 'Upload contract (PDF, Word)', ai: 'AI analyzes contract for risks, flags issues, scores contract health', human: 'Legal team reviews flagged issues and makes decisions', output: 'Risk report and annotated contract' },
    aiRole: ['Validate', 'Assist'], workflowOwnership: 'Assists workflow', outputResponsibility: 'User responsible',
    uxModel: { entryType: 'Web app', interaction: 'Upload → review report', speed: 'Fast analysis', control: 'High' },
    features: {
      documentGeneration: 'No', templateLibrary: 'No', multiDocumentWorkflows: 'Partial', versioning: 'No',
      draftGeneration: 'No', contextAwareGeneration: 'Partial', riskDetection: 'Yes', clauseSuggestions: 'Partial', summarization: 'Yes', chatAssistant: 'Partial',
      structuredIntake: 'Partial', chatInterface: 'No', asyncWorkflow: 'Yes', realTimeEditing: 'No', collaboration: 'Partial', approvalFlow: 'No',
      wordDocs: 'Yes', slackEmail: 'No', api: 'Partial',
      jurisdictionHandling: 'Partial', complianceWorkflows: 'Partial', auditTrail: 'Partial'
    },
    diff: { better: ['Risk detection depth'], worse: ['No document creation', 'No attorney oversight', 'Review-only tool'], different: ['Analyzes existing contracts vs. creates new ones — different job-to-be-done'] },
    strengthSignal: 'Series E ($50M, Goldman Sachs, 2025); $200M total; OpenAI partnership; SoftBank-backed; deep US + Japan presence',
    riskSignal: 'Review-only — not a drafting solution; different use case from Arcline; acquired Fides (Oct 2025) signals M&A mode',
    positioning: { x: 0.45, y: 0.88 }
  },

  doctrine: {
    id: 'doctrine', name: 'Doctrine', website: 'https://doctrine.fr',
    category: 'Legal Infrastructure', productType: 'SaaS', region: 'EU (FR)',
    scope: 'Legal research database and analytics', yc: false, ycBatch: null, stage: 'Growth investment (Summit Partners + Peugeot Invest, 2023)',
    dataQuality: 'partial',
    description: 'French legal research platform with comprehensive case law, statutes, and legal analytics for EU markets. AI-enhanced search and synthesis. Powers law firms and legal departments across France and broader EU.',
    systemModel: { input: 'Search query or legal question', ai: 'AI searches, synthesizes, and summarizes legal sources', human: 'Lawyer reviews and interprets results', output: 'Legal research summary and source citations' },
    aiRole: ['Assist'], workflowOwnership: 'Assists workflow', outputResponsibility: 'User responsible',
    uxModel: { entryType: 'Web search interface', interaction: 'Search + browse', speed: 'Real-time', control: 'High' },
    features: {
      documentGeneration: 'No', templateLibrary: 'No', multiDocumentWorkflows: 'No', versioning: 'No',
      draftGeneration: 'No', contextAwareGeneration: 'Partial', riskDetection: 'No', clauseSuggestions: 'No', summarization: 'Yes', chatAssistant: 'Partial',
      structuredIntake: 'No', chatInterface: 'Partial', asyncWorkflow: 'No', realTimeEditing: 'No', collaboration: 'Partial', approvalFlow: 'No',
      wordDocs: 'Partial', slackEmail: 'No', api: 'Yes',
      jurisdictionHandling: 'Yes', complianceWorkflows: 'No', auditTrail: 'No'
    },
    diff: { better: ['EU legal database depth', 'Case law access'], worse: ['No document creation', 'Research-only', 'EU-only coverage'], different: ['Legal research tool vs. legal execution service — different stack layer'] },
    strengthSignal: 'Deep EU legal data moat; strong French market position',
    riskSignal: 'Research-only — not a competitor for document creation use case',
    positioning: { x: 0.30, y: 0.92 }
  },

  'thomson-reuters': {
    id: 'thomson-reuters', name: 'Thomson Reuters', website: 'https://thomsonreuters.com',
    category: 'Legal Infrastructure', productType: 'SaaS', region: 'Global',
    scope: 'Legal research, automation, and enterprise workflows', yc: false, ycBatch: null, stage: 'Public',
    dataQuality: 'partial',
    description: 'Global legal information and technology conglomerate. Products: Westlaw (research), Practical Law (practice guidance), Contract Express (document automation), HighQ (legal ops), CoCounsel (AI). Integrating AI across entire portfolio.',
    systemModel: { input: 'Search, upload, or form', ai: 'AI-enhanced search, CoCounsel for Q&A, automated document generation', human: 'Lawyer uses output as starting point', output: 'Research results, guidance documents, or generated forms' },
    aiRole: ['Assist', 'Generate'], workflowOwnership: 'Assists workflow', outputResponsibility: 'User responsible',
    uxModel: { entryType: 'Multiple web apps (Westlaw, Practical Law, etc.)', interaction: 'Search + browse + chat (CoCounsel)', speed: 'Real-time', control: 'High' },
    features: {
      documentGeneration: 'Yes', templateLibrary: 'Yes', multiDocumentWorkflows: 'Yes', versioning: 'Yes',
      draftGeneration: 'Yes', contextAwareGeneration: 'Partial', riskDetection: 'Partial', clauseSuggestions: 'Partial', summarization: 'Yes', chatAssistant: 'Yes',
      structuredIntake: 'Yes', chatInterface: 'Yes', asyncWorkflow: 'Yes', realTimeEditing: 'Yes', collaboration: 'Yes', approvalFlow: 'Yes',
      wordDocs: 'Yes', slackEmail: 'Partial', api: 'Yes',
      jurisdictionHandling: 'Yes', complianceWorkflows: 'Yes', auditTrail: 'Yes'
    },
    diff: { better: ['Brand trust', 'Scope breadth', 'Data depth', 'Enterprise integrations', 'Global coverage'], worse: ['Legacy UX', 'Expensive', 'Not startup-accessible', 'Slow to innovate'], different: ['Incumbent data + workflow platform vs. AI-native legal service', 'Tool for lawyers vs. service for companies'] },
    strengthSignal: 'Unmatched legal data moat; enterprise relationships; CoCounsel AI integration moving fast',
    riskSignal: 'Moving aggressively into AI — could commoditize document generation for existing enterprise clients',
    positioning: { x: 0.50, y: 0.80 }
  },

  lexisnexis: {
    id: 'lexisnexis', name: 'LexisNexis', website: 'https://lexisnexis.com',
    category: 'Legal Infrastructure', productType: 'SaaS', region: 'Global',
    scope: 'Legal research, analytics, and enterprise legal data', yc: false, ycBatch: null, stage: 'Public',
    dataQuality: 'partial',
    description: 'Global legal data and technology platform. Lexis+ for research, Lexis+ AI for generative capabilities, and various analytics tools. Direct competitor to Thomson Reuters. Investing heavily in AI across its research and workflow products.',
    systemModel: { input: 'Search query or document', ai: 'AI-enhanced search, generative Q&A (Lexis+ AI), document analysis', human: 'Lawyer reviews and uses results', output: 'Research results, analysis, or generated content' },
    aiRole: ['Assist', 'Generate'], workflowOwnership: 'Assists workflow', outputResponsibility: 'User responsible',
    uxModel: { entryType: 'Web app (Lexis+)', interaction: 'Search + chat + browse', speed: 'Real-time', control: 'High' },
    features: {
      documentGeneration: 'Partial', templateLibrary: 'Yes', multiDocumentWorkflows: 'Partial', versioning: 'Partial',
      draftGeneration: 'Partial', contextAwareGeneration: 'Partial', riskDetection: 'Partial', clauseSuggestions: 'Partial', summarization: 'Yes', chatAssistant: 'Yes',
      structuredIntake: 'Partial', chatInterface: 'Yes', asyncWorkflow: 'Partial', realTimeEditing: 'Partial', collaboration: 'Partial', approvalFlow: 'Partial',
      wordDocs: 'Yes', slackEmail: 'No', api: 'Yes',
      jurisdictionHandling: 'Yes', complianceWorkflows: 'Yes', auditTrail: 'Partial'
    },
    diff: { better: ['Legal research depth', 'Data breadth', 'Brand trust', 'Global coverage'], worse: ['Legacy UX', 'Not AI-native', 'Expensive', 'Not startup-accessible'], different: ['Research and data platform vs. legal service'] },
    strengthSignal: 'Deep legal data moat; global enterprise relationships; Lexis+ AI accelerating',
    riskSignal: 'Investing heavily in generative AI — could become credible for document workflows at scale',
    positioning: { x: 0.45, y: 0.78 }
  },

  cooley: {
    id: 'cooley', name: 'Cooley', website: 'https://cooley.com',
    category: 'Traditional Firms', productType: 'Service', region: 'US · UK · EU · Asia (19 offices: London, Brussels, Beijing, Hong Kong, Shanghai, Singapore)',
    scope: 'Full-service law firm: tech, startups, VC', yc: false, ycBatch: null, stage: 'Established',
    dataQuality: 'partial',
    description: 'Top-tier Silicon Valley law firm specializing in technology companies, startups, and venture capital. Competes on brand, relationships, and deep expertise. Internally adopting AI tools (Cooley GObot and others) to improve efficiency while maintaining human-led, bespoke service model.',
    systemModel: { input: 'Client relationship / matter intake', ai: 'Internal AI tools for research and drafting acceleration', human: 'Partners and associates handle all client work', output: 'Attorney-advised legal work product with full accountability' },
    aiRole: ['Assist'], workflowOwnership: 'Owns full workflow', outputResponsibility: 'Company responsible',
    uxModel: { entryType: 'Relationship (email, phone, in-person)', interaction: 'Bespoke, relationship-driven', speed: 'Variable (days to weeks)', control: 'Low (firm leads)' },
    features: {
      documentGeneration: 'Yes', templateLibrary: 'Yes', multiDocumentWorkflows: 'Yes', versioning: 'Partial',
      draftGeneration: 'Partial', contextAwareGeneration: 'Partial', riskDetection: 'Yes', clauseSuggestions: 'Yes', summarization: 'Yes', chatAssistant: 'No',
      structuredIntake: 'Partial', chatInterface: 'No', asyncWorkflow: 'Partial', realTimeEditing: 'Partial', collaboration: 'Yes', approvalFlow: 'Yes',
      wordDocs: 'Yes', slackEmail: 'Yes', api: 'No',
      jurisdictionHandling: 'Yes', complianceWorkflows: 'Yes', auditTrail: 'Yes'
    },
    diff: { better: ['Brand and trust', 'Complex matter handling', 'Full legal accountability', 'Partner relationships', 'Attorney-client privilege'], worse: ['Expensive (hourly)', 'Slow for routine work', 'Not AI-native UX', 'Not accessible for routine contracts'], different: ['Bespoke service for complex matters vs. AI-automated service for routine contracts'] },
    strengthSignal: 'Unmatched brand trust and partner relationships for complex, high-stakes legal matters',
    riskSignal: 'Hourly billing and slow delivery make them vulnerable to AI operators for routine work — exactly Arcline\'s target',
    positioning: { x: 0.15, y: 0.18 }
  },

  gunderson: {
    id: 'gunderson', name: 'Gunderson Dettmer', website: 'https://gunder.com',
    category: 'Traditional Firms', productType: 'Service', region: 'US · Asia · LATAM (offices: Beijing, Singapore, São Paulo)',
    scope: 'VC and startup-focused law firm', yc: false, ycBatch: null, stage: 'Established',
    dataQuality: 'partial',
    description: 'Elite law firm exclusively focused on venture capital and technology companies. Known for startup-friendly approach and deep VC network. Adopting AI for efficiency but fundamentally human-led and relationship-driven.',
    systemModel: { input: 'Client relationship / matter intake', ai: 'AI tools for research and drafting speed', human: 'Partners and associates handle all work', output: 'Attorney-advised legal work with full accountability' },
    aiRole: ['Assist'], workflowOwnership: 'Owns full workflow', outputResponsibility: 'Company responsible',
    uxModel: { entryType: 'Relationship-driven', interaction: 'Bespoke', speed: 'Variable', control: 'Low' },
    features: {
      documentGeneration: 'Yes', templateLibrary: 'Yes', multiDocumentWorkflows: 'Yes', versioning: 'Partial',
      draftGeneration: 'Partial', contextAwareGeneration: 'Partial', riskDetection: 'Yes', clauseSuggestions: 'Yes', summarization: 'Yes', chatAssistant: 'No',
      structuredIntake: 'Partial', chatInterface: 'No', asyncWorkflow: 'Partial', realTimeEditing: 'Partial', collaboration: 'Yes', approvalFlow: 'Yes',
      wordDocs: 'Yes', slackEmail: 'Yes', api: 'No',
      jurisdictionHandling: 'Yes', complianceWorkflows: 'Yes', auditTrail: 'Yes'
    },
    diff: { better: ['Deep VC network', 'Startup expertise', 'Brand', 'Attorney-client privilege'], worse: ['Hourly billing', 'Slow for routine work', 'Expensive'], different: ['Relationship-based legal counsel for complex matters vs. product-based legal execution for routine work'] },
    strengthSignal: 'Dominant in VC transactions; unmatched network in startup ecosystem',
    riskSignal: 'Routine contract work being disrupted by AI operators; retainer model under long-term pressure',
    positioning: { x: 0.12, y: 0.15 }
  },

  goodwin: {
    id: 'goodwin', name: 'Goodwin', website: 'https://goodwinlaw.com',
    category: 'Traditional Firms', productType: 'Service', region: 'US · EU · Asia (17 offices: London, Paris, Munich, Luxembourg, Hong Kong, Singapore)',
    scope: 'PE, VC, and tech-focused law firm', yc: false, ycBatch: null, stage: 'Established',
    dataQuality: 'partial',
    description: 'Major law firm with strong technology, private equity, and venture capital practices. Global footprint. Deploying AI tools (Copilot, Legora, Draftwise, Claude) internally for efficiency. Competes with Cooley and Gunderson for high-value startup and PE work.',
    systemModel: { input: 'Client relationship / matter intake', ai: 'AI tools (Copilot, Legora, Draftwise, Claude) deployed internally for research and drafting acceleration', human: 'Partners and associates handle all client work', output: 'Attorney-advised legal work with full accountability' },
    aiRole: ['Assist'], workflowOwnership: 'Owns full workflow', outputResponsibility: 'Company responsible',
    uxModel: { entryType: 'Relationship-driven', interaction: 'Bespoke', speed: 'Variable', control: 'Low' },
    features: {
      documentGeneration: 'Yes', templateLibrary: 'Yes', multiDocumentWorkflows: 'Yes', versioning: 'Partial',
      draftGeneration: 'Partial', contextAwareGeneration: 'Partial', riskDetection: 'Yes', clauseSuggestions: 'Yes', summarization: 'Yes', chatAssistant: 'No',
      structuredIntake: 'Partial', chatInterface: 'No', asyncWorkflow: 'Partial', realTimeEditing: 'Partial', collaboration: 'Yes', approvalFlow: 'Yes',
      wordDocs: 'Yes', slackEmail: 'Yes', api: 'No',
      jurisdictionHandling: 'Yes', complianceWorkflows: 'Yes', auditTrail: 'Yes'
    },
    diff: { better: ['Brand', 'Complex matter handling', 'Global reach', 'PE/VC expertise', 'Attorney-client privilege'], worse: ['Hourly billing', 'Slow', 'Expensive', 'Not AI-native UX'], different: ['Complex bespoke legal services vs. AI-automated routine contracts'] },
    strengthSignal: 'Strong PE/VC brand; global platform; Harvey AI adoption signals efficiency intent',
    riskSignal: 'Routine contract work at risk from AI operators; hourly billing model under long-term pressure',
    positioning: { x: 0.13, y: 0.17 }
  }
};

const FEATURE_GROUPS = [
  { id: 'core', label: 'Core', features: [
    { id: 'documentGeneration', label: 'Document generation' },
    { id: 'templateLibrary', label: 'Template library' },
    { id: 'multiDocumentWorkflows', label: 'Multi-document workflows' },
    { id: 'versioning', label: 'Versioning' }
  ]},
  { id: 'ai', label: 'AI', features: [
    { id: 'draftGeneration', label: 'Draft generation' },
    { id: 'contextAwareGeneration', label: 'Context-aware generation' },
    { id: 'riskDetection', label: 'Risk detection' },
    { id: 'clauseSuggestions', label: 'Clause suggestions' },
    { id: 'summarization', label: 'Summarization' },
    { id: 'chatAssistant', label: 'Chat assistant' }
  ]},
  { id: 'ux', label: 'UX / Workflow', features: [
    { id: 'structuredIntake', label: 'Structured intake' },
    { id: 'chatInterface', label: 'Chat interface' },
    { id: 'asyncWorkflow', label: 'Async workflow' },
    { id: 'realTimeEditing', label: 'Real-time editing' },
    { id: 'collaboration', label: 'Collaboration' },
    { id: 'approvalFlow', label: 'Approval flow' }
  ]},
  { id: 'integrations', label: 'Integrations', features: [
    { id: 'wordDocs', label: 'Word / Docs' },
    { id: 'slackEmail', label: 'Slack / Email' },
    { id: 'api', label: 'API' }
  ]},
  { id: 'legal', label: 'Legal / Domain', features: [
    { id: 'jurisdictionHandling', label: 'Jurisdiction handling' },
    { id: 'complianceWorkflows', label: 'Compliance workflows' },
    { id: 'auditTrail', label: 'Audit trail' }
  ]}
];
