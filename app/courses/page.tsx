import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
              alt="Driving School Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium hidden md:inline">EN</span>
            <Image src="/placeholder.svg?height=20&width=30" alt="Flag" width={30} height={20} className="h-5 w-auto" />
          </div>
        </div>
      </header>

      {/* Page Header */}
      <div className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Our Training Courses</h1>
          <p className="max-w-2xl mx-auto">
            Choose from our wide range of professional driving courses designed to meet your specific needs
          </p>
        </div>
      </div>

      {/* Course Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="car" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="car">Car</TabsTrigger>
              <TabsTrigger value="motorcycle">Motorcycle</TabsTrigger>
              <TabsTrigger value="truck">Truck</TabsTrigger>
              <TabsTrigger value="special">Special</TabsTrigger>
            </TabsList>

            <TabsContent value="car" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold">Basic Car License</h3>
                    <p className="text-sm text-gray-500">For beginners with no prior experience</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">15 hours of theoretical training</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">20 hours of practical driving</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">Exam preparation sessions</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">Study materials included</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-2xl font-bold">$599</p>
                      <p className="text-sm text-gray-500">All inclusive package</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold">Standard Car License</h3>
                    <p className="text-sm text-gray-500">Our most popular package</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">20 hours of theoretical training</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">30 hours of practical driving</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">Advanced maneuvers training</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">Mock tests and exam preparation</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-2xl font-bold">$799</p>
                      <p className="text-sm text-gray-500">All inclusive package</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold">Premium Car License</h3>
                    <p className="text-sm text-gray-500">Comprehensive training experience</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">25 hours of theoretical training</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">40 hours of practical driving</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">Night driving and highway training</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">Defensive driving techniques</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-2xl font-bold">$999</p>
                      <p className="text-sm text-gray-500">All inclusive package</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="motorcycle" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold">Basic Motorcycle License</h3>
                    <p className="text-sm text-gray-500">For beginners with no prior experience</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">15 hours of theoretical training</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">15 hours of practical riding</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">Safety gear training</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">Basic maintenance knowledge</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-2xl font-bold">$499</p>
                      <p className="text-sm text-gray-500">All inclusive package</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold">Advanced Motorcycle License</h3>
                    <p className="text-sm text-gray-500">For experienced riders</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">10 hours of advanced theory</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">20 hours of advanced riding</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">Highway and traffic navigation</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">Emergency maneuvers training</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-2xl font-bold">$699</p>
                      <p className="text-sm text-gray-500">All inclusive package</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="truck" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold">Commercial Truck License</h3>
                    <p className="text-sm text-gray-500">Professional CDL training</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">40 hours of theoretical training</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">60 hours of practical driving</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">Logistics and regulations training</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">Safety and maintenance procedures</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-2xl font-bold">$1,999</p>
                      <p className="text-sm text-gray-500">Professional certification</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="special" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold">Defensive Driving Course</h3>
                    <p className="text-sm text-gray-500">Enhance your safety skills</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">10 hours of specialized training</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">Hazard perception techniques</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">Emergency response training</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">Certificate upon completion</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-2xl font-bold">$299</p>
                      <p className="text-sm text-gray-500">Specialized training</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold">Refresher Course</h3>
                    <p className="text-sm text-gray-500">For licensed drivers</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">5 hours of theory refresher</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">10 hours of practical driving</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">Update on new traffic laws</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">Confidence building sessions</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-2xl font-bold">$349</p>
                      <p className="text-sm text-gray-500">Skill enhancement</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
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
                alt="Driving School Logo"
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
            <p>© {new Date().getFullYear()} Excellence Driving School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
