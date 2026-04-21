import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import imgLogo from "../../assets/ef8f16c62f5fa34c9daeadcacb427b2964ace301.png";

interface Course {
  id: number;
  courseCode: string;
  courseName: string;
  section: string;
  units: number;
  schedule: string;
  days: string;
  time: string;
  room: string;
  instructor: string;
  status: 'enrolled' | 'waitlist' | 'available';
}

export default function Registration() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'weekly'>('list');
  const navigate = useNavigate();

  const enrolledCourses: Course[] = [
    {
      id: 1,
      courseCode: "CS 101",
      courseName: "Introduction to Computer Science",
      section: "A",
      units: 3,
      schedule: "MWF",
      days: "Monday, Wednesday, Friday",
      time: "9:00 AM - 10:30 AM",
      room: "Room 301, Engineering Bldg",
      instructor: "Dr. Maria Santos",
      status: 'enrolled'
    },
    {
      id: 2,
      courseCode: "MATH 201",
      courseName: "Calculus II",
      section: "B",
      units: 3,
      schedule: "TTh",
      days: "Tuesday, Thursday",
      time: "10:45 AM - 12:15 PM",
      room: "Room 205, Math Bldg",
      instructor: "Prof. Juan Dela Cruz",
      status: 'enrolled'
    },
    {
      id: 3,
      courseCode: "ENG 103",
      courseName: "Technical Writing",
      section: "C",
      units: 3,
      schedule: "MWF",
      days: "Monday, Wednesday, Friday",
      time: "1:00 PM - 2:30 PM",
      room: "Room 102, Liberal Arts Bldg",
      instructor: "Dr. Ana Reyes",
      status: 'enrolled'
    },
    {
      id: 4,
      courseCode: "PHYS 101",
      courseName: "Physics for Engineers",
      section: "A",
      units: 4,
      schedule: "TTh",
      days: "Tuesday, Thursday",
      time: "2:45 PM - 4:45 PM",
      room: "Room 401, Science Bldg",
      instructor: "Prof. Roberto Garcia",
      status: 'enrolled'
    },
    {
      id: 5,
      courseCode: "PE 101",
      courseName: "Physical Education - Fitness",
      section: "D",
      units: 2,
      schedule: "Sat",
      days: "Saturday",
      time: "8:00 AM - 10:00 AM",
      room: "Sports Complex",
      instructor: "Coach Linda Fernandez",
      status: 'enrolled'
    },
    {
      id: 6,
      courseCode: "CS 102L",
      courseName: "Computer Programming Lab",
      section: "A1",
      units: 1,
      schedule: "F",
      days: "Friday",
      time: "3:00 PM - 5:00 PM",
      room: "Computer Lab 3",
      instructor: "Engr. Mark Villanueva",
      status: 'enrolled'
    }
  ];

  const handleLogout = () => {
    navigate('/');
  };

  const totalUnits = enrolledCourses.reduce((sum, course) => sum + course.units, 0);

  const getTimeSlots = () => {
    return [
      "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", 
      "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
    ];
  };

  const getDays = () => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const getCourseForSlot = (day: string, time: string) => {
    return enrolledCourses.find(course => {
      const dayMap: Record<string, string[]> = {
        'MWF': ['Monday', 'Wednesday', 'Friday'],
        'TTh': ['Tuesday', 'Thursday'],
        'Sat': ['Saturday'],
        'F': ['Friday']
      };
      
      const courseDays = dayMap[course.schedule] || [];
      const courseTime = course.time.split(' - ')[0];
      
      return courseDays.includes(day) && courseTime === time;
    });
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
              className="flex items-center gap-3 px-4 py-3 text-white/80 rounded-lg font-semibold transition-all hover:bg-white/10 hover:text-white"
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
              className="flex items-center gap-3 px-4 py-3 text-white bg-white/20 rounded-lg font-semibold transition-all hover:bg-white/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              Class Schedule
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

              {/* Page Title */}
              <h1 className="text-xl sm:text-2xl font-bold">Class Schedule</h1>

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

        {/* Content */}
        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 overflow-y-auto">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-[#1b3ebf] to-[#0a1a5e] rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm mb-1">Total Units Enrolled</p>
                  <p className="text-4xl font-bold">{totalUnits}</p>
                </div>
                <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#c8973a] to-[#b8872a] rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm mb-1">Enrolled Courses</p>
                  <p className="text-4xl font-bold">{enrolledCourses.length}</p>
                </div>
                <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm mb-1">Semester</p>
                  <p className="text-2xl font-bold">2nd Sem 2025-2026</p>
                </div>
                <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">My Schedule</h2>
            <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm border border-gray-200">
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md font-semibold text-sm transition-all ${
                  viewMode === 'list'
                    ? 'bg-[#1b3ebf] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  List View
                </span>
              </button>
              <button
                onClick={() => setViewMode('weekly')}
                className={`px-4 py-2 rounded-md font-semibold text-sm transition-all ${
                  viewMode === 'weekly'
                    ? 'bg-[#1b3ebf] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Weekly View
                </span>
              </button>
            </div>
          </div>

          {/* List View */}
          {viewMode === 'list' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-[#1b3ebf] to-[#0a1a5e] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Course Code</th>
                      <th className="px-6 py-4 text-left font-semibold">Course Name</th>
                      <th className="px-6 py-4 text-left font-semibold">Section</th>
                      <th className="px-6 py-4 text-center font-semibold">Units</th>
                      <th className="px-6 py-4 text-left font-semibold">Schedule</th>
                      <th className="px-6 py-4 text-left font-semibold">Room</th>
                      <th className="px-6 py-4 text-left font-semibold">Instructor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {enrolledCourses.map((course, index) => (
                      <tr key={course.id} className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                        <td className="px-6 py-4">
                          <span className="font-bold text-[#1b3ebf]">{course.courseCode}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-medium">{course.courseName}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm font-semibold">
                            {course.section}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="font-bold text-[#c8973a]">{course.units}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            <p className="font-semibold text-gray-900">{course.schedule}</p>
                            <p className="text-gray-600">{course.time}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">{course.room}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{course.instructor}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-gray-100 border-t-2 border-gray-300">
                    <tr>
                      <td colSpan={3} className="px-6 py-4 font-bold text-right">Total Units:</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-2xl font-bold text-[#1b3ebf]">{totalUnits}</span>
                      </td>
                      <td colSpan={3}></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          )}

          {/* Weekly View */}
          {viewMode === 'weekly' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#1b3ebf] to-[#0a1a5e] text-white">
                      <th className="px-4 py-3 text-left font-semibold border-r border-white/20 w-24">Time</th>
                      {getDays().map(day => (
                        <th key={day} className="px-4 py-3 text-center font-semibold border-r border-white/20 last:border-r-0">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {getTimeSlots().map((time, timeIndex) => (
                      <tr key={time} className={`${timeIndex % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}`}>
                        <td className="px-4 py-3 font-semibold text-sm text-gray-600 border-r border-gray-200">
                          {time}
                        </td>
                        {getDays().map(day => {
                          const course = getCourseForSlot(day, time);
                          return (
                            <td 
                              key={`${day}-${time}`} 
                              className="px-2 py-2 border-r border-gray-200 last:border-r-0 align-top"
                            >
                              {course && (
                                <div className="bg-gradient-to-br from-[#1b3ebf] to-[#0a1a5e] rounded-lg p-3 text-white shadow-sm hover:shadow-md transition-shadow">
                                  <p className="font-bold text-sm mb-1">{course.courseCode}</p>
                                  <p className="text-xs text-white/90 mb-1">{course.courseName}</p>
                                  <p className="text-xs text-white/80">{course.room}</p>
                                  <p className="text-xs text-white/80">{course.instructor}</p>
                                </div>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 px-6 py-3 bg-gradient-to-r from-[#c8973a] to-[#b8872a] text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
              </svg>
              Download Schedule (PDF)
            </button>
            <button className="flex-1 px-6 py-3 bg-white border-2 border-[#1b3ebf] text-[#1b3ebf] rounded-lg font-semibold hover:bg-[#1b3ebf] hover:text-white transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              Share Schedule
            </button>
            <button className="flex-1 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Edit Enrollment
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
