import { useState } from 'react';
import { Link } from 'react-router';
import imgDownload1 from "../../assets/40fd47087a8209825685cd309dec71edfd7b2688.png";
import imgRectangle16 from "../../assets/0b831fcbf272795100b519581bb3fda42f175054.png";
import imgLogo from "../../assets/ef8f16c62f5fa34c9daeadcacb427b2964ace301.png";
import imgClassTimetable from "../../assets/073e92a11e089e72ee301bb7156eea617005b794.png";
import imgImage1 from "../../assets/b6741c2b64563e1a7c5a002f737ce6c65fac9a87.png";
import imgGrades from "../../assets/e5a75c750e424bfd4859fd395eb5f41b497168c3.png";
import imgUniversityItems from "../../assets/2a1bf899f17fb9f8bc0219924a6bbe777b0d508c.png";
import imgImage2 from "../../assets/4ead6895b8e3f68f43858e6f6ba9bf41421fe683.png";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={imgLogo} alt="QCU Logo" className="h-12 w-12 sm:h-14 sm:w-14" />
              <div className="hidden sm:block">
                <p className="text-sm font-bold leading-tight">QUEZON CITY UNIVERSITY</p>
                <p className="text-xs">STUDENT PORTAL</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-bold hover:text-[#c8973a] transition-colors">ABOUT</a>
              <a href="#features" className="text-sm font-bold hover:text-[#c8973a] transition-colors">FEATURES</a>
              <a href="#how-to-access" className="text-sm font-bold hover:text-[#c8973a] transition-colors">HOW TO ACCESS</a>
              <a href="#contact" className="text-sm font-bold hover:text-[#c8973a] transition-colors">CONTACTS</a>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link to="/login" className="px-6 py-2 border-2 border-black rounded-lg hover:bg-gray-50 transition-colors">
                Log in
              </Link>
              <Link to="/signup" className="px-6 py-2 bg-black text-white border-2 border-black rounded-lg hover:bg-gray-800 transition-colors">
                SIGN UP
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <a href="#about" className="text-sm font-bold">ABOUT</a>
                <a href="#features" className="text-sm font-bold">FEATURES</a>
                <a href="#how-to-access" className="text-sm font-bold">HOW TO ACCESS</a>
                <a href="#contact" className="text-sm font-bold">CONTACTS</a>
                <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                  <Link to="/login" className="px-6 py-2 border-2 border-black rounded-lg text-center">Log in</Link>
                  <Link to="/signup" className="px-6 py-2 bg-black text-white border-2 border-black rounded-lg text-center">SIGN UP</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={imgRectangle16} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 sm:mb-8 drop-shadow-lg">
            QCU STUDENT PORTAL
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-white mb-2 max-w-4xl mx-auto leading-relaxed">
            Serves as the #1 International University
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl text-white mb-8 max-w-4xl mx-auto leading-relaxed">
            of Employable Graduates
          </p>
          <Link to="/login" className="inline-block bg-[#c8973a] hover:bg-[#b8872a] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold transition-all transform hover:scale-105 shadow-lg">
            Access QCUS-PORTAL
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#c8973a]/10 via-[#1b3ebf]/10 to-[#cc1e1e]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
            <div className="p-6 bg-white/50 backdrop-blur rounded-lg">
              <p className="text-4xl sm:text-5xl font-bold text-[#c8973a] mb-2">#1</p>
              <p className="text-sm text-gray-600">International University of The Philippines</p>
            </div>
            <div className="p-6 bg-white/50 backdrop-blur rounded-lg">
              <p className="text-4xl sm:text-5xl font-bold text-[#c8973a] mb-2">30+</p>
              <p className="text-sm text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#c8973a] font-bold text-lg mb-4">ABOUT THIS WEBSITE</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 max-w-3xl">
              Serves Student as Manual for Qcu Students
            </h2>
          </div>

          {/* Decorative gradient background section */}
          <div className="relative mb-16 overflow-hidden">
            {/* Gradient background shape */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1b3ebf]/20 via-[#742e6f]/20 to-[#cc1e1e]/20 rounded-3xl transform -skew-y-2"></div>
            
            {/* Decorative circles */}
            <div className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-[#c8973a]/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-56 sm:h-56 bg-[#1b3ebf]/10 rounded-full blur-2xl"></div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-16">
              <div className="space-y-6 text-lg sm:text-xl text-gray-700 order-2 lg:order-1">
                <p className="leading-relaxed">
                  QCUS-PORTAL was built to change that. It is QCU's integrated online services portal. 
                  A single, secure platform where students can access everything they need without leaving their seats.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-[#1b3ebf] to-[#742e6f] rounded-2xl p-8 sm:p-12 shadow-2xl">
                  <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#c8973a] rounded-full opacity-20"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#cc1e1e] rounded-full opacity-20"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-white/30 rounded w-3/4 mb-2"></div>
                        <div className="h-2 bg-white/20 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-white/20 rounded"></div>
                      <div className="h-2 bg-white/20 rounded w-5/6"></div>
                      <div className="h-2 bg-white/20 rounded w-4/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              <img 
                src={imgDownload1} 
                alt="Portal Preview" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="space-y-6 text-lg sm:text-xl text-gray-700">
              <p>
                With QCUS-PORTAL, students log in using their official Student Number, and instantly gain access 
                to their digital ID, class schedules, registration form, and a full registrar request module all 
                in one place.
              </p>
              <p>
                Every transaction is processed online, generates a digital receipt, and is logged in a tamper-evident 
                audit trail, ensuring full transparency and accountability across the university.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="features" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black mb-12 text-center sm:text-left">SERVICES OFFERED</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Service 1 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <img src={imgClassTimetable} alt="Class Schedules" className="h-32 w-32 object-contain" />
              </div>
              <h3 className="text-xl font-extrabold text-center">VIEW CLASS SCHEDULES</h3>
            </div>

            {/* Service 2 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <img src={imgImage1} alt="Request Documents" className="h-32 w-32 object-contain" />
              </div>
              <h3 className="text-xl font-extrabold text-center">REQUEST DOCUMENTS</h3>
            </div>

            {/* Service 3 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <img src={imgGrades} alt="View Grades" className="h-32 w-32 object-contain" />
              </div>
              <h3 className="text-xl font-extrabold text-center">VIEW GRADES</h3>
            </div>

            {/* Service 4 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <img src={imgUniversityItems} alt="University Items" className="h-32 w-32 object-contain" />
              </div>
              <h3 className="text-xl font-extrabold text-center">UNIVERSITY ITEMS</h3>
            </div>

            {/* Service 5 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <img src={imgImage2} alt="School Calendar" className="h-32 w-32 object-contain" />
              </div>
              <h3 className="text-xl font-extrabold text-center">SCHOOL CALENDAR</h3>
            </div>

            {/* Service 6 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="h-32 w-32 flex items-center justify-center">
                  <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-center">VIEW COURSES</h3>
            </div>
          </div>
        </div>
      </section>

      {/* How to Access Section */}
      <section id="how-to-access" className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#c8973a] font-bold text-lg mb-4">HOW TO ACCESS THE PORTAL</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Up and Running in <span className="italic text-[#c8973a]">4 Simple Steps</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              First-time users can set up their account in minutes. Follow this guide to activate your QCU Student Portal access.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#c8973a] via-[#1b3ebf] to-[#f60a0e] opacity-20"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-black border-4 border-[#c8973a] flex items-center justify-center mb-6 shadow-lg relative z-10">
                    <span className="text-3xl text-white font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">Get Your Student ID</h3>
                  <p className="text-sm text-gray-600">
                    Your Student ID is issued upon enrollment confirmation. Check your admission documents or visit the Registrar's Office.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-black border-4 border-[#1b3ebf] flex items-center justify-center mb-6 shadow-lg relative z-10">
                    <span className="text-3xl text-white font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">Register an Account</h3>
                  <p className="text-sm text-gray-600">
                    Click "Sign Up" and enter your Student ID, full name, and school-issued email address.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-black border-4 border-[#c8973a] flex items-center justify-center mb-6 shadow-lg relative z-10">
                    <span className="text-3xl text-white font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">Verify Your Email</h3>
                  <p className="text-sm text-gray-600">
                    Check your QCU email for a verification link. Click it within 24 hours to activate your portal account.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-black border-4 border-[#f60a0e] flex items-center justify-center mb-6 shadow-lg relative z-10">
                    <span className="text-3xl text-white font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">Log In & Explore</h3>
                  <p className="text-sm text-gray-600">
                    Sign in and complete your profile. Your academic data syncs automatically within the hour.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/signup" className="inline-block bg-[#c8973a] hover:bg-[#b8872a] text-white px-12 py-4 rounded-lg text-xl font-semibold transition-all transform hover:scale-105 shadow-lg">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <img src={imgLogo} alt="QCU Logo" className="h-20 w-20 mb-4" />
            <h3 className="text-xl font-bold mb-2">QUEZON CITY UNIVERSITY</h3>
            <p className="text-lg">STUDENT PORTAL</p>
          </div>

          <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-12">
            Have questions or concerns about the University? We're here to help. Reach out to us through 
            any of our available contact channels — whether mobile numbers, landlines, or email, there's 
            always someone ready to assist you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="w-12 h-12 bg-[#c8973a] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Phone</h4>
              <p className="text-sm text-gray-600">+63 123 456 7890</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="w-12 h-12 bg-[#1b3ebf] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Email</h4>
              <p className="text-sm text-gray-600">info@qcu.edu.ph</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-[#cc1e1e] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Location</h4>
              <p className="text-sm text-gray-600">Quezon City, Philippines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            © 2026. Quezon City University QCUS-PORTAL. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
