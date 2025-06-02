// import { useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   MdElectricBolt,
//   MdAcUnit,
//   MdWbSunny,
//   MdChair,
//   MdDisplaySettings,
//   MdDashboard,
//   MdKey,
//   MdRadar,
//   MdVisibility,
//   MdLightbulb,
//   MdCameraAlt,
//   Md360,
//   MdGraphicEq,
//   MdSettings,
//   MdSpeed,
//   MdAir,
//   MdFingerprint,
//   MdSecurity,
//   MdLocalCarWash,
//   MdOutlineDoorBack,
//   MdAirlineSeatReclineExtra,
//   MdMemory,
//   MdHighlight,
//   MdMic,
//   MdToys, // بديل لـ "دفع رباعي"
//   MdRoofing // بديل لـ "سقف بانوراما"
// } from "react-icons/md";

// const featuresList = [
//   "شحن لاسلكي",
//   "كراسي مبردة",
//   "كراسي مدفئة",
//   "كراسي جلد",
//   "شاشة أمامية",
//   "عدادات ديجيتال",
//   "الدخول بدون مفتاح ( بصمة)",
//   "تتبع المسار",
//   "النقطة العمياء",
//   "أضوية LED",
//   "كاميرا خلفية",
//   "كاميرا 360 درجة",
//   "سقف بانوراما",
//   "نظام صوتي",
//   "تحكم ستيرنج",
//   "مثبت سرعة",
//   "حساسات أمامية",
//   "حساسات خلفية",
//   "بصمة تشغيل",
//   "نظام الرادار",
//   "مانع تصادم",
//   "تدفئة ستيرنج",
//   "دفع الرباعي",
//   "حساسات ضغط الإطارات",
//   "رشاشات أضوية",
//   "أضواء زينون",
//   "باب خلفي كهربائي",
//   "نظام تعليق هوائي",
//   "أبواب شفط",
//   "ذاكرة كراسي",
//   "كراسي كهربائية"
// ];

// const iconMap = {
//   "شحن لاسلكي": <MdElectricBolt className="w-5 h-5 text-yellow-500" />,
//   "كراسي مبردة": <MdAcUnit className="w-5 h-5 text-sky-500" />,
//   "كراسي مدفئة": <MdWbSunny className="w-5 h-5 text-red-500" />,
//   "كراسي جلد": <MdChair className="w-5 h-5 text-yellow-700" />,
//   "شاشة أمامية": <MdDisplaySettings className="w-5 h-5 text-indigo-500" />,
//   "عدادات ديجيتال": <MdDashboard className="w-5 h-5 text-green-600" />,
//   "الدخول بدون مفتاح ( بصمة)": <MdKey className="w-5 h-5 text-amber-600" />,
//   "تتبع المسار": <MdRadar className="w-5 h-5 text-purple-600" />,
//   "النقطة العمياء": <MdVisibility className="w-5 h-5 text-pink-500" />,
//   "أضوية LED": <MdLightbulb className="w-5 h-5 text-yellow-400" />,
//   "كاميرا خلفية": <MdCameraAlt className="w-5 h-5 text-gray-700" />,
//   "كاميرا 360 درجة": <Md360 className="w-5 h-5 text-blue-600" />,
//   "سقف بانوراما": <MdRoofing className="w-5 h-5 text-orange-400" />,
//   "نظام صوتي": <MdGraphicEq className="w-5 h-5 text-violet-500" />,
//   "تحكم ستيرنج": <MdSettings className="w-5 h-5 text-rose-400" />,
//   "مثبت سرعة": <MdSpeed className="w-5 h-5 text-cyan-600" />,
//   "حساسات أمامية": <MdAir className="w-5 h-5 text-lime-500" />,
//   "حساسات خلفية": <MdAir className="w-5 h-5 text-emerald-600" />,
//   "بصمة تشغيل": <MdFingerprint className="w-5 h-5 text-fuchsia-500" />,
//   "نظام الرادار": <MdRadar className="w-5 h-5 text-blue-800" />,
//   "مانع تصادم": <MdSecurity className="w-5 h-5 text-rose-700" />,
//   "تدفئة ستيرنج": <MdWbSunny className="w-5 h-5 text-red-400" />,
//   "دفع الرباعي": <MdToys className="w-5 h-5 text-stone-700" />,
//   "حساسات ضغط الإطارات": <MdDashboard className="w-5 h-5 text-orange-700" />,
//   "رشاشات أضوية": <MdLocalCarWash className="w-5 h-5 text-cyan-500" />,
//   "أضواء زينون": <MdHighlight className="w-5 h-5 text-blue-400" />,
//   "باب خلفي كهربائي": <MdOutlineDoorBack className="w-5 h-5 text-gray-600" />,
//   "نظام تعليق هوائي": <MdSettings className="w-5 h-5 text-gray-800" />,
//   "أبواب شفط": <MdOutlineDoorBack className="w-5 h-5 text-pink-600" />,
//   "ذاكرة كراسي": <MdMemory className="w-5 h-5 text-purple-500" />,
//   "كراسي كهربائية": <MdAirlineSeatReclineExtra className="w-5 h-5 text-green-700" />
// };

// export default function CarOptionPage() {
//   const [selected, setSelected] = useState([]);

//   const toggleFeature = (feature) => {
//     setSelected((prev) =>
//       prev.includes(feature)
//         ? prev.filter((f) => f !== feature)
//         : [...prev, feature]
//     );
//   };

