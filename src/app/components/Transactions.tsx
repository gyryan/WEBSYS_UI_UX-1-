import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import imgLogo from "figma:asset/ef8f16c62f5fa34c9daeadcacb427b2964ace301.png";

interface Transaction {
  id: string;
  documentService: string;
  dateTime: string;
  amount: number;
  paymentMethod: string;
  status: 'completed' | 'pending' | 'processing' | 'cancelled' | 'ready';
  hasReceipt: boolean;
}

export default function Transactions() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const navigate = useNavigate();

  const transactions: Transaction[] = [
    {
      id: 'TRX-2026-001',
      documentService: 'Transcript of Records (TOR)',
      dateTime: '2026-03-15 10:30 AM',
      amount: 150,
      paymentMethod: 'GCash',
      status: 'completed',
      hasReceipt: true
    },
    {
      id: 'TRX-2026-002',
      documentService: 'Certificate of Enrollment',
      dateTime: '2026-03-14 02:15 PM',
      amount: 0,
      paymentMethod: 'N/A',
      status: 'ready',
      hasReceipt: false
    },
    {
      id: 'TRX-2026-003',
      documentService: 'Student ID Replacement',
      dateTime: '2026-03-13 09:45 AM',
      amount: 200,
      paymentMethod: 'Cash',
      status: 'processing',
      hasReceipt: false
    },
    {
      id: 'TRX-2026-004',
      documentService: 'Certificate of Good Moral Character',
      dateTime: '2026-03-12 11:20 AM',
      amount: 50,
      paymentMethod: 'PayMaya',
      status: 'completed',
      hasReceipt: true
    },
    {
      id: 'TRX-2026-005',
      documentService: 'Certificate of Grades',
      dateTime: '2026-03-10 03:30 PM',
      amount: 50,
      paymentMethod: 'Bank Transfer',
      status: 'pending',
      hasReceipt: false
    },
    {
      id: 'TRX-2026-006',
      documentService: 'Authentication of Documents',
      dateTime: '2026-03-08 01:00 PM',
      amount: 100,
      paymentMethod: 'GCash',
      status: 'completed',
      hasReceipt: true
    },
    {
      id: 'TRX-2026-007',
      documentService: 'Library Clearance',
      dateTime: '2026-03-05 10:00 AM',
      amount: 0,
      paymentMethod: 'N/A',
      status: 'completed',
      hasReceipt: false
    },
    {
      id: 'TRX-2026-008',
      documentService: 'Certificate of Registration',
      dateTime: '2026-03-01 04:15 PM',
      amount: 0,
      paymentMethod: 'N/A',
      status: 'completed',
      hasReceipt: false
    }
  ];

  const handleLogout = () => {
    navigate('/');
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      completed: 'bg-green-100 text-green-700 border-green-300',
      pending: 'bg-yellow-100 text-yellow-700 border-yellow-300',
      processing: 'bg-blue-100 text-blue-700 border-blue-300',
      cancelled: 'bg-red-100 text-red-700 border-red-300',
      ready: 'bg-purple-100 text-purple-700 border-purple-300'
    };
    return badges[status as keyof typeof badges] || badges.pending;
  };

  const getStatusText = (status: string) => {
    const text = {
      completed: 'Completed',
      pending: 'Pending',
      processing: 'Processing',
      cancelled: 'Cancelled',
      ready: 'Ready for Pickup'
    };
    return text[status as keyof typeof text] || status;
  };

  const filteredTransactions = transactions.filter(transaction => {
    const matchesStatus = filterStatus === 'all' || transaction.status === filterStatus;
    const matchesSearch = transaction.documentService.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         transaction.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleDownloadReceipt = (transactionId: string) => {
    alert(`Downloading receipt for ${transactionId}`);
  };

  const handleViewDetails = (transactionId: string) => {
    const transaction = transactions.find(t => t.id === transactionId);
    if (transaction) {
      setSelectedTransaction(transaction);
    }
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
              className="flex items-center gap-3 px-4 py-3 text-white bg-white/20 rounded-lg font-semibold transition-all hover:bg-white/30"
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
              <h1 className="text-xl sm:text-2xl font-bold">Transactions</h1>

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
          {/* Page Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Record of Transactions</h2>
            <p className="text-gray-600">View and manage your transaction history</p>
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <label htmlFor="search" className="block text-sm font-semibold mb-2">Search Transactions</label>
                <div className="relative">
                  <input
                    type="text"
                    id="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by document name or transaction ID..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b3ebf] focus:border-transparent"
                  />
                  <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Filter by Status */}
              <div className="md:w-64">
                <label htmlFor="filterStatus" className="block text-sm font-semibold mb-2">Filter by Status</label>
                <select
                  id="filterStatus"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b3ebf] focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="ready">Ready for Pickup</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[#1b3ebf] to-[#0a1a5e] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Document / Service</th>
                    <th className="px-6 py-4 text-left font-semibold">Date & Time</th>
                    <th className="px-6 py-4 text-center font-semibold">Amount</th>
                    <th className="px-6 py-4 text-center font-semibold">Payment Method</th>
                    <th className="px-6 py-4 text-center font-semibold">Status</th>
                    <th className="px-6 py-4 text-center font-semibold">Receipt</th>
                    <th className="px-6 py-4 text-center font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredTransactions.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                        <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-lg font-semibold mb-1">No transactions found</p>
                        <p className="text-sm">Try adjusting your search or filter criteria</p>
                      </td>
                    </tr>
                  ) : (
                    filteredTransactions.map((transaction, index) => (
                      <tr key={transaction.id} className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-bold text-[#1b3ebf]">{transaction.documentService}</p>
                            <p className="text-sm text-gray-500">{transaction.id}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {transaction.dateTime}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`font-bold ${transaction.amount === 0 ? 'text-green-600' : 'text-[#c8973a]'}`}>
                            {transaction.amount === 0 ? 'FREE' : `₱${transaction.amount}`}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-gray-700">
                          {transaction.paymentMethod}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusBadge(transaction.status)}`}>
                            {getStatusText(transaction.status)}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          {transaction.hasReceipt ? (
                            <button
                              onClick={() => handleDownloadReceipt(transaction.id)}
                              className="px-3 py-1 bg-[#c8973a] text-white rounded-lg text-sm font-semibold hover:bg-[#b8872a] transition-colors flex items-center gap-1 mx-auto"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                              Download
                            </button>
                          ) : (
                            <span className="text-sm text-gray-400">N/A</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button
                            onClick={() => handleViewDetails(transaction.id)}
                            className="px-4 py-2 bg-[#1b3ebf] text-white rounded-lg text-sm font-semibold hover:bg-[#0a1a5e] transition-colors"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <p className="text-sm text-gray-600 mb-1">Total Transactions</p>
              <p className="text-3xl font-bold text-[#1b3ebf]">{transactions.length}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <p className="text-sm text-gray-600 mb-1">Completed</p>
              <p className="text-3xl font-bold text-green-600">
                {transactions.filter(t => t.status === 'completed').length}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <p className="text-sm text-gray-600 mb-1">Pending</p>
              <p className="text-3xl font-bold text-yellow-600">
                {transactions.filter(t => t.status === 'pending' || t.status === 'processing').length}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <p className="text-sm text-gray-600 mb-1">Total Spent</p>
              <p className="text-3xl font-bold text-[#c8973a]">
                ₱{transactions.reduce((sum, t) => sum + t.amount, 0)}
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Transaction Details Modal */}
      {selectedTransaction && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl my-8">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#1b3ebf] to-[#0a1a5e] px-8 py-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Transaction Details</h3>
                  <p className="text-white/80 text-sm">{selectedTransaction.id}</p>
                </div>
                <button
                  onClick={() => setSelectedTransaction(null)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Status Badge */}
              <div className="flex justify-center mb-6">
                <span className={`px-6 py-2 rounded-full text-sm font-bold border-2 ${getStatusBadge(selectedTransaction.status)}`}>
                  {getStatusText(selectedTransaction.status)}
                </span>
              </div>

              {/* Transaction Information */}
              <div className="space-y-6">
                {/* Document/Service */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Document / Service</p>
                  <p className="text-lg font-bold text-[#1b3ebf]">{selectedTransaction.documentService}</p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Transaction ID */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Transaction ID</p>
                    <p className="font-bold text-gray-900">{selectedTransaction.id}</p>
                  </div>

                  {/* Date & Time */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Date & Time</p>
                    <p className="font-bold text-gray-900">{selectedTransaction.dateTime}</p>
                  </div>

                  {/* Amount */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Amount</p>
                    <p className={`text-2xl font-bold ${selectedTransaction.amount === 0 ? 'text-green-600' : 'text-[#c8973a]'}`}>
                      {selectedTransaction.amount === 0 ? 'FREE' : `₱${selectedTransaction.amount}`}
                    </p>
                  </div>

                  {/* Payment Method */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Payment Method</p>
                    <p className="font-bold text-gray-900">{selectedTransaction.paymentMethod}</p>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-blue-50 border-l-4 border-[#1b3ebf] rounded-lg p-4">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#1b3ebf]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Status Information
                  </h4>
                  <div className="text-sm text-gray-700 space-y-2">
                    {selectedTransaction.status === 'completed' && (
                      <>
                        <p>✅ Your document request has been completed successfully.</p>
                        <p>📧 A confirmation email has been sent to your registered email address.</p>
                        {selectedTransaction.hasReceipt && (
                          <p>📄 Your official receipt is available for download.</p>
                        )}
                      </>
                    )}
                    {selectedTransaction.status === 'ready' && (
                      <>
                        <p>✅ Your document is ready for pickup!</p>
                        <p>📍 Please visit the Registrar's Office during office hours (Mon-Fri, 8:00 AM - 5:00 PM).</p>
                        <p>🆔 Don't forget to bring a valid ID for verification.</p>
                      </>
                    )}
                    {selectedTransaction.status === 'processing' && (
                      <>
                        <p>⏳ Your request is currently being processed.</p>
                        <p>📧 You will receive an email notification once it's ready.</p>
                        <p>⏱️ Estimated processing time: 3-5 business days.</p>
                      </>
                    )}
                    {selectedTransaction.status === 'pending' && (
                      <>
                        <p>⏳ Your request is pending review.</p>
                        <p>🔍 Our team will verify your request shortly.</p>
                        <p>📧 You will receive updates via email.</p>
                      </>
                    )}
                    {selectedTransaction.status === 'cancelled' && (
                      <>
                        <p>❌ This transaction has been cancelled.</p>
                        <p>📧 If you have questions, please contact the Registrar's Office.</p>
                      </>
                    )}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm text-gray-700 mb-1">Contact the Registrar's Office:</p>
                  <p className="text-sm text-gray-700">📞 Phone: (02) 8123-4567</p>
                  <p className="text-sm text-gray-700">📧 Email: registrar@qcu.edu.ph</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                {selectedTransaction.hasReceipt && (
                  <button
                    onClick={() => {
                      handleDownloadReceipt(selectedTransaction.id);
                      setSelectedTransaction(null);
                    }}
                    className="flex-1 px-6 py-3 bg-[#c8973a] text-white rounded-lg font-semibold hover:bg-[#b8872a] transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download Receipt
                  </button>
                )}
                <button
                  onClick={() => setSelectedTransaction(null)}
                  className={`${selectedTransaction.hasReceipt ? 'flex-1' : 'w-full'} px-6 py-3 bg-[#1b3ebf] text-white rounded-lg font-semibold hover:bg-[#0a1a5e] transition-colors`}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}