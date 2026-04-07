import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import imgLogo from "figma:asset/ef8f16c62f5fa34c9daeadcacb427b2964ace301.png";
import imgRectangle43 from "figma:asset/50929cb240a06e73bd19312159f8cb9a9b86418a.png";
import imgRectangle49 from "figma:asset/7537ef2f9f5520693de4a9b36bdf20b95c37e979.png";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  color: string;
}

export default function Events() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const navigate = useNavigate();

  const events: Event[] = [
    {
      id: 1,
      title: "Midterm Examination",
      date: "March 25, 2026",
      time: "9:00 AM - 12:00 PM",
      location: "Room 301, Engineering Building",
      category: "Academic",
      description: "Midterm examination for Computer Science 101. Please bring your student ID and required materials.",
      color: "blue"
    },
    {
      id: 2,
      title: "University Foundation Day",
      date: "March 28, 2026",
      time: "8:00 AM - 5:00 PM",
      location: "QCU Main Quadrangle",
      category: "University Event",
      description: "Annual celebration of QCU's founding. Join us for a day of festivities, competitions, and performances.",
      color: "gold"
    },
    {
      id: 3,
      title: "Web Development Project Submission",
      date: "March 30, 2026",
      time: "11:59 PM",
      location: "Online - Student Portal",
      category: "Academic",
      description: "Final project submission deadline for Web Development course. Submit through the student portal.",
      color: "green"
    },
    {
      id: 4,
      title: "Career Fair 2026",
      date: "April 2, 2026",
      time: "1:00 PM - 5:00 PM",
      location: "University Auditorium",
      category: "Career Development",
      description: "Meet with top employers and explore career opportunities. Bring your resume and dress professionally.",
      color: "purple"
    },
    {
      id: 5,
      title: "Student Council Elections",
      date: "April 5, 2026",
      time: "8:00 AM - 4:00 PM",
      location: "Various Polling Stations",
      category: "Student Activities",
      description: "Vote for your next student council representatives. Exercise your right to choose your leaders.",
      color: "red"
    },
    {
      id: 6,
      title: "Research Symposium",
      date: "April 10, 2026",
      time: "2:00 PM - 6:00 PM",
      location: "Conference Hall, Admin Building",
      category: "Academic",
      description: "Annual research symposium featuring student and faculty research presentations across all departments.",
      color: "indigo"
    },
    {
      id: 7,
      title: "Sports Festival",
      date: "April 15, 2026",
      time: "7:00 AM - 6:00 PM",
      location: "QCU Sports Complex",
      category: "Sports & Recreation",
      description: "Inter-department sports competition. Show your school spirit and support your department teams!",
      color: "orange"
    },
    {
      id: 8,
      title: "Financial Aid Workshop",
      date: "April 18, 2026",
      time: "3:00 PM - 5:00 PM",
      location: "Student Services Center",
      category: "Workshop",
      description: "Learn about scholarship opportunities, grants, and financial aid options available to QCU students.",
      color: "teal"
    }
  ];

  const handleLogout = () => {
    navigate('/');
  };

  const getCategoryColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      gold: "bg-amber-100 text-amber-700 border-amber-200",
      green: "bg-green-100 text-green-700 border-green-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200",
      red: "bg-red-100 text-red-700 border-red-200",
      indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
      orange: "bg-orange-100 text-orange-700 border-orange-200",
      teal: "bg-teal-100 text-teal-700 border-teal-200"
    };
    return colors[color] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  const getAccentColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: "border-l-blue-500",
      gold: "border-l-amber-500",
      green: "border-l-green-500",
      purple: "border-l-purple-500",
      red: "border-l-red-500",
      indigo: "border-l-indigo-500",
      orange: "border-l-orange-500",
      teal: "border-l-teal-500"
    };
    return colors[color] || "border-l-gray-500";
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
              className="flex items-center gap-3 px-4 py-3 text-white bg-white/20 rounded-lg font-semibold transition-all hover:bg-white/30"
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

              {/* Page Title */}
              <h1 className="text-xl sm:text-2xl font-bold">Events & Activities</h1>

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

        {/* Events Content */}
        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 overflow-y-auto">
          {/* Header with School Calendar Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
              <p className="text-gray-600">Stay updated with the latest university events and activities</p>
            </div>
            <button
              onClick={() => setShowCalendarModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#c8973a] to-[#b8872a] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              School Calendar
            </button>
          </div>

          {/* Events List */}
          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.id}
                className={`bg-white rounded-xl shadow-sm border-l-4 ${getAccentColor(event.color)} border-t border-r border-b border-gray-200 p-6 hover:shadow-md transition-all`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Event Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold">{event.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(event.color)}`}>
                        {event.category}
                      </span>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-[#1b3ebf] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">{event.date}</span>
                      </div>

                      <div className="flex items-center gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-[#c8973a] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">{event.time}</span>
                      </div>

                      <div className="flex items-center gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-[#cc1e1e] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">{event.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mt-3 text-sm">{event.description}</p>
                  </div>

                  {/* View Button */}
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1b3ebf] to-[#0a1a5e] text-white rounded-lg font-semibold hover:shadow-lg transition-all whitespace-nowrap"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State (if no events) */}
          {events.length === 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
              <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500 font-medium">No upcoming events</p>
              <p className="text-sm text-gray-400 mt-1">Check back later for new events and activities</p>
            </div>
          )}
        </div>
      </main>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className={`bg-gradient-to-r from-[#1b3ebf] to-[#0a1a5e] p-6 rounded-t-2xl`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(selectedEvent.color)} bg-white`}>
                    {selectedEvent.category}
                  </span>
                  <h2 className="text-2xl font-bold text-white mt-3">{selectedEvent.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Event Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <svg className="w-6 h-6 text-[#1b3ebf] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Date</p>
                    <p className="text-gray-900 text-lg">{selectedEvent.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
                  <svg className="w-6 h-6 text-[#c8973a] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Time</p>
                    <p className="text-gray-900 text-lg">{selectedEvent.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg">
                  <svg className="w-6 h-6 text-[#cc1e1e] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Location</p>
                    <p className="text-gray-900 text-lg">{selectedEvent.location}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-bold text-lg mb-2">Event Description</h3>
                <p className="text-gray-700 leading-relaxed">{selectedEvent.description}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-[#c8973a] to-[#b8872a] text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                  Add to Calendar
                </button>
                <button className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                  Share Event
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* School Calendar Modal */}
      {showCalendarModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="bg-gradient-to-r from-[#c8973a] to-[#b8872a] p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">QCU Academic Calendar</h2>
                <button
                  onClick={() => setShowCalendarModal(false)}
                  className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-6 text-center">
                Academic Year 2025-2026 • View the complete university calendar for all semesters
              </p>

              {/* Calendar Images */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-center">1st Semester</h3>
                  <div className="rounded-xl overflow-hidden shadow-lg border-4 border-[#c8973a]">
                    <img 
                      src={imgRectangle43} 
                      alt="1st Semester Calendar" 
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center">August 11, 2025 - December 15, 2025</p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-center">2nd Semester</h3>
                  <div className="rounded-xl overflow-hidden shadow-lg border-4 border-[#1b3ebf]">
                    <img 
                      src={imgRectangle49} 
                      alt="2nd Semester Calendar" 
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center">January 12, 2026 - May 26, 2026</p>
                </div>
              </div>

              {/* Download Button */}
              <div className="mt-6 flex justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-[#1b3ebf] to-[#0a1a5e] text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download Full Calendar PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
