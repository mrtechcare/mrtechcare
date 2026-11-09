export const servicesData = [
  // ==========================================
  // 1. COMPUTER HARDWARE & REPAIR
  // ==========================================
  {
    id: "windows-installation",
    category: "hardware",
    icon: "Monitor",
    mode: "doorstep_and_remote",
    startingPrice: 499,
    badge: "Popular",
    en: {
      title: "Windows Installation, Formatting & Troubleshooting",
      shortDesc: "Clean OS installation, legitimate setup, data backup preservation, and boot troubleshooting.",
      features: [
        "Windows 10 / 11 clean install & upgrade",
        "Safe formatting with user data preservation",
        "Boot loop, black screen & BSOD crash fixing",
        "Essential utility and runtime configuration"
      ]
    },
    hi: {
      title: "विंडोज इंस्टालेशन, फॉर्मेटिंग और समस्या समाधान",
      shortDesc: "स्वच्छ विंडोज इंस्टालेशन, वैध सेटअप, डेटा बैकअप सुरक्षा और बूट संबंधित समस्याओं का समाधान।",
      features: [
        "विंडोज 10 व 11 क्लीन इंस्टालेशन व अपग्रेड",
        "डेटा सुरक्षित रखते हुए सुरक्षित फॉर्मेटिंग",
        "ब्लू स्क्रीन (BSOD), ब्लैक स्क्रीन व क्रैश सुधार",
        "ज़रूरी यूटिलिटी सॉफ्टवेयर और रनटाइम सेटअप"
      ]
    }
  },
  {
    id: "software-installation",
    category: "hardware",
    icon: "Cpu",
    mode: "remote_and_doorstep",
    startingPrice: 249,
    badge: "Remote Available",
    en: {
      title: "Software Installation & Activation Troubleshooting",
      shortDesc: "Assistance with legitimate application installation, official licensing setup, and conflict resolution.",
      features: [
        "Office tools, PDF utilities & browsers setup",
        "Official license activation troubleshooting",
        "Software crash & compatibility resolving",
        "Background bloatware & startup cleanup"
      ]
    },
    hi: {
      title: "सॉफ्टवेयर इंस्टालेशन और एक्टिवेशन समस्या निवारण",
      shortDesc: "आवश्यक आधिकारिक सॉफ्टवेयर इंस्टालेशन, वैध लाइसेंसिंग सहायता और सॉफ्टवेयर टकराव समाधान।",
      features: [
        "ऑफिस टूल्स, पीडीएफ रीडर और ब्राउज़र सेटअप",
        "आधिकारिक लाइसेंस एक्टिवेशन समस्या समाधान",
        "सॉफ्टवेयर क्रैश और कॉम्पैटिबिलिटी सुधार",
        "अनावश्यक बैकग्राउंड ऐप्स व स्टार्टअप क्लीनअप"
      ]
    }
  },
  {
    id: "driver-bios-boot",
    category: "hardware",
    icon: "Terminal",
    mode: "doorstep_and_remote",
    startingPrice: 299,
    badge: "Essential",
    en: {
      title: "Driver, BIOS and Boot Issue Resolution",
      shortDesc: "Resolve missing hardware drivers, update system BIOS safely, and repair UEFI/GPT boot partitions.",
      features: [
        "Audio, Display (GPU), Wi-Fi & LAN driver fixes",
        "Safe motherboard BIOS/UEFI firmware updates",
        "No Bootable Device & MBR/GPT partition repair",
        "Hardware unrecognized & device manager errors"
      ]
    },
    hi: {
      title: "ड्राइवर, BIOS एवं बूट समस्या समाधान",
      shortDesc: "मिसिंग हार्डवेयर ड्राइवर इंस्टालेशन, सुरक्षित BIOS अपडेट और UEFI/GPT बूट पार्टीशन सुधार।",
      features: [
        "ऑडियो, ग्राफिक्स (GPU), वाई-फाई व लैन ड्राइवर",
        "मदरबोर्ड BIOS/UEFI फर्मवेयर सुरक्षित अपडेट",
        "No Bootable Device व पार्टीशन एरर सुधार",
        "डिवाइस मैनेजर में हार्डवेयर नॉट डिटेक्टेड सुधार"
      ]
    }
  },
  {
    id: "laptop-hardware-repair",
    category: "hardware",
    icon: "Laptop",
    mode: "doorstep",
    startingPrice: 399,
    badge: "Doorstep Delhi NCR",
    en: {
      title: "Laptop Hardware Diagnosis & Repair",
      shortDesc: "In-depth physical inspection, thermal servicing, hinge repair, keyboard and screen replacements.",
      features: [
        "Deep fan cleaning & premium thermal paste repasting",
        "Laptop keyboard, trackpad & hinge repair",
        "Cracked screen, display flickering & cable replacement",
        "Charging port, battery & power issue diagnosis"
      ]
    },
    hi: {
      title: "लैपटॉप हार्डवेयर डायग्नोसिस और रिपेयर",
      shortDesc: "सटीक भौतिक जांच, थर्मल हीटिंग सर्विस, हिंज मरम्मत, कीबोर्ड और स्क्रीन रिप्लेसमेंट।",
      features: [
        "कूलिंग फैन क्लीनिंग और थर्मल पेस्ट सर्विसिंग",
        "लैपटॉप कीबोर्ड, टचपैड एवं हिंज (Hinge) मरम्मत",
        "टूटी स्क्रीन, फ्लिकरिंग डिस्प्ले व केबल बदलाव",
        "चार्जिंग पोर्ट, बैटरी व नो-पावर समस्या जांच"
      ]
    }
  },
  {
    id: "desktop-assembly-upgrades",
    category: "hardware",
    icon: "HardDrive",
    mode: "doorstep",
    startingPrice: 399,
    badge: "Speed Boost",
    en: {
      title: "Desktop Assembly, RAM and SSD Upgrades",
      shortDesc: "Transform sluggish systems with high-speed NVMe/SATA SSDs, RAM expansion, and custom PC assembly.",
      features: [
        "High-speed NVMe / SATA SSD installation & OS clone",
        "RAM memory expansion for multitasking",
        "Custom desktop computer assembly & cable management",
        "Power supply (SMPS) testing & GPU installation"
      ]
    },
    hi: {
      title: "डेस्कटॉप असेंबली, रैम (RAM) व एसएसडी (SSD) अपग्रेड",
      shortDesc: "धीमे कंप्यूटर को बनाएं सुपरफास्ट NVMe/SATA SSD, रैम अपग्रेड और कस्टम पीसी असेंबली द्वारा।",
      features: [
        "हाई-स्पीड NVMe / SATA SSD लगाना व OS क्लोनिंग",
        "मल्टीटास्किंग व स्पीड के लिए रैम (RAM) अपग्रेड",
        "नया डेस्कटॉप पीसी असेंबली व केबल मैनेजमेंट",
        "एसएमपीएस (SMPS) पावर सप्लाई टेस्टिंग व ग्राफिक्स कार्ड"
      ]
    }
  },
  {
    id: "wifi-network-printer",
    category: "hardware",
    icon: "Wifi",
    mode: "doorstep_and_remote",
    startingPrice: 249,
    badge: "Quick Resolution",
    en: {
      title: "Wi-Fi, Network and Printer Configuration",
      shortDesc: "Resolve Wi-Fi disconnects, router setup, LAN sharing, network printers, and scanner installation.",
      features: [
        "Wi-Fi router configuration & security setup",
        "Network printer, wireless scanner & driver installation",
        "Frequent Wi-Fi disconnections & IP conflict resolution",
        "Home office LAN file sharing & network folder setup"
      ]
    },
    hi: {
      title: "वाई-फाई, नेटवर्क और प्रिंटर कॉन्फ़िगरेशन",
      shortDesc: "वाई-फाई डिस्कनेक्ट समस्या, राउटर सेटअप, लैन शेयरिंग, वायरलेस प्रिंटर और स्कैनर इंस्टालेशन।",
      features: [
        "वाई-फाई राउटर इंस्टालेशन और सुरक्षा सेटिंग्स",
        "नेटवर्क प्रिंटर, वायरलेस स्कैनर व ड्राइवर सेटअप",
        "इंटरनेट डिस्कनेक्ट और IP कन्फ्लिक्ट समस्या सुधार",
        "होम ऑफिस लोकल लैन फाइल शेयरिंग सेटअप"
      ]
    }
  },
  {
    id: "doorstep-computer-support",
    category: "hardware",
    icon: "Home",
    mode: "doorstep",
    startingPrice: 399,
    badge: "Delhi NCR Doorstep",
    en: {
      title: "Doorstep Computer and Laptop Support",
      shortDesc: "Technician visit at your residence or workspace in Delhi, Noida, Ghaziabad, and Greater Noida.",
      features: [
        "Direct on-site diagnosis at home or office",
        "No need to carry heavy desktops or fragile laptops",
        "Hardware inspection, cleaning & cable organization",
        "Transparent upfront quoting before service begins"
      ]
    },
    hi: {
      title: "डोरस्टेप कंप्यूटर और लैपटॉप सपोर्ट",
      shortDesc: "दिल्ली, नोएडा, गाजियाबाद और ग्रेटर नोएडा में आपके घर या कार्यस्थल पर तकनीशियन विजिट।",
      features: [
        "घर या दफ्तर पर प्रत्यक्ष आमने-सामने डायग्नोसिस",
        "भारी डेस्कटॉप या नाजुक लैपटॉप को कहीं ले जाने का झंझट नहीं",
        "हार्डवेयर निरीक्षण, सफाई एवं सुव्यवस्थित केबलिंग",
        "काम शुरू होने से पहले पारदर्शी और स्पष्ट बातचीत"
      ]
    }
  },
  {
    id: "remote-technical-support",
    category: "hardware",
    icon: "Headphones",
    mode: "remote",
    startingPrice: 199,
    badge: "Pan-India",
    en: {
      title: "Remote Technical Support via AnyDesk & TeamViewer",
      shortDesc: "Fast online troubleshooting anywhere in India. Secure, encrypted screen sharing under your direct oversight.",
      features: [
        "No passwords or OTPs ever requested",
        "Real-time malware removal & performance optimization",
        "Application errors, registry bugs & driver conflicts",
        "You maintain complete visual control to disconnect anytime"
      ]
    },
    hi: {
      title: "AnyDesk और TeamViewer द्वारा ऑनलाइन रिमोट सपोर्ट",
      shortDesc: "पूरे भारत में कहीं से भी त्वरित ऑनलाइन समाधान। आपकी सीधी निगरानी में सुरक्षित व एन्क्रिप्टेड स्क्रीन शेयरिंग।",
      features: [
        "कोई पासवर्ड या ओटीपी कभी नहीं मांगा जाता",
        "मैलवेयर सफाई और सिस्टम परफॉर्मेंस स्पीड-अप",
        "सॉफ्टवेयर एरर, रजिस्ट्री गड़बड़ी व ड्राइवर सुधार",
        "स्क्रीन पर आपका 100% नियंत्रण, कभी भी डिस्कनेक्ट करें"
      ]
    }
  },

  // ==========================================
  // 2. MOBILE, FIRMWARE & OS SOLUTIONS
  // ==========================================
  {
    id: "android-software",
    category: "mobile",
    icon: "Smartphone",
    mode: "remote_and_doorstep",
    startingPrice: 499,
    badge: "Updated Pricing",
    en: {
      title: "Android Software Troubleshooting & Recovery",
      shortDesc: "System crash troubleshooting, bootloop recovery, corrupted OS repairs, and official software restoration.",
      features: [
        "Stuck on logo bootloop diagnostics & recovery",
        "Unresponsive app & system UI freeze resolution",
        "Safe backup guidance & official recovery restore",
        "Legitimate operating system integrity checks"
      ]
    },
    hi: {
      title: "एंड्रॉइड सॉफ्टवेयर ट्रबलशूटिंग एवं रिकवरी",
      shortDesc: "सिस्टम क्रैश समाधान, लोगो पर अटके फोन (बूटलूप) की रिकवरी और आधिकारिक ओएस रीस्टोरेशन।",
      features: [
        "लोगो पर अटके फोन का डायग्नोसिस व बूटलूप रिकवरी",
        "सिस्टम हैंग, फ्रीज और क्रैश हो रहे ऐप्स का समाधान",
        "सुरक्षित बैकअप मार्गदर्शन व आधिकारिक रिकवरी रीस्टोर",
        "ऑपरेटिंग सिस्टम इंटीग्रिटी व परफॉर्मेंस सुधार"
      ]
    }
  },
  {
    id: "iphone-software",
    category: "mobile",
    icon: "Smartphone",
    mode: "remote_and_doorstep",
    startingPrice: 699,
    badge: "Updated Pricing",
    en: {
      title: "Apple iPhone & iPad Software Troubleshooting",
      shortDesc: "Apple logo loop fixes, recovery mode resolution, iTunes/Finder restore errors, and iOS update repairs.",
      features: [
        "Stuck on Apple logo & recovery mode restoration",
        "iTunes / Apple Devices restore error codes fixing",
        "iOS update failure diagnosis & clean reinstallation",
        "iCloud sync guidance & local data backup assistance"
      ]
    },
    hi: {
      title: "एप्पल आईफोन व आईपैड सॉफ्टवेयर समाधान",
      shortDesc: "एप्पल लोगो पर रुकने, रिकवरी मोड, आईट्यून्स एरर कोड और आईओएस अपडेट समस्याओं का समाधान।",
      features: [
        "एप्पल लोगो व रिकवरी मोड में अटके डिवाइस का सुधार",
        "iTunes / Apple Devices रिस्टोर एरर कोड का समाधान",
        "iOS अपडेट विफलता सुधार व सुरक्षित क्लीन रीस्टोर",
        "आईक्लाउड सिंक मार्गदर्शन व लोकल बैकअप सहायता"
      ]
    }
  },
  {
    id: "firmware-custom-rom",
    category: "mobile",
    icon: "Terminal",
    mode: "remote_and_doorstep",
    startingPrice: 599,
    badge: "Specialized Service",
    en: {
      title: "Firmware Flashing & Custom ROM Installation",
      shortDesc: "Official stock firmware reflashing, brick recovery, and verified custom ROM installation for supported devices.",
      features: [
        "Official manufacturer stock firmware flashing (Odin, Fastboot, SP Flash)",
        "Hard-bricked / soft-bricked device restoration",
        "Verified custom ROM installation (LineageOS, Pixel Experience on supported models)",
        "Pre-flash partition backup & bootloader integrity check"
      ]
    },
    hi: {
      title: "फर्मवेयर फ्लैशिंग एवं कस्टम रोम इंस्टालेशन",
      shortDesc: "आधिकारिक स्टॉक फर्मवेयर री-फ्लैशिंग, ब्रिक फोन रिकवरी और सपोर्टेड डिवाइसों के लिए कस्टम रोम इंस्टालेशन।",
      features: [
        "आधिकारिक निर्माता स्टॉक फर्मवेयर फ्लैशिंग (Odin, Fastboot, SP Flash)",
        "सॉफ्ट-ब्रिक और बूट फेल डिवाइस की संपूर्ण रिकवरी",
        "सपोर्टेड मॉडल्स पर वेरिफाइड कस्टम रोम इंस्टालेशन (LineageOS आदि)",
        "फ्लैश से पूर्व पार्टीशन बैकअप व बूटलोडर सुरक्षा जांच"
      ]
    }
  },
  {
    id: "mobile-hardware-repair",
    category: "mobile",
    icon: "Wrench",
    mode: "doorstep",
    startingPrice: 299,
    badge: "On-Site Physical",
    en: {
      title: "Mobile Hardware Diagnosis & Screen Assessment",
      shortDesc: "Physical mobile diagnostics, battery replacement, display assessment, charging port and speaker fixes.",
      features: [
        "Damaged display screen & touch digitizer assessment",
        "Draining battery replacement & power checks",
        "Faulty charging jack, microphone & speaker repair",
        "Physical button replacement & loose connection checks"
      ]
    },
    hi: {
      title: "मोबाइल हार्डवेयर डायग्नोसिस व स्क्रीन असेसमेंट",
      shortDesc: "स्मार्टफोन हार्डवेयर जांच, बैटरी रिप्लेसमेंट, स्क्रीन असेसमेंट, चार्जिंग पोर्ट व स्पीकर रिपेयर।",
      features: [
        "टूटी स्क्रीन व टचपैड का सटीक डायग्नोसिस",
        "कमजोर व फूल चुकी बैटरी का सुरक्षित रिप्लेसमेंट",
        "खराब चार्जिंग जैक, माइक व लाउडस्पीकर मरम्मत",
        "पावर/वॉल्यूम बटन और इंटरनल कनेक्शन जांच"
      ]
    }
  },

  // ==========================================
  // 3. WEB, APP & CLOUD DEVELOPMENT
  // ==========================================
  {
    id: "web-development",
    category: "digital",
    icon: "Globe",
    mode: "online",
    startingPrice: 4999,
    badge: "Modern Stack",
    en: {
      title: "Modern Web Development",
      shortDesc: "High-performance business websites, portfolio portals, and landing pages built with React, Vite, and Next.js.",
      features: [
        "Mobile-first responsive design & lightning fast speeds",
        "SEO-optimized architecture & semantic markup",
        "Contact forms, WhatsApp integrations & Google Maps",
        "Free SSL setup, CDN caching & domain configuration"
      ]
    },
    hi: {
      title: "आधुनिक वेब डेवलपमेंट (वेबसाइट निर्माण)",
      shortDesc: "हाई-परफॉर्मेंस बिजनेस वेबसाइट्स, लैंडिंग पेज और पोर्टल्स—React, Vite और आधुनिक तकनीकों द्वारा निर्मित।",
      features: [
        "मोबाइल-फ्रेंडली रिस्पॉन्सिव डिजाइन व सुपरफास्ट स्पीड",
        "एसईओ (SEO) अनुकूल संरचना और मेटा टैग्स",
        "व्हाट्सएप बुकिंग, कॉन्टैक्ट फॉर्म्स व मैप एकीकरण",
        "फ्री SSL सर्टिफिकेट, CDN स्पीड व डोमेन सेटअप"
      ]
    }
  },
  {
    id: "app-development",
    category: "digital",
    icon: "Smartphone",
    mode: "online",
    startingPrice: 9999,
    badge: "Cross-Platform",
    en: {
      title: "Mobile App Development",
      shortDesc: "Cross-platform mobile applications for iOS and Android tailored for businesses, service booking, and e-commerce.",
      features: [
        "React Native & Flutter native-grade performance",
        "Push notifications, authentication & offline support",
        "Seamless API integration & database synchronization",
        "Play Store & App Store deployment assistance"
      ]
    },
    hi: {
      title: "मोबाइल ऐप डेवलपमेंट (iOS व Android)",
      shortDesc: "एंड्रॉइड और आईओएस दोनों के लिए सुरक्षित व उपयोगी क्रॉस-प्लेटफॉर्म मोबाइल ऐप्स।",
      features: [
        "React Native / Flutter द्वारा स्मूथ परफॉर्मेंस",
        "पुश नोटिफिकेशन, सुरक्षित लॉगिन व डेटा सिंक",
        "बिजनेस प्रोसेस, बुकिंग व भुगतान गेटवे एकीकरण",
        "गूगल प्ले स्टोर व एप्पल ऐप स्टोर पब्लिशिंग सहायता"
      ]
    }
  },
  {
    id: "saas-applications",
    category: "digital",
    icon: "Layers",
    mode: "online",
    startingPrice: 14999,
    badge: "Cloud Scalable",
    en: {
      title: "SaaS Application Engineering",
      shortDesc: "Multi-tenant cloud Software-as-a-Service platforms built for high scalability, recurring billing, and security.",
      features: [
        "Multi-tenant architecture with tenant data isolation",
        "Stripe / Razorpay subscription & invoicing integration",
        "Role-based access control (RBAC) & user management",
        "Cloud hosting setup on Cloudflare, AWS, or Vercel"
      ]
    },
    hi: {
      title: "SaaS क्लाउड सॉफ्टवेयर इंजीनियरिंग",
      shortDesc: "स्केलेबल मल्टी-टेनेंट क्लाउड प्लेटफॉर्म्स, सब्सक्रिप्शन बिलिंग और ऑटोमेटेड ऑपरेशंस।",
      features: [
        "डेटा सुरक्षा के साथ मल्टी-टेनेंट क्लाउड आर्किटेक्चर",
        "सब्सक्रिप्शन बिलिंग व इनवॉइसिंग ऑटोमेशन",
        "एडमिन व यूजर रोल-बेस्ड सुरक्षा अनुमतियां",
        "क्लाउड सर्वर सेटअप (Cloudflare / AWS / Vercel)"
      ]
    }
  },
  {
    id: "web-apps",
    category: "digital",
    icon: "Code",
    mode: "online",
    startingPrice: 7999,
    badge: "Enterprise Grade",
    en: {
      title: "Custom Web Applications & Portals",
      shortDesc: "Tailored web applications, internal staff portals, inventory managers, and dynamic client dashboards.",
      features: [
        "Custom database schema design (PostgreSQL, SQLite, D1)",
        "Secure RESTful & GraphQL backend APIs",
        "Real-time data visualization & reporting tables",
        "Enterprise-level authentication & session security"
      ]
    },
    hi: {
      title: "कस्टम वेब ऐप्स एवं क्लाइंट पोर्टल्स",
      shortDesc: "आपके व्यवसाय के अनुकूल इंटरनल पोर्टल्स, इन्वेंट्री ट्रैकर और इंटरएक्टिव वेब डैशबोर्ड्स।",
      features: [
        "सटीक डेटाबेस डिजाइन (PostgreSQL, SQLite, D1)",
        "सुरक्षित RESTful बैकएंड एपीआई व एंडपॉइंट्स",
        "रियल-टाइम रिपोर्टिंग, टेबल्स व डेटा विजुअलाइजेशन",
        "सुरक्षित सेशन मैनेजमेंट और यूजर ऑथराइजेशन"
      ]
    }
  },

  // ==========================================
  // 4. BUSINESS AUTOMATION & AI
  // ==========================================
  {
    id: "business-automation",
    category: "automation",
    icon: "Sliders",
    mode: "online",
    startingPrice: 3499,
    badge: "Time Saver",
    en: {
      title: "Business Workflow Automation",
      shortDesc: "Eliminate repetitive manual tasks with automated pipelines using Zapier, Make, n8n, webhooks, and custom APIs.",
      features: [
        "Lead capture to CRM & WhatsApp alert pipelines",
        "Automated PDF invoice generation & email delivery",
        "Google Sheets, Excel & Cloud DB synchronizers",
        "Error handling, alert notifications & audit logs"
      ]
    },
    hi: {
      title: "बिजनेस वर्कफ़्लो ऑटोमेशन",
      shortDesc: "दैनिक दोहराए जाने वाले कार्यों को स्वचालित बनाएं—Zapier, Make, n8n और कस्टम वेबहुक्स द्वारा।",
      features: [
        "नई लीड आने पर तुरंत व्हाट्सएप व सीआरएम अलर्ट",
        "ऑटोमेटेड इनवॉइस निर्माण और ईमेल डिस्पैच",
        "गूगल शीट्स, एक्सेल व डेटाबेस ऑटो सिंक",
        "एरर हैंडलिंग और कार्यप्रणाली लॉग्स मॉनिटरिंग"
      ]
    }
  },
  {
    id: "voice-automation",
    category: "automation",
    icon: "PhoneCall",
    mode: "online",
    startingPrice: 4999,
    badge: "Smart Telephony",
    en: {
      title: "Voice Automation & Smart IVR",
      shortDesc: "Intelligent telephony workflows, automated dispatch calls, appointment reminders, and programmable voice systems.",
      features: [
        "Custom IVR menus & automated department routing",
        "Automated appointment confirmation & reminder calls",
        "Twilio / Exotel telephony integration & call logging",
        "Speech-to-text transcription & call analytics"
      ]
    },
    hi: {
      title: "वॉयस ऑटोमेशन एवं स्मार्ट आईवीआर (IVR)",
      shortDesc: "कॉल सेंटर व टेलीफोनी ऑटोमेशन, कस्टमर रिमाइंडर कॉल्स और स्मार्ट वॉयस मेनू सिस्टम।",
      features: [
        "कस्टम आईवीआर (IVR) मेनू व कॉल ट्रांसफर ऑटोमेशन",
        "अपॉइंटमेंट रिमाइंडर व सर्विस अपडेट्स ऑटोमेटेड कॉल्स",
        "टेलीफोनी गेटवे एकीकरण (Twilio / Exotel)",
        "कॉल रिकॉर्डिंग, ट्रांसक्रिप्शन व एनालिटिक्स"
      ]
    }
  },
  {
    id: "ai-agents",
    category: "automation",
    icon: "Bot",
    mode: "online",
    startingPrice: 5999,
    badge: "Next-Gen AI",
    en: {
      title: "AI Agents & Custom Support Bots",
      shortDesc: "Autonomous AI assistants trained on your proprietary business knowledgebase for customer support and lead qualification.",
      features: [
        "WhatsApp Business & web chat automated AI assistants",
        "RAG (Retrieval Augmented Generation) on company docs",
        "Intent recognition, smart triage & human handoff",
        "Continuous fine-tuning & prompt security guards"
      ]
    },
    hi: {
      title: "एआई एजेंट्स व कस्टम सपोर्ट बॉट्स",
      shortDesc: "आपकी कंपनी के दस्तावेजों पर ट्रेंड स्वायत्त एआई बॉट्स, जो ग्राहकों को 24/7 सटीक जवाब देते हैं।",
      features: [
        "व्हाट्सएप व वेबसाइट के लिए ऑटोमेटेड एआई बॉट",
        "कंपनी के नियमों व कैटलॉग पर आधारित सटीक उत्तर",
        "स्मार्ट कस्टमर क्वालिफिकेशन व टीम को हैंडऑफ",
        "सुरक्षित और नियंत्रित एआई प्रॉम्प्ट गार्ड्स"
      ]
    }
  },
  {
    id: "crm-portals",
    category: "automation",
    icon: "Database",
    mode: "online",
    startingPrice: 6999,
    badge: "Sales & Operations",
    en: {
      title: "Custom CRM Portals",
      shortDesc: "Centralized client management platforms tracking leads, sales pipelines, service dispatch tickets, and communication history.",
      features: [
        "Kanban visual pipelines for lead & ticket tracking",
        "One-click customer WhatsApp / email dispatch",
        "Team role permissions & activity audit trails",
        "Custom exportable reports & operational metrics"
      ]
    },
    hi: {
      title: "कस्टम सीआरएम (CRM) पोर्टल्स",
      shortDesc: "कस्टमर रिलेशनशिप मैनेजमेंट सिस्टम—लीड्स ट्रैकिंग, सर्विस टिकट्स और टीम को-ऑर्डिनेशन।",
      features: [
        "लीड्स व टिकट्स के लिए विजुअल कानबान पाइपलाइन",
        "एक क्लिक में कस्टमर को व्हाट्सएप/ईमेल संदेश",
        "टीम मेंबर्स के लिए अलग-अलग एक्सेस परमिशन",
        "विस्तृत रिपोर्ट्स व डेटा एक्सपोर्ट टूल्स"
      ]
    }
  },
  {
    id: "custom-business-software",
    category: "automation",
    icon: "Briefcase",
    mode: "online",
    startingPrice: 8999,
    badge: "Tailored Fit",
    en: {
      title: "Custom Business & Operational Software",
      shortDesc: "Purpose-built operational software solving specific business bottlenecks, inventory workflows, and billing management.",
      features: [
        "GST-compliant billing & barcode inventory management",
        "Supplier, purchase order & stock movement tracking",
        "Secure cloud or on-premise local server deployment",
        "Complete source ownership and dedicated documentation"
      ]
    },
    hi: {
      title: "कस्टम बिजनेस व ऑपरेशनल सॉफ्टवेयर",
      shortDesc: "आपके विशेष बिजनेस मॉडल के अनुसार बिलिंग, इन्वेंट्री ट्रैकिंग और ऑपरेशनल मैनेजमेंट सॉफ्टवेयर।",
      features: [
        "जीएसटी कंप्लायंट बिलिंग व बारकोड इन्वेंट्री ट्रैकिंग",
        "सप्लायर ऑर्डर्स, स्टॉक अलर्ट्स व अकाउंट्स लेजर",
        "क्लाउड सर्वर या लोकल ऑफिस पीसी पर सुरक्षित सेटअप",
        "पूर्ण सोर्स कोड ओनरशिप और टेक्निकल ट्रेनिंग"
      ]
    }
  },
  {
    id: "digital-marketing",
    category: "automation",
    icon: "BarChart3",
    mode: "online",
    startingPrice: 3999,
    badge: "Targeted Growth",
    en: {
      title: "Digital Marketing & Local SEO Growth",
      shortDesc: "Technical search engine optimization, Google Business profile ranking, and conversion-focused local customer acquisition.",
      features: [
        "Google Business Profile local map pack optimization",
        "On-page technical SEO & speed performance audits",
        "High-intent local keywords ranking for Delhi NCR & India",
        "Transparent analytics & monthly progress reporting"
      ]
    },
    hi: {
      title: "डिजिटल मार्केटिंग एवं लोकल एसईओ (SEO)",
      shortDesc: "गूगल बिजनेस प्रोफाइल रैंकिंग, लोकल कस्टमर रीच और सर्च इंजन ऑप्टिमाइजेशन।",
      features: [
        "गूगल मैप्स व बिजनेस प्रोफाइल लोकल ऑप्टिमाइजेशन",
        "ऑन-पेज टेक्निकल एसईओ व स्पीड ऑडिट",
        "हाई-वैल्यू लोकल कीवर्ड्स पर रैंकिंग सुधार",
        "पारदर्शी रिपोर्टिंग व कस्टमर इन्क्वायरी मॉनिटरिंग"
      ]
    }
  },

  // ==========================================
  // 5. TRADING AUTOMATION SYSTEMS (TECHNICAL DEVELOPMENT)
  // ==========================================
  {
    id: "trading-forex",
    category: "trading",
    icon: "TrendingUp",
    mode: "online",
    startingPrice: 6999,
    badge: "MT4 / MT5 EA",
    en: {
      title: "Forex Algorithmic Bot Engineering",
      shortDesc: "Technical coding and deployment of automated Expert Advisors (EAs) for MetaTrader 4 and MetaTrader 5 platforms.",
      features: [
        "Custom MQL4 & MQL5 automated algorithmic development",
        "Strict risk management parameters (hard stop-loss, max lot, drawdown controls)",
        "Tick-accurate historical backtesting data integration",
        "Low-latency Forex VPS setup and continuous health monitoring"
      ]
    },
    hi: {
      title: "फॉरेक्स एल्गोरिदमिक बॉट इंजीनियरिंग (MT4/MT5)",
      shortDesc: "मेटाट्रेडर 4 और 5 प्लेटफॉर्म्स के लिए ऑटोमेटेड एक्सपर्ट एडवाइजर्स (EAs) का टेक्निकल कोड निर्माण।",
      features: [
        "कस्टम MQL4 व MQL5 प्रोग्रामिंग व लॉजिक डेवलपमेंट",
        "सख्त रिस्क मैनेजमेंट सेटिंग्स (स्टॉप-लॉस, मैक्स लॉट, ड्रॉडाउन लिमिट)",
        "ऐतिहासिक बैक-टेस्टिंग डेटा व सिमुलेशन एकीकरण",
        "लो-लेटेंसी फॉरेक्स VPS सेटअप व कनेक्टिविटी मॉनिटरिंग"
      ]
    }
  },
  {
    id: "trading-crypto",
    category: "trading",
    icon: "Coins",
    mode: "online",
    startingPrice: 7999,
    badge: "API Integration",
    en: {
      title: "Cryptocurrency Bot Automation",
      shortDesc: "Technical integration of automated trading algorithms via official REST and WebSocket APIs on major crypto exchanges.",
      features: [
        "Binance, Bybit & OKX official API connectors",
        "DCA (Dollar Cost Average), grid & trend automation engines",
        "End-to-end API key encryption (no withdrawal permissions allowed)",
        "Automated Telegram / Discord trade alert webhooks"
      ]
    },
    hi: {
      title: "क्रिप्टोकरेंसी बॉट ऑटोमेशन",
      shortDesc: "प्रमुख क्रिप्टो एक्सचेंजों के आधिकारिक REST और WebSocket APIs द्वारा स्वचालित तकनीकी एल्गोरिदम एकीकरण।",
      features: [
        "Binance, Bybit आदि के ऑफिशियल API कनेक्टर्स",
        "DCA, ग्रिड और मोमेंटम ऑटोमेशन लॉजिक कोडिंग",
        "सुरक्षित API एनक्रिप्शन (नो-विथड्रॉल पॉलिसी अनिवार्य)",
        "टेलीग्राम व डिस्कॉर्ड अलर्ट्स ऑटोमेटेड वेबहुक्स"
      ]
    }
  },
  {
    id: "trading-gold",
    category: "trading",
    icon: "Activity",
    mode: "online",
    startingPrice: 7499,
    badge: "XAUUSD Precision",
    en: {
      title: "Gold (XAUUSD) Strategy Automation",
      shortDesc: "Specialized algorithmic execution systems engineered specifically for Gold volatility, sessions, and liquidity breakouts.",
      features: [
        "Session-based execution filters (London & New York market opens)",
        "Dynamic volatility-based ATR stop placement logic",
        "News filter automation to prevent high-slippage execution",
        "Multi-timeframe confirmation rules"
      ]
    },
    hi: {
      title: "गोल्ड (XAUUSD) स्ट्रैटेजी ऑटोमेशन",
      shortDesc: "गोल्ड मार्केट की वोलैटिलिटी और सेशंस के लिए विशेष रूप से इंजीनियर किया गया तकनीकी ऑटोमेशन।",
      features: [
        "मार्केट सेशन फिल्टर्स (लंदन व न्यूयॉर्क ओपनिंग लॉजिक)",
        "ATR आधारित डायनामिक स्टॉप-लॉस व ट्रेलिंग कोड",
        "हाई-इम्पैक्ट न्यूज इवेंट्स पर ऑटो-पॉज प्रोटेक्शन",
        "मल्टी-टाइमफ्रेम कन्फर्मेशन एल्गोरिदम"
      ]
    }
  },
  {
    id: "trading-currency",
    category: "trading",
    icon: "BarChart3",
    mode: "online",
    startingPrice: 6499,
    badge: "Multi-Currency",
    en: {
      title: "USD & Currency Pair Execution Systems",
      shortDesc: "Automated multi-currency execution frameworks tracking correlations, mean reversion, and spread volatility.",
      features: [
        "Major USD pairs (EURUSD, GBPUSD, USDJPY) algorithmic logic",
        "Spread and slippage safeguards built into trade execution",
        "Partial profit booking & breakeven trailing automation",
        "Automated equity drawdown protection kill-switch"
      ]
    },
    hi: {
      title: "यूएसडी एवं करेंसी पेयर निष्पादन सिस्टम",
      shortDesc: "मेजर करेंसी पेयर्स के लिए तकनीकी ऑटोमेशन फ्रेमवर्क—स्प्रेड व रिस्क कंट्रोल के साथ।",
      features: [
        "मेजर USD पेयर्स (EURUSD, GBPUSD) के लिए कस्टम लॉजिक",
        "हाई-स्प्रेड व स्लिपेज से सुरक्षा के लिए ऑटो-चेक्स",
        "पार्शियल प्रॉफिट बुकिंग व ट्रेलिंग स्टॉप ऑटोमेशन",
        "इक्विटी ड्रॉडाउन लिमिट पर ऑटोमैटिक किल-स्विच सुरक्षा"
      ]
    }
  },
  {
    id: "trading-pinescript",
    category: "trading",
    icon: "Code",
    mode: "online",
    startingPrice: 4999,
    badge: "Pine Script v5",
    en: {
      title: "Custom Pine Script & Webhook Automation",
      shortDesc: "Turn your technical ideas into TradingView indicators, automated strategy testers, and live webhook execution triggers.",
      features: [
        "Clean, error-free TradingView Pine Script v5 development",
        "Quantitative backtesting statistics with slippage modeling",
        "JSON alert payload generation for webhook relay to brokers",
        "Indicator to automated strategy conversion"
      ]
    },
    hi: {
      title: "कस्टम पाइन स्क्रिप्ट (Pine Script) व वेबहुक ऑटोमेशन",
      shortDesc: "ट्रेडिंगव्यू (TradingView) इंडिकेटर्स, बैक-टेस्टिंग स्ट्रैटेजी और लाइव अलर्ट वेबहुक ऑटोमेशन।",
      features: [
        "त्रुटिरहित TradingView Pine Script v5 कोडिंग",
        "स्लिपेज व कमीशन के साथ पारदर्शी बैक-टेस्टिंग स्टैट्स",
        "ब्रोकर कनेक्टर्स के लिए JSON अलर्ट वेबहुक जनरेटर",
        "मैनुअल इंडिकेटर्स को ऑटोमेटेड स्ट्रैटेजी में बदलना"
      ]
    }
  },

  // ==========================================
  // 6. AMC SERVICES (ANNUAL MAINTENANCE CONTRACTS)
  // ==========================================
  {
    id: "amc-hardware",
    category: "amc",
    icon: "Wrench",
    mode: "contract",
    startingPrice: 1499,
    badge: "Preventative Care",
    en: {
      title: "Computer Hardware Maintenance (AMC)",
      shortDesc: "Scheduled preventative physical maintenance to ensure prolonged device lifespan, optimal cooling, and stability.",
      features: [
        "Quarterly deep ultrasonic fan cleaning & dust removal",
        "Premium thermal compound renewal on CPU / GPU",
        "SMPS power rail diagnostics & motherboard capacitor checks",
        "Fast-track hardware replacement logistics at discounted rates"
      ]
    },
    hi: {
      title: "कंप्यूटर हार्डवेयर मेंटेनेंस (AMC)",
      shortDesc: "नियमित प्रिवेंटिव फिजिकल मेंटेनेंस ताकि आपके सिस्टम की लाइफ लंबी रहे और अचानक खराबी न आए।",
      features: [
        "त्रैमासिक डीप कूलिंग फैन क्लीनिंग व धूल सफाई",
        "प्रोसेसर और ग्राफिक्स चिप पर प्रीमियम थर्मल पेस्ट रिन्यूअल",
        "पावर सप्लाई (SMPS) स्टेबिलिटी व मदरबोर्ड हेल्थ जांच",
        "हार्डवेयर बदलने पर रियायती दरें व प्राथमिकता"
      ]
    }
  },
  {
    id: "amc-software",
    category: "amc",
    icon: "ShieldCheck",
    mode: "contract",
    startingPrice: 1299,
    badge: "Continuous Security",
    en: {
      title: "Computer Software Maintenance (AMC)",
      shortDesc: "Proactive operating system health management, driver updating, automated cloud backup audits, and security patching.",
      features: [
        "Monthly registry and temporary file cleanup sweeps",
        "Automated backup health audits for vital business data",
        "Security update validation and antivirus integrity checks",
        "Priority remote support sessions with Team MrTech Care"
      ]
    },
    hi: {
      title: "कंप्यूटर सॉफ्टवेयर मेंटेनेंस (AMC)",
      shortDesc: "प्रोएक्टिव ओएस मेंटेनेंस, सुरक्षा पैचिंग, ड्राइवर अपडेट्स और ऑटोमेटेड बैकअप हेल्थ ऑडिट।",
      features: [
        "मासिक सिस्टम कैशे, ब्लोटवेयर व जंक फाइल्स क्लीनअप",
        "बिजनेस डेटा बैकअप की नियमित ऑटोमेटेड जांच",
        "सिक्योरिटी अपडेट्स व एंटीवायरस हेल्थ वेरिफिकेशन",
        "टीम MrTech Care द्वारा प्राथमिकता रिमोट सहायता"
      ]
    }
  },
  {
    id: "amc-corporate",
    category: "amc",
    icon: "Briefcase",
    mode: "contract",
    startingPrice: 4999,
    badge: "Office & Fleet",
    en: {
      title: "Corporate Annual Maintenance Contracts (AMC)",
      shortDesc: "Comprehensive IT infrastructure maintenance agreements customized for startups, clinics, corporate offices, and institutions.",
      features: [
        "Covering workstation fleets, local servers & network printers",
        "Customized preventative maintenance schedules (Quarterly / Monthly)",
        "Priority ticketing channel with dedicated account technician",
        "GST invoicing, service audit reports & asset health logs"
      ]
    },
    hi: {
      title: "कॉरपोरेट एनुअल मेंटेनेंस कॉन्ट्रैक्ट्स (AMC)",
      shortDesc: "कार्यालयों, संस्थानों और स्टार्टअप्स के लिए संपूर्ण आईटी इंफ्रास्ट्रक्चर वार्षिक रखरखाव अनुबंध।",
      features: [
        "ऑफिस वर्कस्टेशन्स, नेटवर्क प्रिंटर्स व लोकल सर्वर्स का कवरेज",
        "आपकी सुविधा अनुसार मासिक या त्रैमासिक प्रिवेंटिव विजिट्स",
        "डेडिकेटेड सपोर्ट चैनल व प्राथमिकता सर्विस शेड्यूलिंग",
        "जीएसटी इनवॉइसिंग और विस्तृत सर्विस रिपोर्ट लॉग्स"
      ]
    }
  }
];