//   return (
//     <Card className="max-w-6xl mx-auto p-6 mt-8 shadow-xl rounded-2xl border border-gray-200 bg-white">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">إضافات السيارة</h2>
//       <div className="max-h-[600px] overflow-y-auto pr-2">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {featuresList.map((feature) => {
//             const isSelected = selected.includes(feature);
//             return (
//               <div
//                 key={feature}
//                 className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 cursor-pointer hover:bg-gray-50 ${
//                   isSelected ? "bg-blue-50 border-blue-500" : "bg-white"
//                 }`}
//                 onClick={() => toggleFeature(feature)}
//               >
//                 <Checkbox
//                   checked={isSelected}
//                   onCheckedChange={() => toggleFeature(feature)}
//                 />
//                 {iconMap[feature] ?? <MdSettings className="w-5 h-5 text-gray-500" />}
//                 <label className="cursor-pointer text-right flex-1 text-gray-700 font-medium">
//                   {feature}
//                 </label>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </Card>
//   );
// }
// import { useState } from "react";
// import { FaCheckCircle } from "react-icons/fa";
// import { MdOutlineCarRepair, MdSensors, MdOutlineLightMode, MdOutlineAcUnit, MdGesture, MdOutlineSpeed, MdOutlineNightlight, MdElectricCar, MdGpsFixed, MdCamera, MdOutlineDashboard } from "react-icons/md";
// import { GiCarWheel, GiSteeringWheel, GiCarSeat, GiCarKey, GiAutoRepair, GiRoad, GiGasPump, GiElectric } from "react-icons/gi";
// import { RiVoiceprintFill, RiSettings3Fill } from "react-icons/ri";
// import { BsFillCameraVideoFill, BsFillPersonFill, BsFillLightningFill } from "react-icons/bs";
// import { AiOutlineRadarChart, AiFillAudio } from "react-icons/ai";

// const features = [
//   "نظام التحكم بالمناخ الذكي",
//   "نظام الإضاءة التفاعلية",
//   "نظام التعرف على المشاة",
//   "نظام التحكم بالتسارع التكيفي",
//   "نظام الرؤية المحيطية ثلاثية الأبعاد",
//   "نظام التحكم بالجر الذكي",
//   "نظام القيادة الذاتية",
//   "شاشة عرض على الزجاج الأمامي",
//   "نظام رؤية ليلية",
//   "التعرف على إشارات المرور",
//   "نظام تثبيت المسار التكيفي",
//   "نظام التحذير من مغادرة المسار",
//   "شاشة ترفيه خلفية",
//   "نظام تبريد المقاعد الخلفية",
//   "نظام تعليق متكيف",
//   "نظام التحكم بالمرايا الافتراضية",
//   "نظام التعرف على الصوت",
//   "نظام الملاحة المتقدم",
//   "كاميرا رؤية محيطية",
//   "نظام التحكم بالمقاعد الرياضية",
//   "نظام التحكم بالإضاءة الديناميكية",
//   "نظام التحكم بالمسافة النشط",
//   "نظام التحكم بالإضاءة الخارجية",
//   "نظام التحكم بالزجاج الذكي",
//   "نظام التحكم بالإضاءة الداخلية التفاعلية",
//   "نظام التحكم بالإضاءة الخارجية التكيفية",
//   "نظام التحكم بالزجاج العازل للحرارة",
//   "نظام التحكم بالإضاءة الداخلية الذكية",
//   "نظام التحكم بالمرايا الخلفية الافتراضية",
//   "نظام التحكم بالإضاءة الخارجية الذكية",
//   "نظام التحكم بالزجاج الخلفي الذكي",
//   "نظام القيادة على الطرق الوعرة",
//   "نظام التحكم عن بُعد عبر التطبيق",
//   "نظام شحن توربيني",
//   "نظام الدفع الكهربائي",
//   "نظام مراقبة السائق",
//   "نظام مساعدة الركن التلقائي",
//   "نظام مراقبة ضغط الإطارات",
//   "نظام تحديد المواقع (GPS) مدمج",
//   "نظام الكبح التلقائي في حالات الطوارئ",
//   "نظام التعرف على بصمة الوجه",
//   "نظام التحكم بالمفتاح الذكي",
//   "نظام التعرف على حالة الطريق",
//   "نظام التحكم بالمقاعد الخلفية كهربائيًا",
//   "نظام التحكم بالمرايا الجانبية عبر الكاميرا",
//   "نظام مراقبة جودة الهواء داخل السيارة",
//   "نظام تنقية الهواء",
//   "نظام الاتصال بالطوارئ",
//   "نظام التحكم بالمرايا الافتراضية المتعددة"
// ];

// const icons = [
//   <MdOutlineAcUnit />, <MdOutlineLightMode />, <MdSensors />, <MdOutlineSpeed />, <MdCamera />, <GiCarWheel />,
//   <MdElectricCar />, <MdOutlineDashboard />, <MdOutlineNightlight />, <AiOutlineRadarChart />, <GiRoad />, <MdGesture />,
//   <BsFillCameraVideoFill />, <GiCarSeat />, <RiSettings3Fill />, <GiAutoRepair />, <RiVoiceprintFill />, <MdGpsFixed />,
//   <MdCamera />, <GiCarSeat />, <MdOutlineLightMode />, <MdOutlineSpeed />, <MdOutlineLightMode />, <MdOutlineAcUnit />,
//   <MdOutlineLightMode />, <MdOutlineLightMode />, <MdOutlineAcUnit />, <MdCamera />, <MdOutlineLightMode />, <MdCamera />,
//   <GiRoad />, <GiCarKey />, <GiGasPump />, <GiElectric />, <BsFillPersonFill />, <MdCamera />, <GiCarWheel />, <MdGpsFixed />,
//   <MdOutlineSpeed />, <BsFillPersonFill />, <GiCarKey />, <AiOutlineRadarChart />, <GiCarSeat />, <MdCamera />, <MdOutlineAcUnit />,
//   <MdOutlineAcUnit />, <MdGpsFixed />, <MdCamera />
// ];

