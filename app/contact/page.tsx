import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
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
              src="/placeholder.svg?height=40&width=150"
              alt="شعار مدرسة القيادة"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium hidden md:inline">عربي</span>
            <Image
              src="/placeholder.svg?height=20&width=30"
              alt="العلم"
              width={30}
              height={20}
              className="h-5 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Page Header */}
      <div className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">تواصل معنا</h1>
          <p className="max-w-2xl mx-auto">
            هل لديك أسئلة أو تحتاج إلى مزيد من المعلومات؟ نحن هنا لمساعدتك في جميع احتياجات التدريب على القيادة.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-6">تواصل معنا</h2>
              <Card className="p-6">
                <form className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">الاسم الكامل</Label>
                    <Input id="name" placeholder="أدخل اسمك الكامل" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">عنوان البريد الإلكتروني</Label>
                    <Input id="email" type="email" placeholder="أدخل عنوان بريدك الإلكتروني" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input id="phone" placeholder="أدخل رقم هاتفك" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject">الموضوع</Label>
                    <Input id="subject" placeholder="ما هو موضوع رسالتك؟" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">الرسالة</Label>
                    <Textarea id="message" placeholder="أدخل رسالتك" rows={5} />
                  </div>
                  <Button className="w-full">إرسال الرسالة</Button>
                </form>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">معلومات الاتصال</h2>
              <div className="space-y-6">
                <Card className="p-6 flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">موقعنا</h3>
                    <p className="text-gray-600">شارع مدرسة القيادة ١٢٣</p>
                    <p className="text-gray-600">وسط المدينة، ١٢٣٤٥</p>
                  </div>
                </Card>

                <Card className="p-6 flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">أرقام الهاتف</h3>
                    <p className="text-gray-600">المكتب الرئيسي: ٠١١-١٢٣-٤٥٦٧</p>
                    <p className="text-gray-600">خدمة العملاء: ٠١١-٩٨٧-٦٥٤٣</p>
                  </div>
                </Card>

                <Card className="p-6 flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">عناوين البريد الإلكتروني</h3>
                    <p className="text-gray-600">الاستفسارات العامة: info@drivingschool.com</p>
                    <p className="text-gray-600">الدعم: support@drivingschool.com</p>
                  </div>
                </Card>

                <Card className="p-6 flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">ساعات العمل</h3>
                    <p className="text-gray-600">الاثنين - الجمعة: ٨:٠٠ ص - ٨:٠٠ م</p>
                    <p className="text-gray-600">السبت: ٩:٠٠ ص - ٥:٠٠ م</p>
                    <p className="text-gray-600">الأحد: مغلق</p>
                  </div>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">اعثر علينا على الخريطة</h3>
                <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="موقع الخريطة"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/placeholder.svg?height=40&width=150"
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
