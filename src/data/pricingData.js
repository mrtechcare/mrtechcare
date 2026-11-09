export const pricingPlans = [
  {
    id: "remote-support",
    price: 199,
    serviceKey: "Remote Technical Support",
    icon: "Headphones",
    category: "repair",
    coverage: "Pan-India Online",
    popular: false,
    en: {
      title: "Remote Technical Support",
      scope: "Single incident resolution via AnyDesk or TeamViewer",
      includes: [
        "Software glitch, registry & bug diagnosis",
        "Driver conflicts & missing audio/video fix",
        "Basic bloatware cleanup & speed optimization",
        "100% secure: you oversee everything on screen"
      ],
      note: "Starts at ₹199 per single-incident session. Complex issues quoted before beginning."
    },
    hi: {
      title: "रिमोट टेक्निकल सपोर्ट",
      scope: "AnyDesk / TeamViewer द्वारा एकल समस्या का ऑनलाइन निवारण",
      includes: [
        "सॉफ्टवेयर गड़बड़ी व बग डायग्नोसिस",
        "ड्राइवर व ऑडियो/वीडियो समस्या सुधार",
        "अनावश्यक ऐप्स की सफाई व बेसिक स्पीड-अप",
        "100% सुरक्षित: स्क्रीन पर सब कुछ आपके सामने"
      ],
      note: "शुरुआती दर ₹199 प्रति सेशन। जटिल समस्या होने पर पहले स्पष्ट जानकारी।"
    }
  },
  {
    id: "doorstep-computer",
    price: 399,
    serviceKey: "Doorstep Computer Service",
    icon: "Home",
    category: "repair",
    coverage: "Delhi NCR Doorstep",
    popular: true,
    en: {
      title: "Doorstep Computer & Laptop Service",
      scope: "On-site technician inspection at your residence or office",
      includes: [
        "Comprehensive physical & hardware diagnosis",
        "No-display, restart loops & power issue check",
        "Internal dust cleanup & airflow assessment",
        "Upfront quote before any component replacement"
      ],
      note: "Standard on-site diagnostic visit fee is ₹399. Replacement components quoted at actuals."
    },
    hi: {
      title: "डोरस्टेप कंप्यूटर व लैपटॉप सर्विस",
      scope: "घर या दफ्तर पर ऑन-साइट तकनीशियन विजिट",
      includes: [
        "विस्तृत हार्डवेयर व फिजिकल डायग्नोसिस",
        "डिस्प्ले न आना, बार-बार रिस्टार्ट व पावर जांच",
        "इंटरनल धूल की सफाई व कूलिंग निरीक्षण",
        "पुर्जे बदलने से पहले स्पष्ट व पक्की कोटेशन"
      ],
      note: "मानक ऑन-साइट डायग्नोस्टिक विजिट शुल्क ₹399 है। नए पार्ट्स का खर्च अलग होगा।"
    }
  },
  {
    id: "windows-installation",
    price: 499,
    serviceKey: "Windows Installation & Setup",
    icon: "Monitor",
    category: "repair",
    coverage: "Doorstep or Remote",
    popular: true,
    en: {
      title: "Windows Installation & Setup",
      scope: "Authorized operating system setup with full drivers",
      includes: [
        "Genuine Windows 10 / 11 clean installation",
        "Original driver package & chipset updates",
        "User data backup preservation (where drive permits)",
        "Essential browsers, runtime libraries & security setup"
      ],
      note: "Standard labor ₹499. Multi-drive arrays or complex configurations quoted upfront."
    },
    hi: {
      title: "विंडोज इंस्टालेशन एवं सेटअप",
      scope: "ड्राइवर व आवश्यक टूल्स के साथ संपूर्ण आधिकारिक सेटअप",
      includes: [
        "आधिकारिक विंडोज 10 / 11 क्लीन इंस्टालेशन",
        "ऑरिजिनल हार्डवेयर ड्राइवर्स व चिपसेट अपडेट्स",
        "उपयोगकर्ता डेटा का सुरक्षित बैकअप (हार्ड डिस्क स्वास्थ्य अनुसार)",
        "ज़रूरी ब्राउज़र, रनटाइम लाइब्रेरी और सिक्योरिटी सेटअप"
      ],
      note: "मानक लेबर चार्ज ₹499। मल्टीपल ड्राइव्स व जटिल पार्टीशन पर शुल्क अलग हो सकता है।"
    }
  },
  {
    id: "android-software-pricing",
    price: 499,
    serviceKey: "Android Software Troubleshooting",
    icon: "Smartphone",
    category: "mobile",
    coverage: "Remote or Doorstep",
    popular: false,
    en: {
      title: "Android Software & Bootloop Recovery",
      scope: "Operating system recovery, bootloop fix, and system repairs",
      includes: [
        "Stuck on logo bootloop recovery & cache wipe",
        "System freeze & unresponsive UI diagnostics",
        "Safe data backup preservation guidance",
        "Firmware update crash & brick restoration"
      ],
      note: "Starting at ₹499. Legitimate repairs only, no unauthorized unlocking."
    },
    hi: {
      title: "एंड्रॉइड सॉफ्टवेयर एवं बूटलूप रिकवरी",
      scope: "ऑपरेटिंग सिस्टम रिकवरी, बूटलूप सुधार व सिस्टम रिपेयर",
      includes: [
        "लोगो पर अटके फोन का डायग्नोसिस व बूटलूप रिकवरी",
        "सिस्टम हैंग और क्रैश हो रहे ऐप्स का समाधान",
        "सुरक्षित डेटा बैकअप मार्गदर्शन व रीस्टोर",
        "अपडेट फेल होने पर सॉफ्टवेयर री-इंस्टालेशन"
      ],
      note: "शुरुआती दर ₹499। केवल प्रामाणिक कार्य, कोई अनधिकृत अनलॉकिंग नहीं।"
    }
  },
  {
    id: "apple-software-pricing",
    price: 699,
    serviceKey: "iPhone Software Troubleshooting",
    icon: "Smartphone",
    category: "mobile",
    coverage: "Remote or Doorstep",
    popular: false,
    en: {
      title: "Apple iPhone & iPad Software Support",
      scope: "iOS recovery, stuck on Apple logo, and error code fixes",
      includes: [
        "Stuck on Apple logo loop & recovery mode restore",
        "iTunes & Apple Devices restore error diagnostics",
        "iOS clean update & storage recovery assistance",
        "iCloud sync guidance & local backup setup"
      ],
      note: "Starting at ₹699. Hardware faults or physical board issues evaluated separately."
    },
    hi: {
      title: "एप्पल आईफोन व आईपैड सॉफ्टवेयर सपोर्ट",
      scope: "iOS रिकवरी, एप्पल लोगो लूप व आईट्यून्स एरर कोड सुधार",
      includes: [
        "एप्पल लोगो व रिकवरी मोड में अटके डिवाइस का सुधार",
        "iTunes / Apple Devices रिस्टोर एरर कोड का समाधान",
        "iOS अपडेट विफलता सुधार व सुरक्षित क्लीन रीस्टोर",
        "आईक्लाउड सिंक मार्गदर्शन व लोकल बैकअप सहायता"
      ],
      note: "शुरुआती दर ₹699। हार्डवेयर खराबी की जांच अलग से की जाती है।"
    }
  },
  {
    id: "firmware-flashing-pricing",
    price: 599,
    serviceKey: "Firmware Flashing & Custom ROM",
    icon: "Terminal",
    category: "mobile",
    coverage: "Remote or Doorstep",
    popular: false,
    en: {
      title: "Firmware Flashing & Custom ROM",
      scope: "Official stock firmware flashing and verified ROM setup",
      includes: [
        "Official stock ROM flashing via Odin / Fastboot",
        "Soft-bricked device restoration and partition repair",
        "Verified custom ROM installation on supported models",
        "Full pre-flash partition backup & integrity checks"
      ],
      note: "Starting at ₹599 for standard supported models."
    },
    hi: {
      title: "फर्मवेयर फ्लैशिंग एवं कस्टम रोम",
      scope: "आधिकारिक स्टॉक फर्मवेयर फ्लैशिंग व वेरिफाइड रोम सेटअप",
      includes: [
        "आधिकारिक स्टॉक रोम फ्लैशिंग (Odin / Fastboot)",
        "सॉफ्ट-ब्रिक डिवाइस की संपूर्ण रिकवरी",
        "सपोर्टेड डिवाइसों पर वेरिफाइड कस्टम रोम इंस्टालेशन",
        "फ्लैश पूर्व पार्टीशन बैकअप व बूटलोडर सुरक्षा जांच"
      ],
      note: "मानक सपोर्टेड मॉडल्स के लिए शुरुआती दर ₹599।"
    }
  },
  {
    id: "amc-hardware-plan",
    price: 1499,
    serviceKey: "Computer Hardware Maintenance (AMC)",
    icon: "Wrench",
    category: "amc",
    coverage: "Delhi NCR Doorstep",
    popular: false,
    en: {
      title: "Computer Hardware AMC",
      scope: "Quarterly physical preventative care per workstation",
      includes: [
        "Quarterly ultrasonic fan cleaning & dust removal",
        "Premium thermal paste repasting on CPU / GPU",
        "SMPS power stability & capacitor health check",
        "Discounted component replacement logistics"
      ],
      note: "Annual plan starting at ₹1,499/system. Custom fleet pricing for offices."
    },
    hi: {
      title: "कंप्यूटर हार्डवेयर एएमसी (AMC)",
      scope: "प्रति सिस्टम त्रैमासिक फिजिकल प्रिवेंटिव मेंटेनेंस",
      includes: [
        "त्रैमासिक डीप कूलिंग फैन क्लीनिंग व धूल सफाई",
        "प्रोसेसर और ग्राफिक्स चिप पर प्रीमियम थर्मल पेस्ट",
        "पावर सप्लाई (SMPS) स्टेबिलिटी व हार्डवेयर हेल्थ जांच",
        "हार्डवेयर बदलने पर रियायती दरें व प्राथमिकता"
      ],
      note: "वार्षिक योजना ₹1,499 प्रति सिस्टम से शुरू। कार्यालयों के लिए कस्टम पैकेज उपलब्ध।"
    }
  },
  {
    id: "amc-software-plan",
    price: 1299,
    serviceKey: "Computer Software Maintenance (AMC)",
    icon: "ShieldCheck",
    category: "amc",
    coverage: "Remote or On-Site",
    popular: false,
    en: {
      title: "Computer Software AMC",
      scope: "Proactive OS health, driver updates & security sweeps",
      includes: [
        "Monthly registry and temporary file cleanup sweeps",
        "Automated backup health audits for vital data",
        "Antivirus integrity verification and OS patch checks",
        "Priority remote support sessions with Team MrTech Care"
      ],
      note: "Annual software maintenance plan starting at ₹1,299/system."
    },
    hi: {
      title: "कंप्यूटर सॉफ्टवेयर एएमसी (AMC)",
      scope: "प्रोएक्टिव ओएस हेल्थ, ड्राइवर अपडेट्स व सिक्योरिटी स्वीप्स",
      includes: [
        "मासिक सिस्टम कैशे, ब्लोटवेयर व जंक फाइल्स क्लीनअप",
        "बिजनेस डेटा बैकअप की नियमित ऑटोमेटेड जांच",
        "सिक्योरिटी अपडेट्स व एंटीवायरस हेल्थ वेरिफिकेशन",
        "टीम MrTech Care द्वारा प्राथमिकता रिमोट सहायता"
      ],
      note: "वार्षिक सॉफ्टवेयर मेंटेनेंस योजना ₹1,299 प्रति सिस्टम से शुरू।"
    }
  },
  {
    id: "trading-bot-pricing",
    price: 6499,
    serviceKey: "Trading System Development",
    icon: "TrendingUp",
    category: "trading",
    coverage: "Online Technical Service",
    popular: false,
    en: {
      title: "Trading Automation Development",
      scope: "Custom technical coding for MT4/MT5, Pine Script, and crypto APIs",
      includes: [
        "Custom rule-based algorithm programming",
        "Hard-coded risk controls (stop-loss, max lot, drawdown limiter)",
        "Historical backtesting data integration",
        "VPS deployment assistance & webhook relays"
      ],
      note: "Technical coding starting at ₹6,499. No financial advice or profit promises."
    },
    hi: {
      title: "ट्रेडिंग ऑटोमेशन सॉफ्टवेयर निर्माण",
      scope: "MT4/MT5, पाइन स्क्रिप्ट व क्रिप्टो APIs के लिए कस्टम कोडिंग",
      includes: [
        "कस्टम नियम-आधारित एल्गोरिदम प्रोग्रामिंग",
        "हार्ड-कोडेड रिस्क मैनेजमेंट (स्टॉप-लॉस, ड्रॉडाउन सीमा)",
        "ऐतिहासिक बैक-टेस्टिंग डेटा सिमुलेशन एकीकरण",
        "VPS सेटअप व वेबहुक अलर्ट रिले एकीकरण"
      ],
      note: "तकनीकी कोडिंग दर ₹6,499 से शुरू। कोई वित्तीय परामर्श या लाभ का वादा नहीं।"
    }
  }
];
