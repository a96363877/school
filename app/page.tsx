import Image from "next/image"
import {
  ArrowLeft,
  Award,
  Book,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  GraduationCap,
  MapPin,
  Phone,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-blue-600 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
            <Image
              src="/site-logo.png"
              alt="شعار مدرسة القيادة"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium hidden md:inline">عربي</span>
            <Image
              src="/Flag_of_Saudi_Arabia.svg.webp"
              alt="العلم"
              width={30}
              height={20}
              className="h-5 w-auto rounded"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/vid.mp4" type="video/mp4" />
          {/* Fallback image for browsers that don't support video */}
          <Image
            src="/placeholder.svg?height=500&width=1200"
            alt="تدريب القيادة"
            width={1200}
            height={500}
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight">
                أتقن القيادة مع التدريب المهني
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-6">
                انضم إلى آلاف الخريجين الناجحين الذين تعلموا القيادة بأمان وثقة مع مدربينا الخبراء
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  ابدأ رحلتك
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                >
                  شاهد قصتنا
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-5 w-5"
                  >
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-transparent"></div>
      </section>

      {/* School Logo Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="bg-blue-100 rounded-full p-6 mb-4">
            <div className="bg-white rounded-full p-4">
              <Image
                src="/site-logo.png"
                alt="شعار المدرسة"
                width={80}
                height={80}
                className="h-16 w-16"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold text-center text-blue-800">مدرسة التميز لتعليم القيادة</h2>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <GraduationCap className="h-8 w-8 text-red-500 mb-2" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">+٣٠٠ ألف</h3>
              <p className="text-sm text-gray-600 text-center">خريج</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-8 w-8 text-red-500 mb-2" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">+٢٣٠ ألف</h3>
              <p className="text-sm text-gray-600 text-center">ساعة ميدانية</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-red-500 mb-2" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">+١٠٠ ألف</h3>
              <p className="text-sm text-gray-600 text-center">ساعة تدريب</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-red-500 mb-2" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">+٣٠٠</h3>
              <p className="text-sm text-gray-600 text-center">مدرب ومدربة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-center mb-8 text-blue-800">برامج تدريبية شاملة</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Book className="h-6 w-6 text-blue-800" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">التدريب النظري</h3>
                <p className="text-sm text-gray-600">جلسات فصول دراسية شاملة تغطي قوانين المرور وبروتوكولات السلامة</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <MapPin className="h-6 w-6 text-blue-800" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">التدريب العملي</h3>
                <p className="text-sm text-gray-600">خبرة قيادة عملية مع مدربين محترفين في ظروف المرور الحقيقية</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <FileText className="h-6 w-6 text-blue-800" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">التحضير للامتحان</h3>
                <p className="text-sm text-gray-600">تدريب متخصص لمساعدتك على اجتياز الامتحانات النظرية والعملية</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Calendar className="h-6 w-6 text-blue-800" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">جدولة مرنة</h3>
                <p className="text-sm text-gray-600">اختر أوقات التدريب التي تناسب جدولك مع خيارات صباحية ومسائية</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <CheckCircle className="h-6 w-6 text-blue-800" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">مدربون معتمدون</h3>
                <p className="text-sm text-gray-600">تعلم من محترفين ذوي خبرة مع خلفيات تعليمية واسعة</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Phone className="h-6 w-6 text-blue-800" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">دعم ٢٤/٧</h3>
                <p className="text-sm text-gray-600">
                  احصل على إجابات لأسئلتك في أي وقت من خلال فريق الدعم المخصص لدينا
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Process Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-center mb-8 text-blue-800">عملية التدريب لدينا</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="/octagon-car.png"
                alt="عملية التدريب"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <span className="flex items-center justify-center h-5 w-5 bg-blue-800 text-white rounded-full text-xs">
                    ١
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">التسجيل</h3>
                  <p className="text-sm text-gray-600">أكمل تسجيلك واختر حزمة التدريب المفضلة لديك</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <span className="flex items-center justify-center h-5 w-5 bg-blue-800 text-white rounded-full text-xs">
                    ٢
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">الفصول النظرية</h3>
                  <p className="text-sm text-gray-600">
                    احضر جلسات الفصول الدراسية لتعلم قوانين المرور وإرشادات السلامة
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <span className="flex items-center justify-center h-5 w-5 bg-blue-800 text-white rounded-full text-xs">
                    ٣
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">التدريب العملي</h3>
                  <p className="text-sm text-gray-600">اجلس خلف المقود مع مدربينا المحترفين للحصول على خبرة عملية</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <span className="flex items-center justify-center h-5 w-5 bg-blue-800 text-white rounded-full text-xs">
                    ٤
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">التحضير للامتحان</h3>
                  <p className="text-sm text-gray-600">احصل على تدريب متخصص للتحضير للامتحانات النظرية والعملية</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <span className="flex items-center justify-center h-5 w-5 bg-blue-800 text-white rounded-full text-xs">
                    ٥
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">الشهادة</h3>
                  <p className="text-sm text-gray-600">أكمل تدريبك بنجاح واحصل على شهادة القيادة الخاصة بك</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">هل أنت مستعد لبدء رحلة القيادة؟</h2>
          <p className="mb-6 max-w-2xl mx-auto">انضم إلى آلاف الطلاب الراضين الذين حصلوا بنجاح على رخصة القيادة معنا</p>
          <Button className="bg-white text-blue-800 hover:bg-gray-100">
            سجل الآن <ArrowLeft className="mr-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/site-logo.png"
                alt="شعار مدرسة القيادة"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-youtube"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} مدرسة التميز لتعليم القيادة. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