// export default function CarFeaturesForm() {
//   const [selected, setSelected] = useState([]);

//   const toggleFeature = (feature) => {
//     setSelected((prev) =>
//       prev.includes(feature)
//         ? prev.filter((f) => f !== feature)
//         : [...prev, feature]
//     );
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">مزايا السيارة</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {features.map((feature, index) => (
//           <div
//             key={feature}
//             className={`flex items-center p-4 rounded-xl shadow-md border transition cursor-pointer space-x-3 rtl:space-x-reverse ${
//               selected.includes(feature)
//                 ? "bg-blue-100 border-blue-400"
//                 : "bg-white"
//             }`}
//             onClick={() => toggleFeature(feature)}
//           >
//             <div className="text-xl text-blue-600">
//               {icons[index % icons.length]}
//             </div>
//             <div className="flex-1 text-right">{feature}</div>
//             {selected.includes(feature) && (
//               <FaCheckCircle className="text-green-500 text-xl" />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  MdElectricBolt,
  MdAcUnit,
  MdWbSunny,
  MdChair,
  MdDisplaySettings,
  MdDashboard,
  MdKey,
  MdRadar,
  MdVisibility,
  MdLightbulb,
  MdCameraAlt,
  Md360,
  MdGraphicEq,
  MdSettings,
  MdSpeed,
  MdAir,
  MdFingerprint,
  MdSecurity,
  MdLocalCarWash,
  MdOutlineDoorBack,
  MdAirlineSeatReclineExtra,
  MdMemory,
  MdHighlight,
  MdMic,
  MdToys,
  MdRoofing,
  MdDirectionsCar,
  MdNightlight,
  MdTraffic,
  MdAirlineSeatFlat,
  MdAirlineSeatIndividualSuite,
  MdOpenInFull,
  MdTune,
  MdAirplay,
  MdUsb,
  MdVoiceOverOff,
  MdVisibilityOff,
  MdLocalParking,
  MdBatteryChargingFull,

  MdElectricCar,
  MdLock,
  MdVideocam,
  MdSportsScore,
  MdWheelchairPickup,
  MdBrightnessAuto,
  MdGpsFixed,
  MdWarning,
  MdEmergency,
  //MdHybrid,
  //MdAirFilter,
  MdBrightnessHigh,
  MdLocationOn,
  MdVibration,
  MdHearing,
  MdAccessibility,
  MdChildFriendly,
  MdFace,
  MdLight,
  MdSettingsInputAntenna,
  MdSettingsRemote,
  MdSettingsBrightness,
  MdSettingsSuggest,
  MdSettingsVoice,
  MdSettingsInputComponent,
  MdSettingsAccessibility,
  MdSettingsApplications,
  MdSettingsInputHdmi,
  MdSettingsInputSvideo,
  MdSettingsSystemDaydream,
  MdSettingsEthernet,
  MdSettingsPhone,
  MdSettingsPower,
  MdSettingsOverscan,
} from "react-icons/md";

