export const pricingPlans = [
  {
    id: "remote-support",
    price: 199,
    serviceKey: "Remote Technical Support",
    icon: "Headphones",
    coverage: "Pan-India Online",
    popular: false,
    en: {
      title: "Remote Technical Support",
      scope: "Single issue resolution via AnyDesk / TeamViewer",
      includes: [
        "Software glitch & bug diagnosis",
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
    id: "wifi-printer",
    price: 249,
    serviceKey: "Wi-Fi & Printer Setup",
    icon: "Wifi",
    coverage: "Remote or Doorstep",
    popular: false,
    en: {
      title: "Wi-Fi & Printer Setup",
      scope: "Configuration for home & small office networks",
      includes: [
        "Wi-Fi router configuration & password security",
        "Wireless & USB printer / scanner driver install",
        "Network printer sharing across family / office PCs",
        "Frequent disconnection & IP address conflict fix"
      ],
      note: "Doorstep visit travel charges may apply based on location."
    },
    hi: {
      title: "वाई-फाई एवं प्रिंटर सेटअप",
      scope: "घर और छोटे कार्यालय नेटवर्क के लिए कॉन्फ़िगरेशन",
      includes: [
        "वाई-फाई राउटर इंस्टालेशन व पासवर्ड सुरक्षा",
        "वायरलेस व यूएसबी प्रिंटर/स्कैनर ड्राइवर सेटअप",
        "नेटवर्क प्रिंटर शेयरिंग (एक से अधिक पीसी पर)",
        "इंटरनेट डिस्कनेक्ट व IP कन्फ्लिक्ट का समाधान"
      ],
      note: "डोरस्टेप विजिट में स्थान के अनुसार न्यूनतम यात्रा शुल्क लागू हो सकता है।"
    }
  },
  {
    id: "doorstep-computer",
    price: 299,
    serviceKey: "Doorstep Computer Service",
    icon: "Home",
    coverage: "Delhi NCR Doorstep",
    popular: true,
    en: {
      title: "Doorstep Computer Service",
      scope: "On-site technician visit at your residence or office",
      includes: [
        "Comprehensive physical & hardware diagnosis",
        "No-display, restart loops & power issue check",
        "Internal dust cleanup & airflow assessment",
        "Upfront quote before any component replacement"
      ],
      note: "Base diagnostic visit fee is ₹299. Replacement components charged at actuals."
    },
    hi: {
      title: "डोरस्टेप कंप्यूटर सर्विस",
      scope: "घर या दफ्तर पर ऑन-साइट तकनीशियन विजिट",
      includes: [
        "विस्तृत हार्डवेयर व फिजिकल डायग्नोसिस",
        "डिस्प्ले न आना, बार-बार रिस्टार्ट व पावर जांच",
        "इंटरनल धूल की सफाई व कूलिंग निरीक्षण",
        "पुर्जे बदलने से पहले स्पष्ट व पक्की कोटेशन"
      ],
      note: "न्यूनतम डायग्नोस्टिक विजिट शुल्क ₹299 है। नए पार्ट्स का खर्च अलग होगा।"
    }
  },
  {
    id: "mobile-software",
    price: 299,
    serviceKey: "Mobile Software Support",
    icon: "Smartphone",
    coverage: "Remote or Doorstep",
    popular: false,
    en: {
      title: "Mobile Software Support",
      scope: "Legitimate Android & iPhone operating system fixes",
      includes: [
        "Official stock firmware flashing (Android)",
        "Stuck on Apple logo & recovery mode restoration",
        "System freeze & unresponsive apps resolution",
        "Safe backup & system restore guidance"
      ],
      note: "Legitimate repairs only. No bypass or unauthorized unlocking."
    },
    hi: {
      title: "मोबाइल सॉफ्टवेयर सपोर्ट",
      scope: "वैध व आधिकारिक एंड्रॉइड और आईफोन ओएस समस्या समाधान",
      includes: [
        "आधिकारिक स्टॉक रोम फ्लैशिंग (एंड्रॉइड)",
        "एप्पल लोगो व रिकवरी मोड में अटके फोन का सुधार",
        "सिस्टम हैंग और क्रैश हो रहे ऐप्स का समाधान",
        "सुरक्षित डेटा बैकअप व रीस्टोर मार्गदर्शन"
      ],
      note: "केवल प्रामाणिक कार्य। कोई बाईपास या अनधिकृत अनलॉकिंग नहीं की जाती।"
    }
  },
  {
    id: "laptop-hardware",
    price: 299,
    serviceKey: "Laptop Hardware & Upgrades",
    icon: "Laptop",
    coverage: "Doorstep Delhi NCR",
    popular: false,
    en: {
      title: "Laptop Hardware & Upgrades",
      scope: "Component upgrades, thermal service & hardware checks",
      includes: [
        "High-speed NVMe / SATA SSD installation & clone",
        "RAM memory expansion for superfast multitasking",
        "Deep thermal cleaning & thermal paste refresh",
        "Screen, battery, keyboard & hinge evaluation"
      ],
      note: "Labor starts at ₹299. Cost of SSD/RAM hardware is separate."
    },
    hi: {
      title: "लैपटॉप हार्डवेयर एवं अपग्रेड",
      scope: "हार्डवेयर अपग्रेड, थर्मल सर्विसिंग और पुर्जों की जांच",
      includes: [
        "सुपरफास्ट NVMe / SATA SSD इंस्टालेशन व डेटा क्लोन",
        "मल्टीटास्किंग और तेज स्पीड के लिए रैम अपग्रेड",
        "थर्मल क्लीनिंग व हाई-ग्रेड थर्मल पेस्ट सर्विसिंग",
        "स्क्रीन, बैटरी, कीबोर्ड व हिंज खराबी की जांच"
      ],
      note: "लेबर चार्ज ₹299 से शुरू। नए SSD/RAM आदि पुर्जों की लागत अलग होगी।"
    }
  },
  {
    id: "windows-installation",
    price: 499,
    serviceKey: "Windows Installation & Setup",
    icon: "Monitor",
    coverage: "Doorstep or Remote",
    popular: true,
    en: {
      title: "Windows Installation & Setup",
      scope: "Full authorized operating system setup with drivers",
      includes: [
        "Genuine Windows 10 / 11 clean installation",
        "Original driver package & chipset updates",
        "User data backup preservation (where drive permits)",
        "Essential browsers, runtime libraries & security setup"
      ],
      note: "Standard labor ₹499. Complex multi-drive setups may vary slightly."
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
  }
];
