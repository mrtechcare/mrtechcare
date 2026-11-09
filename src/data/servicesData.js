export const servicesData = [
  {
    id: "windows-installation",
    category: "pc",
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
    category: "pc",
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
    category: "pc",
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
    category: "pc",
    icon: "Laptop",
    mode: "doorstep",
    startingPrice: 299,
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
    category: "pc",
    icon: "HardDrive",
    mode: "doorstep",
    startingPrice: 299,
    badge: "Performance Boost",
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
    id: "android-software",
    category: "mobile",
    icon: "Smartphone",
    mode: "remote_and_doorstep",
    startingPrice: 299,
    badge: "Official Firmware",
    en: {
      title: "Android Flashing & Software Troubleshooting",
      shortDesc: "Official stock firmware flashing, stuck-on-logo bootloop recovery, and operating system repairs.",
      features: [
        "Official stock ROM flashing for bootloop recovery",
        "System crash & unresponsive application diagnostics",
        "Safe device factory reset with backup guidance",
        "Firmware update failures & brick recovery"
      ]
    },
    hi: {
      title: "एंड्रॉइड फ्लैशिंग और सॉफ्टवेयर समस्या समाधान",
      shortDesc: "आधिकारिक स्टॉक फर्मवेयर फ्लैशिंग, लोगो पर अटके फोन (Bootloop) की रिकवरी और सिस्टम सुधार।",
      features: [
        "आधिकारिक स्टॉक रोम फ्लैशिंग व बूटलूप रिकवरी",
        "सिस्टम क्रैश व हैंगिंग ऐप्स का डायग्नोसिस",
        "डेटा बैकअप मार्गदर्शन के साथ सेफ रीसेट",
        "अपडेट फेल होने पर सॉफ्टवेयर री-इंस्टालेशन"
      ]
    }
  },
  {
    id: "iphone-software",
    category: "mobile",
    icon: "Smartphone",
    mode: "remote_and_doorstep",
    startingPrice: 299,
    badge: "Authorized",
    en: {
      title: "iPhone Software Troubleshooting",
      shortDesc: "Apple logo loop fixes, recovery mode resolution, iTunes/Finder restore errors, and storage recovery.",
      features: [
        "Stuck on Apple logo & recovery mode restoration",
        "iTunes / Apple Devices error code troubleshooting",
        "iOS update failure diagnosis & clean reinstallation",
        "iCloud sync guidance & local data backup assistance"
      ]
    },
    hi: {
      title: "आईफोन सॉफ्टवेयर समस्या निवारण",
      shortDesc: "एप्पल लोगो पर रुकने, रिकवरी मोड, आईट्यून्स एरर कोड और आईओएस अपडेट समस्याओं का समाधान।",
      features: [
        "एप्पल लोगो व रिकवरी मोड में अटके फोन का सुधार",
        "iTunes / Apple Devices एरर कोड समस्या निवारण",
        "iOS अपडेट विफलता सुधार व सुरक्षित रीस्टोर",
        "आईक्लाउड सिंक मार्गदर्शन व लोकल बैकअप सहायता"
      ]
    }
  },
  {
    id: "mobile-hardware-repair",
    category: "mobile",
    icon: "Wrench",
    mode: "doorstep",
    startingPrice: 299,
    badge: "Doorstep / On-Site",
    en: {
      title: "Mobile Hardware Repair",
      shortDesc: "Physical mobile diagnostics, battery replacement, display assessment, charging port and speaker fixes.",
      features: [
        "Damaged display screen & touch digitizer assessment",
        "Draining battery replacement & power checks",
        "Faulty charging jack, microphone & speaker repair",
        "Physical button replacement & loose connection checks"
      ]
    },
    hi: {
      title: "मोबाइल हार्डवेयर रिपेयर",
      shortDesc: "स्मार्टफोन हार्डवेयर जांच, बैटरी रिप्लेसमेंट, स्क्रीन असेसमेंट, चार्जिंग पोर्ट व स्पीकर रिपेयर।",
      features: [
        "टूटी स्क्रीन व टचपैड का सटीक डायग्नोसिस",
        "कमजोर व फूल चुकी बैटरी का सुरक्षित रिप्लेसमेंट",
        "खराब चार्जिंग जैक, माइक व लाउडस्पीकर मरम्मत",
        "पावर/वॉल्यूम बटन और इंटरनल कनेक्शन जांच"
      ]
    }
  },
  {
    id: "wifi-network-printer",
    category: "remote",
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
    id: "remote-technical-support",
    category: "remote",
    icon: "Headphones",
    mode: "remote",
    startingPrice: 199,
    badge: "Pan-India",
    en: {
      title: "Remote Technical Support using AnyDesk and TeamViewer",
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
  {
    id: "doorstep-computer-support",
    category: "doorstep",
    icon: "Home",
    mode: "doorstep",
    startingPrice: 299,
    badge: "Delhi NCR",
    en: {
      title: "Doorstep Computer and Laptop Support",
      shortDesc: "Personal technician visit at your residence or workspace in Delhi, Noida, Ghaziabad, and Greater Noida.",
      features: [
        "Direct on-site diagnosis at home or office",
        "No need to carry heavy desktops or fragile laptops",
        "Hardware inspection, cleaning & cable organization",
        "Transparent, upfront quoting before service begins"
      ]
    },
    hi: {
      title: "डोरस्टेप कंप्यूटर और लैपटॉप सपोर्ट",
      shortDesc: "दिल्ली, नोएडा, गाजियाबाद और ग्रेटर नोएडा में आपके घर या कार्यस्थल पर व्यक्तिगत तकनीशियन विजिट।",
      features: [
        "घर या दफ्तर पर प्रत्यक्ष आमने-सामने डायग्नोसिस",
        "भारी डेस्कटॉप या नाजुक लैपटॉप को कहीं ले जाने का झंझट नहीं",
        "हार्डवेयर निरीक्षण, सफाई एवं सुव्यवस्थित केबलिंग",
        "काम शुरू होने से पहले पारदर्शी और स्पष्ट बातचीत"
      ]
    }
  }
];