const featuresList = [
  "شحن لاسلكي",
  "كراسي مبردة",
  "كراسي مدفئة",
  "كراسي جلد",
  "شاشة أمامية",
  "عدادات ديجيتال",
  "الدخول بدون مفتاح ( بصمة)",
  "تتبع المسار",
  "النقطة العمياء",
  "أضوية LED",
  "كاميرا خلفية",
  "كاميرا 360 درجة",
  "سقف بانوراما",
  "نظام صوتي",
  "تحكم ستيرنج",
  "مثبت سرعة",
  "حساسات أمامية",
  "حساسات خلفية",
  "بصمة تشغيل",
  "نظام الرادار",
  "مانع تصادم",
  "تدفئة ستيرنج",
  "دفع الرباعي",
  "حساسات ضغط الإطارات",
  "رشاشات أضوية",
  "أضواء زينون",
  "باب خلفي كهربائي",
  "نظام تعليق هوائي",
  "أبواب شفط",
  "ذاكرة كراسي",
  "كراسي كهربائية",
  "نظام القيادة الذاتية",
  "شاشة عرض على الزجاج الأمامي",
  "نظام رؤية ليلية",
  "التعرف على إشارات المرور",
  "نظام تثبيت المسار التكيفي",
  "نظام التحذير من مغادرة المسار",
  "شاشة ترفيه خلفية",
  "نظام تبريد المقاعد الخلفية",
  "نظام تدفئة المقاعد الخلفية",
  "فتحة سقف كهربائية",
  "نظام تعليق متكيف",
  "نظام التحكم بالمناخ متعدد المناطق",
  "مرايا جانبية كهربائية قابلة للطي",
  "نظام صوتي فاخر",
  "شاحن USB-C",
  "نظام التعرف على الصوت",
  "نظام الملاحة المتقدم",
  "نظام مراقبة السائق",
  "كاميرا رؤية محيطية",
  "نظام مساعدة الركن التلقائي",
  "نظام التحكم بالجر",
  "أوضاع قيادة متعددة",
  "إضاءة داخلية محيطة",
  "مرايا داخلية ذات تعتيم تلقائي",
  "نظام التحكم عن بُعد عبر التطبيق",
  "نظام شحن توربيني",
  "نظام هجين",
  "نظام الدفع الكهربائي",
  "نظام الفرامل المانعة للانغلاق (ABS)",
  "نظام توزيع قوة الفرامل الإلكترونية (EBD)",
  "نظام التحكم في الثبات (ESP)",
  "نظام مساعدة صعود المرتفعات",
  "نظام مساعدة نزول المنحدرات",
  "نظام تحديد المواقع (GPS) مدمج",
  "مقاعد قابلة للطي كهربائيًا",
  "نظام تنبيه حركة المرور الخلفية",
  "نظام التحذير من الاصطدام الأمامي",
  "نظام الكبح التلقائي في حالات الطوارئ",
  "نظام التحكم التكيفي بالسرعة",
  "حساسات المطر",
  "مرايا جانبية مدفأة",
  "نظام تنظيف المصابيح الأمامية",
  "عجلات سبيكة خاصة",
  "نظام مراقبة ضغط الهواء في المكيف",
  "نظام تشغيل المحرك عن بُعد",
  "نظام قفل الأبواب التلقائي",
  "نظام حماية ضد السرقة",
  "كاميرا داش كام مدمجة",
  "نظام عرض المعلومات على لوحة القيادة",
  "مقاعد رياضية",
  "عجلة قيادة رياضية",
  "دواسات رياضية",
  "نظام تعليق رياضي",
  "نظام عادم رياضي",
  "أنابيب عادم مزدوجة",
  "جناح خلفي ديناميكي",
  "نظام تبريد المحرك المتقدم",
  "نظام شحن البطارية الذكي",
  "نظام استعادة طاقة الفرامل",
  "نظام التحكم بالضوضاء النشط",
  "زجاج عازل للصوت",
  "نظام إغلاق هادئ للأبواب",
  "نظام تكييف خلفي مستقل",
  "ستائر خلفية كهربائية",
  "نظام مساج في المقاعد",
  "مقاعد قابلة للتعديل بزوايا متعددة",
  "نظام تهوية المقاعد",
  "نظام إضاءة ديناميكية",
  "نظام تحذير من السرعة الزائدة",
  "نظام التعرف على الإيماءات",
  "نظام الاتصال بالطوارئ",
  "نظام مراقبة جودة الهواء داخل السيارة",
  "نظام تنقية الهواء",
  "نظام التحكم بالإضاءة التلقائي",
  "نظام تتبع المركبة عبر GPS",
  "نظام تحديد المواقع في الوقت الحقيقي",
  "نظام التحكم بالتعليق المغناطيسي",
  "نظام التحكم بالصوت النشط",
  "نظام التحكم بالإمالة",
  "نظام التحكم بالتسارع الذكي",
  "نظام الحماية من الانقلاب",
  "نظام التحكم بالإضاءة التكيفية",
  "نظام التحكم بالمسافة مع المركبات",
  "نظام تحذير الاصطدام الجانبي",
  "نظام التحكم بالزاوية الميتة النشط",
  "نظام الشحن السريع للسيارات الكهربائية",
  "نظام التحكم بالمنحدرات الجانبية",
  "نظام تثبيت مقاعد الأطفال (ISOFIX)",
  "نظام الكشف عن التعب للسائق",
  "نظام التحكم بالإضاءة الداخلية متعدد الألوان",
  "نظام التحكم بالمقاعد الخلفية كهربائيًا",
  "نظام التبريد لصندوق التخزين",
  "نظام التحكم بالمرايا الجانبية عبر الكاميرا",
  "نظام الصوت ثلاثي الأبعاد",
  "نظام التحكم بالثبات على الطرق الوعرة",
  "نظام التحكم بالإطارات الذكية",
  "نظام التحكم بالتعليق النشط",
  "نظام التحكم بالدفع الذكي",
  "نظام التعرف على بصمة الوجه",
  "نظام التحكم بالمفتاح الذكي",
  "نظام التحكم بالإضاءة المحيطية الديناميكية",
  "نظام التعرف على التضاريس",
  "نظام التحكم بالمكابح النشطة",
  "نظام التحكم بالدفع المتغير",
  "نظام التحكم بالإطارات متعددة الأوضاع",
  "نظام الصوت الخارجي التكيفي",
  "نظام التحكم بالمرايا الذكية متعددة الزوايا",
  "نظام التحكم بالزجاج المتغير اللون",
  "نظام التحكم بالمقاعد الديناميكية",
  "نظام التحكم بالتعليق متعدد المستويات",
  "نظام التحكم بالإضاءة الخارجية متعددة الأنماط",
  "نظام التعرف على حالة السائق",
  "نظام التحكم بالمناخ النشط",
  "نظام التحكم بالمرايا الخلفية التكيفية",
  "نظام التحكم بالإضاءة الداخلية متعددة المناطق",
  "نظام التحكم بالمقاعد الخلفية المتعددة الاتجاهات",
  "نظام التحكم بالزجاج الخلفي النشط",
  "نظام التحكم بالإضاءة الداخلية التفاعلية",
  "نظام التحكم بالمرايا الجانبية الديناميكية",
  "نظام التحكم بالإضاءة الخارجية متعددة الوظائف",
  "نظام التحكم بالمقاعد الخلفية التكيفية",
  "نظام التحكم بالزجاج الخلفي متعدد الأنماط",
  "نظام التحكم بالإضاءة الداخلية المتكيفة",
  "نظام التحكم بالمرايا الجانبية متعددة الأوضاع",
  "نظام التحكم بالإضاءة الخارجية المتكيفة",
  "نظام التحكم بالمقاعد الخلفية متعددة المستويات",
  "نظام التحكم بالزجاج الخلفي الديناميكي",
  "نظام التحكم بالإضاءة الداخلية متعددة التصاميم",
  "نظام التحكم بالمرايا الجانبية النشطة",
  "نظام التحكم بالإضاءة الخارجية متعددة الزوايا",
  "نظام التحكم بالمقاعد الخلفية الديناميكية",
  "نظام التحكم بالزجاج الخلفي التكيفي",
  "نظام التحكم بالإضاءة الداخلية متعددة الألوان",
  "نظام التحكم بالمرايا الجانبية متعددة التصاميم",
  "نظام التحكم بالإضاءة الخارجية الديناميكية",
  "نظام التحكم بالمقاعد الخلفية متعددة الوظائف",
  "نظام التحكم بالزجاج الخلفي النشط متعدد الوظائف",
  "نظام التحكم بالإضاءة الداخلية متعددة المستويات",
  "نظام التحكم بالمرايا الجانبية التفاعلية",
  "نظام التحكم بالإضاءة الخارجية متعددة التصاميم",
];

