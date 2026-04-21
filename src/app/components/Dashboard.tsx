import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import imgLogo from "../../assets/ef8f16c62f5fa34c9daeadcacb427b2964ace301.png";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-gradient-to-b from-[#1b3ebf] to-[#0a1a5e]
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full flex flex-col">
          {/* Logo Section */}
          <div className="p-6 border-b border-white/20">
            <div className="flex flex-col items-center">
              <img src={imgLogo} alt="QCU Logo" className="h-24 w-24 mb-3" />
              <p className="text-[#c8973a] font-bold text-lg tracking-wide">QCUS-PORTAL</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-4 py-3 text-white bg-white/20 rounded-lg font-semibold transition-all hover:bg-white/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Dashboard
            </Link>

            <Link
              to="/dashboard/events"
              className="flex items-center gap-3 px-4 py-3 text-white/80 rounded-lg font-semibold transition-all hover:bg-white/10 hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Events
            </Link>

            <Link
              to="/dashboard/registration"
              className="flex items-center gap-3 px-4 py-3 text-white/80 rounded-lg font-semibold transition-all hover:bg-white/10 hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              Registration Form
            </Link>

            <Link
              to="/dashboard/grades"
              className="flex items-center gap-3 px-4 py-3 text-white/80 rounded-lg font-semibold transition-all hover:bg-white/10 hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Grades
            </Link>

            <Link
              to="/dashboard/request-document"
              className="flex items-center gap-3 px-4 py-3 text-white/80 rounded-lg font-semibold transition-all hover:bg-white/10 hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
              </svg>
              Request Document
            </Link>

            <Link
              to="/dashboard/transactions"
              className="flex items-center gap-3 px-4 py-3 text-white/80 rounded-lg font-semibold transition-all hover:bg-white/10 hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
              </svg>
              Transactions
            </Link>

            <Link
              to="/dashboard/account"
              className="flex items-center gap-3 px-4 py-3 text-white/80 rounded-lg font-semibold transition-all hover:bg-white/10 hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              Account
            </Link>
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-white/20">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-3 text-white/80 rounded-lg font-semibold transition-all hover:bg-white/10 hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Welcome Message */}
              <h1 className="text-xl sm:text-2xl font-bold">Welcome back, Neil!</h1>

              {/* User Profile */}
              <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
                <div className="hidden sm:block text-right">
                  <p className="font-bold text-sm">Neil Longbian</p>
                  <p className="text-xs text-gray-600">neillongbian@gmail.com</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-[#c8973a] to-[#b8872a] rounded-full flex items-center justify-center text-white font-bold">
                  NL
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 overflow-y-auto">
          {/* Due Assignments Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Due Assignments:</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="text-center py-12">
                <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-gray-500 font-medium">No assignments due</p>
                <p className="text-sm text-gray-400 mt-1">You're all caught up! Check back later for new assignments.</p>
              </div>
            </div>
          </section>

          {/* Store Documents Section */}
          <section className="mb-8">
            <button className="flex items-center gap-2 text-lg font-bold mb-4 hover:text-[#c8973a] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Store Documents
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">My Documents</h3>
                    <p className="text-sm text-gray-500">24 files</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">Recent Uploads</h3>
                    <p className="text-sm text-gray-500">8 files</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                      <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">Shared With Me</h3>
                    <p className="text-sm text-gray-500">12 files</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Planner Section */}
          <section>
            <button className="flex items-center gap-2 text-lg font-bold mb-4 hover:text-[#c8973a] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Planner
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Upcoming Events */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#c8973a]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Upcoming Events
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex flex-col items-center justify-center text-white">
                        <span className="text-xs font-semibold">MAR</span>
                        <span className="text-lg font-bold">25</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm">Midterm Examination</h4>
                      <p className="text-xs text-gray-600">Computer Science 101</p>
                      <p className="text-xs text-gray-500 mt-1">9:00 AM - 12:00 PM</p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex flex-col items-center justify-center text-white">
                        <span className="text-xs font-semibold">MAR</span>
                        <span className="text-lg font-bold">28</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm">Project Submission</h4>
                      <p className="text-xs text-gray-600">Web Development</p>
                      <p className="text-xs text-gray-500 mt-1">11:59 PM</p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-500 rounded-lg flex flex-col items-center justify-center text-white">
                        <span className="text-xs font-semibold">APR</span>
                        <span className="text-lg font-bold">02</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm">Career Fair</h4>
                      <p className="text-xs text-gray-600">University Auditorium</p>
                      <p className="text-xs text-gray-500 mt-1">1:00 PM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions & Stats */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-[#c8973a] to-[#b8872a] text-white rounded-lg hover:shadow-lg transition-all">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-semibold">Add Task</span>
                    </button>

                    <button className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-[#1b3ebf] to-[#0a1a5e] text-white rounded-lg hover:shadow-lg transition-all">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-semibold">Schedule</span>
                    </button>

                    <button className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-[#10b981] to-[#059669] text-white rounded-lg hover:shadow-lg transition-all">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-semibold">View Grades</span>
                    </button>

                    <button className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-[#ef4444] to-[#dc2626] text-white rounded-lg hover:shadow-lg transition-all">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-semibold">Documents</span>
                    </button>
                  </div>
                </div>

                {/* Academic Stats */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="font-bold text-lg mb-4">Academic Overview</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Current GPA</span>
                      <span className="text-lg font-bold text-[#c8973a]">3.75</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Enrolled Units</span>
                      <span className="text-lg font-bold text-[#1b3ebf]">21</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Completed Courses</span>
                      <span className="text-lg font-bold text-green-600">45/120</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
