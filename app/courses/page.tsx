import Image from "next/image"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoursesPage() {
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
          <h1 className="text-3xl font-bold mb-4">دوراتنا التدريبية</h1>
          <p className="max-w-2xl mx-auto">
            اختر من مجموعة واسعة من دورات القيادة المهنية المصممة لتلبية احتياجاتك المحددة
          </p>
        </div>
      </div>

      {/* Course Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="car" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="car">سيارة</TabsTrigger>
              <TabsTrigger value="motorcycle">دراجة نارية</TabsTrigger>
              <TabsTrigger value="truck">شاحنة</TabsTrigger>
              <TabsTrigger value="special">خاص</TabsTrigger>
            </TabsList>

            <TabsContent value="car" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold">رخصة السيارة الأساسية</h3>
                    <p className="text-sm text-gray-500">للمبتدئين بدون خبرة سابقة</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">١٥ ساعة من التدريب النظري</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">٢٠ ساعة من القيادة العملية</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">جلسات التحضير للامتحان</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">مواد الدراسة مشمولة</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-2xl font-bold">٥٩٩ ريال</p>
                      <p className="text-sm text-gray-500">حزمة شاملة</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      سجل الآن <ArrowLeft className="mr-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold">رخصة السيارة القياسية</h3>
                    <p className="text-sm text-gray-500">الحزمة الأكثر شعبية</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">٢٠ ساعة من التدريب النظري</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">٣٠ ساعة من القيادة العملية</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">تدريب المناورات المتقدمة</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">اختبارات تجريبية والتحضير للامتحان</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-2xl font-bold">٧٩٩ ريال</p>
                      <p className="text-sm text-gray-500">حزمة شاملة</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      سجل الآن <ArrowLeft className="mr-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold">رخصة السيارة المميزة</h3>
                    <p className="text-sm text-gray-500">تجربة تدريبية شاملة</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">٢٥ ساعة من التدريب النظري</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">٤٠ ساعة من القيادة العملية</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">تدريب القيادة الليلية والطرق السريعة</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">تقنيات القيادة الدفاعية</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-2xl font-bold">٩٩٩ ريال</p>
                      <p className="text-sm text-gray-500">حزمة شاملة</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      سجل الآن <ArrowLeft className="mr-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="motorcycle" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold">رخصة الدراجة النارية الأساسية</h3>
                    <p className="text-sm text-gray-500">للمبتدئين بدون خبرة سابقة</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">١٥ ساعة من التدريب النظري</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">١٥ ساعة من القيادة العملية</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">تدريب معدات السلامة</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">معرفة الصيانة الأساسية</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-2xl font-bold">٤٩٩ ريال</p>
                      <p className="text-sm text-gray-500">حزمة شاملة</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      سجل الآن <ArrowLeft className="mr-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="truck" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold">رخصة الشاحنة التجارية</h3>
                    <p className="text-sm text-gray-500">تدريب رخصة القيادة التجارية المهنية</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">٤٠ ساعة من التدريب النظري</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">٦٠ ساعة من القيادة العملية</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">تدريب اللوجستيات واللوائح</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">إجراءات السلامة والصيانة</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-2xl font-bold">١٩٩٩ ريال</p>
                      <p className="text-sm text-gray-500">شهادة مهنية</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      سجل الآن <ArrowLeft className="mr-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="special" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold">دورة القيادة الدفاعية</h3>
                    <p className="text-sm text-gray-500">عزز مهارات السلامة لديك</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">١٠ ساعات من التدريب المتخصص</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">تقنيات إدراك المخاطر</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">تدريب الاستجابة للطوارئ</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">شهادة عند الإنجاز</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-2xl font-bold">٢٩٩ ريال</p>
                      <p className="text-sm text-gray-500">تدريب متخصص</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      سجل الآن <ArrowLeft className="mr-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold">دورة تنشيطية</h3>
                    <p className="text-sm text-gray-500">للسائقين المرخصين</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">٥ ساعات من تنشيط النظريات</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">١٠ ساعات من القيادة العملية</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">تحديث قوانين المرور الجديدة</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">جلسات بناء الثقة</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-2xl font-bold">٣٤٩ ريال</p>
                      <p className="text-sm text-gray-500">تعزيز المهارات</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      سجل الآن <ArrowLeft className="mr-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
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