const iconMap = {
  "شحن لاسلكي": <MdElectricBolt className="w-5 h-5 text-yellow-500" />,
  "كراسي مبردة": <MdAcUnit className="w-5 h-5 text-sky-500" />,
  "كراسي مدفئة": <MdWbSunny className="w-5 h-5 text-red-500" />,
  "كراسي جلد": <MdChair className="w-5 h-5 text-yellow-700" />,
  "شاشة أمامية": <MdDisplaySettings className="w-5 h-5 text-indigo-500" />,
  "عدادات ديجيتال": <MdDashboard className="w-5 h-5 text-green-600" />,
  "الدخول بدون مفتاح ( بصمة)": <MdKey className="w-5 h-5 text-amber-600" />,
  "تتبع المسار": <MdRadar className="w-5 h-5 text-purple-600" />,
  "النقطة العمياء": <MdVisibility className="w-5 h-5 text-pink-500" />,
  "أضوية LED": <MdLightbulb className="w-5 h-5 text-yellow-400" />,
  "كاميرا خلفية": <MdCameraAlt className="w-5 h-5 text-gray-700" />,
  "كاميرا 360 درجة": <Md360 className="w-5 h-5 text-blue-600" />,
  "سقف بانوراما": <MdRoofing className="w-5 h-5 text-orange-400" />,
  "نظام صوتي": <MdGraphicEq className="w-5 h-5 text-violet-500" />,
  "تحكم ستيرنج": <MdSettings className="w-5 h-5 text-rose-400" />,
  "مثبت سرعة": <MdSpeed className="w-5 h-5 text-cyan-600" />,
  "حساسات أمامية": <MdAir className="w-5 h-5 text-lime-500" />,
  "حساسات خلفية": <MdAir className="w-5 h-5 text-emerald-600" />,
  "بصمة تشغيل": <MdFingerprint className="w-5 h-5 text-fuchsia-500" />,
  "نظام الرادار": <MdRadar className="w-5 h-5 text-blue-800" />,
  "مانع تصادم": <MdSecurity className="w-5 h-5 text-rose-700" />,
  "تدفئة ستيرنج": <MdWbSunny className="w-5 h-5 text-red-400" />,
  "دفع الرباعي": <MdToys className="w-5 h-5 text-stone-700" />,
  "حساسات ضغط الإطارات": <MdDashboard className="w-5 h-5 text-orange-700" />,
  "رشاشات أضوية": <MdLocalCarWash className="w-5 h-5 text-cyan-500" />,
  "أضواء زينون": <MdHighlight className="w-5 h-5 text-blue-400" />,
  "باب خلفي كهربائي": <MdOutlineDoorBack className="w-5 h-5 text-gray-600" />,
  "نظام تعليق هوائي": <MdSettings className="w-5 h-5 text-gray-800" />,
  "أبواب شفط": <MdOutlineDoorBack className="w-5 h-5 text-pink-600" />,
  "ذاكرة كراسي": <MdMemory className="w-5 h-5 text-purple-500" />,
  "كراسي كهربائية": <MdAirlineSeatReclineExtra className="w-5 h-5 text-green-700" />,
  "نظام القيادة الذاتية": <MdDirectionsCar className="w-5 h-5 text-blue-700" />,
  "شاشة عرض على الزجاج الأمامي": <MdDisplaySettings className="w-5 h-5 text-indigo-600" />,
  "نظام رؤية ليلية": <MdNightlight className="w-5 h-5 text-gray-900" />,
  "التعرف على إشارات المرور": <MdTraffic className="w-5 h-5 text-green-500" />,
  "نظام تثبيت المسار التكيفي": <MdRadar className="w-5 h-5 text-purple-700" />,
  "نظام التحذير من مغادرة المسار": <MdWarning className="w-5 h-5 text-yellow-600" />,
  "شاشة ترفيه خلفية": <MdAirplay className="w-5 h-5 text-blue-500" />,
  "نظام تبريد المقاعد الخلفية": <MdAcUnit className="w-5 h-5 text-sky-600" />,
  "نظام تدفئة المقاعد الخلفية": <MdWbSunny className="w-5 h-5 text-red-600" />,
  "فتحة سقف كهربائية": <MdRoofing className="w-5 h-5 text-orange-500" />,
  "نظام تعليق متكيف": <MdTune className="w-5 h-5 text-gray-700" />,
  "نظام التحكم بالمناخ متعدد المناطق": <MdAir className="w-5 h-5 text-teal-500" />,
  "مرايا جانبية كهربائية قابلة للطي": <MdSettings className="w-5 h-5 text-gray-600" />,
  "نظام صوتي فاخر": <MdGraphicEq className="w-5 h-5 text-violet-600" />,
  "شاحن USB-C": <MdUsb className="w-5 h-5 text-blue-400" />,
  "نظام التعرف على الصوت": <MdMic className="w-5 h-5 text-red-500" />,
  "نظام الملاحة المتقدم": <MdGpsFixed className="w-5 h-5 text-green-700" />,
  "نظام مراقبة السائق": <MdVisibility className="w-5 h-5 text-pink-600" />,
  "كاميرا رؤية محيطية": <Md360 className="w-5 h-5 text-blue-700" />,
  "نظام مساعدة الركن التلقائي": <MdLocalParking className="w-5 h-5 text-gray-500" />,
  "نظام التحكم بالجر": <MdTune className="w-5 h-5 text-gray-800" />,
  "أوضاع قيادة متعددة": <MdSettings className="w-5 h-5 text-rose-500" />,
  "إضاءة داخلية محيطة": <MdLight className="w-5 h-5 text-amber-500" />,
  "مرايا داخلية ذات تعتيم تلقائي": <MdSettingsBrightness className="w-5 h-5 text-gray-600" />,
  "نظام التحكم عن بُعد عبر التطبيق": <MdSettingsRemote className="w-5 h-5 text-blue-500" />,
  "نظام شحن توربيني": <MdBatteryChargingFull className="w-5 h-5 text-yellow-600" />,
//   "نظام هجين": <MdHybrid className="w-5 h-5 text-green-600" />,
  "نظام الدفع الكهربائي": <MdElectricCar className="w-5 h-5 text-blue-600" />,
  "نظام الفرامل المانعة للانغلاق (ABS)": <MdSecurity className="w-5 h-5 text-red-700" />,
  "نظام توزيع قوة الفرامل الإلكترونية (EBD)": <MdTune className="w-5 h-5 text-gray-700" />,
  "نظام التحكم في الثبات (ESP)": <MdSettingsSuggest className="w-5 h-5 text-blue-700" />,
  "نظام مساعدة صعود المرتفعات": <MdDirectionsCar className="w-5 h-5 text-gray-600" />,
  "نظام مساعدة نزول المنحدرات": <MdDirectionsCar className="w-5 h-5 text-gray-700" />,
  "نظام تحديد المواقع (GPS) مدمج": <MdGpsFixed className="w-5 h-5 text-green-600" />,
  "مقاعد قابلة للطي كهربائيًا": <MdAirlineSeatReclineExtra className="w-5 h-5 text-green-800" />,
  "نظام تنبيه حركة المرور الخلفية": <MdWarning className="w-5 h-5 text-yellow-700" />,
  "نظام التحذير من الاصطدام الأمامي": <MdWarning className="w-5 h-5 text-red-600" />,
  "نظام الكبح التلقائي في حالات الطوارئ": <MdSecurity className="w-5 h-5 text-red-800" />,
  "نظام التحكم التكيفي بالسرعة": <MdSpeed className="w-5 h-5 text-cyan-700" />,
  "حساسات المطر": <MdAir className="w-5 h-5 text-blue-500" />,
  "مرايا جانبية مدفأة": <MdWbSunny className="w-5 h-5 text-red-500" />,
  "نظام تنظيف المصابيح الأمامية": <MdLocalCarWash className="w-5 h-5 text-cyan-600" />,
  "عجلات سبيكة خاصة": <MdSettings className="w-5 h-5 text-gray-700" />,
  "نظام مراقبة ضغط الهواء في المكيف": <MdAir className="w-5 h-5 text-teal-600" />,
  "نظام تشغيل المحرك عن بُعد": <MdSettingsRemote className="w-5 h-5 text-blue-600" />,
  "نظام قفل الأبواب التلقائي": <MdLock className="w-5 h-5 text-gray-600" />,
  "نظام حماية ضد السرقة": <MdSecurity className="w-5 h-5 text-red-700" />,
  "كاميرا داش كام مدمجة": <MdVideocam className="w-5 h-5 text-gray-600" />,
  "نظام عرض المعلومات على لوحة القيادة": <MdDashboard className="w-5 h-5 text-green-700" />,
  "مقاعد رياضية": <MdAirlineSeatFlat className="w-5 h-5 text-red-600" />,
  "عجلة قيادة رياضية": <MdSettings className="w-5 h-5 text-gray-800" />,
  "دواسات رياضية": <MdSportsScore className="w-5 h-5 text-gray-700" />,
  "نظام تعليق رياضي": <MdTune className="w-5 h-5 text-gray-600" />,
  "نظام عادم رياضي": <MdSettings className="w-5 h-5 text-gray-900" />,
  "أنابيب عادم مزدوجة": <MdSettings className="w-5 h-5 text-gray-800" />,
  "جناح خلفي ديناميكي": <MdSettings className="w-5 h-5 text-gray-700" />,
  "نظام تبريد المحرك المتقدم": <MdAcUnit className="w-5 h-5 text-blue-600" />,
  "نظام شحن البطارية الذكي": <MdBatteryChargingFull className="w-5 h-5 text-yellow-700" />,
  "نظام استعادة طاقة الفرامل": <MdBatteryChargingFull className="w-5 h-5 text-green-600" />,
  "نظام التحكم بالضوضاء النشط": <MdHearing className="w-5 h-5 text-gray-600" />,
  "زجاج عازل للصوت": <MdSettings className="w-5 h-5 text-gray-700" />,
  "نظام إغلاق هادئ للأبواب": <MdOutlineDoorBack className="w-5 h-5 text-gray-600" />,
  "نظام تكييف خلفي مستقل": <MdAir className="w-5 h-5 text-teal-700" />,
  "ستائر خلفية كهربائية": <MdSettings className="w-5 h-5 text-gray-600" />,
  "نظام مساج في المقاعد": <MdAirlineSeatIndividualSuite className="w-5 h-5 text-purple-600" />,
  "مقاعد قابلة للتعديل بزوايا متعددة": <MdAirlineSeatReclineExtra className="w-5 h-5 text-green-600" />,
  "نظام تهوية المقاعد": <MdAir className="w-5 h-5 text-blue-600" />,
  "نظام إضاءة ديناميكية": <MdLight className="w-5 h-5 text-amber-600" />,
  "نظام تحذير من السرعة الزائدة": <MdWarning className="w-5 h-5 text-red-700" />,
  "نظام التعرف على الإيماءات": <MdAccessibility className="w-5 h-5 text-blue-500" />,
  "نظام الاتصال بالطوارئ": <MdEmergency className="w-5 h-5 text-red-600" />,
//   "نظام مراقبة جودة الهواء داخل السيارة": <MdAirFilter className="w-5 h-5 text-green-600" />,
//   "نظام تنقية الهواء": <MdAirFilter className="w-5 h-5 text-green-700" />,
  "نظام التحكم بالإضاءة التلقائي": <MdBrightnessAuto className="w-5 h-5 text-yellow-500" />,
  "نظام تتبع المركبة عبر GPS": <MdLocationOn className="w-5 h-5 text-blue-600" />,
  "نظام تحديد المواقع في الوقت الحقيقي": <MdLocationOn className="w-5 h-5 text-blue-700" />,
  "نظام التحكم بالتعليق المغناطيسي": <MdTune className="w-5 h-5 text-gray-600" />,
  "نظام التحكم بالصوت النشط": <MdHearing className="w-5 h-5 text-gray-700" />,
  "نظام التحكم بالإمالة": <MdSettings className="w-5 h-5 text-gray-600" />,
  "نظام التحكم بالتسارع الذكي": <MdSpeed className="w-5 h-5 text-cyan-600" />,
  "نظام الحماية من الانقلاب": <MdSecurity className="w-5 h-5 text-red-600" />,
  "نظام التحكم بالإضاءة التكيفية": <MdBrightnessHigh className="w-5 h-5 text-yellow-600" />,
  "نظام التحكم بالمسافة مع المركبات": <MdRadar className="w-5 h-5 text-blue-600" />,
  "نظام تحذير الاصطدام الجانبي": <MdWarning className="w-5 h-5 text-red-600" />,
  "نظام التحكم بالزاوية الميتة النشط": <MdVisibility className="w-5 h-5 text-pink-700" />,
  "نظام الشحن السريع للسيارات الكهربائية": <MdBatteryChargingFull className="w-5 h-5 text-yellow-600" />,
  "نظام التحكم بالمنحدرات الجانبية": <MdDirectionsCar className="w-5 h-5 text-gray-600" />,
  "نظام تثبيت مقاعد الأطفال (ISOFIX)": <MdChildFriendly className="w-5 h-5 text-blue-600" />,
  "نظام الكشف عن التعب للسائق": <MdVisibilityOff className="w-5 h-5 text-gray-600" />,
  "نظام التحكم بالإضاءة الداخلية متعدد الألوان": <MdLight className="w-5 h-5 text-amber-700" />,
  "نظام التحكم بالمقاعد الخلفية كهربائيًا": <MdAirlineSeatReclineExtra className="w-5 h-5 text-green-600" />,
  "نظام التبريد لصندوق التخزين": <MdAcUnit className="w-5 h-5 text-blue-600" />,
  "نظام التحكم بالمرايا الجانبية عبر الكاميرا": <MdCameraAlt className="w-5 h-5 text-gray-700" />,
  "نظام الصوت ثلاثي الأبعاد": <MdGraphicEq className="w-5 h-5 text-violet-700" />,
  "نظام التحكم بالثبات على الطرق الوعرة": <MdDirectionsCar className="w-5 h-5 text-gray-700" />,
  "نظام التحكم بالإطارات الذكية": <MdSettings className="w-5 h-5 text-gray-600" />,
  "نظام التحكم بالتعليق النشط": <MdTune className="w-5 h-5 text-gray-700" />,
  "نظام التحكم بالدفع الذكي": <MdSettingsSuggest className="w-5 h-5 text-blue-600" />,
  "نظام التعرف على بصمة الوجه": <MdFace className="w-5 h-5 text-pink-600" />,
  "نظام التحكم بالمفتاح الذكي": <MdKey className="w-5 h-5 text-amber-700" />,
  "نظام التحكم بالإضاءة المحيطية الديناميكية": <MdLight className="w-5 h-5 text-amber-600" />,
  "نظام التعرف على التضاريس": <MdDirectionsCar className="w-5 h-5 text-gray-600" />,
  "نظام التحكم بالمكابح النشطة": <MdSecurity className="w-5 h-5 text-red-600" />,
  "نظام التحكم بالدفع المتغير": <MdSettingsSuggest className="w-5 h-5 text-blue-600" />,
  "نظام التحكم بالإطارات متعددة الأوضاع": <MdSettings className="w-5 h-5 text-gray-600" />,
  "نظام الصوت الخارجي التكيفي": <MdGraphicEq className="w-5 h-5 text-violet-600" />,
  "نظام التحكم بالمرايا الذكية متعددة الزوايا": <MdSettingsInputAntenna className="w-5 h-5 text-gray-600" />,
  "نظام التحكم بالزجاج المتغير اللون": <MdSettingsBrightness className="w-5 h-5 text-gray-600" />,
  "نظام التحكم بالمقاعد الديناميكية": <MdAirlineSeatReclineExtra className="w-5 h-5 text-green-600" />,
  "نظام التحكم بالتعليق متعدد المستويات": <MdTune className="w-5 h-5 text-gray-600" />,
  "نظام التحكم بالإضاءة الخارجية متعددة الأنماط": <MdBrightnessHigh className="w-5 h-5 text-yellow-600" />,
  "نظام التعرف على حالة السائق": <MdVisibility className="w-5 h-5 text-pink-600" />,
  "نظام التحكم بالمناخ النشط": <MdAir className="w-5 h-5 text-teal-600" />,
  "نظام التحكم بالمرايا الخلفية التكيفية": <MdSettingsBrightness className="w-5 h-5 text-gray-600" />,
  "نظام التحكم بالإضاءة الداخلية متعددة المناطق": <MdLight className="w-5 h-5 text-amber-600" />,
  "نظام التحكم بالمقاعد الخلفية المتعددة الاتجاهات": <MdAirlineSeatReclineExtra className="w-5 h-5 text-green-600" />,
  "نظام التحكم بالزجاج الخلفي النشط": <MdSettingsBrightness className="w-5 h-5 text-gray-600" />,
  "نظام التحكم بالإضاءة الداخلية التفاعلية": <MdLight className="w-5 h-5 text-amber-600" />,
  "نظام التحكم بالمرايا الجانبية الديناميكية": <MdSettingsInputAntenna className="w-5 h-5 text-gray-600" />,
  "نظام التحكم بالإضاءة الخارجية متعددة الوظائف": <MdBrightnessHigh className="w-5 h-5 text-yellow-600" />,
  "نظام التحكم بالمقاعد الخلفية التكيفية": <MdAirlineSeatReclineExtra className="w-5 h-5 text-green-600" />,
  "نظام التحكم بالزجاج الخلفي متعدد الأنماط": <MdSettingsBrightness className="w-5 h-5 text-gray-600" />,
  "نظام التحكم بالإضاءة الداخلية المتكيفة": <MdLight className="w-5 h-5 text-amber-600" />,
  "نظام التحكم بالمرايا الجانبية متعددة الأوضاع": <MdSettingsInputAntenna className="w-5 h-5 text-gray-600" />,
  "نظام التحكم بالإضاءة الخارجية المتكيفة": <MdBrightnessHigh className="w-5 h-5 text-yellow-600" />,
  "نظام التحكم بالمقاعد الخلفية متعددة المستويات": <MdAirlineSeatReclineExtra className="w-5 h-5 text-green-600" />,
  "نظام التحكم بالزجاج الخلفي الديناميكي": <MdSettingsBrightness className="w-5 h-5 text-gray-600" />,
  "نظام التحكم بالإضاءة الداخلية متعددة التصاميم": <MdLight className="w-5 h-5 text-amber-600" />,
  "نظام التحكم بالمرايا الجانبية النشطة": <MdSettingsInputAntenna className="w-5 h-5 text-gray-600" />,
  "نظام التحكم بالإضاءة الخارجية متعددة الزوايا": <MdBrightnessHigh className="w-5 h-5 text-yellow-600" />,
  "نظام التحكم بالمقاعد الخلفية الديناميكية": <MdAirlineSeatReclineExtra className="w-5 h-5 text-green-600" />,
  "نظام التحكم بالزجاج الخلفي التكيفي": <MdSettingsBrightness className="w-5 h-5 text-gray-600" />,
  "نظام التحكم بالإضاءة الداخلية متعددة الألوان": <MdLight className="w-5 h-5 text-amber-600" />,
  "نظام التحكم بالمرايا الجانبية متعددة التصاميم": <MdSettingsInputAntenna className="w-5 h-5 text-gray-600" />,
 
 "نظام التحكم بالإضاءة الخارجية الديناميكية": <MdBrightnessHigh className="w-5 h-5 text-yellow-600" />,
  "نظام التحكم بالمقاعد الخلفية متعددة الوظائف": <MdAirlineSeatReclineExtra className="w-5 h-5 text-green-600" />,
  "نظام التحكم بالزجاج الخلفي النشط متعدد الوظائف": <MdSettingsBrightness className="w-5 h-5 text-gray-600" />,
  "نظام التحكم بالإضاءة الداخلية متعددة المستويات": <MdLight className="w-5 h-5 text-amber-600" />,
  "نظام التحكم بالمرايا الجانبية التفاعلية": <MdSettingsInputAntenna className="w-5 h-5 text-gray-600" />,
  "نظام التحكم بالإضاءة الخارجية متعددة التصاميم": <MdBrightnessHigh className="w-5 h-5 text-yellow-600" />,
};

export default function CarOptionPage() {
  const [selected, setSelected] = useState([]);

  const toggleFeature = (feature) => {
    setSelected((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  return (
    <Card className="max-w-6xl mx-auto p-6 mt-8 shadow-xl rounded-2xl border border-gray-200 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">إضافات السيارة</h2>
      <div className="max-h-[600px] overflow-y-auto pr-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuresList.map((feature) => {
            const isSelected = selected.includes(feature);
            return (
              <div
                key={feature}
                className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 cursor-pointer hover:bg-gray-50 ${
                  isSelected ? "bg-blue-50 border-blue-500" : "bg-white"
                }`}
                onClick={() => toggleFeature(feature)}
              >
                <Checkbox
                  checked={isSelected}
                  onCheckedChange={() => toggleFeature(feature)}
                />
                {iconMap[feature] ?? <MdSettings className="w-5 h-5 text-gray-500" />}
                <label className="cursor-pointer text-right flex-1 text-gray-700 font-medium">
                  {feature}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}