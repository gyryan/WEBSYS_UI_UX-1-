import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import imgLogo from "figma:asset/ef8f16c62f5fa34c9daeadcacb427b2964ace301.png";

interface DocumentRequest {
  documentType: string;
  reason: string;
  quantity: number;
  purpose: string;
  attachments: File[];
  paymentMethod: string;
}

export default function RequestDocument() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState<DocumentRequest>({
    documentType: '',
    reason: '',
    quantity: 1,
    purpose: '',
    attachments: [],
    paymentMethod: 'Cash'
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const documentTypes = [
    { name: 'Transcript of Records (TOR)', price: 150 },
    { name: 'Certificate of Enrollment', price: 0 },
    { name: 'Certificate of Grades', price: 50 },
    { name: 'Certificate of Good Moral Character', price: 50 },
    { name: 'Certificate of Graduation', price: 100 },
    { name: 'Diploma', price: 300 },
    { name: 'Honorable Dismissal', price: 100 },
    { name: 'Certificate of Units Earned', price: 50 },
    { name: 'Authentication of Documents', price: 100 },
    { name: 'Certificate of Medium of Instruction', price: 50 },
    { name: 'Student ID Replacement', price: 200 },
    { name: 'Library Clearance', price: 0 },
    { name: 'Certificate of Registration', price: 0 }
  ];

  const handleLogout = () => {
    navigate('/');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.documentType && formData.reason && formData.purpose) {
      setShowSuccessModal(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setShowSuccessModal(false);
        setFormData({
          documentType: '',
          reason: '',
          quantity: 1,
          purpose: '',
          attachments: [],
          paymentMethod: 'Cash'
        });
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setFormData(prev => ({
        ...prev,
        attachments: [...prev.attachments, ...filesArray]
      }));
    }
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };

  const selectedDocument = documentTypes.find(doc => doc.name === formData.documentType);
  const totalPrice = selectedDocument ? selectedDocument.price * formData.quantity : 0;

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
              className="flex items-center gap-3 px-4 py-3 text-white bg-white/20 rounded-lg font-semibold transition-all hover:bg-white/30"
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
              <h1 className="text-xl sm:text-2xl font-bold">Request Documents</h1>

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
          <div className="max-w-5xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-3">REQUEST DOCUMENTS</h2>
              <p className="text-gray-600">Submit your request for academic documents and certificates</p>
            </div>

            {/* Request Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-8">
              <div className="space-y-6">
                {/* Document Type */}
                <div>
                  <label htmlFor="documentType" className="block text-lg font-bold mb-3">
                    Type of Document <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="documentType"
                    name="documentType"
                    value={formData.documentType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b3ebf] focus:border-transparent text-base"
                  >
                    <option value="">Select Document Type ▽</option>
                    {documentTypes.map((type) => (
                      <option key={type.name} value={type.name}>
                        {type.name} - {type.price === 0 ? 'FREE' : `₱${type.price}`}
                      </option>
                    ))}
                  </select>
                  {selectedDocument && (
                    <div className={`mt-3 p-3 rounded-lg border-2 ${selectedDocument.price === 0 ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'}`}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold">Document Fee:</span>
                        <span className="text-lg font-bold text-[#c8973a]">
                          {selectedDocument.price === 0 ? 'FREE' : `₱${selectedDocument.price}`}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Quantity */}
                <div>
                  <label htmlFor="quantity" className="block text-lg font-bold mb-3">
                    Number of Copies <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="10"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b3ebf] focus:border-transparent text-base"
                  />
                </div>

                {/* Purpose */}
                <div>
                  <label htmlFor="purpose" className="block text-lg font-bold mb-3">
                    Purpose <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    placeholder="e.g., Employment, Scholarship Application, Transfer"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b3ebf] focus:border-transparent text-base"
                  />
                </div>

                {/* Reason */}
                <div>
                  <label htmlFor="reason" className="block text-lg font-bold mb-3">
                    Reason <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Please provide a detailed explanation for your document request..."
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b3ebf] focus:border-transparent text-base resize-none"
                  />
                </div>

                {/* Payment Method */}
                {selectedDocument && selectedDocument.price > 0 && (
                  <div>
                    <label htmlFor="paymentMethod" className="block text-lg font-bold mb-3">
                      Payment Method <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="paymentMethod"
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b3ebf] focus:border-transparent text-base"
                    >
                      <option value="Cash">Cash (Pay upon pickup at Cashier's Office)</option>
                      <option value="GCash">GCash (Pay online before processing)</option>
                    </select>
                    
                    {/* Payment Instructions */}
                    <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
                      {formData.paymentMethod === 'Cash' ? (
                        <div>
                          <h5 className="font-bold text-sm mb-2 flex items-center gap-2">
                            <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            Cash Payment Instructions:
                          </h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>✅ Your document will be processed after request approval</li>
                            <li>💰 Pay <strong className="text-[#c8973a]">₱{totalPrice}</strong> at the Cashier's Office when picking up your document</li>
                            <li>📍 Bring your Transaction ID and valid ID for verification</li>
                            <li>⏰ Office Hours: Monday to Friday, 8:00 AM - 5:00 PM</li>
                          </ul>
                        </div>
                      ) : (
                        <div>
                          <h5 className="font-bold text-sm mb-2 flex items-center gap-2">
                            <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            GCash Payment Instructions:
                          </h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>📱 Send <strong className="text-[#c8973a]">₱{totalPrice}</strong> to GCash Number: <strong>0917-123-4567</strong></li>
                            <li>📝 Account Name: <strong>Quezon City University - Registrar</strong></li>
                            <li>🖼️ Take a screenshot of your payment confirmation</li>
                            <li>📧 Email the screenshot to <strong>payments@qcu.edu.ph</strong> with your Transaction ID</li>
                            <li>⏳ Document processing will begin after payment verification (1-2 business days)</li>
                            <li>✅ You'll receive a confirmation email once payment is verified</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Attachments */}
                <div>
                  <label htmlFor="attachments" className="block text-lg font-bold mb-3">
                    Attachments (Optional)
                  </label>
                  <input
                    type="file"
                    id="attachments"
                    name="attachments"
                    multiple
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b3ebf] focus:border-transparent text-base"
                  />
                  <div className="mt-2">
                    {formData.attachments.map((file, index) => (
                      <div key={index} className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-2 0zm-1 4a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-500">{file.name}</span>
                        <button
                          onClick={() => removeFile(index)}
                          className="text-red-500 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Total Price */}
                <div className="flex items-center justify-between">
                  <label className="block text-lg font-bold mb-3">
                    Total Price
                  </label>
                  <span className="text-lg font-bold text-[#c8973a]">
                    PHP {totalPrice}
                  </span>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-[#c8973a] to-[#b8872a] text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    Submit Request
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <Link
                    to="/dashboard/transactions"
                    className="flex-1 px-6 py-4 bg-white border-2 border-[#1b3ebf] text-[#1b3ebf] rounded-lg font-bold text-lg hover:bg-[#1b3ebf] hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    Check Transaction
                  </Link>
                </div>
              </div>
            </form>

            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Phone */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#c8973a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Phone</h4>
                  <p className="text-gray-600 text-sm">+63 123 456 7890</p>
                </div>

                {/* Email */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#1b3ebf] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Email</h4>
                  <p className="text-gray-600 text-sm">info@qcu.edu.ph</p>
                </div>

                {/* Location */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#cc1e1e] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Location</h4>
                  <p className="text-gray-600 text-sm">Quezon City, Philippines</p>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="mt-8 bg-blue-50 border-l-4 border-[#1b3ebf] rounded-lg p-6">
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#1b3ebf]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Important Notes
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#1b3ebf] mt-1">•</span>
                  <span>Processing time is typically 3-5 business days for most documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1b3ebf] mt-1">•</span>
                  <span>You will receive an email notification once your document is ready for pickup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1b3ebf] mt-1">•</span>
                  <span>Please bring a valid ID when claiming your documents at the Registrar's Office</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1b3ebf] mt-1">•</span>
                  <span><strong>Some documents may require additional physical requirements</strong> to be submitted or presented in person at the Registrar's Office. Please check your email for specific instructions after submitting your request.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1b3ebf] mt-1">•</span>
                  <span>Attached files are optional but may help speed up the processing of your request. Original documents may still need to be presented physically.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1b3ebf] mt-1">•</span>
                  <span>Payment must be made at the Cashier's Office before claiming your documents (except for FREE documents)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1b3ebf] mt-1">•</span>
                  <span>Check your transaction status regularly for updates on your request</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Request Submitted!</h3>
              <p className="text-gray-600 mb-4">
                Your document request has been successfully submitted. You will receive a confirmation email shortly.
              </p>
              <p className="text-sm text-gray-500">
                Track your request status in the Transactions page.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}