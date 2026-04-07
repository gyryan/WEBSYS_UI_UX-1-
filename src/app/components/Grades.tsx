import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import imgLogo from "figma:asset/ef8f16c62f5fa34c9daeadcacb427b2964ace301.png";

interface Grade {
  id: number;
  courseCode: string;
  courseName: string;
  units: number;
  schedule: string;
  grade: string;
  numericGrade: number;
  status: 'passed' | 'failed' | 'incomplete' | 'dropped';
  professor: string;
}

export default function Grades() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState('2nd Semester 2025-2026');
  const navigate = useNavigate();

  const grades: Grade[] = [
    {
      id: 1,
      courseCode: "CS 101",
      courseName: "Introduction to Computer Science",
      units: 3,
      schedule: "MWF 9:00 AM - 10:30 AM",
      grade: "A",
      numericGrade: 1.25,
      status: 'passed',
      professor: "Dr. Maria Santos"
    },
    {
      id: 2,
      courseCode: "MATH 201",
      courseName: "Calculus II",
      units: 3,
      schedule: "TTh 10:45 AM - 12:15 PM",
      grade: "B+",
      numericGrade: 1.75,
      status: 'passed',
      professor: "Prof. Juan Dela Cruz"
    },
    {
      id: 3,
      courseCode: "ENG 103",
      courseName: "Technical Writing",
      units: 3,
      schedule: "MWF 1:00 PM - 2:30 PM",
      grade: "A",
      numericGrade: 1.25,
      status: 'passed',
      professor: "Dr. Ana Reyes"
    },
    {
      id: 4,
      courseCode: "PHYS 101",
      courseName: "Physics for Engineers",
      units: 4,
      schedule: "TTh 2:45 PM - 4:45 PM",
      grade: "B",
      numericGrade: 2.00,
      status: 'passed',
      professor: "Prof. Roberto Garcia"
    },
    {
      id: 5,
      courseCode: "PE 101",
      courseName: "Physical Education - Fitness",
      units: 2,
      schedule: "Sat 8:00 AM - 10:00 AM",
      grade: "A",
      numericGrade: 1.00,
      status: 'passed',
      professor: "Coach Linda Fernandez"
    },
    {
      id: 6,
      courseCode: "CS 102L",
      courseName: "Computer Programming Lab",
      units: 1,
      schedule: "F 3:00 PM - 5:00 PM",
      grade: "A",
      numericGrade: 1.25,
      status: 'passed',
      professor: "Engr. Mark Villanueva"
    }
  ];

  const handleLogout = () => {
    navigate('/');
  };

  // Calculate GPA
  const calculateGPA = () => {
    const totalGradePoints = grades.reduce((sum, grade) => {
      return sum + (grade.numericGrade * grade.units);
    }, 0);
    const totalUnits = grades.reduce((sum, grade) => sum + grade.units, 0);
    return (totalGradePoints / totalUnits).toFixed(2);
  };

  const getGradeColor = (grade: string) => {
    if (grade === 'A' || grade === 'A+') return 'bg-green-100 text-green-800 border-green-200';
    if (grade === 'B+' || grade === 'B') return 'bg-blue-100 text-blue-800 border-blue-200';
    if (grade === 'C+' || grade === 'C') return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    if (grade === 'D' || grade === 'F') return 'bg-red-100 text-red-800 border-red-200';
    return 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      passed: 'bg-green-100 text-green-700 border-green-200',
      failed: 'bg-red-100 text-red-700 border-red-200',
      incomplete: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      dropped: 'bg-gray-100 text-gray-700 border-gray-200'
    };
    return badges[status as keyof typeof badges] || badges.passed;
  };

  const totalUnits = grades.reduce((sum, grade) => sum + grade.units, 0);
  const gpa = calculateGPA();

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
              className="flex items-center gap-3 px-4 py-3 text-white/80 rounded-lg font-semibold transition-all hover:bg-white/10 hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              Class Schedule
            </Link>

            <Link
              to="/dashboard/grades"
              className="flex items-center gap-3 px-4 py-3 text-white bg-white/20 rounded-lg font-semibold transition-all hover:bg-white/30"
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
              <h1 className="text-xl sm:text-2xl font-bold">Grades</h1>

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
          {/* GPA Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-[#1b3ebf] to-[#0a1a5e] rounded-xl p-6 text-white shadow-lg">
              <p className="text-white/80 text-sm mb-1">Current GPA</p>
              <p className="text-4xl font-bold">{gpa}</p>
              <p className="text-white/60 text-xs mt-2">Grade Point Average</p>
            </div>

            <div className="bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl p-6 text-white shadow-lg">
              <p className="text-white/80 text-sm mb-1">Total Units</p>
              <p className="text-4xl font-bold">{totalUnits}</p>
              <p className="text-white/60 text-xs mt-2">Units Completed</p>
            </div>

            <div className="bg-gradient-to-br from-[#c8973a] to-[#b8872a] rounded-xl p-6 text-white shadow-lg">
              <p className="text-white/80 text-sm mb-1">Courses</p>
              <p className="text-4xl font-bold">{grades.length}</p>
              <p className="text-white/60 text-xs mt-2">Total Enrolled</p>
            </div>

            <div className="bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] rounded-xl p-6 text-white shadow-lg">
              <p className="text-white/80 text-sm mb-1">Status</p>
              <p className="text-2xl font-bold">All Passed</p>
              <p className="text-white/60 text-xs mt-2">Semester Status</p>
            </div>
          </div>

          {/* Semester Selector */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Grade Report</h2>
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg font-semibold text-gray-700 hover:border-[#1b3ebf] focus:outline-none focus:ring-2 focus:ring-[#1b3ebf] focus:border-transparent"
            >
              <option>2nd Semester 2025-2026</option>
              <option>1st Semester 2025-2026</option>
              <option>Summer 2025</option>
              <option>2nd Semester 2024-2025</option>
            </select>
          </div>

          {/* Grades Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[#1b3ebf] to-[#0a1a5e] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Course</th>
                    <th className="px-6 py-4 text-center font-semibold">Units</th>
                    <th className="px-6 py-4 text-left font-semibold">Schedule</th>
                    <th className="px-6 py-4 text-center font-semibold">Grade</th>
                    <th className="px-6 py-4 text-center font-semibold">Numeric</th>
                    <th className="px-6 py-4 text-center font-semibold">Status</th>
                    <th className="px-6 py-4 text-left font-semibold">Professor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {grades.map((grade, index) => (
                    <tr key={grade.id} className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-bold text-[#1b3ebf]">{grade.courseCode}</p>
                          <p className="text-sm text-gray-600">{grade.courseName}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="font-bold text-[#c8973a]">{grade.units}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {grade.schedule}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-4 py-2 rounded-full text-sm font-bold border ${getGradeColor(grade.grade)}`}>
                          {grade.grade}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="font-semibold text-gray-900">{grade.numericGrade.toFixed(2)}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border capitalize ${getStatusBadge(grade.status)}`}>
                          {grade.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {grade.professor}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-100 border-t-2 border-gray-300">
                  <tr>
                    <td className="px-6 py-4 font-bold">Semester Totals</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xl font-bold text-[#c8973a]">{totalUnits}</span>
                    </td>
                    <td colSpan={2} className="px-6 py-4 text-right font-bold">
                      Semester GPA:
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-2xl font-bold text-[#1b3ebf]">{gpa}</span>
                    </td>
                    <td colSpan={2}></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Grade Scale Reference */}
          <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-bold text-lg mb-4">QCU Grading Scale</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              <div className="text-center">
                <div className="bg-green-100 text-green-800 rounded-lg py-2 px-3 font-bold mb-1">A</div>
                <p className="text-xs text-gray-600">1.00 - 1.25</p>
                <p className="text-xs text-gray-500">Excellent</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 text-green-800 rounded-lg py-2 px-3 font-bold mb-1">B+</div>
                <p className="text-xs text-gray-600">1.50 - 1.75</p>
                <p className="text-xs text-gray-500">Very Good</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 text-blue-800 rounded-lg py-2 px-3 font-bold mb-1">B</div>
                <p className="text-xs text-gray-600">2.00 - 2.25</p>
                <p className="text-xs text-gray-500">Good</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 text-blue-800 rounded-lg py-2 px-3 font-bold mb-1">C+</div>
                <p className="text-xs text-gray-600">2.50 - 2.75</p>
                <p className="text-xs text-gray-500">Satisfactory</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 text-yellow-800 rounded-lg py-2 px-3 font-bold mb-1">C</div>
                <p className="text-xs text-gray-600">3.00</p>
                <p className="text-xs text-gray-500">Passing</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 text-red-800 rounded-lg py-2 px-3 font-bold mb-1">D</div>
                <p className="text-xs text-gray-600">4.00</p>
                <p className="text-xs text-gray-500">Conditional</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 text-red-800 rounded-lg py-2 px-3 font-bold mb-1">F</div>
                <p className="text-xs text-gray-600">5.00</p>
                <p className="text-xs text-gray-500">Failed</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 text-gray-800 rounded-lg py-2 px-3 font-bold mb-1">INC</div>
                <p className="text-xs text-gray-600">-</p>
                <p className="text-xs text-gray-500">Incomplete</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 px-6 py-3 bg-gradient-to-r from-[#c8973a] to-[#b8872a] text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
              </svg>
              Download Grade Report (PDF)
            </button>
            <button className="flex-1 px-6 py-3 bg-white border-2 border-[#1b3ebf] text-[#1b3ebf] rounded-lg font-semibold hover:bg-[#1b3ebf] hover:text-white transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email Grade Report
            </button>
            <button className="flex-1 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              View Past Semesters
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
